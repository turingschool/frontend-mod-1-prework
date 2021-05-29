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
var harryStatement = 'Harry Potter must not return to Hogwarts!';

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Nate";
var isHungry = true
var numberOfPets = 22
console.log(firstName + ' '+ isHungry + ' '+  numberOfPets)

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
//ANSWER:
// Based on the names of the varibles given I could make the assumption of the best data type to use for each.
//     For the firstName varible it is clear to use a string as that is the only dataTypes that supports a string of text like a name
//     For the isHungry varible, I could have used a sting but it was better suited with a boolean because its a yes no question or ANSWER
//     For the numberOfPets varible the number data type was the obvious choice due to the name of the varible

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = 'Nathan';
isHungry = false;
numberOfPets = 28;

console.log(firstName + ' '+ isHungry + ' '+  numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
var totalSnacks = healthySnacks + junkFoodSnacks;
console.log(totalSnacks +' total snacks');

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
