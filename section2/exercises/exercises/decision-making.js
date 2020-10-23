/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 5;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// Lines 14 - comprise an if...else statement. This means that the statement will evaluate
// the conditions presented in the code, and `if` the first line is true, will return
// the value of "hat", or `else` will return the value of "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing is assigned a new value depending on which door is chosen in the variable doorChoice

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// If given the value of 3 for doorChoice, the `else` statement would return the value of "scarf"
// because the `if` statement would evaluate to `false`.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// Lines 27 through 35 will evaluate each statement as `true` or `false` based on the variable
// values provided. The first statement which evaluates as `true` will be returned in the log.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The log should return with the value of "You run as fast as you can into the next room. It's full of snakes!"
// And it does!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The variable doorChoice will evaluate the statement in lines 14-15 as `true`, and return the value of "hat" for bearClothing.
// The variable bearChoice will evaluate the statements in lines 27-28 as `false`, and return the log for
// lines 29-30, "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
// I'd like to be the best friends with a bear in a scarf!

*/
