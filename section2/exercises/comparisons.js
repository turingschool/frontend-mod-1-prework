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
console.log('Is numberTeachers greater than numberStudents?', numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log('Is numberTeachers less than numberStudents?', numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log('Is numberTeachers equal to stringTeachers?', numberTeachers == stringTeachers);
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
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
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

// For the following prompts, you will be given a line of code and your task is to type out a Comment, in English, explaining what that line of code is doing, including what the comparison will evaluate to. Be as technically precise as possible, but don't just copy and paste a definition from the readings. Make sure YOU can explain it that way!

// Nina's note - In the following code, we will be using the console.log function in order to log to the console in order to determine what the comparison will evaluate to.
// In other words is the comparison statement true or false?

console.log(4 < 9);
//YOU DO: Explain.
// Is 4 less than 9? This will log: true

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// Is 4 less than var books? var books equals 3. The comparison becomes is 4 less than 3. This will log: false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Is var friends greater than var siblings? Friends equals 6 and siblings equals 2. The comparison becomes is 6 greater than 2.
// This will log: true

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Is var attendees not equal to var meals? var attendees equals 9 and var meals equals 8. The comparison becomes is attendees not equal to meals. This will log: true.

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
console.log(lovesToPlay && lovesTreats); // true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark); // false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark); // true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age); // 1

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The final line of code evaluated to 1. When I ran console.log(age && lovesToPlay) the statement evaluated to true. What I found out is that if expr1 can be converted to true, which in this case it can, then expr2 will be returned. As a note, 0 will return false, 1 or any other number besides 0 will return true. Also a string will return true.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? Yes. One of the console.log(); functions was written console.logs(); I had to go in and remove the "s" and then everything printed as I expected.

/*
Is numberTeachers greater than numberStudents? false
Is numberTeachers less than numberStudents? true
Is numberTeachers equal to stringTeachers? true
Is numberTeachers strictly equal to stringTeachers? false
Is numberTeachers not equal to numberStudents? true
Is numberStudents greater than or equal to 20? true
Is numberStudents greater than or equal to 21? false
Is numberStudents less than or equal to 20? true
Is numberStudents less than or equal to 21? true
true
false
true
true
false
true
true
false
true
1
*/
