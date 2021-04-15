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
console.log(numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log(numberTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log(numberTeachers === stringTeachers);

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
console.log(numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log(numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// This line of code is going to print out a comparison of the numbers 4 and 9.
// It is going to evaluate if 4 is less than 9 because it is using the less-than-operator.
// The console will log "true" because 4 is in fact less than 9.

var books = 3;
console.log(4 < books);
//  A variable labeled "books" was created and assigned a value of 3.
// we are going to then log a comparison that is evaluating if the value of books is greater than 4,
// (or if 4 is less than the value of the variable 'books').
// The console will log an output of false because the value (3) of "books", is in fact less than 4.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// Two variables have been established and each given an identifier and assigned a value.
// The vaiable of "friends" is assigned a value of 6. The variable "siblings" is assigned a value of 2.
// The code is going to log a comparison between the two variables by deciding if the value of "friends" is
// greater than the value of "siblings".
// Since the value of "friends" (6) is greater than the value of "siblings" (2),
// the console will log, true.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// Two variables have been established and each given an identifier and assigned a value.
// The vaiable of "attendees" is assigned a value of 9. The variable "meals" is assigned a value of 8.
// The code is going to log a comparison between the two variables by deciding if the value of "attendees" is
// not equal to the value of "meals".
// Since the value of "attendees" (9) is greater than the value of "meals" (8) and not equal to it,
// the console will log, true.


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
console.log(lovesToPlay && age < 2);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line logged "true". I made a determination to whether it's true that the dog loves
// to play AND if it is in the puppy age range still (which I believe is 0 to 2). Both are true because the
// value of "lovesToPlay" is already set to true and the comparison of the value (1) of the variable "age" being less
// than 2 (end of puppy age) is also true.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
// Yes, all good!
