import { Entrypoint, Nat, Or } from '@completium/archetype-ts-types'
import { get_account, set_mockup, set_quiet } from '@completium/experiment-ts'

import assert from 'assert';

/* Contracts */

import { ledger_key, fa2_1, export_ticket_item } from './binding/fa2_1';
import { ticket_wallet } from './binding/ticket_wallet';


/* Accounts ----------------------------------------------------------------- */

const alice = get_account('alice');

/* Endpoint ---------------------------------------------------------------- */

set_mockup()

/* Verbose mode ------------------------------------------------------------ */

set_quiet(true);

/* Constants & Utils ------------------------------------------------------- */

const amount = new Nat(123);
const token_id = new Nat(0);
const export_amount = new Nat(8);

/* Scenarios --------------------------------------------------------------- */

describe('[FA2.1] Contracts deployment', () => {
  it('FA2.1 contract deployment should succeed', async () => {
    await fa2_1.deploy(alice.get_address(), { as: alice })
  });
  it('Ticket_wallet contract deployment should succeed', async () => {
    await ticket_wallet.deploy({ as: alice })
  });
});

describe('[FA2.1] Minting', () => {
  it('Mint tokens as owner for ourself should succeed', async () => {
    await fa2_1.mint(alice.get_address(), token_id, amount, { as: alice });
  });
});

describe('[FA2.1] Ticket', () => {
  it('Export', async () => {
    const ticket_before = await ticket_wallet.get_my_ticket();
    assert(ticket_before.is_none(), "Invalid value")

    const k = new ledger_key(alice.get_address(), token_id);
    const token_id_balance_before = await fa2_1.get_ledger_value(k);
    assert(token_id_balance_before?.equals(amount), "Invalid value")

    const entry = new Entrypoint(ticket_wallet.get_address(), "callback");
    const eti = [new export_ticket_item(alice.get_address(), token_id, export_amount)];
    await fa2_1.export_ticket(Or.Left<Entrypoint, Entrypoint>(entry), eti, { as: alice });

    const ticket_after = (await ticket_wallet.get_my_ticket()).get();
    assert(ticket_after.get_ticketer().equals(fa2_1.get_address()) && ticket_after.get_amount().equals(export_amount), "Invalid value")

    const token_id_balance_after = await fa2_1.get_ledger_value(k);
    assert(token_id_balance_after?.equals(new Nat(amount.to_number() - export_amount.to_number())), "Invalid value")
  });

  it('Import', async () => {
    await ticket_wallet.transfer_ticket(fa2_1.get_address(), alice.get_address(), { as: alice })

    const ticket_after = await ticket_wallet.get_my_ticket();
    assert(ticket_after.is_none(), "Invalid value")

    const k = new ledger_key(alice.get_address(), token_id);
    const token_id_balance_after = await fa2_1.get_ledger_value(k);
    assert(token_id_balance_after?.equals(amount), "Invalid value")
  });
});
