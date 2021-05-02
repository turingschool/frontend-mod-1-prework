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
During lines 14 through 18 we are setting up an if else script. This script is made for our interactive if we choose a door what our outcomes will be.
The if states our variable choice of doorChoice is equal to 1 we then curly so we may open up our next variable of bearClothing. Which in this string = hat.
We then close the curly to start our else prompt. We then open up the else curly to add our next situation if we didn't choose door 1.
We make the bearClothing equal scarf for our else then close out our curlys.
2. What variable has a new value assigned to it after the first if statement executes?
Our bearClothing value is reassigned after the first if statement.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
It would still be a scarf. Because we only our if else 2 values. One being bearClothing "hat" if true and bearClothing "scarf" if false.
Since we didn't give an else if for the original script we have no option but scarf.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Between lines 27 through 35 we are setting up a full array of else if statements.
On line 27 we are setting up the initial if statement for bearChoice 1.
We then log our string for if bearChoice === 1
We then follow with our else if for bearChoice === 2. We are setting this up because we are looking for up to 4 answers, and this script can't be run with a simple if else script.
We log the else if for bearChoice === 2 then move onto our last else if for bearChoice === 3
We then log for bearChoice === 3 and move on to our final else statement.
This statement concludes our if and shows our finally log when no other preq becomes true.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
Our final outcome would be the display from line 33, It would state ("You run as fast you can into the next room. It's full of snakes!")
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
You would off the hat to the bear but it would be too small and it would start crying.
7. What is your favorite ending?
My favorite ending would be the door choice 2 and bear choice 1. He would gain a scarf and I would gain the secret passage out!
*/
