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
Was door 1 selected? If yes print bear clothing "hat". If not print bear clothing "scarf".
Is is it true that door choice is equal to 1? If true bearClothing is "hat". If false bearClothing is "scarf".

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
The bearClothing value would be scarf, because hat is for doorChoice1 only and scarf is for everything else.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Is it true that bearChoice === 1 was selected? If true "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!". If false move to next code block. Is it true bearChoice === 2? If true
"You tell the bear the " + bearClothing + " is too small and it starts to cry!". If bearChoice === 1 and bearChoice === 2 false move to next code block. Is it true bearChoice === 3? If true  "You run as fast as you can into the next room. It's full of snakes!".
If bearChoice === 1, bearChoice === 2, and bearChoice === 3 false move to next code block and output "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You go through door 1 and see a bear putting on a hat. It looks like the hat is too small for the bear and you point it out to the bear. You tell the bear the hat is too small and it starts to cry.

7. What is your favorite ending?
Favorite ending is bearChoice === 3. I'd like to stay and become friends with the bear. Winnie the Pooh!
*/
