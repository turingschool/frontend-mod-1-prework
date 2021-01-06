function caesarCipher(str, shiftAmount) {
  shiftAmount = shiftAmount % 26;
  var upperCaseStr = str.toUpperCase();
  var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var encode = "";

  for (var i = 0; i < upperCaseStr.length; i++) {
    var currentLetter = upperCaseStr[i];
    if (currentLetter === " ") {
      encode += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + shiftAmount;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (str[i] === str[i].toLowerCase()) {
      encode += alphabet[newIndex].toLowerCase();
    }
    else encode += alphabet[newIndex];
  }
  return encode.toUpperCase();
}

console.log(caesarCipher("Hello World", -5));
