var originalAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function encode(string, shiftNumber) {
  for (i = 0; i < shiftNumber; i++) {
    alphabet.unshift(alphabet.pop());
  }
  var capitalizeString = string.toUpperCase()
  var split = capitalizeString.split("");
  console.log("String: " + string + ", " + "Shift Number: " + shiftNumber);
  var result = "";
  for (j = 0; j < split.length; j++) {
    if (split[j] === " ") {
      result = result + split[j];
    } else {
      result = result + (alphabet[originalAlphabet.indexOf(split[j])]);
    }
  }
  console.log(result);
}

encode("TeStInG inIHihiHIG", 3);
