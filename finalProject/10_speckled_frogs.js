/*
10 Speckled Frogs

Create a file named `tenSpeckledFrogs.js` and within that file, write several a program that will print the following nursery rhyme:

> 3 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were 2 speckled frogs.
>
> 2 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there was 1 speckled frog.
>
> 1 speckled frog sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were no more speckled frogs!

## Required

Make your program print the rhyme above for *10* frogs, with attention to where language changes. Notice the very small differences between what should be printed out when 3, 2 or 1 frog is sitting on a log.

## Extension 1

Make your program work for _any_ number of frogs.

## Extension 2

Print word versions of each number in the first and fourth lines, for example, the first verse in the above example would print 'Three speckled frogs...' and 'were two speckled frogs'. There are solutions that don't involve using a library or a huge piece of someone else's code.

*/


/*
First Frog Attempt:

for (var i = 0; i <= 10; i++) {
     if (i === 10) {
       console.log("10 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were 9 speckled frogs.");
     } else if (i === 9) {
       console.log("9 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were 8 speckled frogs.");
     } else if (i === 3) {
       console.log("3 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 2 speckled frog.");
        } else if (i === 2) {
       console.log("2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 3 speckled frog.");
     } else if (i === 9) {
       console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
     } else {
       console.log(i)
     }
}
*/

//After reviewing function video notes I switched around the incriminator for a decriminator and switched the values for the initializer and the condition with each other. The rest was experimenting with concatenating in repl.it
/* 2nd speckled frog attempt:

for (var i = 10; i > 0; i--)
     if (i > 8) {
       console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + (i - 1) + " " + "speckled frogs.");
     } else if (i === 5) {
       console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " +(i - 1) + " " + "speckled frogs.")
     } else if (i === 3) {
       console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " +(i - 1) + " " + "speckled frogs.")
     } else if (i === 2) {
       console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " +(i - 1) + " " + "speckled frogs.")
     } else {
       console.log(1 + " "+ "speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!");
     }*/

//3rd Speckled frog review. revision to simplify use of else if statements.  this code as above only shows through the number 13, or any number written into the for loop parameters.
/*
for (var i = 10; i > 0; i--)
 if (i > 2) {
   console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " + (i - 1) + " " + "speckled frogs.");
 } else if (i == 2) {
   console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " +(i - 1) + " " + "speckled frogs.")
 } else {
   console.log(1 + " "+ "speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!");
 }*/


//4th speckled frog clean-up. extension 2. this works for any number.

function speckledFrogs(n){
  for (var i = n; i > 0; i--)
   if (i > 2) {
     console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " + (i - 1) + " " + "speckled frogs.");
    } else if (i === 2) {
      console.log(i + " " + "speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were" + " " +(i - 1) + " " + "speckled frogs.")
    } else {
      console.log(1 + " "+ "speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where it's nice and cool, then there were no more speckled frogs!");
 }
}
speckledFrogs(10);
