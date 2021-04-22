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

In those lines We have two conditional statements : If and else. In the if statement we have an equality
to be read by the computer from the variable doorChoice and the number 1. if it is true : we've assigned a new value
to the variable bearClothing and the log will show the new value of the variable in the if statement.
If it is False: the computer will go to the else statement were we also assigned a new value to the variable
bearClothing, and the computer will log the new value of the variable in the else statement.

2. What variable has a new value assigned to it after the first if statement executes?

The variable bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

The bearClothing value will be "scarf", because the if statement  gives you only the doorChoice 1
and the else statement tells you any doorChoice different than 1, will result in the bearClothing = "scarf".

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.


I've decided to comment the code here to explain in a bettert way:

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
  // This first block of code will execute if the bearChoice variable it is equal to 1, if so action ends here.
  // if this statement is false , the computer will proceed to the next statement (else if).
/*
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
  // This block of code executes if bearChoice it is equal to 2.If so the action ends here.
  // If the first statement in the first block of code and this statment are false, the computer will proceed
  // to the next statement else if .

} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
  // This block of code executes if bearChoice it is equal to 3. If so the action ends here.
  // If the first two statements and this statment are false, the computer will proceed
  // to the next statement else .

} else {
  console.log("You stay with the bear and become it's best friend!");
  // This block of code will execute if all the statments are false.
}

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

The end of the stoty will be: You run as fast as you can into the next room. It's full of snakes!
 It will log the end based on the else if statment code in line 31-32.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

It will define the bearClothing as a "hat" based on the if statment on the code lines 14-15 and
The end of the story will be log as : You tell the bear the hat is too small and it starts to cry!
It will log based on the else if statment code lines 29-30.


7. What is your favorite ending?

My favorite ending is the bearChoice 1, were you and the bear became friends. I love animals <3
"You offer the bear your hat and the bear shows you a secret passage out!""
*/
