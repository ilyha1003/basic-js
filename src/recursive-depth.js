const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, lvl = 1) {
    if (!Array.isArray(arr)) {
      return lvl - 1;
    }

    let max = lvl;

    for (const item of arr) {
      if (Array.isArray(item)) {
        const nestedDepth = this.calculateDepth(item, lvl + 1);
        max = Math.max(max, nestedDepth);
      }
    }
    return max;
  }
}

module.exports = {
  DepthCalculator
};
