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

    Starting in line 14, we use an if statement to check if the door variable has a value of 1,
    if true, variable bearClothing is set to the string "hat", if the value is anything other than 1 the conditional statement
    goes to the else condition, and applies the value of "scarf" to variable bearClothing.

2. What variable has a new value assigned to it after the first if statement executes?

    The variable bearClothing has a new value assigned to it.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

    Because, the bear clothing MUST equal 1 in order to give the bearClothing the value of "hat",
    any other number other than 1 will set the bearClothing to scarf.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

    Using conditionals, it is checking the value or choice of bearChoice by user, based on the value assigned a different story
    ending is given. Each number 1-3 is assigned a different console.log, otherwise you are given the statement.
      'You stay with the bear and become it's best friend!'

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

    'You run as fast as you can into the next room. It's full of snakes!'

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

    'You tell the bear the hat is too small and it starts to cry!'

7. What is your favorite ending?
    I am trying to be best friends with the bear, he seems to have some style.
    So setting bearChoice to anything other than 1-3 works best for me.
*/
