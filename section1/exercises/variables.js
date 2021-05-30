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
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var warning = 'Harry Potter must not return to Hogwarts!';
console.log(warning);


// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName;
var isHungry;
var numberOfPets;
firstName = 'Nadia';
isHungry = true;
numberOfPets = 1;
console.log(firstName, isHungry, numberOfPets);
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  /*variables should be named to describe the type of information that will be assigned to them.
    In this case, firstName is a noun we are all familiar with since we all have a first name.
    Instinctually, I assigned my own name to this variable. The variable isHungry seemed to be
    a question with an expected true/false (or boolean) value or response...since I'm always hungry, I
    assigned true to this variable. Finally, since "number" is in the variable name numberOfPets the
    assigned value should be a number. I have 1 pet, so answered with 1.
  */

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = 'Steven';
isHungry = false;
numberOfPets = 2;
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
// as you would expect? Yes, I did. All printed as expected.
