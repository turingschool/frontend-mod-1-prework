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
  lines 14-18 are the first conditions given to bearClothing if the doorChoice stays at 1
  bearClothing will remain at "hat" if bearClothing is anything other number the variable bearClothing
  will change to "scarf" becuase the first condition is not being met.

2. What variable has a new value assigned to it after the first if statement executes?

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  If doorChoice is equal to 3 bearClothing's value will be scarf because the first condition
  is not being met therfore it logs the else value.

4.In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  lines 27-35 are the second conditions given to the second variable bearChoice. Its stating the conditions that
  will run depending on bearChoice's value.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  It will log the else if (bearChoice ===3)condition
  "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  "You see a bear putting on a hat" and "You tell the bear the hat is too small and it starts to cry!"
7. What is your favorite ending?
  I like having the the first condition being met and the bear putting on its hat so doorChoice = 1
  and bearChoice = 4 because you stay with bear and become best friends and everyone can use a friend!
*/
