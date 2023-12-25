const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const countRepeat = 'repeatTimes' in options ? options['repeatTimes'] : 1;
  const separator = 'separator' in options ? options['separator'] : '+';
  const addition = 'addition' in options ? String(options['addition']) : '';
  const additionRepeatTimes =
    'additionRepeatTimes' in options ? options['additionRepeatTimes'] : 1;
  const additionSeparator =
    'additionSeparator' in options ? options['additionSeparator'] : '|';

  const additionalStr = createStr(additionRepeatTimes, addition, additionSeparator);

  return createStr(countRepeat, str + additionalStr, separator);
}

const createStr = (repeat, str, separate) => {
  return Array(repeat).fill(str).join(separate);
};

module.exports = {
  repeater,
};
