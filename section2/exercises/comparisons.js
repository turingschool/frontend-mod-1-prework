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
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers)
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers)
// this should log: false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents
console.log("is numberTeachers not equal to numberStudents", numberTeachers !== numberStudents)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21)
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20)
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21)
// this should log: true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// Log the result of the comparison: is 4 less than 9?
// This should log true.

// This line of code asks to compare 2 integers to see if 4 is less than 9.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// Define variable of books as integer of 3.
// Log the result of the comparison: is 4 less than the variable books?
// This should log false.

// These lines of codes state that there are 3 books, and ask if 4 is less than the amount of books (3).

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Define variable friends as 6.
// Define variable sibligs as 2.
// Log the result of the comparison: is friends greater than siblings?
// This should log as true.

// These lines of code state that there are 6 friends and 2 siblings.
// It then asks if there are more friends than siblings, which is true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Define variable attendees as 9.
// Define variable meals as 8.
// Log the result of the comparison: is attendees not equal to meals?
// This should log as true.

// These lines of code state that there are 9 attendees and 8 meals.
// It then asks if attendees is not equal to meals. Since it is not, the console logs as true.


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
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats)

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark)

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark)

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 2)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The final line of code evaluated to true.
// I defined a "puppy" as less than or equal to 2 years old. Since that is true with this dog, AND the dog loves to play, the statement is true.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
// yes!
