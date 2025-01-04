const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const mapS1 = Array.from(s1.split('').reduce((acc, el) => {
    acc.set(el, (acc.get(el) || 0) + 1);
    return acc;
  }, new Map()));

  const mapS2 = Array.from(s2.split('').reduce((acc, el) => {
      acc.set(el, (acc.get(el) || 0) + 1);
      return acc;
  }, new Map()));

  let counter = 0;

  for(let i = 0; i < mapS1.length; i += 1) {
      for(let j = 0; j < mapS2.length; j += 1) {
          if(mapS1[i][0] === mapS2[j][0]) {
              mapS1[i][1] > mapS2[j][1] ? counter += mapS2[j][1] : counter += mapS1[i][1];
          }
      }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
