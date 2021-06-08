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
// In line 14 and 15 it is stating; if you choose doorChoice 1 then the value of bearClothing is outputted.
// In this case that value is equal to "hat".
// Lines 16 through 18 states; if the doorChoice is not strictly equal to 1 then it outputs a new value for
// bearClothing which is "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
// bearClothing receives a new value from "hat" to "scarf".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
// The value of bearClothing would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// In lines 27 and 28 it states; if the value of bearChoice is strictly equal to 1 then it logs;
// "You offer the bear your " + the value of bearClothing that it was assigned + " and the bear shows you a secret passage out!"
// In lines 29 and 30 it states; if the value of bearChoice is strictly equal to 2 then it logs;
// "You tell the bear the " + the value of bearClothing that it was assigned + " is too small and it starts to cry!"
// In lines 31 and 32 it states; if the value of bearChoice is strictly equal to 3 then it logs;
// "You run as fast as you can into the next room. It's full of snakes!"
// In lines 31 to 35 it states; if the value is not equal to the values of the previous conditional statements(1-3), then it logs;
// "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// The final outcome will read; "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// The final outcome will read; "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
*/
// My favorite ending is the one where the value of bearChoice is not equal to any of the conditions.
// I want a bear best friend!
