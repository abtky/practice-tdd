import { Currency } from './Currency';
import { Money } from './Money';
import { Bank } from './Bank';

export interface Expression {
  // eslint-disable-next-line no-unused-vars
  reduce(bank: Bank, to: Currency): Money;
}
