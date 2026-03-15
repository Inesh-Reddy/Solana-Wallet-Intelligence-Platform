import { TransactionEvent } from "@shared/models";

console.log(`ai classifier`);

function classifyTransactionEvent(event: TransactionEvent) {
  console.log("Classifying transaction: ", event.signature);
}

classifyTransactionEvent({
  event_type: "TRANSACTION_DETECTED",
  wallet: "574htiugo;Ggbao'sg",
  signature: "afsgdhf",
  timestamp: 12345,
  slot: 123,
  program: "progmra",
  raw_transaction: 112,
});
