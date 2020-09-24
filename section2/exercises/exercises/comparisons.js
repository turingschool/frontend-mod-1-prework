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
console.log('Is numberTeachers less than numberStudents?', numberTeachers < numberStudents);


// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log('Is numberTeachers equal to stringTeachers?)', numberTeachers == stringTeachers);


/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log('Is numberTeachers strictly equal to stringTeachers?', numberTeachers === stringTeachers);

/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 10,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log('Is numberTeachers not equal to numberStudents?', numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log('Is numberStudents greater than or equal to 20?', numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log('Is numberStudents greater than or equal to 21?', numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log('Is numberStudents less than or equal to 20?', numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log('Is numberStudents less than or equal to 21?', numberStudents <= 21);


//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//This line will ask if the integer value 4 is less than the integer value 9. It will then log to the console that the boolean value "true" because it reads those values as integers.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// This line will ask if the integer value 4 is less than the value that is assigned to the variable 'books' which is 3. It will log the boolean value 'false' to the console because it is reading '4' as an intger and 'books' as the assigned integer value, 3.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// This line will ask if the integer value assigned to the variable 'friends' is less than the integer value assigned to the variable 'siblings'. It will log to the console the boolean value 'true' because 6 is less than 2.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// This line will ask first if the operands are of similar value types because it uses a strict not equals operator. Since they are both integers, it will ask if the value assigned to the  variable 'attendees' is not equal to the value assigned to the variable 'meals'. Since 8 does not equal 9, it will log 'true' to the console.


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry and has completed their homework
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
console.log(lovesToPlay && age < 1);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// I assumed that a dog that is 1 year old or older is no longer a puppy, so I decided that in order for a dog to be a puppy, their age should be less than 1. I used the logical operator '&&', so the dog would have had to both be under the age of 1 AND love to play in order for the statement to return 'true'. Since the dog loves to play but is not under the age of one, the statement returned false. 

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?
