const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  valueChain: [],
  index: 0,
  getLength() {
    return this.index;
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let strValue = value;
    // if (typeof strValue.constructor.name !== 'string') {
    if (typeof strValue !== 'string') {
      strValue = JSON.stringify(strValue.toString());
    }
    if (this.chain.length === 0) {
      this.chain += `( ${strValue} )`;
    } else {
      this.chain += `~~( ${strValue} )`;
    }
    this.index++;
    this.valueChain.push(strValue);
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if ((!Number.isInteger(position)) || (position > (this.index)) || (position < 1)) {
      this.chain = '';
      this.valueChain = [];
      this.index = 0;
      throw new TypeError("You can't remove incorrect link!");
    }
    if ((position === 1) && (this.index === 1)) {
      this.chain = '';
    } else if (position === 1) {
      this.chain = this.chain.substring(7);
    } else if (position === (this.index)) {
      this.chain = this.chain.substring(this.chain.length - 7);
    } else {
      this.chain = this.chain.substring(0, (position * 7)) + this.chain.substring((position * 7 + 7));
    }

    this.index--;
    this.valueChain = this.valueChain.filter((el, i) => i !== position);
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.valueChain = this.valueChain.reverse();
    this.valueChain.forEach((el, ind)=> {
      this.chain[ind * 7 + 3] = el;
    });
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let printChain = this.chain;
    this.chain = '';
    this.valueChain = [];
    this.index = 0;
    return printChain;
  }
};

module.exports = {
  chainMaker
};
