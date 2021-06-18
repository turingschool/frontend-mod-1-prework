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
    //14: Block of code executes if doorChoice returns true
    //15: Executes the statement between the first set of curly brackets
    //16: If boolean is FALSE or otherwise,
    //17: If 1st block of code returns false, the statement will be execruted inside the 2nd set of curly brackets
    //18: End of the last ELSE statement.

2. What variable has a new value assigned to it after the first if statement executes?
    //bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
    //The bearClothing value would be a scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
      //27: If bearChoice variable says 1, Block of code in curly bracket executes.
      //28: If all variables execute as true, code in curly line will log in the console with the output as a concatenated string.
      //29: If block of code defers from 1st statement, the block of code in 2nd curly brackets will execute.
      //30: output will be a concatenated string statement if block of code executes as true.
      //31: If block of code defers from the two conditional statements above, bearChoice === 3 code will run
      //32: the string statement will be outputted to the console
      //33: If all conditional statements are false
      //34: String statement inside the parenthesis will be logged to the console
      //35: End of the last ELSE statement / object.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
    //You run as fast as you can into the next room. It's full of snakes!

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
    //You tell the bear the hat is too small and it starts to cry!
7. What is your favorite ending?
    //My favorite ending is "You stay with the bear and become it's best friend!"
*/
