import { Money } from './Money';
import { Bank } from './Bank';

export interface Expression {
  // eslint-disable-next-line no-unused-vars
  reduce(bank: Bank, to: string): Money;
}
