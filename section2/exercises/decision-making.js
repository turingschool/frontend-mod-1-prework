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
  - the code is asking the computer to look at the variable doorChoice and it's value is equal to 1, then it assigns the value of "hat" to the variable bearClothing. If, however, the doorChoice is not equal to 1, it assigns bearClothing a value of "scarf"

2. What variable has a new value assigned to it after the first if statement executes?
  - bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  - "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  - The code is saying that if the value of variable bearChoice is equal to 1, then it logs a result where the bear shows you a passage out, and if is not equal to 1, it asks if the value of bearChoice is equal to 2. If it is equal to 2 it logs a result where you make the bear cry, but if it's not equal to 2, the code asks if the value of bearChoice is 3. If it is equal to 3, it logs a result where you run into a room full of snakes, but if it is not equal to 3, then it has come to the end of the decisions and logs the result that you and the bear become best friends.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  - The computer will log "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  - The computer will log "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
  - I'm partial to being best friends with the bear. Especially a bear with a flare for fashion.
*/
