/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
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
  * If the variable doorChoice has a value of 1 (you go through the first door) then you will see a bear putting on a hat.
  * If the variable doorChoice has any other value (you go through any other door) then you will see a bear putting on a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
  * bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  * "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 34.
  * The variable bearChoice is checked. If it has a value of 1, you get a secret passage out.
  * If it has a value of 2, you are a heartless jerkface for making a bear cry.
  * If it has a value of 3, congratulations now you have snakes.
  * If it has any other value, you have a new best friend.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  * Why is it always snakes?

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  * You tell the bear its hat is too small and you make it cry. This is ridiculous, have you ever SEEN a small hat on a bear? Adorable.

7. What is your favorite ending?
  * I want to be best friends with the bear but also maybe not be stuck there forever?
*/
