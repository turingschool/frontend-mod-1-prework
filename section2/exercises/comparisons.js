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
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

console.log("End of part 1");
//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//This will log to the console the result of comparing whether 4 is less than 9.
//It should return "true" as 4 is less than 9.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//Line 87 creates the variable books and assigns a value of 3 to it.  The next line
//will log to the console the comparison of whether 4 is less than the value of the books
//variable, which is 3.  The logged result should be "false" as 4 is not less than 3.
//NOTE however, that there is an error in the code, which should read "console.log"
//not "console.logs" as it originally did in the template, so that will create an error
//and not produce the result "false". This error, if left in place, also seems to
//prevent the following code blocks from executing in node.js via the terminal.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//A variable named friends is created and assigned a value of 6, then a variable named
//siblings is created and assigned a value of 2.  Finally, it will log to the console
//whether the number assigned to friends is greater than the number assigned to
//siblings.  This should return "true" but only if the error in the prior example
//is fixed.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//A variable named attendees is created and assigned a value of 9.  A varaible named
// meals is then assigned a value of 8.  Finally, the console should log whether the
// number of attendees does NOT equal the number of meals.  This should be "true"
// as the numbers are not equal. As before this code will only run in node if
// the error in the prior example is fixed.

console.log("End of part 2");
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
console.log(lovesToPlay && age <= 1);

console.log("End of part 3");
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:  The last assigned line of code evaluates to "true" because the
// comparisons is making evalute to true.  Specifically, lovesToPlay is assigned
// to true and age assigned to 1, which is less than or equal to one -- how a
// puppy is defined in this code.  If I only included "lovesToPlay && age" it wouldn't
// make sense as a logical comparison so I included information on what age it
// should compare against.  If "lovesToPlay && age" is the only part of the code
// included, it will return "1".  According to the assigned reading in the case of mixed types
// "A && B returns the value A if A can be coerced into false; otherwise, it returns B."
// Since "A" in this case is a variable assigned a value of "true" it won't be able to
// coerce it into false, and therefore will return B, which is the value of the age
// variable in this case (i.e. "1");

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?  Yes!
