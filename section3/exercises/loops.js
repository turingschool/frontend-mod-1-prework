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
// EXPLAIN:
/*
Our code is logging the value of variable i to the console - in this case logging
the numbers '0', '1', and '2'.  This is because we're initializing var i at 0,
and then in each subsequent pass through the loop checking the condition (to see that this
value is less than 3), executing our code (console.log), and incrementing our
counter by 1.  So our code is executed three times before the counter hits 3 and
the loop ends.
*/

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
var sum = 2 + 2;

for (var i = 0; i < 7; i++) {
  console.log(sum);
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.

var string = "She sells seashells down by the seashore";

for (var i = 0; i < 10; i++) {
  console.log(string);
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

var string = "This is a loop number: "

for (var i = 1; i <= 5; i++) {
  console.log(string + i)
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

for (var i = 10; i > 0; i--) {
  console.log(i);
}

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

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
