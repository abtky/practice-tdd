/* eslint-disable max-classes-per-file */
class Money {
  protected amount: number = 0;

  equals(money: Money): boolean {
    const sameClass = money.constructor === this.constructor;
    return sameClass && money.amount === this.amount;
  }
}
export class Dollar extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
export class Franc extends Money {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
