/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var timeToVisit= 1;
var baseBallCap = "";
var theDecision = 1;


console.log("You enter a dark room with two doors. Do you go through #1 or #2?");
if (timeToVisit === 1) {
  baseBallCap = "nats cap";
} else {
  theDecision = "shoes";
}


console.log("You see a boy putting on a " + baseBallCap);
console.log("It looks like that " + baseBallCap + " is too small for the boy, do you...");

console.log("1. Offer your own to the boy?");
console.log("2. Point it out to the boy?");
console.log("3. Make a dash for the next room?");

if (theDecision === 1) {
  console.log("You offer the boy your " + baseBallCap + " and the boy shows you a secret passage out!");
} else if (theDecision === 2) {
  console.log("You tell the boy the " + baseBallCap + " is too small and it starts to cry!");
} else if (theDecision === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the boy and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
//This is an example of an if  statement.
It is taking into account that the variable assigned to door choice is strictly true if the bear clothing equal hat,
elsewise, the bear clothing becomes a scarf if it isn't equal.

2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//It is still hat.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
//This is showing us the conditional statements at work. This is a strict equality test to see which condition
gives us back which response depending upon the conditional statements based on the values assigned to each variable.
This is another if...else statement within the curly brackets are run to see which line of code is true (equal).  The test is being run and we are told which response we will get from
running the statements in our console.log. Depending on if the condition is true when the code is run then that option
is the answer we get in turn, if it is false, then the second code block is run to see if that condiiton is true.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If this is changed then the result will change from the first if statement to the 3rd if statement.

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
If this is changed then the result will change from the first if statement to the 2nd  if statement.

7. What is your favorite ending?
//The ending where the bear shows me out as I have a phobia of bears and think it is unlikely we would become besties in any scenario.
And yes, I know, being someone who loves the outdoors and often hikes solo makes this highly ironic.
*/
