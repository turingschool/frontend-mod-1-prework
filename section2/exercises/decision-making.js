/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 5000;
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

A conditional is being made that will re-assign the `bearClothing` variable depending
on what the `doorChoice` variable is set to. The if statment is evaluating whether or not the `doorChoice`
variable's value is strictly equal to 1. If the comparison is true, then the statment executes the assignment of the
"hat" string to the `bearClothing` variable. If the comparison is false, the code continues to the else statment,
which has no condition set and is telling the code to assign the "scarf" string to the `bearClothing` variable.

2. What variable has a new value assigned to it after the first if statement executes?

`bearClothing`

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

"scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

A conditional is being made that is comparing whether the value of the `bearChoice` variable is strictly equal to 1.
The if statement is telling the code that if the comparison is true and `bearChoice` is equal to 1, then the console will log the
string contained in that statement. If the initial if statement is false, the code moves on to the first `else if` statment, which
compares whether `bearChoice` is equal to 2. If it's true, it prints a string and if it's false, the code moves on to the next `else if`
statment which checks if `bearChoice` is equal to 3. If the comparison is true, the string in this `if else` is printed. If it's false,
the code just moves on to the final `else` statement which has no conditions and logs the final potential string to the console.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

I would end up in a room full of slithery snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The bear would have a hat that was too small, I would call the bear out on his tiny hat and then the bear would cry.

7. What is your favorite ending?

In a perfect world my `doorChoice` is 1 and my `bearChoice` would be 4 so that I do nothing and become best friends with the tiny hat bear.
*/
