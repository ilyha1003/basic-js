const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length <= 0) return '';

  let encStr = [];

  for (let i = 0; i < str.length; i += 1) {
    let counter = 1;

    while (str[i + 1] === str[i]) {
      counter++;
      i++;
    }

    encStr.push(`${counter === 1 ? '' : counter}${str[i]}`);
  }

  return encStr.join('');
}

module.exports = {
  encodeLine
};
