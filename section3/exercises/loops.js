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
// This code will log the incremented numbers. In the first line, following the keyword for, the initialiation
// tells the computer what i should equal, 0, followed by the condition that as long as i is less than 3, the statement
// should run. Next, the incrementer tells the computer to repeat the loop, adding one to i with
// each iteration. Finally, the computer is told to log the output of i, which will naturally
// occur for each loop, until the condition is no longer `true`. This iteration will stop at 2, because 2 is less
// than 3.

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
for (var i = 0; i < 7; i++) {
  console.log(2+7);
}


 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var i = 0; i < 10; i++) {
  console.log("She sells seashells down by the seashore")
}


//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
for (var i = 0; i < 7; i++) {
  console.log("This is loop number " + i);
}

// The first time I did this one, I had brackets around i, like so: [i], but this works
// w/out the brackets. Is there a reason one would/would not use a bracket in this situation?

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

for (var i = 10; i >= 0; i--) {
  console.log(i)
}

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
