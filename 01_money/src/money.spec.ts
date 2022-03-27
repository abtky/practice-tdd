// eslint-disable-next-line import/no-unresolved, import/extensions
import { Money } from './money';

describe('Dollar', () => {
  test('multiplication: $5 * 2 = $10', () => {
    const five = Money.dollar(5);
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy();
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy();
  });
  test('equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });
  test('currency', () => {
    expect(Money.dollar(1).getCurrency()).toBe('USD');
    expect(Money.franc(1).getCurrency()).toBe('CHF');
  });
});
