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

  Line 14: This is the beginning of an if/else statement. The condition the if statement is evaluatin is the following:  Is the value of doorchoice equal to 1?
  Line 15: This is the code block that will run if the previous statement evaluates to true. The code block will reassign the variablle bearClothing the string value "hat"
  Line 16: This is the else section of the if/else statement. If the condition next to the if statement evaluates as false, then JavaScript will look to the code block associated with the else keyword.
  Line 17: If the else statement runs, then this code block will run. This code reassigns the variable bearClothing the string value "scarf"
  Line 18: This is the end of the else keyword code block

2. What variable has a new value assigned to it after the first if statement executes?

  The bearClothing variable has a new value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

  If you make doorChoice equal to 3, then bearClothing would equal "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

  Line 27: This is the beginning of an if/elseif/else statement. If the condition "Is bearChoice strictly equal to 1?" evaluates to true, then the subsequent code block will run.
  Line 28: This code block will run if the previous condition evaluate to true. It logs to the console the following string data concatenated with the value of the variable bearClothing: "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"
  Line 29: This is the first else if statement that will run if the "if" statement evaluates to false. The condition in the parentheses asks the question "Does bearChoice strictly equal 2?"
  Line 30: If the else if statement evaluates to true, then this code block will run. It logs to the console the following string data concatenated with the value of the variable bearClothing: "You tell the bear the " + bearClothing + " is too small and it starts to cry!"
  Line 31: This is the second else if statement that will run if both the "if" statement and the first "else if" statement evaluate to false. The condition in the parentheses asks the question "Does bearChoice strictly equal 3?"
  Line 32: If the else if statement evaluates to true, then this code block will run. It logs to the console the following string data: "You run as fast as you can into the next room. It's full of snakes!"
  Line 33: If all of the previous if and else if statements evaluate to false, then the subsequent codeblock will run.
  Line 34: This code block logs to the console the following string data: "You run as fast as you can into the next room. It's full of snakes!"
  Line 35: This is the end of the else keyword code block

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

  The final outcome would be that the following text would be logged to the console: "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

  The following text would be logged to the console: "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

  My favorite ending is the one where you choose door 2 and don't choose 1, 2, or 3 for the bearChoice and you stay and become best friends with the bear who is wearing a scarf
*/
