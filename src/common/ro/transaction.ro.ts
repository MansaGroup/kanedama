export interface TransactionRo {
  timestamp: string;
  transaction_type: string;
  transaction_category: string;
  amount: number;
  currency: string;
  status: string;
}
