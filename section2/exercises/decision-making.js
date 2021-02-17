/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = "";

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

In lines 14-18, there is an if...else statement that evaluates the doorChoice condition. It is
saying if doorChoice has a value of 1, the first code block in the curly braces will run, and
the variable bearClothing will be reassigned the value "hat". The subsequent else statment
stipulates that any other doorChoice value will trigger the ensuing codeblock, which stipulates
that the bearClothing variable will be reassigned to be "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

In lines 27 - 35, there is a more complex if...else statment that includes 2 else if statements.
The if statement states that if the bearChoice variable has a value of 1, "You offer the bear your "
+ bearClothing + " and the bear shows you a secret passag out!" will print to the console.

If bearChoice does not equal 1, the computer will evaluate the first else if statement next. The first
 else if statement mandates that if bearChoice has the value 2, this statement will print to the console:
  "You tell the bear the " + bearClothing + " is too small and it sarts to cry!"

If this condition is also is found to be false, the computer will proceed to the second else if statment,
 which says that if the bearChoice value is 3, "You run as fast as you can into the next room. It's full
 of snakes!" will print to the console.

If all three of these statements evaluate to false, the computer will follow the instructions stipulated
by the else statment at the end of the block, which acts as a sort of default condition. If the else
statement is triggered, it will print this to the console: "You stay with the bear and become it's
best friend."

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If the variable bearChoice equals 3, the final outcome will be the character finding themselves in a room
 full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the
final outcome be?

If doorChoice equals 1 and bearChoice equals 2, the final outcome would be the main character insulting the
bear's tiny hat, which causes the bear to cry.

7. What is your favorite ending?

My favorite ending is that which is triggered by assigning a value other than 1, 2, or 3 to the bearChoice
variable. This means the character gets to know the bear better, despite it's clothing choice. The character
and the bear become best friends, which, in my opinion, is terribly wholesome and makes me smile to think of it.

*/
