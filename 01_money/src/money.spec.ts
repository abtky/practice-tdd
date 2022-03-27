// eslint-disable-next-line import/no-unresolved, import/extensions
import { Dollar, Franc } from './money';

describe('Dollar', () => {
  test('multiplication: $5 * 2 = $10', () => {
    const five = new Dollar(5);
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy();
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy();
  });
  test('equality', () => {
    const five = new Dollar(5);
    expect(five.equals(new Dollar(5))).toBeTruthy();
    expect(five.equals(new Dollar(6))).toBeFalsy();
  });
  test('Franc multiplication', () => {
    const five = new Franc(5);
    expect(five.times(2).equals(new Franc(10))).toBeTruthy();
    expect(five.times(3).equals(new Franc(15))).toBeTruthy();
  });
});