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
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);

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
This line of code is logging the result of the comparison is 4 less than 9, and printing it to the console. The result
will be a true or false answer because comparison operators return a boolean value. The comparison operator in this
case is the `<` less than symbol, which is evaulating if the integer 4 is less than the integer 9. We should expect
a result of `true`, since 4 in fact is less than 9, and coparison operators return a boolean value.
*/
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/*
The first line of code (code line 90) is creating and declaring a variable with the name `books` and assigning it
a value of 3; so books is equal to the interger 3. The second line of code is logging the result of the
comparison is 4 less than the variable named books. From the first line of code we know that the variable
books is equal to 3. Therefor our comparison statement is, is 4 less than 3 (value of variable books). We should
expect a result of `false`, since 4 is not less than 3, and coparison operators return a boolean value. Also,
note sure if this is a typo or was intentional, but console.logs isn't the command we are looking for to
print the result to the console, we are looking for console.log (not plural logs). So I corrected it.
*/

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/*
The first line of code (code line 103) is creating and declaring a variable with the name `friends` and assigning it
a value of 6; so `friends` is equal to the interger 6. The second line of code is creating and declaring a variable
with the name `siblings` and assigning it a value of 2; so `siblings` is equal to the interger 2. The third line
of code is logging the result of the comparison is the variable named friends greater than the variable named siblings.
From the first two lines of code we know that the variable friends equals 6 and the variable siblings equals 2.
Therefor our comparison statement that is being logged to the console is now, is 6 greater than 2. We should
expect a result of `true`, since 6 is in fact greater than 2, and coparison operators return a boolean value.
*/

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/*
The first line of code (code line 117) is creating and declaring a variable with the name `attendees` and assigning it
a value of 9; so `attendees` is equal to the interger 9. The second line of code is creating and declaring a variable
with the name `meals` and assigning it a value of 8; so `meals` is equal to the interger 8. The third line
of code is logging the result of the comparison is the variable named attendees not equal to the variable named meals.
From the first two lines of code we know that the variable attendees equals 9 and the variable meals equals 8.
Therefor our comparison statement that is being logged to the console is now, is 9 not equal to 8. We should
expect a result of `true`, since 9 does not equal 8, and coparison operators return a boolean value.
*/

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
console.log (lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
/*
The final line of code evaluted to `1`. Doing some research online it looks like
logical operators can operate on experessions of any data type, but if the datatypes
aren't both boolean then the return vaule will be either one of the two experessions
used in the orginal operation. For && operators returns the first value if it can
be forced false, otherwise it returns the second expersion in its original data type.
So for this example lovesToPlay is true, so the operator can't force it false, so
it returns the value of the second operand which is 1. This result makes sense now,
but is a little hard to wrap my brain around.
*/

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?
  //Yes, everything looks to be correct.
