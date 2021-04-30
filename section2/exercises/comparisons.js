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
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: "Is numberTeachers less that numberStudents?" true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: "Is numberTeachers equal to stringTeachers?" true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("Is numberTeachers strictly equal to stringTeachers", numberTeachers === stringTeachers);
// this should log: "Is numberTeachers stictly equal to stringTeachers?" false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: "Is numberTeachers not equal to numberStudents?" true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: "Is numberStudents greater than or equal to 20?" true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: "Is numberStudent greater than or equal to 21?" false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: "Is numberStudents less than or equal to 20?" true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: "Is numberStudents less than or equal to 21?" true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: This is using a comparision operator to compare variables and determine if 4 is *less than* 9
// then return a boolean value of true or false. This comparison will evaluate to true.

var books = 3;
console.log(4 < books);
// YOU DO: This will declare *books* as the variable name and *3* as the assigned value, so that what is being evaluated
// will read "Is 4 less than 3?". This uses a comparison operator of < and returns the boolean value
// of false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Declares *friends* as variable name and *6* as the assigned value. Declares *siblings* as a named
// variable and *2* as the assigned value. The console.log says "Is friends greater than (comparison operator) siblings?"
//(friends > siblings); (6 > 2); The return will be a boolean value of true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Declares *attendess* as variable name and *9* as the assigned value. Declares *meals* as a named
// variable and *8* as the assigned value. The console.log says "Are attendees not equal to (comparison operator) meals?"
//(attendees !== meals); (9 !== 8); The return will be a boolean value of true.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework); // false
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);// true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("lovesToPlay" && "lovesTreats"); // true

// Determine if the dog loves to play and loves the dog park
console.log("lovesToPlay" && "lovesDogPark"); // false

// Determine if the dog loves to play or loves the dog park
console.log("loveToPlay" || "lovesDogPark"); // true

// Determine if the dog loves to play and is a puppy
console.log("loveToPlay" && "age"); // 1

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: It evaluates to 1. I think this is because the computer has not been told
// what a puppy is and given specific numbers to evautate what if 1 is a puppy age or not.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
