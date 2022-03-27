// eslint-disable-next-line import/no-unresolved, import/extensions
import { Dollar } from './money';

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
});
