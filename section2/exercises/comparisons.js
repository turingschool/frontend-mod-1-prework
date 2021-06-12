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
var stringTeachers = '4';
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?

console.log('Is numberTeachers greater than numberStudents?', numberTeachers > numberStudents);
// This should log: 'Is numberTeachers greater than numberStudents?' false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?

console.log('Is numberTeachers less than numberStudents?', numberTeachers < numberStudents);
// This should log: true

// YOU DO: Log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)

console.log('Is numberTeachers equal to stringTeachers?', numberTeachers == stringTeachers);
// This should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer, this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to perform this evaluation
*/

// YOU DO: Log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)

console.log('Is numberTeachers strictly equal to stringTeachers?', numberTeachers === stringTeachers);
// This should log: false

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable. Since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?

console.log('Is numberTeachers not equal to numberStudents?', numberTeachers != numberStudents);
// This should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?

console.log('Is numberStudents greater than or equal to 20?', numberStudents >= 20);
// This should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?

console.log('Is numberStudents greater than or equal to 21?', numberStudents >= 21);
// This should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?

console.log('Is numberStudents less than or equal to 20?', numberStudents <= 20);
// This should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?

console.log('Is numberStudents less than or equal to 21?', numberStudents <= 21);
// This should log: true


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment, in English, explaining what that line of code is doing, including what the comparison will evaluate to. Be as technically precise as possible, but don't just copy and paste a definition from the readings. Make sure YOU can explain it that way!

console.log(4 < 9);

//YOU DO: Explain.

// Log the result of the comparison: Is `4` less than `9`?
// This should log: `true`

var books = 3;
console.log(4 < books);

// YOU DO: Explain.

// Declare the variable `books` and assign it `3`.
// Log the result of the comparison: Is `4` less than `books`?
// This should log: `false`

var friends = 6;
var siblings = 2;
console.log(friends > siblings);

// YOU DO: Explain.

// Declare the variable `friends` and assign it `6`
// Declare the variable `siblings` and assign it `2`
// Log the result of the comparison: Is `friends` greater than `siblings`?
// This should log: `true`

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);

// YOU DO: Explain.

// Declare the variable `attendees` and assign it `9`
// Declare the variable `meals` and assign it `8`
// Log the result of the comparison: Is `attendees` not strictly equal to `meals`?
// This should log: `true`


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

console.log('Are both `lovesToPlay` and `lovesTreats` true?', lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park

console.log('Are both `lovesToPlay` and `lovesDogPark` true?', lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park

console.log('Is either `lovesToPlay` or `lovesDogPark` true?', lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log('Are both `lovesToPlay` and `age` less than or equal to `1.25` true?', lovesToPlay && age <= 1.25);

//break;

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:

// If this question refers to `break;`, then it evaluated to `SyntaxError: Illegal break statement`. If the question refers to the last console log, then it evaluated to `true`, because both sides of the comparison evaluated to true based on a puppy being defined as a dog between 0 and about 1.25 years of age (see https://www.pedigree.com.au/puppies/puppy-age-calculator/).

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console as you would expect?

// Yes!
