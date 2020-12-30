function jumpInPool() {
  console.log("One jumped in the pool where its nice and cool,");
}

function eatingBugs(numberOfFrogs) {
  console.log(numberOfFrogs + " speckled frogs sat on a log eating some most delicious bugs.");
}

function speckledFrog(numberOfFrogs) {
  return (numberOfFrogs - 1) + " speckled frog";
}

function tenSpeckledFrogs(startingNumber) {
  for (let i = startingNumber; i >= 1; i--) {
    if (i >= 3) {
      eatingBugs(i);
      console.log("One jumped in the pool where its nice and cool, then there were " + speckledFrog(i) + "s.");
      console.log("");
    }
    if (i === 2) {
      eatingBugs(i);
      jumpInPool();
      console.log("then there was " + speckledFrog(i) + ".");
      console.log("");
    }
    if (i === 1) {
      eatingBugs(i);
      jumpInPool();
      console.log("then there were no more speckled frogs!");
    }
  }
}

tenSpeckledFrogs(10);
tenSpeckledFrogs(15);
