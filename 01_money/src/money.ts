export class Dollar {
  private amount: number = 0;

  constructor(amount: number) {
    this.amount = amount;
  }

  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  equals(target: Dollar): boolean {
    return target.amount === this.amount;
  }
}
