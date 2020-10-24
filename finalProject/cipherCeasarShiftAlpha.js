//Step #1 Build alphabet variable
var alpha = "abcdefghijklmnopqrstuvwxyz";

//Step #2 Build cipher
//2a) Establish shift level variable
var num1 = 5; //shift to the left 5 characters; only to left, didn't build to right

//2b) Determine left side of the cipher using for statement
var leftString = "";
var shift = 26 - num1; //shift starting point
for (var i = shift; i < alpha.length; i++) {
  leftString += alpha[i]; //build string
}
//console.log(newString); //log string

//2b) Determine right side of the cipher using for statement
var rightString = "";
var num = num1 - 1; //result = a to u with a left shift 5 characters
//Build string
for (var i = 0; i < shift; i++) {
  rightString += alpha[i];
}
//console.log(newString2);

//2c) Build final cipher string concat left and right side
var cipherString = leftString.concat(rightString);
//console.log(cipher);
//var cipherString = cipher;
//var cipherString = "zyxwvutsrqponmlkjihgfedcba";
//var cipherString = alpha.split("").reverse().join("");

console.log("1 Alpha String: " + alpha);
console.log("2 Cipher String: " + cipherString);

//Step #3 Establish phrase to code/cipher
var phraseString = "Hello World"; //cipher result = CZGGJ RJMGY
//var phraseString = "has";
//var phraseString = "h y z x";
var phraseStringBlanks = phraseString.toLowerCase().replace(/\s/g, '#');
var length = phraseStringBlanks.length;

//Step #4 Build cipher word/phrase using for/if statements; manage blanks with # replacement
var cipherWord = "";
for (var i = 0; i < phraseString.length; i++) {
  phraseLetter = phraseStringBlanks[i];
  //console.log(phraseLetter);

  if (phraseLetter === "#") {
    cipherLetter = "#";
    cipherWord += cipherLetter;
  } else {
     var letterPos = alpha.indexOf(phraseLetter); // provides a left shift 5 char
     //console.log(letterPos);
     var cipherLetter = cipherString[letterPos];
     //console.log(cipherLetter);
     cipherWord += cipherLetter;
  }

}
//console.log(phraseStringBlanks);
//console.log(cipherWord);

//Step #5 Build final cipher word/phrase replacing # with blanks
var cipherLetterSpace = "";
var cipherWordFinal = "";

for (var i = 0; i < cipherWord.length; i++) {
  cipherLetterSpace = cipherWord[i];
  //console.log(cipherLetterSpace);

if (cipherLetterSpace === "#") {
    cipherLetter = " ";
    cipherWordFinal += cipherLetter;
  } else {
     cipherWordFinal += cipherLetterSpace;
  }
}

//Step #6 Summarize results
console.log("3 Original Phrase:", phraseString);
console.log("4 Cipher Final: ", cipherWordFinal.toUpperCase());
console.log("5 Shift Characters: " + num1 + " to the left.");

/*
Step #1 Build alphabet variable
Step #2 Build cipher
  2a) Establish shift level variable
  2b) Determine left side of the cipher using for statement
  2c) Build final cipher string concat left and right side
Step #3 Establish phrase to code/cipher
Step #4 Build cipher word/phrase using for/if statements; manage blanks with # replacement
Step #5 Build final cipher word/phrase replacing # with blanks
Step #6 Summarize results
Step #7 Check a few other results (see line 37 & 38 for phrase test)
Step #8 Check results with different left shift figures (note right shift does not work; fix or build in constraint... enter shift >= 0)
*/
