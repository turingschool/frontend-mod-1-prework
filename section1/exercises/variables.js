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
var warning = "Harry Potter must not return to Hogwarts!"
console.log(warning)

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Nichele "
var isHungry = "likes tacos"
var numberOfPets = ", and has four pets"
console.log( firstName + "is hungry, " + isHungry + numberOfPets )

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
  //Looking at the variable names, I wanted to log a string that would create a statement referring to each variable.
  //For each variable I chose a string, then used a + to join the strings.
  //However, there isn't a space between the output strings...
  //Updated to add punctuation in the variable assignments

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Jim "
isHungry = "likes pizza, "
numberOfPets = "and has one pet lizard."
console.log( firstName + "is hungry, " + isHungry + numberOfPets)

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks)

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? If you had issues with doing so, ask in your pre-work channel for
  // help ASAP.
