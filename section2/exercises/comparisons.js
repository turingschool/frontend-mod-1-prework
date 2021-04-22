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
console.log(numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log( numberTeachers == stringTeachers);

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log(numberTeachers === stringTeachers);

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
console.log(numberTeachers !== numberStudents);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log(numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log(numberStudents >= 21);


// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log(numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log(numberStudents <= 21);


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
A boolean expression. Is 4 less than 9. Yes, this comparison will return true.
That value true will be printed to the console.
*/

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
/*
Here we have a var called books that is declared and then assigned a value of three.
In the next line, the value of books which is three is compared to 4. 4 is less than 3.
So the message logged to the console will be false.
*/

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
/*
Here we have two variables being declared and assigned. First the variable friends
is assigned to 6. Next, the variable siblings is assigned to two.
After that, the number of friends, 6, is greater than the number of siblings, 2.
So the comparison expression inside the parenthesis will evaluate to true.
Then, that message will be printed out to the console.
*/

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
/*
Here we have two variables being declared and assigned. First the variable attendees
is assigned to 9. Next, the variable meals is assigned to 8.
In the line below we check to see if the attendees, 9, is not equal to the meals, 8.
This comparison will evaluate to true. Thus, it is safe to say someone will go hungry.
The value 'true'  of the comparison will be printed to the console.
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
console.log(lovesToPlay && age);
//this is not the proper way to determine if the dog is a puppy.
//We may want to set up another comparison to see if there's an age at which
//being a puppy evaluates to true or to false.

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated to 1. I think it's got something to do with
//the truthy-ness of the statement. I'm a little hazy on this part of JavaScript, but depending
// on the order of that last comparison, different values will be printed.
// If we do the comparison that console.log(age && lovesToPlay) true will be printed instead.
//I'm not really following the rules on this too much, but I think that the ||
// is used commonly to set default values for strings such as names. So, if a falsey value
// is passed through then the thing on the right side of the || operator will be set to default.
// Conversely, it seems with && that if the value on the left is true, then short-circuit operation
// will automatically return whatever value is on the right side of the && operator. Also,
// if the value on the left of the && is falsey and the value on the right is falsey too, then the
// the first value of the left will be selected, which is not the same behavior as the || operator. 

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? OF COURSE!
