const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strMod;
  if (str === null) {
    strMod = 'null';
  } else if ((typeof str === "object")) {
    strMod = `${str}`;
  } else {
    strMod = str.toString();
  }

  if (options.addition === null) {
    options.addition = 'null';
  } else if ((typeof options.addition === "object")) {
    options.addition = `${options.addition}`;
  }

  if (!Object.hasOwn(options, 'addition')) {
    options.addition = '';
  } else {
    options.addition = options.addition.toString();
  }
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  const arrStrRepeat = [];

  for (let i = 0; i < options.repeatTimes; i++) {
    arrStrRepeat.push(strMod);
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      arrStrRepeat.push(options.addition);
      arrStrRepeat.push(options.additionSeparator);
    }
    arrStrRepeat.pop();
    arrStrRepeat.push(options.separator);
  }
  arrStrRepeat.pop();
  return arrStrRepeat.join('');
}

module.exports = {
  repeater
};
