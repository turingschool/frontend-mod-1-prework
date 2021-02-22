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
//FYI this isn't doing what the example description is asking for
// would that be:
// var students = 20
// console.log(students + 2)

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var doNotReturn = 'Harry Potter must not return to Hogwarts!';
console.log(doNotReturn); // Harry Potter must not return to Hogwarts!
// do you mean assign when you say save?

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`. 
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName;
var isHungry;
var numberOfPets;
firstName = "Harry"; // string
isHungry = true; // boolean
numberOfPets = 1; // number
console.log(firstName, isHungry, numberOfPets); // Harry, true, 1
//I interpreted the directions to say declare first, then assign values. Hopefully I read it correctly.

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above? 
  // Explain.
// I chose to use a string for firstName because a name is text.
// I chose to use boolean for isHungry because it's a true or false statement.
// I chose to use a number for numberOfPets because it wants a number as a response.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different 
  // values (but same data type).
// log all three variables to the console.
var firstName;
var isHungry;
var numberOfPets;
firstName = "Harry"; // string
isHungry = true; // boolean
numberOfPets = 1; // number
firstName = "Hermione"; // string
isHungry = false; // boolean
numberOfPets = 5; // number
console.log(firstName, isHungry, numberOfPets); // Hermione, false, 5

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks); // 14

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console 
// as you would expect? 
// Answer: I did and it did.
