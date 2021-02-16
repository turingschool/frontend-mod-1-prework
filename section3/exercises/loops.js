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
// EXPLAIN: In the second example, the numbers '0', '1', and '2' are logged into the console.
// This happened because the loop requested that the value of 'i' throughout the loop be logged,
// and in this situation, the loop is set for i starting at '0' and set through i being less than 3,
// which results in i=0, i =1, i=2, stopping there since i cannot equal 3.
// (This is not eloquently explained.....it's just as simply as I understand it!)


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
var nums = '2'+'2'
for (var i = 1 ; num <= 7; i++) {
  sum = sum + num
}
  console.log("The total is: " + sum)


 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var i = 0; i < 10; i++) {
  console.log('She sells seashells down by the seashore')
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

for (var i = 0; i < 1; i++) {
  console.log("This is a loop number: " + 'i')
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

for (var i = 10; i >= 1; i--) {
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
