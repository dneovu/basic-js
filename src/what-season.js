const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (!date) return 'Unable to determine the time of year!';
    if (!(date instanceof Date) || typeof +date !== 'number') throw new Error;
    const months = {
      spring: [3, 4, 5],
      summer: [6, 7, 8],
      autumn: [9, 10, 11],
      winter: [12, 1, 2],
    };
    const month = date.getMonth() + 1;
    for (const [key, value] of Object.entries(months)) {
      if (value.includes(month)) return key;
    }
  } catch (e) {
    throw new Error('Invalid date!');
  }
  
}

module.exports = {
  getSeason,
};
