
//Variable that makes the program run any number of times
anyNumberOfFrogs = 20;

/* This is a for loop that declares the variable i is equal to the integer within
the variable anyNumberOfFrogs. The loop starts at that number and progresses
through the loop. When it returns to the top of the loop it decreases the integer
of anyNumberOfFrogs by 1 and continues repeatedly through the loop until anyNumberOfFrogs
is equal to zero. When anyNumberOfFrogs is equal to zero it will stop the loop.
*/
for (var i = anyNumberOfFrogs; i > 0; i--) {

/*If anyNumberOfFrogs is greater than two, then log the message to the console.
If not, go out to the next line.
*/
  if (i > 2) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.");
}
/* If anyNumberOfFrogs is greater than 1, then log the message to console.
*/
  else if (i > 1) {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was " + (i - 1) + " speckled frog.");
  }

/* If anyNumberOfFrogs is less than 1m then log the message to the console.
*/
  else {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs.");
  }

}
