/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 5;

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
In lines 14-18 an if else statement is being declared where you get to choose the doorChoice for the interactive story,
If the value of the variable doorChoice is 1, then the bearClothing variable's value will be the string 'hat', if the value is
anything other than 1, then the value of bearClothing will change to scarf.
2. What variable has a new value assigned to it after the first if statement executes?
bearClothing has a new value after the first if statement.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If you change the doorChoice value to 3 then the value of bearClothing would be 'scarf', because there are no else if, statements,
just else, you will get the same value of bearClothing if the value of doorchoice is anything other than 1.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
In lines 27-35, the value of bearChoice is being put through an if, else if, else, statement where depending on your answer,
what you chose as the value of bearChoice, there are 4 possible string outputs.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If you changed the variable of bearChoice to equal 3, the string 'You run as fast as you can into the next room. Its full of snakes!' would be logged to the console.
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
if you changed the value of doorChoice to equal 1 then the bearClothing would have the value of 'hat' and then the bearChoice value to 2,
then you would have a final ending of, 'You tell the bear the hat is too small and it starts to cry!'
7. What is your favorite ending?
My favorite ending is the else, 'You stay with the bear and become it's best friend!', I could definitely be interested in a scenario like that.
*/
