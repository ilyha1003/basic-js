const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let resArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case "--double-next":
        arr[i + 1] ? resArr.push(arr[i + 1]) : true;
        break;

      case "--double-prev":
        arr[i - 1] && resArr[resArr.length - 1] === arr[i - 1] ? resArr.push(arr[i - 1]) : true;
        break;

      case "--discard-next":
        i === arr.length - 1 ? arr.splice(i, 1) : arr.splice(i, 2);
        break;

      case "--discard-prev":
        resArr.length > 0 && resArr[resArr.length - 1] === arr[i - 1] ? resArr.pop() : true;
        break;

      default:
        resArr.push(arr[i]);
        break;
    }
  }

  return resArr;
}

module.exports = {
  transform
};
