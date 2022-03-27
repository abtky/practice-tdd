import { Currency } from './Currency';
import { Expression } from './Expression';
import { Money } from './Money';

export class Bank {
  reduce(source: Expression, to: Currency): Money {
    return source.reduce(this, to);
  }

  // eslint-disable-next-line class-methods-use-this
  addRate(from: Currency, to: Currency, rate: Number): void {
    console.log({ from, to, rate });
  }

  // eslint-disable-next-line class-methods-use-this
  rate(from: Currency, to: Currency): number {
    return from === Currency.CHF && to === Currency.USD ? 2 : 1;
  }
}
