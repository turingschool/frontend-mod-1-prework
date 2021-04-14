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
var harry = "Harry Potter must not return to Hogwarts!";
console.log(harry);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Matt"
var isHungry = true;
var numberOfPets = 1;

console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

  /*
- For 'firstName' I  deduced that it was looking for a string to be the data type
based off of the variable's name/identifier. A name can be any set of characters,
as can a string (as long as everything is inside of quotes, "..." or '...')

- For 'isHungry' I decided that the phrase "isHungry" can be looked at as a question
with binary results (yes or no). Since at the moment I was in fact hungry, I gave the
value of true.

Note: I actually went back and tried different values for the data type,
for emaxple I tried...

"var isHungry = yes;
console.log(isHungry); ---> this resulted in a Syntax Error in Terminal."

I also tried using a Not Equal operator to see what happened.
"var isHungry != true;
console.log(isHungry); ---> this also resulted in a Syntax Error in Terminal."

- For 'numberOfPets' I reasonably decided that a Number data type would be best
because if the variable identifier is looked at as a question, it is asking,
"what is the number of pets?". I figured the most simple way to answer this is by
using a number data type.

   */


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Matthew";
isHungry = false;
numberOfPets = -10.375;
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

console.log(healthySnacks + junkFoodSnacks);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
