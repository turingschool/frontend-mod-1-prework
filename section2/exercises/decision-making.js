/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 8;

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
If the statement in parenthesis (condition - 'doorChoice === 1') evaluates to true then return the string 'hat' otherwise return the string 'scarf'.

2. What variable has a new value assigned to it after the first if statement executes? bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
'scarf'

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
If the condition bearChoice equals 1 evaluates as true, then print "You offer the bear your 'bearClothing' and the bear shows you a secret passage out!" If it evaluates as false, check to see if the next condition, bearChoice equals 2, evalauates as true. If yes, then print "You tell the bear the 'bearClothing' is too small and it starts to cry!" If it evaluates to false, check to see if the next condition, bearChoice equals 3, evaluates to true. If the condition evaluates to true, then print "You run as fast as you can into the next room. It's full of snakes!" Finally, if this condition evaluates to false and none of the previous conditions have been met, then print "You stay with the bear and become it's best friend!"

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
"You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
"You stay with the bear and become it's best friend!" Of course! Then I'd be like that guy on youtube who raised that lion and reunited with it when he went back to Africa.
*/
