
var alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')

phraseToConvert = 'Hello World!'
shiftValue = 5


function encode(phrase, shift) {
  var finalCode = ''
  var initialPhrase = phrase.toUpperCase()

  for (var i = 0; i < initialPhrase.length; i++) {
    var charCode = initialPhrase.charCodeAt(i) - 65

    if (charCode > 0 && charCode < 26) {
      charCode = charCode + shift

      if (charCode > 25) {
        charCode = charCode - 26
      } else if (charCode < 0) {
        charCode = charCode + 26
      }

      var letter = alphabet[charCode]

      finalCode = finalCode + letter

    } else {
      finalCode = finalCode + initialPhrase.charAt(i)
    }
  }
  console.log(finalCode);
  return finalCode

}

function decode(phrase, shift) {
  return encode(phrase, -shift)
}

var encoded = encode(phraseToConvert, shiftValue);
decode(encoded, shiftValue)
