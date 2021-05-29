/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?" , numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("Is numberTeachers equal to stringTeacher?" , numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false

console.log("Is numberTeachers strictly equal to stringTeachers" , numberTeachers === stringTeachers)

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers != numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?" , numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?" , numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?" , numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?" , numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//This command is logging to the console whether its true/false that 4 is less than 9
var books = 3;
console.log(4 < books); //Edited 'console.logs' to 'console.log' removing 's' on the end of the command
// YOU DO: Explain.
// First off 'console.logs' as given to us isn't a working command in JavaScript although a typo it will break all the code below
// This is checking if the variable books value is less than 4 and logging it to the console

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// This is checking the variables friends and siblings. It checks if friends value is greater than siblings value

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Inside the console.log you are checking if variables attendees and meals is first the same datatype with 2 = symbols
// After confirming the same datatype the command is comparing and seeing if the attendees value is NOT equal to meals value
// Because they don't equal the same amount (8,9), this should return false


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 2;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("Does the dog love to play and love treats?" ,lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log("Does the dog love to play and love the park?", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play or love to go to the dog park?" , lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy

// N8sCOMMENT: Nothing defines the age of a puppy. New variable defined testing if the age value is less than 2
var isPuppy = age <= 1;
// N8sCOMMENT: IS THE DOG A PUPPY?
console.log("Is the dog a puppy?" , isPuppy);
console.log("Is the dog a puppy and does it love to play?", age && lovesToPlay);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
 // Because the age variable is stored as an integer when age is anything greater than 0, I assume it acts as a true boolean value.
 // If the age number is set to 0 it returns 0 as the value of age&&lovesToPlay. Which doesn't add up to answer the question asked
 // Because of this I had to add another boolean variable, defining whether the age is a low enough value to deem the dogs age as PUPPY
 // Simply, I added var isPuppy, and asked if the age was less than or equal to 1.
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
