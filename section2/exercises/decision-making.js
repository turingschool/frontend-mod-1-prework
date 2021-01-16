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

First, an 'if statement' evaluates whether or not the value of the variable 'doorChoice' is strictly equal to the value '1'.
If this comparison returns a value of 'true' (which it does), the string variable 'bearClothing' is then assigned a value of "hat".
If the first expression were to return a 'false' value, the script would proceed to the 'else statement' and by default
assign the 'bearClothing' variable a value of "scarf".


2. What variable has a new value assigned to it after the first if statement executes?

bearClothing


3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"


4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

First, using an 'if statement', the code asks whether or not the value of the variable 'bearChoice' is strictly equal to the value '1'.
If it returns a value of 'true' (which it does), it logs the string "You offer the bear your", then concatenates onto
this string the value of the variable 'bearClothing', then logs " and the bear shows you a secret passage out!".

If 'bearChoice' weren't strictly equal to '1', it would proceed to the first *else if statement* and evaluate whether or not
'bearChoice' was strictly equal to '2'.  If 'true', it would print "You tell the bear the " + bearClothing + " is too small and it starts to cry!".

If 'bearChoice' weren't strictly equal to '2', it would then proceed to the second *else if statement* and evaluate whether or not
'bearChoice' was strictly equal to '3'.  If 'true', it would print "You run as fast as you can into the next room. It's full of snakes!".

Finally, if none of these *if/else statements* returned 'true', the script would proceed to the *else statement*, which regardless
of the value of "bearChoice" would by default return a value of 'true' and log the string "You stay with the bear and become it's best friend!".


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

It would log the string "You run as fast as you can into the next room. It's full of snakes!".


6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The console would log: "You tell the bear the hat is too small and it starts to cry!".


7. What is your favorite ending?

Befriending the bear using the *else statement*, of course!!

*/
