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
   The if/else statement that begins on line 14 is checking to see if the condition of variable doorChoice being strictly equal to 1 is true.
   If the condition is true then the variable bearClothing, which was declared and assigned an empty string on line 9, will be assigned
   the string value of "hat" and the code block will terminate.
   If the condition of doorChoice being strictly equal to 1 is false, then the variable bearClothing will be assigned the string value
   of "scarf" as indicated by the else section of the code block.

2. What variable has a new value assigned to it after the first if statement executes?
   The bearClothing variable has a new value assigned to it after the first if statement executes.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
   The bearClothing variable would have a value of "scarf" assigned to it if doorChoice was set to equal 3.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
   The if/else if/else statement that begins on line 27 is checking to see if the condition of variable bearChoice being strictly equal to 1 is true.
   If the condition is true then the consoled string, which is a concatenation with the variable bearClothing, will be returned and the code block will
   stop being executed. If the condition if false, then the code will continue to execute and the next else/if condition will be checked.

   If the next condition, bearChoice being strictly equal to 2, is true then the message "You tell the bear the " + bearClothing + " is too small and it starts to cry!"
   will be returned and the code block will stop being executed. If the condition evaluates to false, then the following condition will be checked.

   If the next condition, bearChoice being strictly equal to 3, is true then the message "You run as fast as you can into the next room. It's full of snakes!"
   will be returned and the code block will stop being executed. If the condition evaluates to false, then the following code block will run resulting in the last
   statement that is encased in the else curly braces being returned (or consoled)--"You stay with the bear and become it's best friend!"


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
   If bearChoice was set equal to 3, then the final consoled message would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
   The following message would be logged to the console: "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
   My favorite ending is that you run as fast as you can into the the next room. It's full of snakes! Such a random result that doesn't seem to have
   much to do with the bear or the clothing--PLOT TWIST!<3<3
*/
