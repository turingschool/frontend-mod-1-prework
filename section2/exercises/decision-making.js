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
  bearClothing = "pair of pants";
} else {
  bearClothing = "feather boa";
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

We are using an if..else conditional to make decisions in our story. If the user chooses "1" the bear's clothing will be "pants". If the user doesn't choose "1", the bear's clothing will be a "feather boa"

2. What variable has a new value assigned to it after the first if statement executes?

var bearClothing changes from an empty string to "pants".

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

It would be "feather boa" because the if..else conditional determines that any choice other than "1" will result in the output "feather boa"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Line 27 has an 'if' statment with a condition of the var bearchoice being strictly equal to 1. The user chooses '1', making the condition 'true' and the output will be "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"
The following lines through line 35 are else..else if statements. If the user does not choose "1", the computer will go through each line of code until it finds a condition that is true, and log the corresponding output.
The condition on line 34 will come back 'true' if the user chooses any number that is not 1-3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

If the variable bearChoice is equal to 3, the console will return "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

"You tell the bear the pair of pants is too small and it starts to cry!"

7. What is your favorite ending?

I like the idea that I could stay with the bear and we would be best friends.
*/
