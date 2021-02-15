/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
'node section2/exercises/decision-making.js'
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice !== 1) {
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
} else if (bearChoice >= 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
In these lines of codes, we are making a decision, this decision would determinate which lines of code should be run next.
In order to do execute it, the code needs to evaluate conditions and add a conditional statements. As we can notices in
these lines of code, where if/else statements are used to make a decision base on our decision.

2. What variable has a new value assigned to it after the first if statement executes?
At the top of this file we can notice that the variables are stablish, although we can notice that "bearClothing" variable
is the only one that the "variable value" have not been stablish yet. However the code written code between the lines 14 to 18,
will assign the value to "bearClothing" based on our door selection or our "dooChoice" value or decision.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If we assign the value 3 to doorChoice, the program will compare this value with the "if" statement  assign (1). The question
would be: "Is true that 3 is equal to 1?". The answer would be "false" and the value "scarf" would be assign to bearClothing.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
After we assign a value to bearClothing and read the 3 different scenarios that we can choose, the lines of code between 27
and 35 will define one of the four possible ending. To achieve this work, these code lines are using if/else/else if statements,
due to we need to control conditional instructions, the first "if" statement is assign to one value, the next "if else" statement
incorporate a new value with different ending as well as the next "if else" statement and finally the last one, would be
applied if  is none of those conditions works with our situation.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!" (Probably a bad idea).

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
You offer the bear your scarf and the bear shows you a secret passage out!
*/
