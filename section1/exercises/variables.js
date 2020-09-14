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
var dobbyWarning = "Harry Potter must not return to Hogwarts!";
console.log(dobbyWarning);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Ilsa";
var isHungry = false;
var numberOfPets = 1;
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
  /* I thought about what kind of meaning + function each variable might have.
  A name is going to be made up of letters, which  (unless in certain combinations)
  only have meaning to the computer as unicode characters, so I set firstName
  equal to a string. I could have chosen another string, maybe the name of a hungry
  individual, for isHungry, but I though it would be more interesting to have
  it be a statement about an object that is either true or false (a boolean), so that
  (some hypothetical) code could be responsive to its truth value. As for
  numberOfPets, number is in the name of the variable, and though you can write
  numbers as strings, I wanted this variable to be arithmetically manipulatable
  as the number it is (not according to the unicode of its digits). */


// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Georgia";
isHungry = true;
numberOfPets = 2;
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;

console.log(6 + 8);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? If you had issues with doing so, ask in your pre-work channel for
  // help ASAP.
  /* Done! */
