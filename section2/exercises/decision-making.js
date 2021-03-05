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
Lines 14-18 include an if...else statement. If the statement evaluates to true (if door choice is strictly equal to the number 1)
then the variable bearClothing will be updated to equal the string, "hat". Otherwise if the condition evaluates to false (if the doorChoice is not strictly equal to the number one)
then the variable bearClothing will be updated to equal the string, "scarf". (This will later affect what is logged to the console.)

2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing will have a new value assigned to it. Depending on what value is assigned to the doorChoice variable,
the value assigned to bearClothing will either be the string "hat" or the string "scarf".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing variable would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between these lines of code are "else if" statements. If condition 1 (bearChoice === 1) evaluates to true,
then the first block of code inside the curly braces will execute (which means the first string will be printed to the console).
On the other hand, if the condition evaluates to false, then the second condition will be evaluated. If the second condition (bearChoice === 2)
evaluates to true, then the block of code inside that else if statment will be executed. Otherwise (if the condition evaluates to false)
the third condition will be evaluated. If the third condition evaluates to true, that code block will be executed.
If not, the last block of code will be executed.

To explain in other shorter words... the script will run in order and each condition will be checked. The block of code after each condition will *only* be executed if the condition is true
*AND* if the condition above it evaluated to false since the script runs from top to bottom. When a condition is met, the code block will run, and the the program will then exit the script at that point.
If none of the first three conditions are met, then the code in the curly braces after the else statement will run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You would make a dash to the next room (after you saw a bear wearing a small hat), and run as fast as you can into the next room, which is full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
It looks like you wouldn't be chaning the variable doorChoice since it is already 1, so you would still see a bear putting on a small hat.
But afterwards if the bearChoice equals 2, you would point it out to the bear that the hat was too small, which would make the bear start to cry.

7. What is your favorite ending?
/*
(var doorChoice = 1;
var bearClothing = "";
var bearChoice = "yay!".) I go through door 1. The bear is wearing a hat. I then stay with the bear and become its best friend.
*/
