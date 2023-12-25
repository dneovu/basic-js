const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  } else {
    let arr = [];
    members.forEach((e) => {
      if (typeof e === 'string') {
        arr.push(e.trim().toUpperCase()[0]);
      }
    });
    let out;
    arr.length > 0 ? (out = arr.sort().join('')) : (out = false);
    return out;
  }
}

module.exports = {
  createDreamTeam,
};
