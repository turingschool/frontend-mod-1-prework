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
In lines 14-18, the if else statement is asking first, if the doorChoice variable is equal to
1, then the bearClothing variable evaluates to "hat". If the doorChoice variable is anything
other than 1, the bearClothing variable evaluates to "scarf". So IF the doorChoice is 1, then
bearClothing becomes "hat". If it is anything ELSE, then bearClothing is "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
After the first if statement in line 14, the variable that has a new value assigned to it
is bearClothing. The new value is "hat".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
IF the doorChoice variable changed to 3, then the bearClothing variable would be assigned
a value of "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In lines 27-35, we have some if else statements along with else if statements! IF bearChoice variable
equal to a value of 1, then the console will log "You offer the bear your " + bearClothing + "and
the bear shows you a secret passage out!" The next statement is an else if statement, meaning if the
first IF statement above (bearChoice does not equal to 1) is not true, and the bearChoice value IS
equal to 2, then the console will log "You tell the bear the " + bearClothing + " is too small and
it starts to cry!" The next statement is another else if statement. IF the bearChoice is not equal to 1,
and the bearChoice is not equal to 2, but the bearChoice IS equal to 3, then the console will log
"You run as fast as you can into the next room. It's full of snakes!" The last statement is an else {
  statement, meaning that if any of the above if else or else if statements are false, then
  "You stay with the bear and become it's best friend!" will be logged. So if the bearChoice value is
  anything other than 1, 2, or 3, that will be the message result in the console.
}

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If the bearChoice variable is changed to the value of 3, then the expected outcome would be:
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a scarf
It looks like that scarf is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If the doorChoice is changed to 1 and the bearChoice variable is changed to 2, the final outcome would be:
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!

7. What is your favorite ending?
My favorite ending is to stay with the bear with a hat and become it's best friend. Who wouldn't want a
big bear wearing a hat on their side? For this outcome the doorChoice variable would need to be 1
and the bearChoice variable would need to be 4 (or any number other than 1, 2, or 3).
*/
