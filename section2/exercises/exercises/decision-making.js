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

Starting on line 14, an if..else statement is being introduced to control conidtional instructions. Beginning
with line 14 the block of code executes if the conidtion is met that the door choice strictly equals 1 is true,
if the condition is not met (false), then the block of code starting at line 16 excutes. For example,
when doorChoice is 1, it executes the respective code block because the condition is true (1 strictly equals 1)
and bearClothing is equal to "hat". When doorChoice is not 1, the first condition is not true so that code block
doesn't execute, and the else condition block of code excutes because the previous condition were not met,
and bearClothing is equal to "scarf".

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing will have a new value, either "hat" if the if condition is met (true) or
"scarf" if the if conidtion is not met (false).

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

If doorChoice is equal to 3, the bearClothing value would be "scarf" since the if condition does not evaluate
to true (1 === 3, 1 does not strickly equal 3). Therefor the else conidtion block of code executes, and bearClothing
value would equal "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Starting on line 27, esle if statements are being introduced to control conidtional instructions. The else if statements
will execute a block of code when their condition evalutes to true, if the first condition isn't meet or evaluates to false
then the next block of code will exeecute if it's condition evaluates to true, and so forth. If none of the conditions
evaluate to true then on line 35 that block of code executes since none of the conditions before it have been met and
evaluates to true. So starting in line 27 the if...else statement checks the condition bearChoice strickly equals
1, if it resolves to true the first code block is executed and the output is "You offer the bear your "
+ bearClothing + " and the bear shows you a secret passage out!". If it checks the condition and evaluates it to be
false then the second code block starting on line 29 is excuted if its condition evaluates to true and the output is
"You tell the bear the " + bearClothing + " is too small and it starts to cry!". If it checks the condition and
evaluates it to be false then the third code block starting on line 31 goes through the same process. If none of
the first three code blocks evaluate to true, then on line 33 the code excutes since none of the conditions
above it evaluate to true and and final output prints "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

When bearChoice is equal to 3, the final outcome will be the output: "You run as fast as you
can into the next room. It's full of snakes!". This is by far the worst outcome, because I
am extremely afraid of snakes. The else if condition is true in code line 31 so that block
of code excutes, since the first and second conditions evaluate to false.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2,
what will be the final outcome be?

When doorChoice is 1 and bearChoice is 2, the final outcome would print "You tell the bear
the hat is too small and it starts to cry!".

7. What is your favorite ending?

My favorite ending is when bearChoice is equal to 4 or greater, and the outcome is
"You stay with the bear and become it's best friend!". Living in Wyoming, and having
met some bears, I've never befriended one, and I would love to have a bear as a friend!

*/
