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
  console.log("I love hedgehogs!", i);
}

// EXAMPLE: Write code that logs to the console the value of `i`, 3 times:

for (var i = 0; i < 3; i++) {
  console.log("I love hedgehogs!", i);
}

// What is logged to the console for this second example? Why?
// EXPLAIN:

/*
stamenet with a "I love hedgehogs!" and 'i' to run tree times.
its called loop, and loop can run value as far its 'true', and value of 'i' less than 3.
to run it 3 times we put it in a for loop as exercise above.
As long as (i < 3) for loop executes the statement.
*/
 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:

 for (var i = 0; i < 7; i++) {
   console.log(4, i);
 }

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.

for (var i = 0; i < 10; i++) {
  console.log("She sells seashells down by the seashore", i);
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

var str = "This is loop number:"
for (var i = 0; i < 10; i++) {
  console.log(str)
}

// YOU DO: Using a for loop, how could you get an output that looks like this:


for (var i = 10; i >= 1; i--) {
 console.log(i)
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
