/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
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
 When the variable doorChoice is assigned a value of 1, then the condition in line 14 becomes true.
 This means that the code block in line 15 is executed and lines 16-18 are ignored.
 When you change the value of the variable doorChoice to a number other than 1 (2, 3, etc.),
 the condition in line 14 becomes false, the code block in line 15 is ignored, and it compares
 the value to the condition in line 16. If the value is anything other than 1, the condition in
 line 16 becomes true and the code block in like 17-18 is run.

2. What variable has a new value assigned to it after the first if statement executes?
 The variable bearClothing has a new value assigned to it after the first if statement is executed.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
 If doorChoice = 3, then bearClothing = "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Lines 27-35 provide an if/else if/else conditional. The value of the variable bearChoice is being evaluated.
If the bearChoice = 1, then the code block in line 28 is run. If the value of bearChoice = 2,
then the condition in line 27 is not met, so line 28 is skipped and the value is checked against
the condition in line 29. That condition is met, so the codeblock from line 30 is run.
If the value of bearChoice is 3, then the conditions in line 27 and 29 are both false and the
condition in line 31 is true. The code block in line 32 is run.
If the value of bearChoice does not meet any of the conditions in lines 27, 29, and 31
(say bearChoice = 4) then the code block in line 34/35 is run.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You offer the bear your scarf and the bear shows you a secret passage out!"
*/
