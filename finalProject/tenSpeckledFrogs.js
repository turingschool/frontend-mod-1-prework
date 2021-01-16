// # 10 Speckled Frogs

// Create a file named `tenSpeckledFrogs.js` and within that file, write a
// program that will print the following nursery rhyme:

/*
3 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were 2 speckled frogs.
2 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there was 1 speckled frog.
1 speckled frog sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were no more speckled frogs!"
*/


// ## Required
//
// Make your program print the rhyme above for *10* frogs, with attention to where language changes.
// Notice the very small differences between what should be printed out when 3, 2 or 1 frog is sitting on a log.

for (var i = 10; i > 0; i--) {
  if (i > 1) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.  ");
  }
  else {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }
}


// ## Extension 1
//
// Make your program work for _any_ number of frogs.

// prompt user for input, then pass value of input to variable 'n'
var n = 5;

for (var i = n; i > 0; i--) {
  if (i > 1) {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.  ");
  }
  else {
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }
}


// ## Extension 2
//
// Print word versions of each number in the first and fourth lines, for example,
// the first verse in the above example would print 'Three speckled frogs...' and 'were two speckled frogs'.
// There are solutions that don't involve using a library or a huge piece of someone else's code.


var numberText = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

var n = 10;

for (var i = 10; i > 0; i--) {
  if (i > 1) {
      console.log(numberText[i] + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were " + (numberText[i - 1]) + " speckled frogs.  ");
  }
  else {
      console.log(numberText[i] + " speckled frogs sat on a log eating some most delicious bugs.  One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }
}
