/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "shirt";
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
  console.log("You run as fast as you can into the next room. It's full of a complete and healthy breakfast. Yum!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
  We are using if to show that if the condition is met, or true, the line of code under if will be run. Else is used to show
  that if the condition is not met, or false, the line under else will be run.

  In this case, we are using the comparison operator === to indicate the condition will result in true if the variable bearChoice
  is exactly equals to 1.

  Any value other than 1 will result in a false. If the condition is met, or true, variable bearClothing changes to "hat". If the
  condition is not met, or else, the variable bearClothing changes to "shirt".

2. What variable has a new value assigned to it after the first if statement executes?
  bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  "shirt"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  Now we are using else if statements. In conjunction to the if statement, with the condition of "variable bearChoice is exactly
  equals 1 resulting in a true statement, we have these else if statements.

  If bearChoice exactly equals 1, the script "You offer the bear your " + bearClothing value + " and the bear shows you a
  secret passage out!" will be logged.

  else if bear choice exactly equals 2, the script "You tell the bear the " + bearClothing value + " is too small and it starts to cry!"
  will be logged.

  else if bear choice exactly equals 3, the script "You run as fast as you can into the next room. It's full of a healthy and complete
  breakfast. Yum!" will be logged.

  else, the script "You stay with the bear and become it's best friend!" will be logged.

  Else if statements are assuming the if statement or previous else if statement is not met, if they are met, the line of code under them is
  run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  The script "You run as fast as you can into the next room. It's full of a healthy and complete
  breakfast. Yum!" is logged to the console.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  The script "You tell the bear the hat is too small and it starts to cry!" will be logged to the console.

7. What is your favorite ending?
  The breakfast ending for bearChoice = 3. So vague. Eggs Benedict? Waffle House? IHOP? Either way I'm hungry now.
*/
