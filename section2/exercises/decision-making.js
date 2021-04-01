/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 199999;
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
In between lines 14 and 18, there is an if...else statement. In this statement the first condition
is evaluated to see if it resolves to true; in this case if doorChoice equals 1. If true,
then the first code block is executed, in this case bearClothing = hat. If this is not true, meaning it resolves to false,
then the second block of code following the keyword else is run, in this case bearClothing = scarf.

2. What variable has a new value assigned to it after the first if statement executes?
The bearClothing variable

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
Scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27 and 25 an if/else if/else statement appears. In this statement the first condition
is checked to see if it is evaluated to be true. If true, then the code following will be exectued. if false
than next condition is evaluated following the else if statement. If true, then that code is executed. If false,
then the next condidion following the next else if statement is evaluated. If true, then the code is exectued, if false
(if none of the conditions have evaluated to be true), then the code after else will be executed.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
You offer the bear your scarf and the bear shows you a secret passage out!
*/
