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
var name = "Harry Potter";
console.log(`"${name} must not return to hogwarts!"`);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Raquel";
console.log(firstName);

var isHungry = true;
console.log(isHungry);

var numberOfPets = 1;
console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
  I used a string for var firstName because the variable uses text.  The "" allow for the data to be recognized
  as a string and not a number or variable name.

  For var isHungry I used Boolean.  A boolean is either true or false, so moving forward if my hunger status changes I can either
  assign the variable true if I am hungry, or flase if I am not hungry.

  For var numberOfPets I used a number.  I used a number because the variable name specified that it was wanting to know
  the number of pets I have.



// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
var firstName = "Stephanie";
console.log(firstName);

var isHungry = false;
console.log(isHungry);

var numberOfPets = 10;
console.log(numberOfPets);


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
console.log(healthySnacks);

var junkFoodSnacks = 8;
console.log(junkFoodSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
