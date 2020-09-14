var frogsPlurality = ""
var wasWere = ""

for (var i = 0; i < 10; i++) {
  if (i < 9) {
    frogsPlurality = "frogs";
  } else if (i === 9) {
    frogsPlurality = "frog"
  }
  console.log((10 - i) + " speckled " + frogsPlurality + " sat on a log");
  console.log("eating some most delicious bugs.")
  console.log("One jumped in the pool where it's nice and cool,")
  if (i != 8) {
    frogsPlurality = "frogs";
    wasWere = "were";
  } else if (i === 8) {
    frogsPlurality = "frog"
    wasWere = "was";
  }
  console.log("then there " + wasWere + " " +  (9 - i) + " speckled " + frogsPlurality + ".")
  console.log("   ")
}


//EXTENSION 1

var startingFrogs = 57
//var startingFrogs = 500
//var startingFrogs = 23
//etc.

for (var i = 0; i < startingFrogs; i++) {
  if (i < startingFrogs - 1) {
    frogsPlurality = "frogs";
  } else if (i === startingFrogs - 1) {
    frogsPlurality = "frog"
  }
  console.log((startingFrogs - i) + " speckled " + frogsPlurality + " sat on a log");
  console.log("eating some most delicious bugs.")
  console.log("One jumped in the pool where it's nice and cool,")
  if (i != startingFrogs - 2) {
    frogsPlurality = "frogs";
    wasWere = "were";
  } else if (i === startingFrogs - 2) {
    frogsPlurality = "frog"
    wasWere = "was";
  }
  console.log("then there " + wasWere + " " + (startingFrogs - i - 1) + " speckled " + frogsPlurality + ".")
  console.log("   ")
}




//EXTENSION 2

var startingFrogs = 67
//var startingFrogs = 5
//var startingFrogs = 23
//etc.

var ones = ""
var tens = ""
//and so on if you wanted to go to up to any number.
//I'm stopping at 99 -- who's going to read that many verses of this rhyme anyway?
/* If I did go up to hundreds, thousands, millions, etc I would still use the
onesWords and tensWords arrays (below) because numbers of hundreds or thousands are
described using the same words (e.g. "eight hundred"), so I could just concatenate
items from onesWords or tensWords with the strings "hundred", "thousand", etc. */

//the function below is entirely my own work
//there is probably a much more efficient way to do this, but I wanted to try problem solving without too much help from Google
//I did have to look up syntax for the toString() and parseInt() methods
var frogsAsWords = ""
var onesWords = ["", "one","two","three", "four", "five", "six", "seven", "eight", "nine"];
var tensWords = ["", "teen","twenty","thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function convertToWord(s) {
  var numberAsString = s.toString();
  var digits = numberAsString.split("");
  if  (s > 0 && s < 10) {
    var onesDigit = parseInt(digits[0]);
    frogsAsWords = onesWords[onesDigit];
  } else if (s === 0) {
    frogsAsWords = "no";
  } else if (startingFrogs >= 10 && startingFrogs < 100) {
      var tensDigit = parseInt(digits[0]);
      var onesDigit = parseInt(digits[1]);
      if (tensDigit > 1) {
        frogsAsWords = tensWords[tensDigit] + " " + onesWords[onesDigit];
      } else if (tensDigit === 1 && onesDigit != 0 && onesDigit != 1 && onesDigit != 2 && onesDigit != 3 && onesDigit != 5) {
        frogsAsWords = onesWords[onesDigit] + tensWords[tensDigit];
      } else if (tensDigit === 1 && onesDigit === 0) {
        frogsAsWords = "ten";
      } else if (tensDigit === 1 && onesDigit === 1) {
        frogsAsWords = "eleven";
      } else if (tensDigit === 1 && onesDigit === 2) {
        frogsAsWords = "twelve";
      } else if (tensDigit === 1 && onesDigit === 3) {
        frogsAsWords = "thir" + tensWords[tensDigit];
      } else if (tensDigit === 1 && onesDigit === 5) {
        frogsAsWords = "fif" + tensWords[tensDigit];
      }
    }
  }

//I found this capitalizing function on stack overflow
var capitalNumber = ""

function capitalizeFirstLetter(string) {
  capitalNumber = string.charAt(0).toUpperCase() + string.slice(1);
}

//And finally I put it all together in the nursery rhyme
for (var i = 0; i < startingFrogs; i++) {
  convertToWord(startingFrogs - i);
  if (i < startingFrogs - 1) {
    frogsPlurality = "frogs";
  } else if (i === startingFrogs - 1) {
    frogsPlurality = "frog"
  }
  capitalizeFirstLetter(frogsAsWords);
  console.log(capitalNumber + " speckled " + frogsPlurality + " sat on a log");
  console.log("eating some most delicious bugs.")
  console.log("One jumped in the pool where it's nice and cool,")
  convertToWord(startingFrogs - i - 1);
  if (i != startingFrogs - 2) {
    frogsPlurality = "frogs";
    wasWere = "were";
  } else if (i === startingFrogs - 2) {
    frogsPlurality = "frog"
    wasWere = "was";
  }
  console.log("then there " + wasWere + " " + (frogsAsWords) + " speckled " + frogsPlurality + ".")
  console.log("   ")
}
