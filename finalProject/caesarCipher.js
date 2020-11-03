

encode("Hello World", 5);


function encode(userInput, userShiftValue) {

  var userPlainText = userInput.toUpperCase();
  // console.log(userPlainText);

  var plainTextLetters = userPlainText.split("");
  // console.log("\nArray of plaintext letters: " + plainTextLetters);

  var alphabetLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var cipherLetters = [];


  function shiftLetter(inputLetter) {
    var keyIndex = alphabetLetters.indexOf(inputLetter);

    // If shift makes index negative, circle back around
    if (keyIndex - userShiftValue < 0) {
      keyIndex = keyIndex + 26;
    }

    cipherLetter = alphabetLetters[keyIndex - userShiftValue];

    return cipherLetter;
  }


  for (var i = 0; i <= plainTextLetters.length; i++) {
    if (alphabetLetters.indexOf(plainTextLetters[i]) !== -1) {
      // console.log("It's a letter");
      cipherLetters[i] = shiftLetter(plainTextLetters[i]);
    } else {
      // console.log("It's not a letter");
      cipherLetters[i] = plainTextLetters[i];
    }
  }

  // console.log("\nArray of ciphertext letters: " + cipherLetters + "\n");

  var cipherText = cipherLetters.join("");
  console.log(cipherText);

}
