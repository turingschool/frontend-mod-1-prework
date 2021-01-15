
// an attempt at solving this, with very little progress

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
                "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                "S", "T", "U", "V", "W", "X", "Y", "Z"];

function caesarCipher(string, shiftValue) {
  var upperCase = string.toUpperCase();
  var split = upperCase.split("");
  for (var i = 0; i < alphabet.length; i++) {
    console.log(split);
  }
}
caesarCipher("Cooper", 3);
