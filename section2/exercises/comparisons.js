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
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
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
console.log("The previous line is true because 4 is less than 9.");
/* We are asking that the computer to determine if 4 is less than 9, and then print out to the console
true or false. In this case it logs true. */
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
console.log("The previous line is false because 4 is not less than 3.");
/* We are assigning the value of 3 to the variable "books" and then asking that
the computer evaluate the statement of 4 is less than 3. It prints out to the console "false.""*/

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
console.log("The previous line is true because 6 is greater than 2.");
/* We are assigning the value of 6 to the variable of "friends" and the value of 2 to the variable of "siblings."
We are asking the computer to evaluate whether 6 is greater than 2 and it prints "true" out to the console. */

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
console.log("The previous line is true because 9 is not equal to 8.");
/* We are assigning the number 9 to the variable of "attendees" and the value of 8 to the
variable of "meals." We are asking the computer to evaluate if 9 is not exactly equal to 8 and it prints
out "true" to the console. */


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
console.log("The above line should read false.");
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
console.log("The above line should read true.");

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);
console.log("The above line should read true.");

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
console.log("The above line should read false.");

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);
console.log("The above line should read true.");

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
/*The final line of code returned the value of 1. I think it did this because the value of age
was not true or false, so it couldn't compare boolean values and so the computer just printed out the
number 1. However, I looked into it and actually the reason it logs 1 is because first the computer
sees that lovesToPlay is true so it moves on and reads the age, then logs the age to the console.
If lovesToPlay was false then nothing would be printed to the log. */

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?
