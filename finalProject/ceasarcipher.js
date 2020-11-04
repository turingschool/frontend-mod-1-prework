
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function encode(string, shiftNumber) {
  console.log('STRING: ' + string);
  console.log('SHIFT-NUMBER: ' + shiftNumber);
  let capitalizeString = string.toUpperCase();
  let split = capitalizeString.split('');
  let result = '';
  for (i = 0; i < split.length; i++){
    if (split[i] === ' ') {
      result = result + split[i];
    } else if ((alphabet.indexOf(split[i]) - shiftNumber) < 0) {
      result = result + (alphabet[26 + (alphabet.indexOf(split[i]) - shiftNumber)]);
    } else {
      result = result + (alphabet[(alphabet.indexOf(split[i])) - shiftNumber]);
    }
  }
  console.log('CEASAR CIPHER: ' + result);
}

encode('abcdefghij', 3);
