import random from '../../uttils/random';
import {testByTime} from '../../uttils/test';

/**
 * @description: 整数除法
 * @param {number} divided 被除数
 * @param {number} divisor 除数
 * @return {*}
 */
function divide(divided: number, divisor: number) {
  if (divisor === 0) return Infinity;

  let negative = 0;

  if (divided < 0) {
    negative++;
    divided = -divided;
  }

  if (divisor < 0) {
    negative++;
    divisor = -divisor;
  }

  let result = 0;

  while (divided >= divisor) {// 15 > 2
    let multiple = 1; // 2

    while (divisor * multiple <= divided) { // 2 < 15  4 < 15  8 < 15  16 > 15
      multiple *= 2; // 2 4 8
    }

    multiple /= 2; // 4

    result += multiple; // 4

    divided -= divisor * multiple; // 8
  }

  return negative === 1 ? -result : result;
}

testByTime(3000, (assert) => {
  const divided = random.int(-1000, 1000);

  const divisor = random.int(-1000, 1000);

  return assert(
      divide(divided, divisor) === parseInt((divided / divisor).toString()),
      `${divide(divided, divisor)} === ${
        parseInt((divided / divisor).toString())}`);
});

module.exports = divide;
