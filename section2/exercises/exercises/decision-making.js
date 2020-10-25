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

- Lines 14-18 is an if/else statement that is checking for the input value of 1. If the user enters 1,
it will be a true statement, as 1 is strictly equal to 1, and the user will find a "hat", because bearClothing variable will be "hat".
If any other value is entered, 2 or anything else, then "scarf" will be the returned answer, as anything
but 1 does not equal 1, meaning it is a false statement.

2. What variable has a new value assigned to it after the first if statement executes?

- The variable that is assigned a new value is bearClothing, as the original signed varible is simply "".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

-If doorChoice is changed to 3, then the if/else statement will be false, and the bearClothing value will be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

- The terminal takes the number that was input and checks it against each line of code in this if/else if/else
block. If the condition of the if statement is met, where the input number is strictly equal to 1,
making it a true statement, and returns false with the following 3 statements, then it takes
the determined variable value of bearClothing from the previous block of code and inputs it into the first statement--
"You offer the bear your blank and the bear shows you a secret passage out!" and spits it out into the console. If the
first if statement turns out to be false, then the terminal goes through and attemptes to determine the true statement,
through both else if statements, and then the else statement, returning the correct answer. If the input number is
not 1,2, or 3, (false), then it returns the else statement in the console, as that is the true statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

- If the variable bearChoice is changed to equal 3, the final outcome will be that you run into a room full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

- The final outcome will be you tell the bear the hat is too small, and it starts to cry.

7. What is your favorite ending?

- My favorite ending is the last one, where you stay in the cave forever and become best friends.
*/
