/* eslint-disable max-classes-per-file */
class Money {
  protected amount: number = 0;

  equals(money: Money): boolean {
    return money.amount === this.amount;
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
export class Franc {
  private amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  equals(target: Franc): boolean {
    return target.amount === this.amount;
  }
}
