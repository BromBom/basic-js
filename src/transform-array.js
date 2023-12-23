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
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return [];

  const arrNew = [...arr];
  const result = [];

  for (let i = 0; i < arrNew.length; i++) {
    switch (arrNew[i]) {
      case '--double-next':
        (arrNew[i + 1]) ? result.push(arrNew[i + 1]) : null;
        break;
      case '--double-prev':
        (arrNew[i - 1]) ? result.push(arrNew[i - 1]) : null;
        break;
      case '--discard-next':
        arrNew.splice(i + 1, 1);
        i++;
        break;
      case '--discard-prev':
        result.pop();
        break;
      default:
        result.push(arrNew[i]);
        break;
    }
  }
  return result;
}

module.exports = {
  transform
};
