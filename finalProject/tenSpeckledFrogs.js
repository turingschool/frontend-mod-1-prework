// //**DIRECTIONS**: only run one section at a time
// //**DIRECTIONS**: any section with prompts must be run in chrom dev tools or repl.it due to prompts

// ///////// REQUIRED SECTION:
for (i = 10; i > 0; i--) {
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
  console.log("1 speckled frog sat on a log");
  console.log("eating some most delicious bugs.");
  console.log("One jumped in the pool where its nice and cool,");
  console.log("then there were no more speckled frogs!");
}
// ///////// END REQUIRED SECTION


// ///////// EXTENSION 1:
var frogs;

function getNumber() {
  frogs = prompt("How many frogs?");
}

getNumber();


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
  console.log("1 speckled frog sat on a log");
  console.log("eating some most delicious bugs.");
  console.log("One jumped in the pool where its nice and cool,");
  console.log("then there were no more speckled frogs!");
}

///////// END EXTENSION 1


///////// EXTENSION 2:

///declarations and kick-off function
var frogs;
var nextFrogs;
var word;
var wordLessOne;
var frogsNumberArray;
var nextFrogsNumberArray;
var subTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var twentyUp = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

getNumber();

function getNumber() {
  frogs = prompt("How many frogs?");
  if (frogs > 999) {
    console.log("TOO MANY FROGS!");
  } else {
    printRhyme();
  }
}
/// end declarations and kick-off function


/// main function to print verses
function printRhyme() {
  for (i = frogs; i > 0; i--) {
    if (i >= 2) {

      numbersToWords();

      printVerse(i, word, wordLessOne);
    } else {
      printLastVerse();
    }
  }
}
/// end main function

///change numbers to words
function numbersToWords() {
  if (frogs < 20 && frogs > 0) {
    word = subTwenty[frogs];
    wordLessOne = subTwenty[(frogs - 1)];
    frogs -= 1;

  } else if (frogs <= 99 && frogs >= 20) {
    nextFrogs = frogs - 1;

    frogs = frogs.toString();
    nextFrogs = nextFrogs.toString();

    frogsNumberArray = frogs.split("");
    nextFrogsNumberArray = nextFrogs.split("");
    word = twentyUp[frogsNumberArray[0]] + " " + subTwenty[frogsNumberArray[1]];
    wordLessOne = twentyUp[nextFrogsNumberArray[0]] + " " + subTwenty[nextFrogsNumberArray[1]];
    frogs -= 1;

  } else {
    nextFrogs = frogs - 1;
    frogs = frogs.toString();
    nextFrogs = nextFrogs.toString();

    frogsNumberArray = frogs.split("");
    nextFrogsNumberArray = nextFrogs.split("");

    word = subTwenty[frogsNumberArray[0]] + " hundred " + twentyUp[frogsNumberArray[1]] + " " + subTwenty[frogsNumberArray[2]];
    wordLessOne = subTwenty[nextFrogsNumberArray[0]] + " hundred " + twentyUp[nextFrogsNumberArray[1]] + " " + subTwenty[nextFrogsNumberArray[2]];
    frogs -= 1;

  }
}

///end change numbers to words


/// main verse print function
function printVerse(i, word, wordLessOne) {
  console.log(word + " speckled frogs sat on a log");
  console.log("eating some most delicious bugs.");
  console.log("one jumped in the pool where its nice and cool,");

  if (i === 2) {
    console.log("then there was one speckled frog.");
  } else {
    console.log("then there were " + (wordLessOne) + " speckled frogs.");
  }
  console.log("");
}
////

/// last verse print function
function printLastVerse() {
  console.log("one speckled frog sat on a log");
  console.log("eating some most delicious bugs.");
  console.log("0ne jumped in the pool where its nice and cool,");
  console.log("then there were no more speckled frogs!");
}
///

///////// END EXTENSION 2
