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
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let maxD = 1;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        const curD = this.calculateDepth(el) + 1;
        maxD = Math.max(maxD, curD);
      }
    });
    return maxD;
  }
}

module.exports = {
  DepthCalculator,
};
