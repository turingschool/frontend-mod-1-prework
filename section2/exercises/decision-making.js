/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 6;

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
 Between 14 and 18, the decision of the value of the bearClothing variable is being determined based on
 what door is selected. The door selection is determined by the value of the doorChoice variable. If door 1 is chosen,
 then the clothing item is a hat, otherwise, it is a scarf.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing is assigned a new value based on the selection.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

It would be a scarf. The if/else statement makes it so that anything other than exactly 1 as the doorChoice will
cause it to be a scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

When the value of bearChoice is exactly 1, the computer assesses "Is 1 === 1?". Yes: then
executes the code "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!"
No remaining code is considered in the else/if statements.

When the value of bearChoice is exactly 2, then the computer assess "Is 2 === 1? No" "Is 2 === 2?"
Yes, then executes the code "You tell the bear the " + bearClothing + " is too small and it starts to cry!")
No remaining code in the else/if statements is considered.

When the value of bearChoice is exactly 3, the computer considers "Is 3 === 1? No" "Is 3 === 2?" No.
"Is 3 === 3?" Yes, then exectues the code "You run as fast as you can into the next room. It's full of snakes!"
No remaining code in the else/if statements is considerd.

When the value of bearChoice is different than 1,2, or 3: the computer considers "Is bearChoice === 1? No" "Is bearChoice === 2?" No.
"Is 3=bearChoice === 3?" No, then exectues the code "You stay with the bear and become it's best friend!".

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
The statement: "You run as fast as you can into the next room. It's full of snakes!" would print to the console.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
For those choices, the bear would be wearing a hat and you would say it is too small and make the poor bear cry.

7. What is your favorite ending?

My favorite ending would involve the scarf (door #2)- because scarves are amazing and then opting for the secret option
4 and becoming the bear's best friend by not choosing options 1,2 or 3.
*/
