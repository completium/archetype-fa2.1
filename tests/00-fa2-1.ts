import { Bytes, Key, Nat, Option, Or, pair_to_mich, Signature, string_to_mich } from '@completium/archetype-ts-types'
import { blake2b, expect_to_fail, get_account, set_mockup, set_mockup_now, set_quiet } from '@completium/experiment-ts'

const assert = require('assert');

/* Contracts */

import { ledger_key, fa2_1, transfer_destination, transfer_param } from './binding/fa2_1';


/* Accounts ----------------------------------------------------------------- */

const alice = get_account('alice');
const bob   = get_account('bob');
const carl  = get_account('carl');
const user1 = get_account('bootstrap1');
const user2 = get_account('bootstrap2');

/* Endpoint ---------------------------------------------------------------- */

set_mockup()

/* Verbose mode ------------------------------------------------------------ */

set_quiet(true);

/* Now --------------------------------------------------------------------- */

const now = new Date(Date.now())
set_mockup_now(now)

/* Constants & Utils ------------------------------------------------------- */

const amount       = new Nat(1000);
const token_id     = new Nat(0);
const expiry       = new Nat(31556952)

const testAmount_1 = new Nat(1);
const testAmount_2 = new Nat(11);
let alicePermitNb  = new Nat(0);
let bobPermitNb    = new Nat(0);
let carlPermitNb   = new Nat(0);

/* Scenarios --------------------------------------------------------------- */

describe('[FA2.1] Contracts deployment', async () => {
  it('FA2.1 contract deployment should succeed', async () => {
    await fa2_1.deploy(alice.get_address(), { as: alice })
  });
});

describe('[FA2.1] Minting', async () => {
  it('Mint tokens as owner for ourself should succeed', async () => {
    await fa2_1.mint(
      alice.get_address(),      // owner
      token_id,                 // token id
      amount, {                 // amount
        as: alice,
      }
    );
  });

  it('Mint tokens as non owner for ourself should fail', async () => {
    await expect_to_fail(async () => {
      await fa2_1.mint(
        bob.get_address(),      // owner
        token_id,               // token id
        amount, {               // amount
          as: bob,
        }
      );
    }, fa2_1.errors.INVALID_CALLER);
  });

  it('Mint tokens as non owner for someone else should fail', async () => {
    await expect_to_fail(async () => {
      await fa2_1.mint(
        carl.get_address(),      // owner
        token_id,                // token id
        amount, {                // amount
          as: bob,
        }
      );
    }, fa2_1.errors.INVALID_CALLER);
  });

  it('Mint tokens as owner for someone else should succeed', async () => {
    const a_token_id = new Nat(1)

    const balance_before = await fa2_1.get_ledger_value(new ledger_key(carl.get_address(), a_token_id))
    assert(balance_before == undefined)

    await fa2_1.mint(
      carl.get_address(),   // owner
      a_token_id,           // token id
      amount, {             // amount
        as: alice,
      }
    );

    const balance_after = await fa2_1.get_ledger_value(new ledger_key(carl.get_address(), a_token_id))
    assert(balance_after?.equals(amount))
  });

  it('Mint token for user 1', async () => {
    const a_token_id = new Nat(1)

    const balance_before = await fa2_1.get_ledger_value(new ledger_key(user1.get_address(), a_token_id))
    assert(balance_before == undefined)

    await fa2_1.mint(
      user1.get_address(),  // owner
      a_token_id,           // token id
      new Nat(2), {         // amount
        as: alice,
      }
    );

    const balance_after = await fa2_1.get_ledger_value(new ledger_key(user1.get_address(), a_token_id))
    assert(balance_after?.equals(new Nat(2)))

  });
});

describe('[FA2.1] Transfers', async () => {
  it('Transfer simple amount of token', async () => {
    const a_token_id = new Nat(1)

    const balance_before_user1 = await fa2_1.get_ledger_value(new ledger_key(user1.get_address(), a_token_id))
    assert(balance_before_user1?.equals(new Nat(2)))
    const balance_before_user2 = await fa2_1.get_ledger_value(new ledger_key(user2.get_address(), a_token_id))
    assert(balance_before_user2 == undefined)

    const tps = [new transfer_param(user1.get_address(), [ new transfer_destination(user2.get_address(), a_token_id, new Nat(1)) ])]

    await fa2_1.transfer(tps, { as : user1 })

    const balance_after_user1 = await fa2_1.get_ledger_value(new ledger_key(user1.get_address(), a_token_id))
    assert(balance_after_user1?.equals(new Nat(1)))
    const balance_after_user2 = await fa2_1.get_ledger_value(new ledger_key(user2.get_address(), a_token_id))
    assert(balance_after_user2?.equals(new Nat(1)))
  })
})