const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arr = [];
  domains.forEach((domain) => {
    domain.split('.').forEach((word) => {
      arr.unshift(word);
    });
  });

  const newSet = new Set(arr);
  const arrKeys = Array.from(newSet);

  const numArr = arrKeys.map((key) => {
    const filteredDomains = domains.filter((el) => {
      const regexp = new RegExp(`${key}`);
      return (regexp).test(el);
    });
    return filteredDomains.length;
  });

  let name = '';

  for (let i = 0; i < numArr.length; i++) {
    name += `.${arrKeys[i]}`;
    result[`${name}`] = numArr[i];
  }
  return result;
}

module.exports = {
  getDNSStats
};
