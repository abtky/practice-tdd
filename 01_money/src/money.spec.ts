/* eslint-disable import/no-unresolved */
import { Money } from './Money';
import { Bank } from './Bank';
import { Sum } from './Sum';
import { Expression } from './Expression';

describe('Dollar', () => {
  test('multiplication: $5 * 2 = $10', () => {
    const five = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBe(true);
    expect(five.times(3).equals(Money.dollar(15))).toBe(true);
  });
  test('equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });
  test('currency', () => {
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(1).getCurrency()).toBe('CHF');
  });
  test('addition', () => {
    const five = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(10).equals(reduced)).toBe(true);
  });
  test('reduce sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(result.equals(Money.dollar(7))).toBe(true);
  });
  test('reduce Money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(result.equals(Money.dollar(1))).toBe(true);
  });
  test('reduce money different currency', () => {
    const bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');
    expect(Money.dollar(1).equals(result)).toBe(true);
  });
});
