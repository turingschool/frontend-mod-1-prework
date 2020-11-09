//tenSpeckledFrogs.js


//  ## Required  and ## Extension 1

function frogRhyme(frogNumber) {
  for (var i = frogNumber; frogNumber >=1; frogNumber--) {
    if (frogNumber >= 3) {
        console.log(frogNumber + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool then there were " + (frogNumber - 1) + " speckled frogs.");
    } else if (frogNumber === 2) {
        console.log(frogNumber + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool then there was " + (frogNumber - 1) + " speckled frogs.");
    } else {
        console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
    }
  }
}
frogRhyme(25);


// ## Extension 3 (note code below in progress as of now code only write test up to 10. If extra time I will try to creat a frogtext function that will do all numbers.)

function frogRhyme2(frogNumber2) {
  var frogNumber2 = 10;
  var frogTxt = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
  for (var i = frogNumber2; frogNumber2 >=1; frogNumber2--) {
    if (frogNumber2 >= 3) {
      console.log(frogTxt[frogNumber2] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool then there were " + frogTxt[frogNumber2 - 1] +" speckled frogs.");
    } else if (frogNumber === 2) {
        console.log(frogNumber + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool then there was " + (frogNumber - 1) + " speckled frogs.");
    } else {
      console.log(frogTxt[frogNumber2] + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
    }
  }
}
frogRhyme2();
