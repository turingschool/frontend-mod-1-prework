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

If doorChoice is 1 then bearClothing is hat. If doorChoice is any other value, bearClothing is scarf.
If the value is 1, the condition is true and bearClothing is hat, but if that is false, the second
block of code is run.

2. What variable has a new value assigned to it after the first if statement executes?

The bearClothing variable has a new value

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If you change the doorChoice to equal 3, then the bearClothing value would be scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

If bearChoice is 1, then it will log "You offer the bear your "bearClothing" and the bear shows you a secret passage out!"
If the bearChoice is equal to 2, then it will log, "You tell the bear the "bearClothing" is too small and it starts to cry"
If the bearChoice is equal to 3, then it will log, "You run as fast as you can into the next room. It's full of snakes!"
If the bearChoiceis any other value, then it will say "You stay with the bear and become it's best friend!"
Only one section of the if/else it/else structure can be run. If the first code is true, it will not look at any of the codes
below.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If you changed the variable bearChoice to equal 3, then "You run as fast as you can into the next room. It's full of snakes!"
will be logged.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

If you change variable doorChoice to 1, and bearChoice to equal 2 then the final outcome will be "You tell the bear the hat
is too small and it starts to cry"

7. What is your favorite ending?

My favorite ending is "You stay with the bear and become it's best friend!" You can get this ending by any value on doorChoice
and any value except 1, 2 or 3 for bearChoice.
*/
