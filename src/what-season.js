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
  if (!date) return 'Unable to determine the time of year!';

  if (!(date instanceof Date)) throw Error('Invalid date!');
  try {
    date.getTime();
  } catch {
    throw Error('Invalid date!');
  }

  let season;
  const arr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  for (let i = 0; i < arr.length; i++) {
    if ((date.getMonth() + 1) === arr[i]) {
      if (i < 3) {
        if ((arr[i] === 2) && (date.getDate() > 29)) {
          throw new Error("Invalid date!");
        }
        season = 'winter';
      }
      if ((i > 2) && (i < 6)) {
        season = 'spring';
      }
      if ((i > 5) && (i < 9)) {
        season = 'summer';
      }
      if ((i > 8) && (i < 12)) {
        season = 'autumn';
      }
    }
  }

  return season;
}

module.exports = {
  getSeason
};
