// eslint-disable-next-line import/no-unresolved, import/extensions
import { Money, Expression, Bank } from './money';

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
    const sum: Expression = Money.dollar(5).plus(Money.dollar(5));
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(10).equals(reduced)).toBe(true);
  });
});
