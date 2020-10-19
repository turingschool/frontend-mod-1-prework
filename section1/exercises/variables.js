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

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var potterQuote = "Harry Potter must not return to Hogwarts!";
console.log(potterQuote);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Bessie"; //string
var isHungry = true; //boolean
var numberOfPets = 1; //number in JS or integer as whole number
console.log(firstName); //"Bessie"
console.log(isHungry); //true
console.log(numberOfPets); //1

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
  /* Steve Calla - I decided to use a string for firstName.
  Alternatives would have been array (of strings) or extension if pairing was necessary.
  For isHungry it's a boolean as signified by "is..".
  For numberOfPets, it's a whole number so the data type is number in JS or integer.
  */

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Lilly";
isHungry = false;
numberOfPets = 2;
console.log(firstName); //result=Lilly
console.log(isHungry); //result=false
console.log(numberOfPets); //result=2

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks); //result = 14

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? If you had issues with doing so, ask in your pre-work channel for
  // help ASAP.
