import { Currency } from './Currency';
import { Money } from './Money';
import { Bank } from './Bank';
import { Sum } from './Sum';
import { Expression } from './Expression';

describe('Dollar', () => {
  test('multiplication: $5 * 2 = $10', () => {
    const five = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });
  test('equality', () => {
    expect(Money.dollar(5)).toEqual(Money.dollar(5));
    expect(Money.dollar(5)).not.toEqual(Money.dollar(6));
    expect(Money.franc(5)).not.toEqual(Money.dollar(5));
  });
  test('currency', () => {
    expect(Money.dollar(1).getCurrency()).toBe(Currency.USD);
    expect(Money.franc(1).getCurrency()).toBe(Currency.CHF);
  });
  test('addition', () => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, Currency.USD);
    expect(Money.dollar(10).equals(reduced)).toBe(true);
  });
  test('reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, Currency.USD);
    expect(result.equals(Money.dollar(7))).toBe(true);
  });
  test('reduce Money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), Currency.USD);
    expect(result.equals(Money.dollar(1))).toBe(true);
  });
  test('reduce money different currency', () => {
    const bank = new Bank();
    bank.addRate(Currency.CHF, Currency.USD, 2);
    const result: Money = bank.reduce(Money.franc(2), Currency.USD);
    expect(bank.rate(Currency.CHF, Currency.USD)).toBe(2);
    expect(Money.dollar(1)).toEqual(result);
  });
  test('identity rate', () => {
    expect(new Bank().rate(Currency.USD, Currency.USD)).toBe(1);
  });
  test('mixed addition', () => {
    const fiveBacks: Expression = Money.dollar(5);
    const tenFranc: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate(Currency.CHF, Currency.USD, 2);
    const result: Money = bank.reduce(fiveBacks.plus(tenFranc), Currency.USD);
    expect(result).toEqual(Money.dollar(10));
  });
  test('sum plus money', () => {
    const fiveBacks: Expression = Money.dollar(5);
    const tenFranc: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate(Currency.CHF, Currency.USD, 2);
    const sum: Expression = new Sum(fiveBacks, tenFranc).plus(fiveBacks);
    const result: Money = bank.reduce(sum, Currency.USD);
    expect(result).toEqual(Money.dollar(15));
  });
  test('sum times', () => {
    const fiveBacks: Expression = Money.dollar(5);
    const tenFranc: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate(Currency.CHF, Currency.USD, 2);
    const sum: Expression = new Sum(fiveBacks, tenFranc).times(2);
    const result: Money = bank.reduce(sum, Currency.USD);
    expect(result).toEqual(Money.dollar(20));
  });
});
