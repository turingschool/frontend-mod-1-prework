// 10 Speckled Frogs:

for (var i = 10; i > 0; i--) {
  for (var j = 9; j > 1; j--) {
  }
  if (i === 2) {
    console.log("2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there was 1 speckled frog.")
  } else if (j = i-1) {
  console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were " +  j + " speckled frogs.")
  } else {
    console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
  }
  }

// Extension #1:
// Make your program work for any number of frogs.

function countFrogs(firstFrog, nextFrog) {
for (var i = firstFrog; i > nextFrog; i--) {
  for (var j = firstFrog-1 ; j > nextFrog; j--) {
  }
  if (i === 2) {
    console.log("2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there was 1 speckled frog.")
  } else if (j = i-1) {
  console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were " +  j + " speckled frogs.")
  } else {
    console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
  }
  }
}

countFrogs(14, 8);

// Extension #2:
// Print word versions of each number in the first and fourth lines, for
// example, the first verse in the above example would print 'Three speckled
// frogs...' and 'were two speckled frogs'. There are solutions that don't
// involve using a library or a huge piece of someone else's code.
//typeOf???
