import { Currency } from './Currency';
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

  reduce(bank: Bank, to: Currency): Money {
    const augendAmount: number = this.augend.reduce(bank, to).amount;
    const addendAmount: number = this.addend.reduce(bank, to).amount;
    const amount: number = augendAmount + addendAmount;
    return new Money(amount, to);
  }
}
