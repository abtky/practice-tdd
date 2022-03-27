/* eslint-disable max-classes-per-file */
export abstract class Money {
  protected amount: number = 0;

  protected currency: string = '';

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getCurrency(): string {
    return this.currency;
  }

  // eslint-disable-next-line no-unused-vars
  abstract times(value: number): Money;

  equals(money: Money): boolean {
    const sameClass = money.constructor === this.constructor;
    return sameClass && money.amount === this.amount;
  }

  static dollar(amount: number): Money {
    // eslint-disable-next-line no-use-before-define
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Money {
    // eslint-disable-next-line no-use-before-define
    return new Franc(amount, 'CHF');
  }
}
class Dollar extends Money {
  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}
class Franc extends Money {
  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
