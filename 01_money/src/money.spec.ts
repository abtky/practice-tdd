// eslint-disable-next-line import/no-unresolved, import/extensions
import { Dollar } from './money';

describe('Dollar', () => {
  test('multiplication: $5 * 2 = $10', () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);
    product = five.times(3);
    expect(product.amount).toBe(15);
  });
  test('equality', () => {
    const five = new Dollar(5);
    expect(five.equals(new Dollar(5))).toBeTruthy();
    expect(five.equals(new Dollar(6))).toBeFalsy();
  });
});
