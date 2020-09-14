var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var shift = 2; //this is the number you're shifting the alphabet by
// console.log("shift " + shift)
var inputWord = "Hi"; //this is the word you want to encode
// console.log("inputWord " + inputWord);
var inputWord = inputWord.toUpperCase(); //this changes the inputWord to uppercase
// console.log("inputWord " + inputWord);
var inputLength = inputWord.length; //this gets the length of the word string
// console.log("inputLength " + inputLength);
var outputWord = ""; //sets the outputWord to a string


for(var i = 0; i < inputLength; i++) { //start at 0, and as long as you haven't come to the length of the inputWord, increment i

  var currentLetter = inputWord.charCodeAt(i) - 65; //sets currentLetter to a number
  if(currentLetter > 25 || currentLetter < 0) { //checks if currentLetter is a letter
    outputWord = outputWord.concat(inputWord.charAt(i)) //if not, passes the input through
  } else {
    currentLetter = currentLetter - shift; //reassigns currentLetter to that number minus the shift
    if(currentLetter > 25 || currentLetter < 0) { //if the new position of currentLetter is outside the alphabet array
      currentLetter = currentLetter + 26 //subtract 26 to get it back within the array
    }

    outputWord = outputWord.concat(alphabet[currentLetter]); //takes the letter at the shifted position and concats it to the outputWord string
  }
}
console.log(outputWord); //logs the outputWord