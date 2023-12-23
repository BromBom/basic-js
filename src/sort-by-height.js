const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.indexOf(-1) < 0) {
    return arr.sort((a, b) => a - b);
  } else {
    const storage = [];
    let newArr = arr.filter((num) => num !== -1);
    newArr.sort((a, b) => a - b);

    arr.forEach((el, i) => {
      if (el === -1) {
        storage.push(i);
      }
    });

    storage.forEach((el, i) => {
      newArr.splice(el, 0, -1);
    });
    return newArr;
  }
}

module.exports = {
  sortByHeight
};
