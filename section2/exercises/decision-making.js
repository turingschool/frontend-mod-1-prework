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
Line 14 opens with an If statement creating the condition if the variable "doorChoice" is strictly equal to 1.
Line 15 executes the code if the conditional on line 14 is true.
Line 16 will happen be read if the conditional is false, then this line will trigger the exxecute in line 17
Line 17 is the line that gets executed if all other conditons failed.
line 18 is the closed curly bracket

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Lines 27/28 is the intitial if statement. The condition is if the initial choice in "var = bearChoice" is strictly equal to 1. If it is then the code on line 28 will execute.
  When the code is executed, the log will print onto the console with the strings being concatenated.
Lines 29 - 32 are the else if statements. If the first condition is false, then line 29 will check to see if the bearChoice is strictly equal to 2. If so, then line 30 will execute.
If that conditonal was also false, then line 31 will check to see if the choice was equivalent to 3. If so, then the code on line 32 will execute.
If the code is still being read at line 33 it means that all of the other conditionals failed and the final code will on line 34 will execute no matter what.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
The final ending was humbling. "You stay with the bear and become it's best friend!"

*/
