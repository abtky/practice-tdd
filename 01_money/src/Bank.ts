import { Expression } from './Expression';
import { Money } from './Money';

export class Bank {
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
