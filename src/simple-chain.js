const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      const deletedInd = position - 1;
      if (
        deletedInd < 0 ||
        deletedInd > this.chain.length - 1 ||
        !Number.isInteger(deletedInd)
      )
        throw new Error();
      this.chain.splice(deletedInd, 1);
      return this;
    } catch (e) {
      this.clear();
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const output = this.chain.join('~~');
    this.clear();
    return output;
  },
  clear() {
    this.chain = [];
  },
};

module.exports = {
  chainMaker,
};
