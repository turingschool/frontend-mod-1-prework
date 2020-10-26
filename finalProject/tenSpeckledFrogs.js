/*
3 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were 2 speckled frogs.

2 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there was 1 speckled frog.

1 speckled frog sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there were no more speckled frogs!
*/

//The function frog() will print the rhyme above for 10 frogs

 function frog() {
  for (var i = 10; i >= 1; i--) {
    if (i >= 3) {
      console.log(i +  " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were "  + (i - 1) +  " speckled frogs.");
    } else if (i === 2) {
      console.log("2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog.");
    } else {
      console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
    }
  }
};

frog();

// Extension 1
// The function anyFrog() will print the rhyme above for any number of frogs
// by inputing your argument into the numberOfFrogs in the function

function anyFrog(numberOfFrogs) {
  for (var i = numberOfFrogs; i >= 1; i--) {
    if (i >= 3) {
      console.log(i +  " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were "  + (i - 1) +  " speckled frogs.");
    } else if (i === 2) {
      console.log("2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog.");
    } else {
      console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
    }
  }
};

anyFrog(14);

//Extension 2
//This code works for up to 20 frogs
/*
var tens = ["zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"];

function wordFrog(numberOfFrogs) {
  for (var i = numberOfFrogs; i >= 1; i--) {
    if (i >= 11) {
      console.log(tens[i] +  " speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were "  + tens[i - 1].toLowerCase() +  " speckled frogs.");
    }
      else if (i <= 10) {
      console.log(tens[i] +  " speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool, then there were "  + tens[i - 1].toLowerCase() +  " speckled frogs.");
    } else if (i === 2) {
      console.log("Two speckled frogs sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there was one speckled frog.");
    } else {
      console.log("One speckled frog sat on a log eating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\nthen there were no more speckled frogs!");
    }
  }
};

wordFrog(13);
*/
