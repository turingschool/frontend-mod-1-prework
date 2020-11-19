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
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == numberStudents);
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
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers != stringTeachers); 
            
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
//This will log either true or false. The script will compare if 4 is less than 9. Since 4 is less than 9, true will be logged. 
var books = 3;
console.logs(4 < books);
// YOU DO: Explain.
//A variable called books is delcared as the number 3. The console compares to see if 4 is less than the variable books. Since 4 is more
//than books, the console will log false. 
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Two variables are declared. One variable called friends which is declared as the number 6, and another variable called sibilings which is declared as 
// the number 2. The console compares the variable friends to see if it is greater than variable siblings. Since 6 is greater than 2, the console will return true. 
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//Two variables are declared. One variabled named attendees is declared as 9. Another variable named meals is declared as 8. 
//The console compares the variable attendees against the variable meals to see if they are not alike. 
//Since 9 does not equal 8, the console will return true. 

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
//This will return False. First, the variable finishedHomework is declared as false and the other variable isHungry is declared as true. 
//The console will return the value of isHungry if isHungry can be coerced into false, otherwise it will return B. 
//Since isHungry is declared as true above, it can not coerced into being False, so it will return the variable finishedHomework, which is declared false above. So the console will return false. 
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
//This will return true. The console will return the value of isHungry if isHungry can be coerced into being true. Since isHungry is declared as true 
//it can (/or already is) coerced into being true. The script will stop there and return true without going onto the other operand expression. 

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats); 
//This will return true. Since the variable lovesToPlay can not be coerced into being False, it will move onto the variable loveTreats, which is 
//declared as true. 

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);
//This will return false. Since the variable lovesToPlay can not be coerced into being Flase, it move onto the other operand expression loveDogPark, which
//is declared as false. 

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark); 
//This will return true. Since lovesToPlay can be coerced into being true since it is declared as true above, the console will log true and stop there. 

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && isAPuppy); 
//I believe this return false but I am a bit unsure.  

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
//I believe this return false but I am a bit unsure. I believe it will return false because lovesToPlay can not be coerced into being False, so the
//script will move onto the operand expression isAPuppy which has not be declared yet, which can be coerced into be becoming calse. So False should be returned. 

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect?
