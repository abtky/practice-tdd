/* eslint-disable max-classes-per-file */
export abstract class Money {
  protected amount: number = 0;

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
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
