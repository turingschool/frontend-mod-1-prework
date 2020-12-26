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
  - We are using an if/else statement to check the condition if we chose doorChoice 1, if so, the we found the
  bear wearing (bearClothing) a hat.  Otherwise, we chose door 2, and the bearClothing is a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
  - In our initial variable declaration we never assigned a value to bearClothing (var bearClothing = "";).
  Once the if statement is executed, depending on what door is selected, the bearClothing variable gets reassigned
  to either "hat" (if door #1 is selected) or "scarf" (if door #2 is selected).

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
  - If the variable doorChoice is set to a value of 3, the bearClothing variable will have a value of "scarf".
  This is because of the way the if statement is written.  We only have two conditionals in our if statement,
  so if the value for doorChoice is anything except 1, the bearClothing is going to have a value of "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
  - Here we are using and if/else if/else statement to check the value of the condition of the value of
  the variable bearChoice. IF the variable bearChoice is equal to 1; the console will log
  You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!
  Otherwise, if the variable bearChoice is equal to 2; the console will log
  You tell the bear the " + bearClothing + " is too small and it starts to cry!
  Otherwise, if the variable bearChoice is equal to 3; the console will log
  You run as fast as you can into the next room. It's full of snakes!
  Lastly if the variable bearChoice is equal to anything other than 1, 2 or 3 the console will log
  You stay with the bear and become it's best friend!

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
  - If the variable bearChoice is equal to 3, the final outcome will be: You run as fast as you can into the next
  room. It's full of snakes!
  This is because our if statement will check if bearChoice is equal to 1 (it is not) before checking if bearChoice
  is equal to 2 (it is not) before checking if bearChoice is equal to 3 (which it is!), so that condition will return
  true and the code console.log("You run as fast as you can into the next room. It's full of snakes!"); will execute
  and we will have logged that statement to our console.  Since the if statement found a conditional that returned true,
  the else statement will not execute.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
  - If the variable doorChoice is equal to 1, we will find the bear in a hat (bearClothing value will be reassined to "hat")
  that is too small for the bear!  If the variable bearChoice is equal to 2, we are going to have to tell the bear that
  his hat is too small and the bear is going to start to cry.  Sounds like our bear could use a big "bear" hug!

7. What is your favorite ending?
  - My favorite ending would be for the doorChoice to have a value of 1 so I'd find our bear wearing a hat that is too small.
  At that point, I would point it out to my new bear friend and assign my bearChoice to have a value of 100 because I am 100% sure
  if I found a bear behind a door wearing a hat that was too small, I would want to "stay with the bear and become it's best friend!"
*/
