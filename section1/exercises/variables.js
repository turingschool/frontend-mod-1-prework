/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete any remaining prompt.

When navigated to the root of this project directory, you should be able to run this file from your terminal with the command `node section1/exercises/variables.js`
*/

// EXAMPLE: Write code below to assign Harry Potter's name to a variable and log that variable to the console:

var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and log the result:

var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
//Log that variable to the console.

var decree = 'Harry Potter must not return to Hogwarts!';
console.log(decree);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
// Store the appropriate data types in each.
// Log all three variables to the console.
var firstName = 'Bob';
var isHungry = true;
var numberOfPets = 6;
console.log(firstName, isHungry, numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
// Explain.

// I used a string for `firstName` because names are composed of letters. I used boolean for 'isHungry' because the name implies a yes (`true`) or no (`false`) value. I used a number for 'numberOfPets' because the name indicates a number is required, although you could also write the number as a string (e.g., 'six').

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different values (but same data type).
// Log all three variables to the console.

firstName = 'Jane';
isHungry = false;
numberOfPets = 3;
console.log(firstName, isHungry, numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:

var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the consoleas you would expect?

// Yes!
