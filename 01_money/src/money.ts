export class Dollar {
  amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  equals(target: Dollar): boolean {
    return target.amount === this.amount;
  }
}
