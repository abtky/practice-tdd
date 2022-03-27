/* eslint-disable max-classes-per-file */
export class Money {
  protected amount: number = 0;

  protected currency: string = '';

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  getCurrency(): string {
    return this.currency;
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  equals(money: Money): boolean {
    const sameClass = money.currency === this.currency;
    return sameClass && money.amount === this.amount;
  }

  static dollar(amount: number): Money {
    // eslint-disable-next-line no-use-before-define
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    // eslint-disable-next-line no-use-before-define
    return new Money(amount, 'CHF');
  }
}
