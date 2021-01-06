/*
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
*/

function nurseryRhyme(numFrogs) {
  var frogs;
  var frogsLeft;
for (var i = numFrogs; i >= 1; i--) {
  // words = toString(i)
  if (i == 1) {
    frogs = "frog";
    frogsLeft = "then there were no more speckled frogs!"
  } else if (i == 2) {
    frogs = "frogs";
    frogsLeft = "then there was " + (i - 1) + " speckled frog."
  } else {
    frogs = "frogs";
    frogsLeft = "then there were " + (i - 1) + " speckled frogs.";
  } console.log(i+ " speckled " + frogs + " sat on a log\neating some most delicious bugs.\nOne jumped in the pool where its nice and cool,\n" + frogsLeft + "\n");
 }
}
console.log(nurseryRhyme(10));
