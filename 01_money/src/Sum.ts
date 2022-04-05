import { Currency } from './Currency';
import { Expression } from './Expression';
import { Money } from './Money';
import { Bank } from './Bank';

export class Sum implements Expression {
  augend: Expression;

  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank: Bank, to: Currency): Money {
    const augendAmount: number = this.augend.reduce(bank, to).amount;
    const addendAmount: number = this.addend.reduce(bank, to).amount;
    const amount: number = augendAmount + addendAmount;
    return new Money(amount, to);
  }

  times(multiplier: number): Expression {
    return new Sum(
      this.augend.times(multiplier),
      this.addend.times(multiplier)
    );
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }
}
