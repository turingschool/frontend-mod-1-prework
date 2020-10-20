/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 10;

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

- [x] The code starting at line 14 and ending at line 18 executes an if else statement. If the variable doorChoice is strictly equal to 1 the variable bearClothing will be re-assigned hat. Any other value for doorChoice will re-assign the value of scarf to bearClothing.

2. What variable has a new value assigned to it after the first if statement executes?

- [x] The first if statement starts on line 14. The bearClothing variable has a new value assigned based on the value of doorChoice.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

- [x] If doorChoice = 3, bearClothing will equal scarf. In fact, any change to the value of doorChoice such that it doesn't strictly equal 1 will execute the else statement changing the item of clothing to a scarf not a hat.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

- [x] The code startking at line 27 and ending at line 35 executes and if, else if statement.
If the varaible bearChoice is strictly equal to 1 the bear is offered the clothing item (hat or scarf)
and shows a seecret passage. If the variable bearChoice is strictly not equal to 1 but strictly equal to 2
the bear starts to cry. Next if bearChoice is not strictly equal to 1 or 2 but strictly equal to 3 then
I run to the next room that is full of snakes. And finally if bearChoice is any other value than 1, 2, or 3
then I become best friends with the bear.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?

- [x] If bearChoice is strictly equal to 3, the final line will always read "You run as fast as you can into the next room. It's full of snakes!"
- [x] However for the entire output (not only the final line) the outcome is dependant on two variables (a) doorChoice and (b) bearChoice. Assuming doorChoice is 1 (not specified in the question) and bearChoice is 3 (as specific in the question), the final outcome will be as follows.

```
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!
```

- [x] Any other value for doorChoice (assuming an error value of some sort isn't entered) plus bearChoice strictly
equal to 3 will produce the following output.

```
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a scarf
It looks like that scarf is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You run as fast as you can into the next room. It's full of snakes!
```

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

- [x] The final outcome if doorChoice is strictly equal to 1 and bearChoice is strictly equal to 2 is:

```
You enter a dark room with two doors. Do you go through #1 or #2?
You see a bear putting on a hat
It looks like that hat is too small for the bear, do you...
1. Offer your own to the bear?
2. Point it out to the bear?
3. Make a dash for the next room?
You tell the bear the hat is too small and it starts to cry!
```

7. What is your favorite ending?

- [x] My favorite ending is "You stay with the bear and become it's best friend!".
*/
