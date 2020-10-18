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

The program is asking if the value of doorChooice is strictly equal to an integer.  if it is true then
the variable bearClothing is reassigned to "hat". If the is condition is false the program will default to
the else code for execution. bearClothing will be reassigned "scarf". It is important to note that JS will
disregaurd the reassigned variable bearClothing in the else statement if the if statment is true.  JavaScript
reads top to bottom and searches for a true condition and runs the relevant code.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If you change the variable doorChoice = 3 then bearClothing would equal "scarf".  Since the if statement
condition is false any other answer will execute the else statement code.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

the if statement is asking if bearChoice is strictly equal to 1 if it, the console will log the code in line 28
if the if statement is false it evaluates else if bearChoice is strictly equal to 2 if it is true the console will log the code in line 30
if the else statement is false it evaluates else if bearChoice is strictly equal to 3. if it is true the console will log the code in line 32
if none of the if or else if statments evaluate as true else will be the defualt code executed.  line 34 will log.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

log to the console "You run as fast as you can into the next room. it's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat.
It looks like that hat is too small for the bear, do you ...
1. Offer your own hat to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear bear the scarf is too small and it starts to cry!

7. What is your favorite ending?

You stay with the bear and become it's best friend!

*/
