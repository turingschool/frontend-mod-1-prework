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
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 10,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//The comparison will evaluate whether 4 is less than 9. Because 4 is indeed a smaller number than 9,
//the expected output will be: true

var books = 3;
console.log(4 < books);
// Line 86 declares a variable called books and assigns a value of 3 to that variable.
// Line 87 will evaluate if the value of the variable books is greater than 4.
// In other words, are there more than four books?
// Because the value of books is 3, the comparison then becomes "Is 4 less than 3?"
// Therefore the expected output will be: false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// Two variables are declared. Variable friends has a value of 6.
// Variable siblings has a value of 2
// The console is then asked to log the result of the following comparison:
// Is the value of variable friends greater than the value of variable siblings
// Which translates to:
// Is 6 > 2?
// 6 is indeed greater than 2, therefore the console will log: true

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// Variable attendees has a value of 9
// Variable meals has a value of 8
// The comparison can be read as the following question:
// Is the number of attendees not equal to the number of meals?
// Which of course translates to:
// Is 9 not equal to 8?
// 9 does in fact not equal 8. Therefore the output on the console will be: true


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry AND has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry OR has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("Does the dog love to play AND love treats?", lovesToPlay && lovesTreats);
// Expected output: true

// Determine if the dog loves to play and loves the dog park
console.log("Does the dog love to play AND love the dog park?", lovesToPlay && lovesDogPark);
// Expected output: false

// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play OR love the dog park?", lovesToPlay || lovesDogPark);
// Expected output: true

// Determine if the dog loves to play and is a puppy
console.log("Does the dog love to play AND is the dog a puppy?", lovesToPlay && age < 2);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// A simple comparison of (lovesToPlay && age) evaluates to: 1
// It seems like the console is just logging the value of the variable age.
// I'm guessing that's because we're comparing two different data types.
// lovesToPlay is a boolean and age is an integer.
// The comparison is non-sensical. There's nothing true or false about the dog's age.
// I fixed this by adding in an additional operator.
// According to dogtime.com, most dogs are puppies until 2 years of age.
// So if age < 2 evaluates to true, then the dog is a puppy. Therefore the comparison is:
// (lovesToPlay && age < 2)
// (true && true)
// Therefore expected output is true.
// I tested it out by adjusting the value of the age variable and/or adjusting the threshold
// for puppy age. Everything seems to check out.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?
