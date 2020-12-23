/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);
  // expected output: Harry Potter

// EXAMPLE: Write code below to assign 22 to the variable `enrolledStudents` and
// log the result:
var enrolledStudents = 22;
console.log(enrolledStudents);
  // expected output: 22

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
var snapesWish = "Harry Potter must not return to Hogwarts!";
// log that variable to the console.
console.log(snapesWish);
  // expected output: Harry Potter must not return to Hogwarts!


// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
var firstName = "Eric";
var isHungry = true;
var numberOfPets = 2;
// log all three variables to the console.
console.log(`${firstName}, ${isHungry}, ${numberOfPets}`);
  // expected output: Eric, true, 2

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
  // I decided to use a string for the first variable (firstName) because it contains a set of letters describing my name.
  // The variable name isHungry begs the question true or false, so a boolean data type was used for the second variable.
  // Lastly, numberOfPets is most likely looking for a number for its value, so an integer was assigned to the variable numberOfPets.


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
firstName = "Jim";
isHungry = false;
numberOfPets = 1;
// log all three variables to the console.
console.log(`${firstName}, ${isHungry}, ${numberOfPets}`);
// we can use the exact same console.log statement here as Javascript will read from top to bottom and the values here will be reassigned after our latest declarations.
  // expected output: Jim, false, 1


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);
  // expected output: 14; 6 + 8 = 14


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? If you had issues with doing so, ask in your pre-work channel for
  // help ASAP.
  // Everything checks out!  
