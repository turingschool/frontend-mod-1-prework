/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 13;
var bearClothing = "";
var bearChoice = 10;

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


// Questions

// 1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

/* Lines 14 through 18 are an if / else statement, or conditional statement, that basically says "if the player
chooses the first door, set the value of bearClothing to hat. Otherwise, set the value of bearClothing to scarf."
The pair tells the computer what to do based on the value of doorChoice. */

// 2. What variable has a new value assigned to it after the first if statement executes?

/* bearClothing, which now has a new value of "hat". */

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

/* It would be "scarf", as the program only has cases for "1" and "anything other than 1", and 2 is not 1. */

// 4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

/* This is another set of if / else statements, this time more complex due to the multiple conditions. Basically,
it looks at the value of bearChoice and determines what to do based on that-- if bearChoice is 1, it will give
the player a different message than if it's 2, 3, or "anything but 1, 2, or 3". */

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

/* The final outcome will be that you make a dash for the next room, which is full of snakes. */

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

/* You will see a bear with a poorly-fitting hat, point out that the hat is too small, and make the bear cry. */

// 7. What is your favorite ending?

/* I kind of like the ending where the player stays with the bear and they become friends, since the bear seems kind of lonely
and sensitive and we could work on its self-confidence together. */
