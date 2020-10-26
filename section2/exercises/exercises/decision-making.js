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

The clothing choice for the bear is being assigned the value 'scarf', unless the door choice variable has been assigned 1 and strictly 1.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing gets assigned by the first if statement.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

'scarf'

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

A decision is being made based on what numeric value is held by the variable bearChoice.  If the value is strictly 1, there is a statement with a reference to anothert variable.
If it's value is not 1 and is 2 then a difeerent statement is logged with a reference to the same variable, bearClothing.
If it's value is not 1 and is not 2 and is 3, a different statement is logged.
If the value of bearChoice does not meet any of the previous criteria then the last command logs yet a different statement.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The console will log 'You run as fast as you can into the next room. It's full of snakes!'

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The bear would begin to cry.
The output will look like this:

You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!



7. What is your favorite ending?

I think the secret passage out would be preferred in this case.  In that case I would offer the bear my hat.
*/
