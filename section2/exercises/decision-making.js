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
 In lines 14 and 18 what is going is a code block called the if statement. The if statement is like making a
decision and with that decision making it will give you a result. In lines 14-18 we can see that IF doorChoice will
equal to doorChoice then it will execute the bottom code which is bearClothing and that has a value of string/
character which is called "hat". The final part is ELSE. That means if the first line of code does not have the same
value as giving. It will consider it neither as true or false and and still execute with another out put which will be "scarf"

2. What variable has a new value assigned to it after the first if statement executes?

 The variable that has a new value after the first if statement excute is bearClothing.

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

 The value of bearClothing will be "scarf"

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
Lines 27-35 has a code block of if statements. line 27-28 is saying if bearChoice will equal to 1 then it will print
out the code below it. line 29-30 is a else if. That means if line 27-28 is false then line 29-30 will come and
see if bearChoice is equal to 2 if its it will print out the code below it. lines 31-32 its another else if meaning
if line 29-30 did not equal 2 then it will read line 31-32 and see if bearChoice is equal to 3. If its true then it
will print out the code below it. last is lines 33-35 which has a else statement. Meaning if lines 27-28, 29-30, and
31-32 do not match the value of bearChoice Then it will print out line 34.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If I chnaged bearChoice equal to 3 then it will print me out the variable that is equal to 3 from the if statement
in lines 24-25 which is "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
The variable doorChoice wont change because its equal to 1 and line 7-8 already gave it a input and a value that is
"hat". bearChoice variable will print me out "You tell the bear the hat is too small and it starts to cry!"

7. What is your favorite ending?
My favorite ending is "You stay with the bear and become it's best friend!" 😂
*/
