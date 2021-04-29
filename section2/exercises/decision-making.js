/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 4;

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
This if...else statement is being used to define the value of the variable bearClothing.
The value is defined by the existing variable doorChoice, and is later used to fill in
the value of the clothing in the console.log when bearClothing is referenced.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing will have a new value assigned after the first if statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The value of bearClothing would be "scarf" since that's the value of the else statement
and it wouldn't trigger the first if statement (as 3 is not strictly equal to 1).

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
This series of if/else if/else statements are using the value of the bearChoice variable to determine
which condition is met and which console.log message is deployed.  These statements are evaluated in
order, so it will stop the evaluation and run the block of code after it hits the first true
statement.  If none are true, it will run the final else code and the chooser is the bear's best friend.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The console will log the message "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The console will log the message "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
While esacping is nice how can you say no to being best friends with a bear that wears a hat?  That would make the favorite
ending for me not choosing any of the three options for bearChoice and getting the final else statement to run.  A bear with a hat
could be one of a lot of incredible options:  Smokey, Paddington, Yogi, Fozzie.  That's got to be a lesson of childhood -- always
befriend a bear in a hat.
*/
