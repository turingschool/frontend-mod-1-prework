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
The script is telling the computer what to do depending on which doorChoice the user selects.
It does this by first evaluating whether the user selected door #1 to see whether the value is true or false. If it is true
If true, the story will progress with the bear wearing a hat. If that condition is false, it moves
on to else, which runs the code to tell the story to include that the bear will be wearing a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
bearClothing is left undefined until the first if statement executes (and then is assigned to either hab or scarf)

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
It would be scarf since the if/else statement assigns "hat" to option 1 and assigns "scarf" to anyting not 1

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In lines 27 through 35, the computer is going through options that the user may have selected from for bearChoice.
If the first if statement is evaluated to be true, then the computer states that you offer the bearChoice
the clothing assigned to the value of bearClothing in the first if/else statement. If it evaluates to false,
it will move on to the next path. If that path evaluates to true, it will log a sentence stating that
you tell the bear the hat or scarf is too small and uses input from the first if/else to decide whether
it is a hat or scarf. If this path evaluates to false, it evaluates the next statement. If true (the user selected option 3),
it will run, "You run as fast as you can into the next room. It's full of snakes!"" If false, it will
proceed to the last path (else), which will run, "You stay with the bear and become it's best friend!" since everything
other condition evaluated to false.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You stay with the bear and become it's best friend!"
*/
