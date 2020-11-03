var totalFrogs = 14;

var numberWordsLowercase = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen", "twenty"];
var numberWordsCapitalized = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eightteen", "Nineteen", "Twenty"];

/*
Broke any-number-of-frogs functionality to gain numbers-given-in-words functionality.
Could regain any-number function with an if statement. Maybe spell out numbers <= 10 and use numerals for anything higher than that.
*/


var line1Main = " speckled frogs sat on a log eating some most delicious bugs.";
var line1Final = "One speckled frog sat on a log eating some most delicious bugs.";
var line2 = "One jumped in the pool where it's nice and cool,";
var line3PluralStart = "then there were ";
var line3PluralFinish = " speckled frogs.\n\n";
var line3AlmostDone = "then there was one speckled frog.\n\n";
var line3Final = "then there were no more speckled frogs!";

for (i = totalFrogs; i >= 1; i--) {
  if (i === 1) {
    console.log(line1Final);
    console.log(line2);
    console.log(line3Final);
  } else if (i === 2) {
    console.log(makeWordCapitalized(i) + line1Main);
    console.log(line2);
    console.log(line3AlmostDone);
  } else {
    console.log(makeWordCapitalized(i) + line1Main);
    console.log(line2);
    console.log(line3PluralStart + makeWordLowercase(i-1) + line3PluralFinish);
  }
}


function makeWordLowercase(j) {
  return numberWordsLowercase[j];
}

function makeWordCapitalized(j) {
  return numberWordsCapitalized[j];
}
