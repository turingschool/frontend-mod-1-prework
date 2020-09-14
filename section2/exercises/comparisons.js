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
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 10,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);
// this should log: true


console.log("        ")
//formatting to make parts of the assignment easier to distinguish in code output

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);

/*This tells the computer to evaluate and then display the truth value (boolean value) of the comparison
statement '4 is less than 9'. Because 4 IS less than 9, the comparison is true, so the console will
display 'true'.*/

var books = 3;
console.log(4 < books);

/*This tells the computer to evaluate and then display the truth value (boolean value) of the
comparison statement '4 is less than the value assigned to the variable books', which translates
to the statement 'is the number 4 is less than 3?' because the variable books is assigned to 3 at
line 90. Because 4 is NOT less than 3, the comparison is false, so the console will display 'false'.*/

var friends = 6;
var siblings = 2;
console.log(friends > siblings);

/*This tells the computer to evaluate and then display the truth value (boolean value) of the
comparison statement 'the value assigned to the variable friends is greater than the value
assigned to the variable siblings', which translates to the statement 'the number 4 is greater than the
number 2?' because the variable friends is assigned to 4 at line 96, and the variable siblings is
assigned to 2 at line 97. Because 4 IS greater than 2, the comparison is true, so the console will
display 'true'.*/

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);

/*This tells the computer to evaluate and then display the truth value (boolean value) of the
comparison statement 'the value assigned to the variable attendees is not equal to the value
assigned to the variable meals, which translates to the statement 'the number 9 is not equal to the
number 8' because the variable attendees is assigned to 9 at line 908, and the variable meals is
assigned to 8 at line 109. Because 9 is NOT equal to 8, the comparison is true, so the console will
display 'true'.*/

console.log("        ")
//as above, on line 74: formatting to make parts of the assignment easier to distinguish in code output

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log("the user is hungry and has completed their homework:")
//added log of the statement being evaluated to make it easier to read + check answers in final code output
//added similar labels for all of the following determinations
console.log(isHungry && finishedHomework);

// Determine if the user is hungry or has completed their homework
console.log("the user is hungry or has completed their homework:")
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
console.log("the dog loves to play and loves treats:")
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log("the dog loves to play and loves the dog park:")
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("the dog loves to play or loves the dog park:")
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy

console.log("the dog loves to play and is a puppy:")

var dogComingOfAge = 1.5
var isPuppy = ""

if (age <= dogComingOfAge) {
  isPuppy = true;
} else {
  isPuppy = false;
}
//I know I could skip the conditional function and the isPuppy variable and just do:
//console.log(lovesToPlay && age <= dogComingOfAge)
//OR I could leave the meaning of 1.5 implicit and do:
//console.log(lovesToPlay && age <= 1.5)
//but I wanted to play around

console.log(lovesToPlay && isPuppy);

// What did your final line of code evaluate to? Why do you think that is? Explain.

/* ANSWER: My final line evaluated to true because the dog both loves to play and, according to my
variable assignments, is a puppy.

I decided that dogs are only puppies until their coming of age at 1.5 years (hence, var dogComingOfAge = 1.5),
and I wrote a conditional statement such that another variable, isPuppy, evaluates to true if and only if the
variable age is less than or equal to 1.5. At line 135, the variable age was assigned to 1, and 1 is less than
1.5, so isPuppy evaluated to true.

Then I instructed the computer (at line 167) to evaluate and display the truth value of the conjunction
of the variables lovesToPlay and isPuppy. Conjunctions are true if and only if both conjuncts are true.
lovesToPlay was assigned to true at line 132, and isPuppy was assigned to true as a result of the conditional
function at lines 156-160. So, both conjuncts are true, making the conjunction is true, so the console logs 'true'.*/

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?

  //YES
