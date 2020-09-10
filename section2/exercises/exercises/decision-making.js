/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 2;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "chopine";
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

Line 14 is comparing the value assigned to the variable 'doorChoice' to the value 1. It is asking if the the value of doorChoice is strictly equal to 1. This is the condition. Line 15 lays out what value to assign to 'bearClothing' and should be logged with the string in line 20 in the condition that line 14 returns a value that is not 'true'. Line 16 begins telling the computer what it should do in the condition that line 14 returns anything except 'true'; line 17 gives the value that should be assigned to 'bearClothing' in the condition line 14 returns anything except for 'true'; and line 18 closes out the block of code.

2. What variable has a new value assigned to it after the first if statement executes?

bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?

'chopine'

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.

Line 27 asks if the value assigned to 'bearChoice' is strictly equal to 1. Line 28 gives the command to log a concatenated string in the condition that line 27 returns a value of 'true'. Line 29 asks if the value assigned to 'bearChoice' is strictly equal to 2. The computer will only run this comparison if the condition layed out in line 27 returns any value except for 'true'. Line 30 gives the command to log a concatenated string in the condition that line 29 returns a value of 'true'. Line 31 asks if the value assigned to 'bearChoice' is strictly equal to 3, and this comparison will only run if both lines 27 and 29 return values of anything except for 'true'. Line 32 gives the command to run a concatenated string in the condition that the comparison in line 31 returns a value of 'true'. Lines 33 and 34 tell the computer that in the condition that the comparisons in lines 27, 29, and 31 all returned values other than 'true', then it should log a concatenated string, but the command will only be read if and only if lines 27, 29, and 31 ALL return values other than 'true'.

(As a quick note, I understand that those comparisons can only return values of 'true' and 'false', but it helps me to think of the 'if' function as only looking for one specific value, 'true', and it basically would read any value that isn't 'true' as essentially 'not true'. Like, there is only one correct answer to its question and infinite incorrect answers rather than one correct answer and one incorrect answer.)

5. If you changed the variable bearChoice to equal 3, what will the final outcome be?

The console will log the string "You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?

The console will log the string 'You tell the bear the hat is too small and it starts to cry!'

7. What is your favorite ending?

Easily the bearChoice = 1. You've now befriended a bear who shows you A SECRET PASSAGE?! I mean COME ONE!! It's a mutually benefical relationship. You've proven to the bear that you care by offering a hat. The bear has helped you out of a tight spot with a SECRET FREAKIN PASSAGE?! Who doesn't love a secret passage?! And clearly anyone ending up in a house with an emotionally unstable, behatted bear and hidden snake rooms isn't the type to shy away from adventure. This isn't your first rodeo and it's probable that it won't be your last. Your're gunna needed allies, and your first is a bear. That's pretty rad. This plot is thicker than we could've imagined. I'm crossing my fingers for a sequal and a video game interpretation.
*/
