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

The execution goes like this: "Is it true that the variable doorChoice is equal to 1? Yes, it is, because
doorChoice was assigned to 1 at line 8, and 1 === 1, so assign the variable bearClothing to the string 'hat'."

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

The execution goes like this: "Is it true that the variable bearChoice is equal to 1?
Yes, it is, because bearChoice was assigned to 1 at line 10, and 1 === 1, so log the concatenation of the
string, "You offer the bear your ", the value of the variable, bearClothing, and the string,
" and the bear shows you a secret passage out!". The variable, bearClothing is assigned to "hat" (by the
conditional function at line 14-15 that I described in answer to question 1). So, this concatenation adds up
 to the string: "You offer the bear your hat and the bear shows you a secret passage out!""

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The console will log the string: "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The console will log the string: "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

The ending that results from bearChoice being assigned to anything other than 1, 2, or 3:
the console logs "You stay with the bear and become it's best friend!"
*/
