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

The code is evaluating if the variable doorChoice is exactly equal to 1. Becuase it is, the first block of
code is initiated and the string value 'hat' is assigned to the variable bearClothing. If it was a different
value not equal to 1, it would execute the second block of code and assign the string value 'scarf' to the variable
bearClothing.


2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value of 'hat' assigned to it

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If doorChoice was 3, the result of the evaluation doorChoice is not exactly equal to 1 would be false
and the else statement would execute resulting in the value 'scarf' be assigned to bearClothing.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

The code is examining the value of bearChoice. If it is exactly equal to 1, which it currently is, the
next line of code is executed. If it was not exactly equal to 1, it runs through other options determining
if the value is exactly equal to 2, 3, and if it is something else, the last line of code is executed.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

"You run as fast as you can into the next room . It's full of snakes!""

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the hat is too small and it starts to cry!"
"
7. What is your favorite ending?

I think offering the bear my article of clothing and then the bear shows me a secret passage out. This is the
superior choice because it results in a bear wearing a scarf or a hat (win win) and you get to go through
a secret passage. Is there a bear version of parseltongue?? The other endings result in a crying bear (not fun)
a room full of snakes (hard pass) and a bear that is your friend. The last option is appealing because of the
promise of bear friendship, but lets be honest - if you give a bear a scarf or a hat AND they show you a secret
passage, chances are yall are already besties.
*/
