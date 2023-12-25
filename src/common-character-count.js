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
  const arrS1 = Array.from(s1);
  const arrS2 = Array.from(s2);

  let commonCount = 0;

  arrS1.forEach(char => {
      const charIndex = arrS2.indexOf(char);
      if (charIndex !== -1) {
          commonCount++;
          arrS2.splice(charIndex, 1);
      }
  });

  return commonCount;
}


module.exports = {
  getCommonCharacterCount
};
