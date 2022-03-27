import { Currency } from './Currency';
import { Bank } from './Bank';
import { Money } from './Money';

export interface Expression {
  reduce(bank: Bank, to: Currency): Money;
}
