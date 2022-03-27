/* eslint-disable max-classes-per-file */
export abstract class Money {
  protected amount: number = 0;

  abstract readonly currency: string;

  // eslint-disable-next-line no-unused-vars
  abstract times(value: number): Money;

  equals(money: Money): boolean {
    const sameClass = money.constructor === this.constructor;
    return sameClass && money.amount === this.amount;
  }

  static dollar(amount: number): Money {
    // eslint-disable-next-line no-use-before-define
    return new Dollar(amount);
  }

  static franc(amount: number): Money {
    // eslint-disable-next-line no-use-before-define
    return new Franc(amount);
  }
}
class Dollar extends Money {
  readonly currency: string;

  constructor(amount: number) {
    super();
    this.amount = amount;
    this.currency = 'USD';
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
class Franc extends Money {
  readonly currency: string;

  constructor(amount: number) {
    super();
    this.amount = amount;
    this.currency = 'CHF';
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
