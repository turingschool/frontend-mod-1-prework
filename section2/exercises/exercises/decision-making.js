/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

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
On line 14, it's asked whether the value of the doorChoice variable is 1. If doorChoice is 1, then line 15 executes and the variable bearClothing is set to "hat". If doorChoice is not 1, then line 15 is skipped and the else block on line 16 is active, and so line 17 executes and sets the value of bearClothing to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
On line 27, it's asked whether the variable bearChoice is strictly equal to 1. If it is, then line 28 executes and the secret passage message displays. If bearChoice is *not* strictly equal to 1 but it *is* strictly equal to 2, then line 30 executes and the bear cries. If bearChoice is not strictly equal to 1 *and* bearChoice is not strictly equal to 2, but bearChoice *is* strictly equal to 3, then line 32 executes and yikes snakes! If bearChoice is anything other than 1, 2, or 3, then the else block on line 33 executes and you become best buds with the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
Snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The bear cries when you tell it that its hat is too small.

7. What is your favorite ending?
Becoming best friends with the bear, obviously. :)
*/
