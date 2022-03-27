/* eslint-disable max-classes-per-file */
export interface Expression {}
export class Money implements Expression {
  protected amount: number = 0;

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
    return new Money(this.amount + addend.amount, this.currency);
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
export class Bank {
  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  reduce(source: Expression, to: string): Money {
    console.log({ source, to });
    return Money.dollar(10);
  }
}
