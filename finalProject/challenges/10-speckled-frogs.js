
/*
Extension 1

Make your program work for any number of frogs.

*/

function frogNumber(frogNumber) {

for (var i = frogNumber; i > 0; i--) {
  if (i >= 3) {
  console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool then there were " + (i -1) + " speckled frogs");
} else if (i > 1) {
  console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool then there was " + (i -1) + " speckled frog.");
} else if (i > 0) {
  console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool then there were " + (i - 1) + " speckled frogs.");
}
}
};

frogNumber(40);


/*
Extension 2

Print word versions of each number in the first and fourth lines, for example, the first verse in the above example would
print 'Three speckled frogs...' and 'were two speckled frogs'. There are solutions that don't involve using a
library or a huge piece of someone else's code.

*/


var numberFrogs = ["zero", "one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten"];


for (i = 10; i > 0; i--) {
  if (i >= 3) {
  console.log(numberFrogs[i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool then there were " + numberFrogs[i - 1] + "speckled frogs");
} else if (i > 1) {
  console.log(numberFrogs[i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool then there was " + numberFrogs[i-1] + " speckled frog.");
} else if (i > 0) {
  console.log(numberFrogs[i] + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool then there were " + numberFrogs[i-1] + " speckled frogs.");
}
};
