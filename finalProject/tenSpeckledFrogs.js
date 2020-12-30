var frogs = {
  onLog: 10,
  changeTotal (frogTotal) {
    this.onLog = frogTotal
  }
};

frogs.changeTotal(15);

for (i = frogs.onLog; i >= 1; i--) {
  if (i > 2) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.");
  }
  else if (i > 1) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was " + (i - 1) + " speckled frog.");
  }
  else {
    console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }
};
