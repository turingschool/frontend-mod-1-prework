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

1. In English, using technical vocabulary, describe what is happening between lines 17 and 21.
If the doorChoice is equal to 1, the bear is wearing a hat (bearClothing variable is assigned "hat").
Lines 20 and 21 print the statements "you see a bear putting on a hat" and "it looks like that hat is
too small for the bear, do you..." respectively while the doorChoice is equal to 1.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value after the first if statement

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing would be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
Line 31 uses a comparison operator to test if doorChoice is equal to 3, the phrase "you run as fast as you
can into the next room. It's full of snakes!" will print out if doorChoice is 3. Line 33 tests if doorChoice
is equal to a value that isn't 1, 2, or 3. If it is not 1, 2, or 3, the phrase "You stay with the bear and
become it's best friend!" prints out.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
if bearChoice is changed to 3, the final outcome would be the phrase "You run as fast as you can into the
next room. It's full of snakes!" printing out.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be
the final outcome be?
if doorChoice is 1 and bearChoice is 2, the final phrase to print out would be "You tell the bear the hat
 is too small and it starts to cry!"

7. What is your favorite ending?
I like the outcome "You offer the bear your scarf and the bear shows you a secret passage out!"
*/
