/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

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
We are using a if/else statement to check the conditional. Its stating if the door choice is equal to 1, the bear clothing is a hat. Else if its any other number, the bear clothing is a scarf.
2. What variable has a new value assigned to it after the first if statement executes?
The bear clothing has a new value after the first if statement is executed.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing value would be a scarf because it no longer fits the first if statement so it moves on to the next one.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Line 27 if statement is evaluating if the bearChoice is strictly equal to 1. If it is it prompts with the statement in line 28.
If however the bearChoice is equal to 2 it moves to line 29, and produces line 29 statement. If the bearChoice is not 1 or 2 but 3 it proceeds to give line 32's statement.
Last but not least if the bearChoice is none of the 1-3 answers, it produces the statement in line 34.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You see a bear putting on a hat. It looks like that hat is too small for the bear, do you...
You tell the bear the hat is too small and it starts to cry!
7. What is your favorite ending?
My favorite ending is when you stay with the bear and become it's best friend!
*/
