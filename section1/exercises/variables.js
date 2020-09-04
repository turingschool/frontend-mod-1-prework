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
var noHarry = "Harry Potter must not return to Hogwarts!"
console.log(noHarry)


// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Jahara"
var isHungry = "sometimes"
var numberOfPets = 0
console.log(firstName)
console.log(isHungry)
console.log(numberOfPets)

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
// I decided firstName should be a string because people's names are rarely booleans
//or numbers. I thought about making isHungry a boolean but I didn't know what
// numbers I would use and I think these variables are going to end up in a
// human-readable sentences, which makes a boolean seem like a weird chioice.
// numberOfPets was an easy choice because it should be a physical number.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Jane"
isHungry = "occasionally"
numberOfPets = 2;
console.log(firstName)
console.log(isHungry);
console.log(numberOfPets);



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
/* My code ran, just not the way I thought it would at first. Initially, I forgot to relog the second
set of variables after I renamed them and I had an "=" in my last console.log so it didn't run to give
a total, but after I fixed those two things, I was able to use node in the terminal and it did
exactly what it was supposed to! */
