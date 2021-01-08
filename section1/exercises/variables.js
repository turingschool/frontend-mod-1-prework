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
var dobbySays = "Harry Potter must not return to Hogwarts!";
console.log(dobbySays)

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Kendall";
var isHungry = true;
var numberOfPets = 0;
console.log(firstName, isHungry, numberOfPets);
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
  /*
For the first variable, I decided to use a string data type because generally first names are made up of text,
and strings are the data type that can include letters and are used to convey text.
For the second variable, isHungry is like asking the question "Are they hungry?", which invites a
yes or no response. A yes/no response can also be answered as true or false. For this reason, I used
a boolean data type for this variable.
For the third variable, the variable name indicates that the value will be the number of pets, and you can't
have a fraction of a pet. Therefore, the integer data type is the appropriate one to use.
  */


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Madison";
isHungry = false;
numberOfPets = 12;
console.log(firstName, isHungry, numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? If you had issues with doing so, ask in your pre-work channel for
  // help ASAP.
