//Part A: Build Initial String & Arrays
//Step #1 build alphabet variable
var alpha = "abcdefghijklmnopqrstuvwxyz";
//var cipherString = "abcdefghijklmnopqrstuvwxyz";
var cipherString = "zyxwvutsrqponmlkjihgfedcba";
//var cipherString = alpha.split("").reverse().join("");

console.log("1 alphaString: " + alpha);
console.log("2 cipherString: " + cipherString);

//var phraseString = "has";
//var phraseString = "h y z x";
var phraseString = "Hello World Y"; //cipher result = qtmmj bjgmu z
var phraseStringBlanks = phraseString.toLowerCase().replace(/\s/g, '#');
var length = phraseStringBlanks.length;
console.log("3 phraseStringBlanks length: " + length);
console.log("4 phraseStringBlanks: " + phraseStringBlanks);
//console.log(phaseString.length);

var cipherWord = "";

for (var i = 0; i < phraseString.length; i++) {
  phraseLetter = phraseStringBlanks[i];
  console.log(phraseLetter);

  if (phraseLetter === "#") {
    cipherLetter = "#";
    cipherWord += cipherLetter;
  } else if (phraseLetter === "y") {;
    var letterPos = 0; //"y" = pos 24 + 2 letter shift = 25 then 0
    console.log(letterPos);
    var cipherLetter = cipherString[letterPos];
    console.log(cipherLetter);
    cipherWord += cipherLetter;
  } else if (phraseLetter === "z") {;
      var letterPos = 1; //"z" = pos 25 + 2 letter shift = 0 then 1
      console.log(letterPos);
      var cipherLetter = cipherString[letterPos];
      console.log(cipherLetter);
      cipherWord += cipherLetter;
  } else {
     var letterPos = alpha.indexOf(phraseLetter) + 2; // provides a left shift of 3 char
     console.log(letterPos);
     var cipherLetter = cipherString[letterPos];
     console.log(cipherLetter);
     cipherWord += cipherLetter;
  }

}
console.log(phraseStringBlanks);
console.log(cipherWord);

var cipherLetterSpace = "";
var cipherWordFinal = "";

for (var i = 0; i < cipherWord.length; i++) {
  cipherLetterSpace = cipherWord[i];
  console.log(cipherLetterSpace);

if (cipherLetterSpace === "#") {
    cipherLetter = " ";
    cipherWordFinal += cipherLetter;
  } else {
     cipherWordFinal += cipherLetterSpace;
  }
}

console.log(phraseString);
console.log(cipherWordFinal);

/*
Step #1:
Step #2:
Step #3:
Step #4:
Step #5:
Step #6:
Step #7:
Step #8:
*/

/* REFERENCES
- Convert string to an array: https://www.dyn-web.com/javascript/strings/split.php
- Search an array to find position?
*/
