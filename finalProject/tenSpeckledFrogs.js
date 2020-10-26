/* tenSpeckledFrogs.js will output a rhyme with the following format:

3 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were 2 speckled frogs.

2 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there was 1 speckled frog.

1 speckled frog sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there were no more speckled frogs!

*/

var frogNum = 10; //initialize variable used in for loop. Changing this variables allow the program to run for any number of frogs.

for (i = frogNum; i > 0; i--){
  if (i > 2) {
    console.log(i + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it was nice and cool, then there were ' + (i-1) + ' speckled frogs.');
  }
  else if (i === 2) {
    console.log(i + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it was nice and cool,\nthen there were ' + (i-1) + ' speckled frogs.');
  }
  else {
    console.log(i + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it was nice and cool,\nthen there were no more speckled frogs.');
  }
}
