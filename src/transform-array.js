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
  let res = [];
  let i = 0;
  try {
    if (!(arr instanceof Array)) throw new Error();
    while (i < arr.length) {
      switch (arr[i]) {
        case '--discard-next':
          i++;
          if (['--double-prev', '--discard-prev'].includes(arr[i + 1])) i++;
          break;
        case '--discard-prev':
          if (arr[i - 1]) res.splice(-1, 1);
          break;
        case '--double-next':
          if (arr[i + 1]) res.push(arr[i + 1]);
          break;
        case '--double-prev':
          if (arr[i - 1]) res.push(arr[i - 1]);
          break;
        default:
          res.push(arr[i]);
          break;
      }
      i++;
    }
    return res;
  } catch (e) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}

module.exports = {
  transform,
};
