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
It is an if..else statement. If the first statement is true (doorChoice===1) then the following code is run and the remaining code is ignored (by default doorChoice is 1 so in this case the following code bearChoice = "hat" would be run. The bearChoice variable is a empty string which is reassigned to a different string "hat").

If the first statement is false then the JS interpreter moves onto the "else" line and that code is ran; bearChoice = "scarf." This is reassigning the blank string to "scarf."

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
It has the if / else if / else structure. If the first statement is true (bearChoice === 1) then the following code is run and the remaining code is ignored.

If the first statement is false then the JS interpreter moves onto the "else if" line. If the statement in the "else if" line is true then that code is run. If that "else if" is false then it moves onto the next "else if" statement repeating that comparison. If that statement is false it arrives at just the "else" statement that is run because all the "if" and "else if" statements were false.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You run as fast as you can into the next room. It's full of snakes!"
I appreciate the randomness as well as the morale to the story. Don't make fun of bears be generous to them (and this applies to people too I guess).
*/
