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
 The code states that if the user goes through door #1, the bear's clothing will be a hat.
 If the user goes through door #2 or any other door, the bear will be wearing a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
 bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
 Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  Lines 27-35 are setting up a script.
  The script evaluates the bearChoice variables to decide which path the script will follow depending on the users' input.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The room the user enters is full of snakes and the user leaves.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
Point out that the hat is too small and the bear starts to cry.

7. What is your favorite ending?
  When the user and bear become best friends. 
*/
