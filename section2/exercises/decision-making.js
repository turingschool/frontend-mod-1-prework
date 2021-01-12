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
  console.log("You stay with the bear and become it's best friend!"); // The grammar is wrong here, you should use "its" insted of "it's"
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
The if statement checks if the value of the variable doorChoice is exactly 1. If it is
the bearClothing variable is set to "hat" if the value is no exactly 1 the else statement is then executed
and the variable bearCloathing is set to "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
bearClothing would be "scarf", because the if statement evaluates to false

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
The if statement checks if the variable bearChoice is exactly equal to 1. If it is,
it runs the code for the if statement block. If bearChoice does not equal 1, the 1st elseif
statement checks if bearChoice equals 2, and if it does runs the 1st elseif code block.
If bearChoice does not equal 1 or 2 the 2nd elseif statement checks if bearChoice is
equal to 3, and if it is runs the code in the second elseif code block. If bearChoice does
not equal 1, 2, or 3 then the code in the else block is run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!
"
7. What is your favorite ending?
Definitely "You stay with the bear and become it's best friend!" Thats so cute and wholesome!
*/
