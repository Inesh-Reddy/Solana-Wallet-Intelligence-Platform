export interface TransactionEvent {
  event_type: "TRANSACTION_DETECTED";

  wallet: string;

  signature: string;

  timestamp: number;

  slot: number;

  program: string;

  raw_transaction: any;
}
