const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let strArr = String(n).split('');
  let res = 0;
  for (let i = 0; i < strArr.length; i++) {
    res += Number(strArr[i]);
  }

  let newRes = 0;
  if(String(res).length > 1) {
    let resArr = String(res).split('');
    for (let i = 0; i < resArr.length; i++) {
      newRes += Number(resArr[i]);   
    }
    return newRes;
  }

  return res;
}

module.exports = {
  getSumOfDigits
};
