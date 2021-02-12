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
    This is a conditional if... else statement, which compares the operators of the variable doorChoice to the number 1.
    If doorChoice is strictly equal to 1, then the variable bearClothing is reassigned to the string "hat".
    Else for any other instance, the variable bearClothing is reassigned to the string "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
    The variable bearClothing is reassigned to a new value after the first if statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
    The value of bearClothing would be "scarf", because the statement doorChoice (3) === 1 would evaluate to false, which
    defaults to the condition set by the else part of the statement.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
    This is another conditional if... else statement with multiple specific-instance events. If the initial comparison evaluates
    to true, then the console logs a string with the secret passage statement.
    If the initial comparison runs is false but the second comparison evaluates as true, the console logs the too small statement.
    If the first two comparisons run false but the third comparison evaluates as true, the console logs the snakes statement.
    In every other instance, the console logs the best friend statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
    The final outcome will be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
    The final outcome will be:

    "You see a bear putting on a hat"
    "It looks like that hat is too small for the bear, do you..."
    "You tell the bear the hat is too small and it starts to cry!"


7. What is your favorite ending?
    My favorite ending is with doorChoice = 2 (I think a small scarf is less tragic than a small hat) and bearChoice = 4
    A bear with a tiny scarf as my best friend is unquestionably the best ending.
*/
