/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 2;

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

Between lines 14 and 18 is a if / else statement. It first runs line 14 to see if the value is equal to 1 and
if it is not it runs the following code. Even though the questions is asking for 1 or 2, the code is only set up to
run one answer if the value is one and the other answer if it is any other input.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing has a new value assigned to it. If the user inputs 1 the new vaule is "hat" and if they inputted anything else it woudl be "scaf"

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The bearClothing would be a scarf. Since the if statement is if the  doorChoice === 1 and the varible that had been assigned to doorChoice was 3,
it would not be true and it would run the following else statement.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Between lines 27 and 35 is an if / else if / else statment. It runs the first line and asks is bearChoice is equal to 1 and if not it runs to the second lines. If so, it runs the command.
If bearChoice is not equal to 1, it asks is it equal to 2. If it is equal to 2 it will run the command. If it is not it will run to the next line.
If bearChoice is not equal to 2, it will ask if it is equal to 3. If it is equal to 3 it will run the command. If it is not, it will run to the next line.
If bearChoice is not equal to, it will run the else structure and print out the final command.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?

My favorite ending is bearChoice 1 because it's nice to share with bears.

*/
