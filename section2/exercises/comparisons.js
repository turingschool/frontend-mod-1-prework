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
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// this should log: false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers != numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
// The code evaluates whether the numerical value 4 is less than the numerical value 9,
// then logs the output to the console. 4 is less than 9, so `true` will be logged

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// The variable `books` is assigned the numerical value 3
// The code evaluates whether the numerical value 4 is less than the value of the variable `books`,
// then logs the output to the console.
// 4 is greater than 3, so `false` will be logged

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// The variable `friends` is assigned the numerical value 6
// The variable `siblings` is assigned the numerical value 2
// The code evaluates whether the value of the variable `friends` is greater than the value
// of the variable `siblings`, then logs the output to the console.
// 6 is greater than 2, so `true` will be logged

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// The variable `attendees` is assigned the numerical value 9
// The variable `meals` is assigned the numerical value 8
// The code evaluates whether the value of the variable `attendees` is not equal to the
// value of the variable `meals`, then logs the output to the console.
// 9 is not equal to 8, so `true` will be logged


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
// ANSWER:
// My final line evaluated to `true`
// The computer can't determine whether the dog is a puppy unless we give it a specific way to do so, so
// I added an extra comparison operator that would use the age variable to determine "puppy-ness"
// In this line of code, `lovesToPlay` is being compared with `age < 2` (a rough age cutoff for a puppy)
// Both statements are true, so the comparison evaluates to `true`

// On further reflection, I think this may be the original question though!
console.log(lovesToPlay && age);
// If we directly compare the two variables with no extra information, the output is 1.
// I did some googling, and found that the `&&` operator actually returns one of the operands
// This allows the `&&` operator to be used with non-Boolean values
// I think what is happening is that `lovesToPlay = true`, and `age != true`, so normally the expected output would be `false`
// In this case, though, `age = 1` instead of `age = false`, so `1` is returned instead

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
