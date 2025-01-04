const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = String(n).split('');
  const numStr = num.reduce((acc, cur) => acc + cur);
  let max = 0;

  for(let i = 0; i < num.length; i += 1) {
      let sum = Number(numStr.replace(num[i], ''));
      sum > max ? max = sum : max = max;
  }

  return max;
}

module.exports = {
  deleteDigit
};
