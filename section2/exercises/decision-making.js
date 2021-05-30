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
// This is an if else statement being used to check the condition in order to execute the correct output.
// If the first condition is true than the first code of "hat" is used. If it is not true the second code of "scarf" is used.

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The bearClothing value would be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// If the choice matches the bearChoice value of 1, it is true and the first code of:
// console.log("You offer the bear you " + bearClothing + " and the bearshows you a secret passage out!"); is executed.
// if it is false, then the next else if statement condition is evaluated, if that is true then that line of code is used.
// if not the next statement condition is checked to be true.
// if none of the statement conditions are true the final option is used which is "You stay with the bear and become its best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// Then the second else if statement will execute "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The final outcome will be the clothing item is still a hat and if the bearChoice was changed to 2 the bear would cry because the hat is too small. Which is very sad. :(

7. What is your favorite ending?
// I like the else statement ending of "You stay with the bear and become its best friend!" the most.
*/
