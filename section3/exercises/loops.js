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
// EXPLAIN: In this example, the log is 0 then on the next line 1 then on the next line 2.
// Let's talk about why. First, the for statement will execute 3 times because i < 3.
// Second, the code prints out i three time because the statement executes a log to print.
// Third, i represents three different values because i is incremented by 1 for each loop instance.
// Finally, i is logged as 0 then 1 then 2 because i starts at 0 in the variable assigment i = 0.
// I suggest you change the value of i at i = 0 or the evaluation statement i < 3 to practice with various outcomes.
// Good luck!!


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
//log the sume of 2 plus 2 7 times; create a loop to calculate 7 times
for (var i = 0; i < 7; i++) {
  console.log(i + 1,") 2 + 2 =", 2+2); //add a line number and text for context and quality control
}

 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.

 for (var i = 0; i < 10; i++) {
   console.log(i+1,"She sells seashells down by the seashore"); // add a line number to count & quality control
 }

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: "
//that concatenates with `i`.

//run code 10 times listing out the loop number
for (var i = 0; i < 10; i++) {
  console.log("This is loop number", i + 1);
  // added 1 to i since it starts at zero
  //alternatively i could have started i at 1 and changed the i < 10 to 11
  //or <=10 rather than i + 1 in the statement
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

//run code 10 times with output listed at "//" + the loop number
for (var i = 10; i >= 1; i--) {
  console.log("//", i);
  //used for statement countdown and decrementer i--
  //to generate the appropriate number of loops and i value
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
