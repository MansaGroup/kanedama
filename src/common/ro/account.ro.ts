export interface AccountRo {
  account_id: string;
  account_type: 'ACCOUNT' | 'DEBIT';
  iban: string;
  swift_bic: string;
  sort_code: string;
  account_number: string;
  currency: string;
  available: number;
  current: number;
  update_timestamp: string;
}
