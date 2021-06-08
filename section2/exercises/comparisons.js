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
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
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
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 21);
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
This line of code will log "true" to the console. This is because the integer 4 is being compared to the integer 9;
  specifically, whether or not the integer 4 is of lesser value than the integer 9. Both are number data types, so
  the comparison is made without having to align both data types first (which will occur when using a comparison
  operator, as this type of operator will convert any and all non-number data types to a number data type before
  proceeding with a given comparison).
*/

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/*
This line of code will log "false" to the console. This is because the integer 4 is being compared to the integer 3;
  specifically, whether or not the integer 4 is of lesser value than the integer 3. The first of the two values being
  compared is a number and the second is a variable. However, the variable's assigned value is defined as the integer
  3, so no conversion of data types is neccesary before proceeding with the comparison.
*/

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/*
This line of code will log "true" to the console. This is because the integer 6 is being compared to the integer 2;
  specifically, whether or not the integer 6 is of greater value than the integer 2. Both values being compared are
  variables. However, the assigned values of the variables are defined as the integers 6 and 2, respectively, so no
  conversion of data types is neccesary before proceeding with the comparison.
*/

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/*
This line of code will log "true" to the console. Both data types being compared are variables with numbers as
  their defined value, those values being the integer 9 and the integer 8, respectively. A strict comparison operator
  is being used, meaning that no data type conversion will take place before the two variables are compared. In this
  case, both variables have number data typoe values, so a comparison bewtween these two numbers is able to take place.
  If the variables were not defined with the same data type, the strict comparison operator would automatically
  log "false" and move on.
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
// Two ways to answer this come immediately to mind.
// First:
console.log(lovesToPlay && isAPuppy)
//Second:
var isAPuppy = (age <= 2)
console.log(lovesToPlay && isAPuppy)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
/*
The first answer evaluates to "undefined", because no value has been defined for that variable name.
  The second answer evaluates to "true", because the variable "isAPuppy" firt compares the variable "age"
  with the *given* maximum age (not neccesarily the *true* maximum age) for a dog to still be considered
  a puppy. This is done in order that a boolean value may be assigned to the variable "isAPuppy" for use
  by the && operator.
*/
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
