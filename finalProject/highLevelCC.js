/////////*INSTRUCTIONS*: must be run in chrome dev tools or repl.it due to prompts


var a = prompt("Please enter a string you would like to encode:");
var b = prompt("What number do you want the shift value to be?");

encode(a, b);

function encode(a, b) {

  a = a.toUpperCase();
  var stringInput = a.split("");
  var shiftValue = parseInt(b);

  var fullAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var indexValues = [];
  var shiftedString = [];
  var codedString;

  ///// get index values stringInput vs pre-shifted alphabet
  for (i = 0; i < stringInput.length; i++) {
    // get index positions for this and put in array (if statement to capture spaces)
    if (stringInput[i] === " ") {
      indexValues.push(" ");
    } else {
      var z = fullAlphabet.indexOf(stringInput[i]);
      indexValues.push(z);
    }
  }
  /// end get index values stringInput vs pre-shifted alphabet

  ///// shift fullAlphabet array based on input value
  for (i = 0; i < shiftValue; i++) {
    fullAlphabet.unshift(fullAlphabet.pop());
  }
  ///// end shift array

  /// get final array with shifted letters
  for (i = 0; i < indexValues.length; i++) {
    if (indexValues[i] === " ") {
      shiftedString.push(" ");
    } else if (indexValues[i] < 27) {
      shiftedString.push(fullAlphabet[indexValues[i]])
    } else {
      console.log("Error");
    }
  }
  /// end get final array with shifted letters

  /// get final encoded string and print
  var codedString = shiftedString.join("");

  console.log(codedString);
  ///// get final string and print
}
