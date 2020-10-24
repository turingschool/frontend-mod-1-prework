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
console.log("1) Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("2)", numberTeachers < numberStudents); //result = true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log("3) Regular equality test", numberTeachers == stringTeachers); //result = true; converts string 4 to number 4

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("4) Strictly equal", numberTeachers === stringTeachers); //result = false; strictly equal evaluates as different types

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
console.log("5)", numberTeachers !== numberStudents); //result = true; used strictly not equal !==

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("6)", numberStudents >= 20); //result = true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("7)", numberStudents >= 21); //result = false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("8)", numberStudents <= 20); //result = true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("9)", numberStudents <= 21); //result = true

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log("10)", 4 < 9);
/*YOU DO: Explain. The code will evaluate if 4 less than 9? If 4 is less than 9 it will return true.
If 4 is not less than 9 it will return false. In this instance the code will return true. The code will
also numbered this response at number 10 so we can track the result in a list.*/

var books = 3;
//console.logs(4 < books);
// YOU DO: Explain. This code will error because "*.logs" is not a function. It should state "*log"
/* I commented out the original and replaced it with the correct code to eliminate the error for this code.
The code below will evaluate the number 4 against book = 3. The result will be false. I also numbered
this response as #11 so I can track the results in the consideration output.*/
console.log("11)", 4 < books); //result false

var friends = 6;
var siblings = 2;
console.log("12)", friends > siblings);
/* YOU DO: Explain. This statement evaluate if friends greater than siblings. Since friends equals 6 and siblings
equals 2 the result will be true. I added a number for this response so I can track the results.*/

var attendees = 9;
var meals = 8;
console.log("13)", attendees !== meals);
/* YOU DO: Explain. This statement evaluates if attendees does not strictly equal meals.
Since the variable attendees equals 9 and attendees equals 8 this conditional wiill
return true because they don't equal each other. I added a number for this response
so I can track the results. */


//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log("14)",isHungry && finishedHomework); //returns false
// Determine if the user is hungry and has completed their homework
console.log("15)",isHungry || finishedHomework); /*I think this should
say or in the instructions above as || = "or"? returns true*/

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("16)",lovesToPlay && lovesTreats); //returns true

// Determine if the dog loves to play and loves the dog park
console.log("17)",lovesToPlay && lovesDogPark); //returns false

// Determine if the dog loves to play or loves the dog park
console.log("18)",lovesToPlay || lovesDogPark); //returns true

// Determine if the dog loves to play and is a puppy
console.log("19)",lovesToPlay && age); //returns 1 see below code comment

// What did your final line of code evaluate to? Why do you think that is? Explain.
/* ANSWER: Intersting. According to the resource noted in the last line of this commented
logical operators such as && and || are not required to return boolean values as they
are not strictly booleans. "The value produced will always be the value of one of the two
operand expressions." and "A && B returns the value A if A can be coerced into false;
otherwise, it returns B. A || B returns the value A if A can be coerced into true;
otherwise, it returns B. In this instance, since lovesToPlay = True it can not be false so
the result is age which equals 1.
https://mariusschulz.com/blog/the-and-and-or-operators-in-javascript*/

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? Yes. All good.
