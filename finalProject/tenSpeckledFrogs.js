for (var i = 10; i > 0; i--) {
  if (i >= 3) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs.")
    console.log("One jumped in where it's nice and cool, then there were " + (i - 1) + " speckeled frogs.")
  } else if (i === 2) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs.")
    console.log("One jumped in where it's nice and cool, then there was " + (i - 1) + " speckeled frogs.")
  } else {
    console.log(i + " speckled frog sat on a log eating some most delicious bugs.")
    console.log("One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
  }
}
