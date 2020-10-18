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

Lines 14-18 provide for two scenarios based on the value of the variable doorChoice:

SCENARIO 1: If and only if the value of the variable doorChoice is
equal to the integer 1, then the variable bearClothing will be re-assigned a string value of
"hat". The output then from line 20 will be:
You see a bear putting on a hat

SCENARIO 2: If doorChoice does not have a value of 1, then bearClothing will be re-assigned a sting value
of "scarf" and the output from line 20 in that case would be:
You see a bear putting on a scarf

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Lines 27-35 provide for 4 different console outputs based on the value of bearChoice.
If bearChoice strictly equals 1, then the bear shows you a secret passage
If bearChoice strictly equals 2, you insult the bear and it starts to cry
If bearChoice strictly equals 3, you end up in an Indiana Jones nightmare
If bearChoice equals any other value you become best friends with the bear

In the first two scenarios, the output is additionally dependent on the value of bearClothing
which gets inserted at the relevant section of the string by concatenation.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
I offer the bear my scarf and it shows me a secret passage. The bear is happy because it has a new
item of clothing (one that's less likely to fall off than a hat) and I'm happy because I get to safely continue the adventure without hurting 
anyone's feeling or having to deal with a room full of dangerous serpents.
*/
