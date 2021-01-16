for (var i = 10; i >= 1; i--) {
  if (i <= 10 && i > 2) {
  console.log(i + " speckled frogs sat on a log eating some most delicious bugs.");
  console.log("One jumped in the pool where its nice and cool, and then there were " + (i - 1) + " speckled frogs.");
  }
  else if (i === 2) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool, and then there was " + (i - 1) + " speckled frog.");
  }
  else if (i === 1) {
    console.log(i + " speckled frog sat on a log eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }
}
