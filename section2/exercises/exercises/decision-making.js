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
> It is creating two different decsions through the code structor using if...else. If the bear chooses door 1 it will receive a hat, but if it chooses door 2 it will receive a scarf.
> In this case line 14 and 15 would run if the code was executed as true, and the 16 and 17 would run if the code was executed as false.
> Did the bear pick door 1? Using === because its asking a question. True. The Bear receives a hat. Did the bear pick door 1? False. The bear receives a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

> the bearClothing variable would be assigned a new value. Hat or scarf

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

> It would play out as "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

> It is creating three different outcomes based on what door the bear chooses. If the bear chooses door one, the output of the code will read "You offer the bear your hat and the bear shows you a secret passage out!"
> If the bear chooses door 2 or 3 the outpot of the code will read "You run as fast as you can into the next room. It's full of snakes!"
> If any other number is picked other than 1, 2, or 3 the code output will read as "You stay with the bear and become best friends"
> The decsion at the start of the code changes and alters the outcome of the code.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

> The final out come would be "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

> The final outcome would be "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?

> My favorite ending is "You stay with the bear and become it's best friend!" I was able to get this to play out in output by changing the bearChoice variable to 4.
*/
