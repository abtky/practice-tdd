import { Currency } from './Currency';
import { Expression } from './Expression';
import { Money } from './money';

type Pair = [from: Currency, to: Currency];
export class Bank {
  protected rates: Map<string, number> = new Map();

  reduce(source: Expression, to: Currency): Money {
    return source.reduce(this, to);
  }

  addRate(from: Currency, to: Currency, rate: number): void {
    const pair: Pair = [from, to];
    this.rates.set(pair.toString(), rate);
  }

  rate(from: Currency, to: Currency): number {
    if (from === to) {
      return 1;
    }
    const pair: Pair = [from, to];
    return this.rates.get(pair.toString()) || 1;
  }
}
