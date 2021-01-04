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

This is an if else statement that is telling the program to execute one block of code if the condition evaluates to true,
or take a separate path executing a different code block if the condition evaluates to false.

2. What variable has a new value assigned to it after the first if statement executes?

The bearClothing variable will get a new value assignment depending on the outcome of first statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The bearClothing value would be "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

This if else statement is in the if/ else if/ else structure. It is used to create more than 2 statements to be potentially
evaluated against and executed. In this scenario, there are 4 statements that exist but only one will be executed if its
condition is evaluated to true.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

You would "run as fast as you can into the next room", which happens to be full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You would make the poor bear cry by telling it that its hat is too small.

7. What is your favorite ending?

I changed bearClothing variables to "cape" and "underwear" and my favorite ending was when I stayed with the bear
and we became best friends! I won't tell you what they were wearing though...
*/
