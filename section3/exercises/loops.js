/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// LEVEL 1: Loops
//-------------------

// EXAMPLE: Write code that logs to the console "I love hedgehogs!" 9 times:
for (var i = 0; i < 9; i++) {
  console.log("I love hedgehogs!");
}

// EXAMPLE: Write code that logs to the console the value of `i`, 3 times:
for (var i = 0; i < 3; i++) {
  console.log(i);
}

// What is logged to the console for this second example? Why?
// EXPLAIN: console logs 0 1 2. The code instructions tell the console to log
// [i] which is a number placeholder for the data in an array, with
// the first place in the counter defined as 0 in the condition set.


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
 var mySum = (2 + 2);
 var i;

 for (i = 0; i < 7; i++) {
   console.log('2 + 2 =', mySum);
 }

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.

var myString = 'She sells seashells down by the seashore';
var i;

for (i = 0; i < 10; i++) {
  console.log(myString);
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
var myString1 = 'This is loop number:';
var i;

for (i = 1; i < 11; i++) {
  console.log(myString1, i);
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

var i;

for (i = 10; i > 0; i--) {
  console.log(i);
}


// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
