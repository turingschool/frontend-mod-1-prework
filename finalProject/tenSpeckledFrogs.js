//Required
for (i = 10; i > 0; i--){
  if (i > 1) {
    console.log(i + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there were ' + (i - 1) + ' speckled frogs.');
  } else if (i === 2) {
    console.log(i + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there was ' + (i - 1) + ' speckled frog.');
  } else {
    console.log(i + ' speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there were no more speckled frogs.');
  }
};
//Extension 1
var speckledFrog = function(number) {
  if (number > 1) {
    return console.log(number + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there were ' + (number - 1) + ' speckled frogs.');
  } else if (number === 2) {
    return console.log(number + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there was ' + (number - 1) + ' speckled frog.');
  } else {
    return console.log(number + ' speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there were no more speckled frogs.');
  }
};
//Extension 2
var speckledFrog = function(number) {
  var frogsToStart;
  var frogsRemaining;
  if (number === 1) {
    frogsToStart = 'frog';
    frogsRemaining = 'were no speckled frogs'
  } else if (number === 2) {
    frogsToStart = 'frogs';
    frogsRemaining = `was ${(number - 1)} speckled frog`;
  } else {
    frogsToStart = 'frogs';
    frogsRemaining = `were ${(number - 1)} speckled frogs remaining`;
  }
  return console.log(`${number} speckled ${frogsToStart} sat on a log eating some most delicious bugs. One jumped in the pool where it\'s nice and cool, then there ${frogsRemaining}.`);
}


console.log(speckledFrog(3));
console.log(speckledFrog(2));
console.log(speckledFrog(1));
