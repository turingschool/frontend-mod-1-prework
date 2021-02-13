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
var warningMessage = "Harry Potter must not return to Hogwarts!";
console.log(warningMessage);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Dean";
var isHungry = true;
var numberOfPets = 3;

console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

/* For the first variable, I went with a string because my name can only be stored as a
piece of text-- it's not a number, and it's not a true/false binary. For the second, I
went with a boolean because being hungry is a binary state-- you're either hungry or
you're not. And for the third, I went with a number because it's a number-- I have 1 cat
and 2 fish for a total of 3 pets, so using a string wouldn't make much sense.*/


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
isHungry = false;
warningMessage = "Error 404";
enrolledStudents = 23;

console.log(isHungry);
console.log(warningMessage);
console.log(enrolledStudents);


// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

var totalSnacks = healthySnacks + junkFoodSnacks;
console.log(totalSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
