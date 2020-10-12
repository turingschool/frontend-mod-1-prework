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
var hpWarning = "Harry Potter must not return to Hogwarts"
console.log(hpWarning);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName    = "Julia";
var isHungry     = true;
var numberOfPets = 1;


console.log(firstName, isHungry, numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
// Explain.

// In order to write my name or any name you use letters. Letters can only be
// used in a string. That is why I chose to use the string data type for firstName
// isHungry is a yes or a no variable so using a boolean seemed like the best choice.
// Since I only own one dog it made sense to use the number data type to declare a
// value for numberOfPets.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
// values (but same data type).
// log all three variables to the console.
firstName    = "Hannah";
isHungry     = false;
numberOfPets = 2;

console.log(firstName, isHungry, numberOfPets);


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks  = 6;
var junkFoodSnacks = 8;

console.log(healthySnacks + junkFoodSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? If you had issues with doing so, ask in your pre-work channel for
// help ASAP.
