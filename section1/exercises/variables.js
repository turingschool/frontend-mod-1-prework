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
var hPReturn = 'Harry Portter must not return to Hogwarts!';

console.log(hPReturn);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = 'Paul';
var isHungry = (2 === 3);
var numberOfPets = 1;

console.log(firstName);

console.log(isHungry);

console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.
/*
 1. There are no numbers in my name, I am not named "True" or "False", nor is my name split
     up into a list(array) of some sort. Therefore, a string data type is my only option.
 2. I cannot answer if I am hungry or not by using a number. I can answer this question using
     a string (ex. "No, I am not") or a boolean (true or false). At first, I answered this
     question with the above mentioned string, and only changed my answer upon a) remembering
     that this particular variable name had been used to teach us about booleans and b) recognizing
     that the variable names given follow the pattern of one string, one boolean, and one
     number seen elsewhere in various lessons/work. Technically, this could also be answered using
     an array (ex. ["Yes", ",", " ", "I", " ", "am", "!"]) but using this data type would be
     visually confusing (unless concatenated); for this reason (and the reasons given above for why
     I chose a boolean data type), I opted not to use an array.
 3. I could use a string or a number to provide an appropriate value for this variable, and even
     an array would work. The reasons given for my choice of data type in variable #2 apply
     here as well, at least in principle, so I chose to use a number.
*/
// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "Shlemp";
isHungry = ((11 - 3) != (22 + 6));
numberOfPets = 777;

console.log(firstName);

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
// as you would expect?
