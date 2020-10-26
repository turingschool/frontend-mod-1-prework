var  frogs = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]


for (var i = 10; i > 0; i--) {
  if (i >= 3) {
    console.log(frogs[i] + " speckled frogs sat on a log eating some most delicious bugs.")
    console.log("One jumped in where it's nice and cool, then there were " + (frogs[i - 1].toLowerCase()) + " speckeled frogs.")
  } else if (i === 2) {
    console.log(frogs[i] + " speckled frogs sat on a log eating some most delicious bugs.")
    console.log("One jumped in where it's nice and cool, then there was " + (frogs[i - 1],toLowerCase()) + " speckeled frogs.")
  } else {
    console.log(frogs[i] + " speckled frog sat on a log eating some most delicious bugs.")
    console.log("One jumped in the pool where it's nice and cool, then there were no more speckled frogs!")
  }
}
