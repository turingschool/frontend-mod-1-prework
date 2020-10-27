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

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
If door choice comes back as true then hat is returned. If it not exactly equal to 1, the boolean comes back as false, thus going to 'else' and logs scarf.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If bearChoice returns equal to 1 the code logs You offer the bear your " + bearClothing + " and the bear shows you a secret passage out! If it comes back equal to 2 it returns as "You tell the bear the " + bearClothing + " is too small and it starts to cry!". If returned equal to 3 you get You run as fast as you can into the next room. It's full of snakes!". If the value does not match and of this criteria it returns as "You stay with the bear and become it's best friend!".
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
console.log('You stay with the bear and become it's best friend!')
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
console.log("you tell the bear the hat is too small and it starts to cry!")
7. What is your favorite ending?
Obviously the last one.
*/
