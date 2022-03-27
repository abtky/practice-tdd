/* eslint-disable import/no-unresolved */
import { Expression } from './Expression';
import { Money } from './Money';
import { Bank } from './Bank';

export class Sum implements Expression {
  augend: Money;

  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(_bank: Bank, to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
