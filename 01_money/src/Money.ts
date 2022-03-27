import { Bank } from './Bank';
import { Expression } from './Expression';
import { Sum } from './Sum';

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
