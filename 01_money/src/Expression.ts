/* eslint-disable import/no-unresolved, import/extensions */
import { Money } from './Money';
import { Bank } from './Bank';

/* eslint-disable max-classes-per-file */
export interface Expression {
  // eslint-disable-next-line no-unused-vars
  reduce(bank: Bank, to: string): Money;
}
