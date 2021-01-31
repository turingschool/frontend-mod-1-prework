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
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

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
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//The above code logs the result of the question is the number 4 less than the number 9. The result will
//be true.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// The above code declares the variable books and assigns is a value of 3. It then logs the result of the
// question is the number 4 less than the value of the variable books. This will log a result of false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// The above code declares the variable friends and assigns it a value of 6. It also declares the
// variable siblings and assigns it a value of 2. It then logs the result of a comparison of these
// variable values, specifically asking if the value of friends is less than the value of siblings. This
// will log the result of true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// The code above declares the variable attendees and assigns it a value of 9. It also declase the
// variable meals and assigns it a value of 8. It then logs the result of the comparison of these two
// values, specifically answering the question is the number of attendees not equal to the number of
// meals. This will log the result true.


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
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
console.log(lovesToPlay && age);
console.log(lovesToPlay && isPuppy);

/* What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// I ran this code two different ways, and have included the second below the first.

/* For the first example, I called the variable age to compare to lovesToPlay. The && logical operator returned a value of 1 (the value of the age variable) because && and || do not always return strict Boolean values, and both always return value of one of the operand expressions. Because Javascript converts values into numbers when comparing different datatypes, it coerced the true value of lovesToPlay to 1 (which can mean true in Javascript). In essence, I asked the computer if the dog lovesToPlay (true/1) and is 1 year old. This resulted in the number 1 being logged to the console. We implicitly know that 1 year old is a puppy age, but to be precise, we should also define what "is a puppy" means.

For my second example, I explicitly typed isPuppy as a condition, aka a variable that does not exist. This produced an error message, alerting me to that isPuppy is undefined. This is expected.
*/

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? */
