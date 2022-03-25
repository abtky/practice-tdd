// eslint-disable-next-line import/no-unresolved, import/extensions
import { Dollar } from './money';

describe('Dollar', () => {
  test('$5 * 2 = $10', () => {
    const five = new Dollar(5);
    five.times(2);
    const expected = 10;
    expect(five.amount).toBe(expected);
  });
});
