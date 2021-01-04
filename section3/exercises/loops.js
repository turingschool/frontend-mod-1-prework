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
//0
//1
//2

//The code sets the variable i equal to one. It then checks to see if 0 is less
//than 3. Since 0 is less than three, the console will log the value of
//i, in this case zero. The loop then adds 1 to the value of i and repeats the
//the loop. The loop continues until i is equal to 3. Once i is equal to 3, it
//exits the loop without printing 3 since the condition is now false.

 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
var sum = 2 + 2;
for (var i = 0; i < 7; i++) {
  console.log(sum);
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
 var shells = 'She sells seashells down by the seashore';
 for (var i = 0; i < 10; i++) {
   console.log(shells);
 }


//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.
var loop = "This is loop number ";
for (var i = 0; i < 5; i++) {
  console.log(loop + i)
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

for (var i = 10; i > 0; i--) {
  console.log(i);
}

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
