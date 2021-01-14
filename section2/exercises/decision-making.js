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
On line 14 we are using an 'if' statement. That 'if' statement is strictly equal to the integer 1. If that
doesnt equal 1, then we go to the else statement on line 16. If equal to 1 you get a hat for bearClothing, if you get
an integer other than 1 your bearClothing variable will be a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
The bearClothing variable.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
On line 27 we are using this result only if the bearChoice is strictly equal to 1.
On line 28, we are logging that choice result of choosing the integer 1, including the bearClothing var selected in lines 14 - 18 in our string.
n line 29 we are using this result only if the bearChoice is strictly equal to 2.
On line 30, we are logging that choice result of choosing integer 2, including the bearClothing var selected in lines 14 - 18 in our string.
On line 31 we are using this result only if the bearChoice is strictly equal to 3.
On line 32 we are logging the result of choosing integer 3.
On line 33 we are using else with no variable chosen. So line 34 would be the result of choosing no integer between 1-3.
Line 35 closes those lines of code

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You stay with the bear and become it's best friend!"
*/
