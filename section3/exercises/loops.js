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

//Rather than loging to the console the variable i is equal to 0, 1, and 2, separately
//it is easier and faster to write a loop that declares initially the condition that value of the variable i at
//0. Then makes another conditon that compares the value of i as true as long as it is less that 3.
//Then the value of i is shown to express itself in incriments that looks like i++.  Fromt here,

//it is only logged to the console that i under all the conditions stated should return value.  Once those conditions
//no longer apply, i.e. i is greater than or equal to three, there should be a return value of false
//which means no more output.


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:

for (var i = 0; i < 7; i++ {
  console.log(2 + 2)
}
//expected return: the number 4 listed 7 times

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
 for (var i o= 0; i <10; i++) {
   console.log("She sells sea shells down by the seashore")
 }



//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

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
  console.log("This is loop number:" + " "+ i)
}

// Not sure? Try to google some terms that seem relevant. Play around with it. Don't spend
// more than 15 minutes without making progress. If you are at 15 minutes and haven't made
// progress, that means it's time to reach out to your pre-work group on Slack!
