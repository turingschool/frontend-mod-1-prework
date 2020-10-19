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

The keyword if evaluates whether the condition doorChoice is strictly equal to the integer 1.
Then the code to execute if the condition returns the value of true is bearClothing is assigned the string hat.
The keyword else evaluates that your code does something different.
Should the condition return the value of false, the code to execute is bearclothing is assigned the value scarf.;

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing goes from being "" to "hat"

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The variable bearClothing value would become scarf.
As changeing the variable doorChoice to 3 would yeild or return a value of false on the first code condition.;

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Starting on line 27 the key word if evaluates whether the condition bearChoice is strictly equal
to the number one.
On line 28 there is a declaration of data, an operand. The story humorously shifts to
the new operand, should the initial condition is return a value of true.
On line 29 Should the first if condition that is bearChoice is strictly equal to one,
return a value of false there is a keyword 'else if' statement that allows me to provide
a new set of code to execute.
On line 30 There is a declaration of a new operand that shifts the story, should
the first condition return a value of false and the second condition return a value of true.
On line 31 the keyword 'else if' evaluates a plausible new condition evaluating bearChoice
being strictly equal to 3 in the case of the first two conditions returing the value of false.
On line 32 there is a declaration of a new string of data, should the first two conditions return
a value of false and this condtion return a value of true.
On line 33 the key word else evaluates a plausible new condition if all three of the previous conditions
return a value of false and this condition returns a value of true.
Line 34 is a declaration of new data statment and emphatic string to run should else return a value of true.
Line 35 is a very important closing curly brace.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

I would run as fast as I can to the next room and it would be full of snakes.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
I would, tell the bear the hat was too small and it starts to cry.

7. What is your favorite ending?

*/I leave the variable doorChoice strictly equal to one and the variable bearChoice strictly equal to 1.
and I offer the bear my hat and the bear shows me a secret passage out!
