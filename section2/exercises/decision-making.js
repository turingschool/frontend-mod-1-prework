/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 3;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "arm floaties";
} else {
  bearClothing = "swim trunks";
}

console.log("You see a bear putting on " + bearClothing);
console.log("It looks like the " + bearClothing + " are too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " are too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.

//My Comment: Between lines 14 and 18 we are using an if/else comparison statement. If the values that are being
//passed into the statement returns true at the if statement then the line of code, in the curly braces immediately
//following the if statement, will be executed. If it evaluates to false, then JavaScript moves along to the next
//part of our if/else statement (the "else" portion) and executes the code in the curly braces here. In this case
//if the value being passed in for doorChoice is 1 then bearClothing equals arm floaties (I have changed the values).
//If doorChoice does not equal 1 then bearClothing equals swim trunks.

2. What variable has a new value assigned to it after the first if statement executes?

//My Comment: This would be bearClothing. You can see above, when the variable is declared initially, that it is
//given a value simply of "". This later changes, when we assign the value of "arm floaties" or "swim trunks."

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

//My Comment: In my case, the bearClothing would now be "swim trunks." This would cause the "else" part of our
//else if statement to execute.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

//My Comment: Here we have set up a more complex version of an else if statement. We don't simplyl have two
//conditions. We have four conditions here. JavaScript will run each part of the statement and if it evaluates
//to false on the first three lines (if, else if, else if) then the last line will execute (the code inside of
//the curly braces immediately following the else statement).

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//My comment: If bearChoice was changed to 3 then the log would run: "You run as fast as you can into the next
//room. It's full of snakes!"
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//My Comment: In the original example (before I changed it :) ), with a variable doorChoice of 1, the bear would be wearing a hat
//In my expample the bear is wearing arm floaties. With a bearChoice of 2, the log would print out this result:
//"You tell the bear the hat is too small and it starts to cry."
7. What is your favorite ending?
//My favorite ending is "You offer the bear your hat and the bear shows you a secret passage out." I'm a big fan of
//any story line that has a secret passage...and animal friends.
*/
