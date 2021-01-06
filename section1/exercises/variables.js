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
console.log(enrolledStudents + 2);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var message = " must not return to Hogwarts!";

console.log(name + message);

/* since theres already a name variable above we just have to call it down here and add the
message variable to the log*/

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Eva";
var isHungry = true ;
var numberOfPets = 3 ;

console.log(firstName + " has " + numberOfPets + " pets." + " Are they hungry? " + isHungry);


// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  /* Explain. I decided to use a string for firstName since the variable name is very specific
  and a string is the easiest datatype for a name. The isHungry i decided to use a boolean because that data type can change from attribute
  to false and a boolean is easiet to change (I admit i didnt know how i could log it to the console i hope i did ok in my example)
  The numberOfPets I decided to use an integer as im giving a quantity of the amout I have */


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Aria";
isHungry = false ;
numberOfPets = 2;

console.log(firstName + " has " + numberOfPets + " cats. ");

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

console.log(healthySnacks + junkFoodSnacks );
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? If you had issues with doing so, ask in your pre-work channel for
  // help ASAP.
