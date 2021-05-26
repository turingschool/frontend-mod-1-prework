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
// EXPLAIN:It is going to count from 0 to 2. The reason why is because the first itteration will start on 0 becuase 0 is less than 3.
// from there it will log 0 to the console, and then it will incriment i by 1 so it will become 1. It will then repeat the process first check
// if 1 is less than 3 which it is, It will log i to the console which is 1. It will again inciment i by 1 making i now 2. this process will continue
//one last time. at the end of this itteration it incriment i to 3. it will check if i which is 3 is less than 3 which it is not, so it will not 
//perform the console log and terminate the loop. 


 // YOU DO: Write code below that logs to the console, the sum of 2 plus 2, 7 times:
  for (var i = 0; i < 7; i++){
    console.log(2+2);
  }



 // YOU DO: Write code below that logs the String 'She sells seashells down by the seashore'
 // 10 times.
for (var i = 0; i < 10; i++){
  console.log('She sells seashells down by the seashore');
}

//-------------------
// LEVEL 2: An Added Layer of Challenge
//-------------------

// YOU DO: Write code below that logs to the console a String of "This is loop number: " 
//that concatenates with `i`.

for (var i = 0; i < 3; i++){
  console.log( `This is loop number: ${i}` );
}

// YOU DO: Using a for loop, how could you get an output that looks like this:

for (var i = 10; i > 0; i--){
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
