// //**DIRECTIONS**: comment out the sections you aren't running
// //**DIRECTIONS**: any section with prompts must be run in chrom dev tools or repl.it
//
// ///////// REQUIRED SECTION:
// for (i = 10; i > 0; i--) {
//   if (i >= 2) {
//     printVerse(i)
//   } else {
//     printLastVerse();
//   }
// }
//
//
// function printVerse(i) {
//   console.log(i + " speckled frogs sat on a log");
//   console.log("eating some most delicious bugs.");
//   console.log("One jumped in the pool where its nice and cool,");
//
//   if (i === 2) {
//     console.log("then there was 1 speckled frog.");
//   } else {
//     console.log("then there were " + (i -= 1) + " speckled frogs.");
//   }
//
//   console.log("");
//   }
//
// function printLastVerse() {
//   console.log("1 speckled frog sat on a log");
//   console.log("eating some most delicious bugs.");
//   console.log("One jumped in the pool where its nice and cool,");
//   console.log("then there were no more speckled frogs!");
// }
// ///////// END REQUIRED SECTION
//
//
// ///////// EXTENSION 1:
// var frogs;
//
// function getNumber() {
//   frogs = prompt("How many frogs?");
// }
//
// getNumber();
//
//
// for (i = frogs; i > 0; i--) {
//   if (i >= 2) {
//     printVerse(i)
//   } else {
//     printLastVerse();
//   }
// }
//
//
// function printVerse(i) {
//   console.log(i + " speckled frogs sat on a log");
//   console.log("eating some most delicious bugs.");
//   console.log("One jumped in the pool where its nice and cool,");
//
//   if (i === 2) {
//     console.log("then there was 1 speckled frog.");
//   } else {
//     console.log("then there were " + (i -= 1) + " speckled frogs.");
//   }
//
//   console.log("");
// }
//
// function printLastVerse() {
//   console.log("1 speckled frog sat on a log");
//   console.log("eating some most delicious bugs.");
//   console.log("One jumped in the pool where its nice and cool,");
//   console.log("then there were no more speckled frogs!");
// }

///////// END EXTENSION 1


///////// EXTENSION 2: NOT COMPLETE YET*******
var frogs;
var word;

var wordNumber = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


function getNumber() {
  frogs = prompt("How many frogs?");
}

getNumber();

///start new code
var frogs;
var word;
var subTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var twentyUp = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function getNumber() {
  frogs = prompt("How many frogs?");
}

getNumber();


if (parseInt(frogs) === 0) {
  word = "zero";
  console.log(word);
} else if (frogs < 20 && frogs > 0) {
  word = subTwenty[frogs];
  console.log(word);
} else if (frogs <= 99 && frogs >= 20) {
  var numberArray = frogs.split("");
  word = twentyUp[numberArray[0]] + " " + subTwenty[numberArray[1]];

  console.log(numberArray);
  console.log(word);
} else if (frogs > 99 && frogs < 1000) {
  var numberArray = frogs.split("");
  console.log(numberArray);
  console.log(word);
  word = subTwenty[numberArray[0]] + " hundred "+ twentyUp[numberArray[1]] + " " + subTwenty[numberArray[2]];
  console.log(numberArray);
  console.log(word);
} else {
  console.log("TOO MANY FROGS!");
}
///end new code



for (i = frogs; i > 0; i--) {
  if (i >= 2) {
    printVerse(i)
  } else {
    printLastVerse();
  }
}


function printVerse(i) {
  console.log(i + " speckled frogs sat on a log");
  console.log("eating some most delicious bugs.");
  console.log("One jumped in the pool where its nice and cool,");

  if (i === 2) {
    console.log("then there was 1 speckled frog.");
  } else {
    console.log("then there were " + (i -= 1) + " speckled frogs.");
  }

  console.log("");
}

function printLastVerse() {
  console.log("One speckled frog sat on a log");
  console.log("eating some most delicious bugs.");
  console.log("One jumped in the pool where its nice and cool,");
  console.log("then there were no more speckled frogs!");
}

///////// END EXTENSION 2
