const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  arrStr = str.split('');

  let accum = 1;
  let arrCode = [];

  arrStr.forEach((char, i, a) => {
    if (char === a[i + 1]) {
      accum++;
    }
    if (char !== a[i + 1]) {
      if (accum > 1) {
        arrCode.push(accum);
      };
      arrCode.push(char);
      accum = 1;
    }
  });

  return arrCode.join('');
}

module.exports = {
  encodeLine
};
