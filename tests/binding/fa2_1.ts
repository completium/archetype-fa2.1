import * as ex from "@completium/experiment-ts";
import * as att from "@completium/archetype-ts-types";
import * as el from "@completium/event-listener";
export class transfer_event implements att.ArchetypeType {
    constructor(public te_sender: att.Address, public te_transfer: Array<transfer_event_item>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.te_sender.to_mich(), att.list_to_mich(this.te_transfer, x => {
                return x.to_mich();
            })]);
    }
    equals(v: transfer_event): boolean {
        return (this.te_sender.equals(v.te_sender) && this.te_sender.equals(v.te_sender) && JSON.stringify(this.te_transfer) == JSON.stringify(v.te_transfer));
    }
}
export class operator_update_event implements att.ArchetypeType {
    constructor(public oue_sender: att.Address, public oue_operator_update: Array<operator_update_item>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.oue_sender.to_mich(), att.list_to_mich(this.oue_operator_update, x => {
                return x.to_mich();
            })]);
    }
    equals(v: operator_update_event): boolean {
        return (this.oue_sender.equals(v.oue_sender) && this.oue_sender.equals(v.oue_sender) && JSON.stringify(this.oue_operator_update) == JSON.stringify(v.oue_operator_update));
    }
}
export class approval_event implements att.ArchetypeType {
    constructor(public ae_sender: att.Address, public ae_approval_update: Array<approve_event_item>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.ae_sender.to_mich(), att.list_to_mich(this.ae_approval_update, x => {
                return x.to_mich();
            })]);
    }
    equals(v: approval_event): boolean {
        return (this.ae_sender.equals(v.ae_sender) && this.ae_sender.equals(v.ae_sender) && JSON.stringify(this.ae_approval_update) == JSON.stringify(v.ae_approval_update));
    }
}
export class transfer_destination implements att.ArchetypeType {
    constructor(public td_to_: att.Address, public td_token_id: att.Nat, public td_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.td_to_.to_mich(), att.pair_to_mich([this.td_token_id.to_mich(), this.td_amount.to_mich()])]);
    }
    equals(v: transfer_destination): boolean {
        return (this.td_to_.equals(v.td_to_) && this.td_to_.equals(v.td_to_) && this.td_token_id.equals(v.td_token_id) && this.td_amount.equals(v.td_amount));
    }
}
export class transfer_param implements att.ArchetypeType {
    constructor(public tp_from: att.Address, public tp_txs: Array<transfer_destination>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.tp_from.to_mich(), att.list_to_mich(this.tp_txs, x => {
                return x.to_mich();
            })]);
    }
    equals(v: transfer_param): boolean {
        return (this.tp_from.equals(v.tp_from) && this.tp_from.equals(v.tp_from) && JSON.stringify(this.tp_txs) == JSON.stringify(v.tp_txs));
    }
}
export class transfer_event_item_dest implements att.ArchetypeType {
    constructor(public teid_to_: att.Option<att.Address>, public teid_token_id: att.Nat, public teid_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.teid_to_.to_mich((x => { return x.to_mich(); })), att.pair_to_mich([this.teid_token_id.to_mich(), this.teid_amount.to_mich()])]);
    }
    equals(v: transfer_event_item_dest): boolean {
        return (this.teid_to_.equals(v.teid_to_) && this.teid_to_.equals(v.teid_to_) && this.teid_token_id.equals(v.teid_token_id) && this.teid_amount.equals(v.teid_amount));
    }
}
export class transfer_event_item implements att.ArchetypeType {
    constructor(public tei_from_: att.Option<att.Address>, public tei_txs: Array<transfer_event_item_dest>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.tei_from_.to_mich((x => { return x.to_mich(); })), att.list_to_mich(this.tei_txs, x => {
                return x.to_mich();
            })]);
    }
    equals(v: transfer_event_item): boolean {
        return (this.tei_from_.equals(v.tei_from_) && this.tei_from_.equals(v.tei_from_) && JSON.stringify(this.tei_txs) == JSON.stringify(v.tei_txs));
    }
}
export class operator_update_item implements att.ArchetypeType {
    constructor(public oui_owner: att.Address, public oui_operator: att.Address, public oui_token_id: att.Nat, public oui_is_operator: boolean) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.oui_owner.to_mich(), att.pair_to_mich([this.oui_operator.to_mich(), att.pair_to_mich([this.oui_token_id.to_mich(), att.bool_to_mich(this.oui_is_operator)])])]);
    }
    equals(v: operator_update_item): boolean {
        return (this.oui_owner.equals(v.oui_owner) && this.oui_owner.equals(v.oui_owner) && this.oui_operator.equals(v.oui_operator) && this.oui_token_id.equals(v.oui_token_id) && this.oui_is_operator == v.oui_is_operator);
    }
}
export class approve_param implements att.ArchetypeType {
    constructor(public ar_owner: att.Address, public ar_spender: att.Address, public ar_token_id: att.Nat, public ar_value: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.ar_owner.to_mich(), att.pair_to_mich([this.ar_spender.to_mich(), att.pair_to_mich([this.ar_token_id.to_mich(), this.ar_value.to_mich()])])]);
    }
    equals(v: approve_param): boolean {
        return (this.ar_owner.equals(v.ar_owner) && this.ar_owner.equals(v.ar_owner) && this.ar_spender.equals(v.ar_spender) && this.ar_token_id.equals(v.ar_token_id) && this.ar_value.equals(v.ar_value));
    }
}
export class approve_event_item implements att.ArchetypeType {
    constructor(public aei_owner: att.Address, public aei_spender: att.Address, public aei_token_id: att.Nat, public aei_value: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.aei_owner.to_mich(), att.pair_to_mich([this.aei_spender.to_mich(), att.pair_to_mich([this.aei_token_id.to_mich(), this.aei_value.to_mich()])])]);
    }
    equals(v: approve_event_item): boolean {
        return (this.aei_owner.equals(v.aei_owner) && this.aei_owner.equals(v.aei_owner) && this.aei_spender.equals(v.aei_spender) && this.aei_token_id.equals(v.aei_token_id) && this.aei_value.equals(v.aei_value));
    }
}
export class operator_param implements att.ArchetypeType {
    constructor(public opp_owner: att.Address, public opp_operator: att.Address, public opp_token_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.opp_owner.to_mich(), att.pair_to_mich([this.opp_operator.to_mich(), this.opp_token_id.to_mich()])]);
    }
    equals(v: operator_param): boolean {
        return (this.opp_owner.equals(v.opp_owner) && this.opp_owner.equals(v.opp_owner) && this.opp_operator.equals(v.opp_operator) && this.opp_token_id.equals(v.opp_token_id));
    }
}
export class export_ticket_item implements att.ArchetypeType {
    constructor(public eti_from: att.Address, public eti_token_id: att.Nat, public eti_amount: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.eti_from.to_mich(), att.pair_to_mich([this.eti_token_id.to_mich(), this.eti_amount.to_mich()])]);
    }
    equals(v: export_ticket_item): boolean {
        return (this.eti_from.equals(v.eti_from) && this.eti_from.equals(v.eti_from) && this.eti_token_id.equals(v.eti_token_id) && this.eti_amount.equals(v.eti_amount));
    }
}
export class import_ticket_param implements att.ArchetypeType {
    constructor(public itp_to: att.Address, public itp_tickets: att.Ticket<[
        att.Nat,
        att.Option<att.Bytes>
    ]>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.itp_to.to_mich(), this.itp_tickets.to_mich((x => { return att.pair_to_mich([x[0].to_mich(), x[1].to_mich((x => { return x.to_mich(); }))]); }))]);
    }
    equals(v: import_ticket_param): boolean {
        return (this.itp_to.equals(v.itp_to) && this.itp_to.equals(v.itp_to) && this.itp_tickets.equals(v.itp_tickets));
    }
}
export class balance_of_request implements att.ArchetypeType {
    constructor(public bo_owner: att.Address, public btoken_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.bo_owner.to_mich(), this.btoken_id.to_mich()]);
    }
    equals(v: balance_of_request): boolean {
        return (this.bo_owner.equals(v.bo_owner) && this.bo_owner.equals(v.bo_owner) && this.btoken_id.equals(v.btoken_id));
    }
}
export class balance_of_response implements att.ArchetypeType {
    constructor(public request: balance_of_request, public balance_: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.request.to_mich(), this.balance_.to_mich()]);
    }
    equals(v: balance_of_response): boolean {
        return (this.request == v.request && this.request == v.request && this.balance_.equals(v.balance_));
    }
}
export type total_supply_request = att.Nat;
export class total_supply_response implements att.ArchetypeType {
    constructor(public tt_resp_token_id: att.Nat, public tt_resp_total_supply: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.tt_resp_token_id.to_mich(), this.tt_resp_total_supply.to_mich()]);
    }
    equals(v: total_supply_response): boolean {
        return (this.tt_resp_token_id.equals(v.tt_resp_token_id) && this.tt_resp_token_id.equals(v.tt_resp_token_id) && this.tt_resp_total_supply.equals(v.tt_resp_total_supply));
    }
}
export const transfer_destination_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%to_"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%token_id"]),
        att.prim_annot_to_mich_type("nat", ["%amount"])
    ], [])
], []);
export const transfer_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%from_"]),
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%to_"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("nat", ["%amount"])
        ], [])
    ], []), ["%txs"])
], []);
export const transfer_event_item_dest_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.option_annot_to_mich_type(att.prim_annot_to_mich_type("address", []), ["%to_"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%token_id"]),
        att.prim_annot_to_mich_type("nat", ["%amount"])
    ], [])
], []);
export const transfer_event_item_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.option_annot_to_mich_type(att.prim_annot_to_mich_type("address", []), ["%from_"]),
    att.list_annot_to_mich_type(att.pair_array_to_mich_type([
        att.option_annot_to_mich_type(att.prim_annot_to_mich_type("address", []), ["%to_"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("nat", ["%amount"])
        ], [])
    ], []), ["%txs"])
], []);
export const operator_update_item_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%operator"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("bool", ["%is_operator"])
        ], [])
    ], [])
], []);
export const approve_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%spender"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("nat", ["%value"])
        ], [])
    ], [])
], []);
export const approve_event_item_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%spender"]),
        att.pair_array_to_mich_type([
            att.prim_annot_to_mich_type("nat", ["%token_id"]),
            att.prim_annot_to_mich_type("nat", ["%new_value"])
        ], [])
    ], [])
], []);
export const operator_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%operator"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], [])
], []);
export const export_ticket_item_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%from"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%token_id"]),
        att.prim_annot_to_mich_type("nat", ["%amount"])
    ], [])
], []);
export const import_ticket_param_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%to_"]),
    att.ticket_annot_to_mich_type(att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", []),
        att.option_annot_to_mich_type(att.prim_annot_to_mich_type("bytes", []), [])
    ], []), ["%tickets_to_import"])
], []);
export const balance_of_request_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%owner"]),
    att.prim_annot_to_mich_type("nat", ["%token_id"])
], []);
export const balance_of_response_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%owner"]),
        att.prim_annot_to_mich_type("nat", ["%token_id"])
    ], ["%request"]),
    att.prim_annot_to_mich_type("nat", ["%balance"])
], []);
export const total_supply_request_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const total_supply_response_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%token_id"]),
    att.prim_annot_to_mich_type("nat", ["%total_supply"])
], []);
export type token_metadata_key = att.Nat;
export class ledger_key implements att.ArchetypeType {
    constructor(public lowner: att.Address, public ltokenid: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.lowner.to_mich(), this.ltokenid.to_mich()]);
    }
    equals(v: ledger_key): boolean {
        return (this.lowner.equals(v.lowner) && this.lowner.equals(v.lowner) && this.ltokenid.equals(v.ltokenid));
    }
}
export type total_supply__key = att.Nat;
export class operator_key implements att.ArchetypeType {
    constructor(public oaddr: att.Address, public otoken: att.Nat, public oowner: att.Address) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.oaddr.to_mich(), att.pair_to_mich([this.otoken.to_mich(), this.oowner.to_mich()])]);
    }
    equals(v: operator_key): boolean {
        return (this.oaddr.equals(v.oaddr) && this.oaddr.equals(v.oaddr) && this.otoken.equals(v.otoken) && this.oowner.equals(v.oowner));
    }
}
export class approve__key implements att.ArchetypeType {
    constructor(public aowner: att.Address, public aspender: att.Address, public atoken_id: att.Nat) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.aowner.to_mich(), att.pair_to_mich([this.aspender.to_mich(), this.atoken_id.to_mich()])]);
    }
    equals(v: approve__key): boolean {
        return (this.aowner.equals(v.aowner) && this.aowner.equals(v.aowner) && this.aspender.equals(v.aspender) && this.atoken_id.equals(v.atoken_id));
    }
}
export const token_metadata_key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const ledger_key_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%lowner"]),
    att.prim_annot_to_mich_type("nat", ["%ltokenid"])
], []);
export const total_supply__key_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const operator_key_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%oaddr"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%otoken"]),
        att.prim_annot_to_mich_type("address", ["%oowner"])
    ], [])
], []);
export const approve__key_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%aowner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%aspender"]),
        att.prim_annot_to_mich_type("nat", ["%atoken_id"])
    ], [])
], []);
export class token_metadata_value implements att.ArchetypeType {
    constructor(public token_id: att.Nat, public token_info: Array<[
        string,
        att.Bytes
    ]>) { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.pair_to_mich([this.token_id.to_mich(), att.list_to_mich(this.token_info, x => {
                const x_key = x[0];
                const x_value = x[1];
                return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
            })]);
    }
    equals(v: token_metadata_value): boolean {
        return (this.token_id.equals(v.token_id) && this.token_id.equals(v.token_id) && JSON.stringify(this.token_info) == JSON.stringify(v.token_info));
    }
}
export type ledger_value = att.Nat;
export type total_supply__value = att.Nat;
export class operator_value implements att.ArchetypeType {
    constructor() { }
    toString(): string {
        return JSON.stringify(this, null, 2);
    }
    to_mich(): att.Micheline {
        return att.unit_to_mich();
    }
    equals(v: operator_value): boolean {
        return true;
    }
}
export type approve__value = att.Nat;
export const token_metadata_value_mich_type: att.MichelineType = att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%token_id"]),
    att.pair_annot_to_mich_type("map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), ["%token_info"])
], []);
export const ledger_value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const total_supply__value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export const operator_value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("unit", []);
export const approve__value_mich_type: att.MichelineType = att.prim_annot_to_mich_type("nat", []);
export type token_metadata_container = Array<[
    token_metadata_key,
    token_metadata_value
]>;
export type ledger_container = Array<[
    ledger_key,
    ledger_value
]>;
export type total_supply__container = Array<[
    total_supply__key,
    total_supply__value
]>;
export type operator_container = Array<[
    operator_key,
    operator_value
]>;
export type approve__container = Array<[
    approve__key,
    approve__value
]>;
export const token_metadata_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("nat", []), att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("nat", ["%token_id"]),
    att.pair_annot_to_mich_type("map", att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", []), ["%token_info"])
], []), []);
export const ledger_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%lowner"]),
    att.prim_annot_to_mich_type("nat", ["%ltokenid"])
], []), att.prim_annot_to_mich_type("nat", []), []);
export const total_supply__container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.prim_annot_to_mich_type("nat", []), att.prim_annot_to_mich_type("nat", []), []);
export const operator_container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%oaddr"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("nat", ["%otoken"]),
        att.prim_annot_to_mich_type("address", ["%oowner"])
    ], [])
], []), att.prim_annot_to_mich_type("unit", []), []);
export const approve__container_mich_type: att.MichelineType = att.pair_annot_to_mich_type("big_map", att.pair_array_to_mich_type([
    att.prim_annot_to_mich_type("address", ["%aowner"]),
    att.pair_array_to_mich_type([
        att.prim_annot_to_mich_type("address", ["%aspender"]),
        att.prim_annot_to_mich_type("nat", ["%atoken_id"])
    ], [])
], []), att.prim_annot_to_mich_type("nat", []), []);
const declare_ownership_arg_to_mich = (candidate: att.Address): att.Micheline => {
    return candidate.to_mich();
}
const claim_ownership_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const pause_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const unpause_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const set_metadata_arg_to_mich = (k: string, d: att.Option<att.Bytes>): att.Micheline => {
    return att.pair_to_mich([
        att.string_to_mich(k),
        d.to_mich((x => { return x.to_mich(); }))
    ]);
}
const set_token_metadata_arg_to_mich = (tid: att.Nat, tdata: Array<[
    string,
    att.Bytes
]>): att.Micheline => {
    return att.pair_to_mich([
        tid.to_mich(),
        att.list_to_mich(tdata, x => {
            const x_key = x[0];
            const x_value = x[1];
            return att.elt_to_mich(att.string_to_mich(x_key), x_value.to_mich());
        })
    ]);
}
const update_operators_arg_to_mich = (upl: Array<att.Or<operator_param, operator_param>>): att.Micheline => {
    return att.list_to_mich(upl, x => {
        return x.to_mich((x => { return x.to_mich(); }), (x => { return x.to_mich(); }));
    });
}
const approve_arg_to_mich = (input: Array<approve_param>): att.Micheline => {
    return att.list_to_mich(input, x => {
        return x.to_mich();
    });
}
const transfer_arg_to_mich = (txs: Array<transfer_param>): att.Micheline => {
    return att.list_to_mich(txs, x => {
        return x.to_mich();
    });
}
const mint_arg_to_mich = (tow: att.Address, tid: att.Nat, nbt: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        tow.to_mich(),
        tid.to_mich(),
        nbt.to_mich()
    ]);
}
const burn_arg_to_mich = (tid: att.Nat, nbt: att.Nat): att.Micheline => {
    return att.pair_to_mich([
        tid.to_mich(),
        nbt.to_mich()
    ]);
}
const export_ticket_arg_to_mich = (destination: att.Or<att.Entrypoint, att.Entrypoint>, tickets_to_export: Array<export_ticket_item>): att.Micheline => {
    return att.pair_to_mich([
        destination.to_mich((x => { return x.to_mich(); }), (x => { return x.to_mich(); })),
        att.list_to_mich(tickets_to_export, x => {
            return x.to_mich();
        })
    ]);
}
const import_ticket_arg_to_mich = (input: Array<import_ticket_param>): att.Micheline => {
    return att.list_to_mich(input, x => {
        return x.to_mich();
    });
}
const view_balance_of_arg_to_mich = (requests: Array<balance_of_request>): att.Micheline => {
    return att.list_to_mich(requests, x => {
        return x.to_mich();
    });
}
const view_total_supply_arg_to_mich = (requests: Array<total_supply_request>): att.Micheline => {
    return att.list_to_mich(requests, x => {
        return x.to_mich();
    });
}
export class Fa2_1 {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    get_address(): att.Address {
        if (undefined != this.address) {
            return new att.Address(this.address);
        }
        throw new Error("Contract not initialised");
    }
    async get_balance(): Promise<att.Tez> {
        if (null != this.address) {
            return await ex.get_balance(new att.Address(this.address));
        }
        throw new Error("Contract not initialised");
    }
    async deploy(owner: att.Address, params: Partial<ex.Parameters>) {
        const address = (await ex.deploy("./contracts/fa2_1.arl", {
            owner: owner.to_mich()
        }, params)).address;
        this.address = address;
    }
    async declare_ownership(candidate: att.Address, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "declare_ownership", declare_ownership_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async claim_ownership(params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "claim_ownership", claim_ownership_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async pause(params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "pause", pause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async unpause(params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "unpause", unpause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_metadata(k: string, d: att.Option<att.Bytes>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_metadata", set_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async set_token_metadata(tid: att.Nat, tdata: Array<[
        string,
        att.Bytes
    ]>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "set_token_metadata", set_token_metadata_arg_to_mich(tid, tdata), params);
        }
        throw new Error("Contract not initialised");
    }
    async update_operators(upl: Array<att.Or<operator_param, operator_param>>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "update_operators", update_operators_arg_to_mich(upl), params);
        }
        throw new Error("Contract not initialised");
    }
    async approve(input: Array<approve_param>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "approve", approve_arg_to_mich(input), params);
        }
        throw new Error("Contract not initialised");
    }
    async transfer(txs: Array<transfer_param>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "transfer", transfer_arg_to_mich(txs), params);
        }
        throw new Error("Contract not initialised");
    }
    async mint(tow: att.Address, tid: att.Nat, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "mint", mint_arg_to_mich(tow, tid, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async burn(tid: att.Nat, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "burn", burn_arg_to_mich(tid, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async export_ticket(destination: att.Or<att.Entrypoint, att.Entrypoint>, tickets_to_export: Array<export_ticket_item>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "export_ticket", export_ticket_arg_to_mich(destination, tickets_to_export), params);
        }
        throw new Error("Contract not initialised");
    }
    async import_ticket(input: Array<import_ticket_param>, params: Partial<ex.Parameters>): Promise<any> {
        if (this.address != undefined) {
            return await ex.call(this.address, "import_ticket", import_ticket_arg_to_mich(input), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_declare_ownership_param(candidate: att.Address, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "declare_ownership", declare_ownership_arg_to_mich(candidate), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_claim_ownership_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "claim_ownership", claim_ownership_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_pause_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "pause", pause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_unpause_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "unpause", unpause_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_metadata_param(k: string, d: att.Option<att.Bytes>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_metadata", set_metadata_arg_to_mich(k, d), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_set_token_metadata_param(tid: att.Nat, tdata: Array<[
        string,
        att.Bytes
    ]>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "set_token_metadata", set_token_metadata_arg_to_mich(tid, tdata), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_update_operators_param(upl: Array<att.Or<operator_param, operator_param>>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "update_operators", update_operators_arg_to_mich(upl), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_approve_param(input: Array<approve_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "approve", approve_arg_to_mich(input), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_transfer_param(txs: Array<transfer_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "transfer", transfer_arg_to_mich(txs), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_mint_param(tow: att.Address, tid: att.Nat, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "mint", mint_arg_to_mich(tow, tid, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_burn_param(tid: att.Nat, nbt: att.Nat, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "burn", burn_arg_to_mich(tid, nbt), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_export_ticket_param(destination: att.Or<att.Entrypoint, att.Entrypoint>, tickets_to_export: Array<export_ticket_item>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "export_ticket", export_ticket_arg_to_mich(destination, tickets_to_export), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_import_ticket_param(input: Array<import_ticket_param>, params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "import_ticket", import_ticket_arg_to_mich(input), params);
        }
        throw new Error("Contract not initialised");
    }
    async view_balance_of(requests: Array<balance_of_request>, params: Partial<ex.Parameters>): Promise<Array<balance_of_response>> {
        if (this.address != undefined) {
            const mich = await ex.exec_view(this.get_address(), "balance_of", view_balance_of_arg_to_mich(requests), params);
            const res: Array<balance_of_response> = [];
            for (let i = 0; i < mich.value.length; i++) {
                res.push((x => { return new balance_of_response((x => { return new balance_of_request((x => { return new att.Address(x); })(x.owner), (x => { return new att.Nat(x); })(x.token_id)); })(x.request), (x => { return new att.Nat(x); })(x.balance)); })(mich.value[i]));
            }
            return res;
        }
        throw new Error("Contract not initialised");
    }
    async view_total_supply(requests: Array<total_supply_request>, params: Partial<ex.Parameters>): Promise<Array<total_supply_response>> {
        if (this.address != undefined) {
            const mich = await ex.exec_view(this.get_address(), "total_supply", view_total_supply_arg_to_mich(requests), params);
            const res: Array<total_supply_response> = [];
            for (let i = 0; i < mich.value.length; i++) {
                res.push((x => { return new total_supply_response((x => { return new att.Nat(x); })(x.token_id), (x => { return new att.Nat(x); })(x.total_supply)); })(mich.value[i]));
            }
            return res;
        }
        throw new Error("Contract not initialised");
    }
    async get_owner(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            return new att.Address(storage.owner);
        }
        throw new Error("Contract not initialised");
    }
    async get_owner_candidate(): Promise<att.Option<att.Address>> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            return new att.Option<att.Address>(storage.owner_candidate == null ? null : (x => { return new att.Address(x); })(storage.owner_candidate));
        }
        throw new Error("Contract not initialised");
    }
    async get_paused(): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            return storage.paused.prim ? (storage.paused.prim == "True" ? true : false) : storage.paused;
        }
        throw new Error("Contract not initialised");
    }
    async get_token_metadata_value(key: token_metadata_key): Promise<token_metadata_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.token_metadata), key.to_mich(), token_metadata_key_mich_type, token_metadata_value_mich_type), collapsed = true;
            if (data != undefined) {
                return new token_metadata_value((x => { return new att.Nat(x); })(data.token_id), (x => { let res: Array<[
                    string,
                    att.Bytes
                ]> = []; for (let e of x.entries()) {
                    res.push([(x => { return x; })(e[0]), (x => { return new att.Bytes(x); })(e[1])]);
                } return res; })(data.token_info));
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_token_metadata_value(key: token_metadata_key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.token_metadata), key.to_mich(), token_metadata_key_mich_type, token_metadata_value_mich_type), collapsed = true;
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_ledger_value(key: ledger_key): Promise<ledger_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.ledger), key.to_mich(), ledger_key_mich_type, ledger_value_mich_type), collapsed = true;
            if (data != undefined) {
                return new att.Nat(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_ledger_value(key: ledger_key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.ledger), key.to_mich(), ledger_key_mich_type, ledger_value_mich_type), collapsed = true;
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_total_supply__value(key: total_supply__key): Promise<total_supply__value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.total_supply_), key.to_mich(), total_supply__key_mich_type, total_supply__value_mich_type), collapsed = true;
            if (data != undefined) {
                return new att.Nat(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_total_supply__value(key: total_supply__key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.total_supply_), key.to_mich(), total_supply__key_mich_type, total_supply__value_mich_type), collapsed = true;
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_operator_value(key: operator_key): Promise<operator_value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.operator), key.to_mich(), operator_key_mich_type, operator_value_mich_type), collapsed = true;
            if (data != undefined) {
                return new operator_value();
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_operator_value(key: operator_key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.operator), key.to_mich(), operator_key_mich_type, operator_value_mich_type), collapsed = true;
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_approve__value(key: approve__key): Promise<approve__value | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.approve_), key.to_mich(), approve__key_mich_type, approve__value_mich_type), collapsed = true;
            if (data != undefined) {
                return new att.Nat(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_approve__value(key: approve__key): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.approve_), key.to_mich(), approve__key_mich_type, approve__value_mich_type), collapsed = true;
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    async get_metadata_value(key: string): Promise<att.Bytes | undefined> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.metadata), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", [])), collapsed = true;
            if (data != undefined) {
                return new att.Bytes(data);
            }
            else {
                return undefined;
            }
        }
        throw new Error("Contract not initialised");
    }
    async has_metadata_value(key: string): Promise<boolean> {
        if (this.address != undefined) {
            const storage = await ex.get_storage(this.address);
            const data = await ex.get_big_map_value(BigInt(storage.metadata), att.string_to_mich(key), att.prim_annot_to_mich_type("string", []), att.prim_annot_to_mich_type("bytes", [])), collapsed = true;
            if (data != undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        throw new Error("Contract not initialised");
    }
    register_transfer_event(ep: el.EventProcessor<transfer_event>) {
        if (this.address != undefined) {
            el.registerEvent({ source: this.address, filter: tag => { return tag == "transfer_event"; }, process: (raw: any, data: el.EventData | undefined) => {
                    const event = (x => {
                        return new transfer_event((x => { return new att.Address(x); })(x.sender), (x => { const res: Array<transfer_event_item> = []; for (let i = 0; i < x.length; i++) {
                            res.push((x => { return new transfer_event_item((x => { return new att.Option<att.Address>(x == null ? null : (x => { return new att.Address(x); })(x)); })(x.from_), (x => { const res: Array<transfer_event_item_dest> = []; for (let i = 0; i < x.length; i++) {
                                res.push((x => { return new transfer_event_item_dest((x => { return new att.Option<att.Address>(x == null ? null : (x => { return new att.Address(x); })(x)); })(x.to_), (x => { return new att.Nat(x); })(x.token_id), (x => { return new att.Nat(x); })(x.amount)); })(x[i]));
                            } return res; })(x.txs)); })(x[i]));
                        } return res; })(x.transfer));
                    })(raw);
                    ep(event, data);
                } });
            return;
        }
        throw new Error("Contract not initialised");
    }
    register_operator_update_event(ep: el.EventProcessor<operator_update_event>) {
        if (this.address != undefined) {
            el.registerEvent({ source: this.address, filter: tag => { return tag == "operator_update_event"; }, process: (raw: any, data: el.EventData | undefined) => {
                    const event = (x => {
                        return new operator_update_event((x => { return new att.Address(x); })(x.sender), (x => { const res: Array<operator_update_item> = []; for (let i = 0; i < x.length; i++) {
                            res.push((x => { return new operator_update_item((x => { return new att.Address(x); })(x.owner), (x => { return new att.Address(x); })(x.operator), (x => { return new att.Nat(x); })(x.token_id), (x => { return x.prim ? (x.prim == "True" ? true : false) : x; })(x.is_operator)); })(x[i]));
                        } return res; })(x.transfer));
                    })(raw);
                    ep(event, data);
                } });
            return;
        }
        throw new Error("Contract not initialised");
    }
    register_approval_event(ep: el.EventProcessor<approval_event>) {
        if (this.address != undefined) {
            el.registerEvent({ source: this.address, filter: tag => { return tag == "approval_event"; }, process: (raw: any, data: el.EventData | undefined) => {
                    const event = (x => {
                        return new approval_event((x => { return new att.Address(x); })(x.sender), (x => { const res: Array<approve_event_item> = []; for (let i = 0; i < x.length; i++) {
                            res.push((x => { return new approve_event_item((x => { return new att.Address(x); })(x.owner), (x => { return new att.Address(x); })(x.spender), (x => { return new att.Nat(x); })(x.token_id), (x => { return new att.Nat(x); })(x.new_value)); })(x[i]));
                        } return res; })(x.approval_update));
                    })(raw);
                    ep(event, data);
                } });
            return;
        }
        throw new Error("Contract not initialised");
    }
    errors = {
        FA2_1_INVALID_TICKET: att.string_to_mich("\"FA2.1_INVALID_TICKET\""),
        FA2_INSUFFICIENT_BALANCE: att.string_to_mich("\"FA2_INSUFFICIENT_BALANCE\""),
        NOT_HANDLED: att.string_to_mich("0"),
        FA2_1_NOT_ENOUGH_ALLOWANCE: att.string_to_mich("\"FA2.1_NOT_ENOUGH_ALLOWANCE\""),
        FA2_NOT_OPERATOR: att.string_to_mich("\"FA2_NOT_OPERATOR\""),
        fa2_r7: att.string_to_mich("\"FA2_INSUFFICIENT_BALANCE\""),
        fa2_r6: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"fa2_r6\"")]),
        fa2_r5: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"fa2_r5\"")]),
        INVALID_CALLER: att.string_to_mich("\"INVALID_CALLER\""),
        fa2_r4: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"fa2_r4\"")]),
        CALLER_NOT_OWNER: att.string_to_mich("\"CALLER_NOT_OWNER\""),
        fa2_r1: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"fa2_r1\"")]),
        tmd_r1: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"tmd_r1\"")]),
        md_r1: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"md_r1\"")]),
        pausable_r2: att.string_to_mich("\"CONTRACT_NOT_PAUSED\""),
        pausable_r1: att.pair_to_mich([att.string_to_mich("\"INVALID_CONDITION\""), att.string_to_mich("\"pausable_r1\"")]),
        ownership_r1: att.string_to_mich("\"INVALID_CALLER\""),
        CONTRACT_PAUSED: att.string_to_mich("\"CONTRACT_PAUSED\"")
    };
}
export const fa2_1 = new Fa2_1();
