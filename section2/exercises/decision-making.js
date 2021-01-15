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
An if/else statement. This statement instructs that if the value of the variable doorChoice is equal to 1,
then the value of bearClothing is "hat". If the value of doorChoice is not equal to 1 (i.e., anything else), the value of
bearClothing is "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
An else/if statement. This statement instructs that if the variable bearChoice has a value of 1, then a string is logged
"... the bear shows you a passage out". If bearChoice does not equal 1, it moves on to the next statement: if bearChoice is
equal to 2, then the string "... the bear starts to cry" is logged. If bearChoice does not equal 2, it moves on to the next statement: if
bearChoice is equal to 3 "you run... into the next room. It's full of snakes!". If bearChoice is not equal to 3,
the output is the string "You stay with the bear and become its best friend!" Functionally, this string is logged
to the console if var bearChoice is equal to anything other than 1, 2, or 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!
"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You stay with the bear and become its best friend!" It is one of life's great disappointments that we can't
hug bears and be their friends. They are unbearably cute. 
*/
