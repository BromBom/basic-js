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
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arr.length === 0) return [];
  if ((arr.flat(Infinity).length === 0) || (arr.constructor.name !== 'Array') || (!arr)) {
    throw new TypeError("'arr' parameter must be an instance of the Array!");
  }

  const arrMod = arr.slice();

  if ((arr instanceof Array) && (Array.isArray(arr)) && (arr.length !== 0)) {
    const res = arrMod.flatMap((el, i, a) => {
      if ((a[i - 1] === '--discard-next') && (a[i + 1] === '--double-prev')) return [];
      if ((a[i - 1] === '--double-next') && (a[i + 1] === '--double-prev')) return [el, el, el];
      if ((a[i - 1] === '--double-next') && (a[i + 1] === '--discard-prev')) return [el];
      if (a[i + 1] === '--discard-prev') return [];
      if (a[i - 1] === '--double-next') return [el, el];
      if (a[i + 1] === '--double-prev') return [el, el];

      if (el.toString().startsWith('-')) return [];

      return el;
    });

    if (res.flat(Infinity).length === 0) {
      throw new TypeError("'arr' parameter must be an instance of the Array!");
    } else {
      return res;
    }
  }

  throw new TypeError("'arr' parameter must be an instance of the Array!");
}

module.exports = {
  transform
};
