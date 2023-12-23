const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = (type === true) ? 'direct' : 'reverse';
  }

  encrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");

    let messageNew = '';
    let alphFirstInd = 65;
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let charMes = message.toUpperCase()[i].charCodeAt() - alphFirstInd,
        charKey = key.toUpperCase()[j].charCodeAt() - alphFirstInd,
        charNew = (charMes + charKey) % 26;
      
      if ((charMes >= 0) && (charMes < 26)) {
        messageNew += String.fromCharCode(charNew + alphFirstInd);
        j++;
      } else {
        messageNew += message[i];
      }

      if (j >= key.length) j = 0;
    }

    return (this.type === 'direct') ? messageNew : messageNew.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");

    let messageNew = '';
    let alphFirstInd = 65;
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      let charMes = message.toUpperCase()[i].charCodeAt() - alphFirstInd,
        charKey = key.toUpperCase()[j].charCodeAt() - alphFirstInd,
        charNew = (charMes - charKey) % 26;

      if (charNew > 0) {
        charNew = charNew % 26;
      } else {
        charNew = (charNew + 26) % 26;
      }

      if ((charMes >= 0) && (charMes < 26)) {
        messageNew += String.fromCharCode(charNew + alphFirstInd);
        j++;
      } else {
        messageNew += message[i];
      }

      if (j >= key.length) j = 0;
    }

    return (this.type === 'direct') ? messageNew : messageNew.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
