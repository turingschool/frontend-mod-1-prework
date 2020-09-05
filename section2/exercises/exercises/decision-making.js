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

1. In English, using technical vocabulary, describe what is happening between lines 27 and 34.
In line 27, what should happen if choice one is "absolutely" true is being defined. If the bear choice is 1, then you'll
offer the bear your hat and then the bear shows you a secret passage out. If 1 is not the choice, then the code will move on to
either choice 2 or choice 3 and complete those tasks. If the choice is anything other than 1, 2 or 3 then you stay with the bear.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 31 and 38.
I'm not 100% sure what this question is asking since I answered 27 - 34 above like the Slack response said to. However, I will stay
that in 8 - 17, the variables are being defined one variable is being renamed based on the choice made between door 1 and door 2.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You tell the bear that the hat is too small and it starts to cry!

7. What is your favorite ending?
I'm the biggest fan of bearChoice 1 being true. Snakes are a no go, I can't have an upset bear on my hands and I don't want to be
with the bear when it gets hungry. 
*/
