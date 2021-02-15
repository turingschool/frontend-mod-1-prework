/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
`node section2/exercises/comparisons.js`
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
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

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
console.log("Is numberTeachers not equal to stringTeachers?", numberTeachers !== stringTeachers);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
/*
In this line of code we are comparing two numbers inside of a console.  We have "4" in the left side and "9" in right side,
in between, we have a comparison operator "<". In this case the program will ask the next question to find the answer:
"Is 4 less than 9 ?". As comparisons work with "Boolean" data type, when we decide to run this line of code the program
will log "true", due to 9 is a higher number than 4.
*/

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/*
For this scenario we have a stablish variable called "books" with a "3" as its variable value. Meanwhile in the next
line of code the console will do a coomparison beetwen two values, a number and the "books" variable, as we already
mention before 3 is the value from this variable. So the question would be: "Is 4 less than 3?". For this question we
only have two answer "true" or "false" which would be the one for this mathematical comparison.
 */

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/*
This situation is pretty similiar with the previous one. The console is comparing two values (friends > siblings),
but in this occasion both of the values has been assign to a variable. As we can see, the previously lines of codes
has stablish the variables. The first variable is called "friends" and the value is "6", the next variable is called
"siblings" and the value is "2". Having said that, the comparison's question would be: "Is 6 greater than 2?". Due to
6 is a higher number than 2, the answer would be "true".
*/

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/*
In the console we have a similar scenario than the one above, but the difference is based on the comparison operator.
"!==" means Not Equals. The question for this situation would be: "Is attendees not equal to meals?". Because of the assign
values for the variables are not the same, the answer would be "true".
*/

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
console.log(lovesToPlay && puppy);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
/*
I believe that in this last line of code we have to "Defind puppy" adding one more variable and making a comparison to
determinate the answer. We already know the "age = 1" but we have to create a variable called "puppy" and assign a
variable value. After that we have to create a "equal" or "not equal" comparison between the age and puppy variables,
to determinate if "puppy" is equal or not equal to age, and base on that we can solve the last line of code.
var puppy = " ";
console.log(age "===" or "!==" puppy);
*/
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
