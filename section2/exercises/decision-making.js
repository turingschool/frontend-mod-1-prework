/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

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
Lines 14 through 18 is an if else statement. terminal evaluates the first set of criteria (doorChoice === 1).
If doorChoice === 1 then terminal will run the block of code inside of the braces which will reassign bearClothing = "hat"
If doorChoice !== 1 then the terminal will skip to the else statement and set bearClothing = "scarf".
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf"
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
The first thing that happens at line 27 terminal is evaluating the parameters inside of the first if statement.
if bearChoice === 1 evaluates to true, the block of code inside the braces after the if statement will be executed.
if bearChoice !== 1 it will skip the braces and evaluate parameters of the first else if statement.
again if these parameters are true the code inside the braces will be executed and if false it will move to the next else if
this will continue until either; one of the parameters are true and the code inside the braces is run, or until
all parameters have returned false in which case the code in the else statements braces will run.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
"You stay with the bear and become it's best friend!"
*/
