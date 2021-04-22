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

Lines 14 through 18 are an if...else statment. If the condition evaulates as true which would be
doorChoice (comparison operator of strictly equals) === 1 then code will execute assigning bearClothing
the value of "hat". The codition will evaluate as fasle if doorChoice is any number, character, text
that is is not 1 and the else code will execute placing the bearClothing value as "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

Scarf because the 3 does not strictly equal 1.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Lines 27 through 35 are a complex else if statement. This allows you to provide multiple sets of code.
Each condition is checked. If bearChoice (our condition1) strictly equals === (comparison operator) the
number "1" then the code executed is "You offer the bear your" + bearClothing + " and the bear shows
you a secret passage out!"); Else if the condition bearChoice, strictly equals === 2 then it
executes the code "You tell the bear the " + bearClothing + " is too small and it starts to cry!");
The process continues and the next condition bearChoice is checked and if it is strictly equal === to
3 then the code that is executed is "You run as fast as you can into the next room. It's full of snakes!");
Lastly if the imput does not strictly equal 1, 2, or 3 then the else code will execute which is "You
stay with the bear and become it's best friend!");"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

"You run as fast as you can into the next room. It's full of snakes!");

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

My favorite ending is "You stay with the bear and become it's best friend!"); Hahaha
*/
