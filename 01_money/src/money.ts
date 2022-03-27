/* eslint-disable max-classes-per-file */
export interface Expression {
  // eslint-disable-next-line no-use-before-define, no-unused-vars
  reduce(bank: Bank, to: string): Money;
}

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

  // eslint-disable-next-line no-use-before-define
  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to);
    return new Money(this.amount / rate, to);
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

  // eslint-disable-next-line no-use-before-define
  reduce(_bank: Bank, to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}
export class Bank {
  // eslint-disable-next-line class-methods-use-this
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  // eslint-disable-next-line class-methods-use-this
  addRate(from: string, to: string, rate: Number): void {
    console.log({ from, to, rate });
  }

  // eslint-disable-next-line class-methods-use-this
  rate(from: string, to: string): number {
    return from === 'CHF' && to === 'USD' ? 2 : 1;
  }
}
