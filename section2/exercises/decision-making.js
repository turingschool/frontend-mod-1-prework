/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 2) {
  bearClothing = "beanie";
} else {
  bearClothing = "sunnies";
}

console.log("You walk in, it's bright, and you see a bear putting on " + bearClothing);
console.log("It looks like those " + bearClothing + " are not the right vibe for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 5) {
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

The if/else statement in lines 14-18 is stating that if the doorChoice is true then,
the first bearClothing variable will print out.  And if the condition of doorChoice is false
then, the second bearClothing var will print out.


2. What variable has a new value assigned to it after the first if statement executes?

The variable that has a new value assigned to it after the first if statement is bearClothing.


3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The bearClothing value is "scarf" once you change the doorChoice variable to 3.


4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Lines 27 through 35 are an if/else/if statement.  If the condition of bearChoice strictly
equals 1 is true then the first else statement will print.  If it's false, the logic moves onto the
next else if statement.  Then, if the condition renders true to equal 2 then that following
statement will print.  And if it renders false it will move onto the next statement to see if
that will equal true.  Basically, it will print the one that equals true.


5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a scarf
It looks like that scarf is too small for the bear, do you...
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
You enter a dark room with two doors. Do you go through #1 or #2?
You walk in, it's bright, and you see a bear putting on sunnies
It looks like those sunnies are not the right vibe for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You stay with the bear and become it's best friend!


*/
