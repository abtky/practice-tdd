/* eslint-disable max-classes-per-file */
export interface Expression {}
export class Money implements Expression {
  amount: number = 0;

  protected currency: string = '';

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getCurrency(): string {
    return this.currency;
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    // eslint-disable-next-line no-use-before-define
    return new Sum(this, addend);
  }

  equals(money: Money): boolean {
    const sameCurrency = money.currency === this.currency;
    const sameAmount = money.amount === this.amount;
    return sameCurrency && sameAmount;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }
}
export class Sum implements Expression {
  augend: Money;

  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
export class Bank {
  // eslint-disable-next-line class-methods-use-this
  reduce(source: Expression, to: string): Money {
    const sum: Sum = source as Sum;
    return sum.reduce(to);
  }
}
