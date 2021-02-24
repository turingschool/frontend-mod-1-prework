// Array version
/*
var frog = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
for (let i = frog.length; i >= 1; i--) {
  if (i > 2) {
    console.log([i] + " speckled frogs sat on a log eating some most delicious bugs.\n One jumped in the pool where it's nice and cool, then there were " + [i-1] + " speckled frogs.");
  } else if (i === 2) {
    console.log([i] + " speckled frogs sat on a log eating some most delicious bugs.\n One jumped in the pool where it's nice and cool,\n then there was 1 speckled frog.");
  } else {
    console.log("1 speckled frog sat on a log eating some most delicious bugs.\n One jumped in the pool where it's nice and cool,\n then there were no more speckled frogs.");
  }
}
*/
// Dynamic version
var frogs = 4;
for (let i = frogs; i >= 1; i--) {
  if (i > 2) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs.\n One jumped in the pool where it's nice and cool, then there were " + (numberOfFrogs-- -1) + " speckled frogs.");
  } else if (i === 2) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs.\n One jumped in the pool where it's nice and cool,\n then there was 1 speckled frog.");
  } else {
    console.log("1 speckled frog sat on a log eating some most delicious bugs.\n One jumped in the pool where it's nice and cool,\n then there were no more speckled frogs.");
  }
}
