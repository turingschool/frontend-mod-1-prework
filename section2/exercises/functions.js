/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log("Oh, Hello!");
};

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
var name = "Elise";

function greetMe(name){
  console.log(name);
};

greetMe(name);
greetMe("Aiden");
greetMe("Nanette");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

var numOne = 3;
var numTwo = 6;

function sum(numOne, numTwo) {
  console.log(numOne + numTwo);
};

sum(numOne, numTwo);
sum(4, 5);
sum(27, 13);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

var me = "Elise";
var myMom = "Nanette";
var mySon = "Aiden";

function joinStrings(me, mother, son) {
  console.log("My name is " + me ", my mom's name is " + myMom + ", and my son's name is " + mySon + ".");
};

joinStrings(me, myMom, mySon);

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I wanted to name the function something that would be descriptive of what it was trying to accomplish.  "Concatenation" is a
long word that is difficult to type, so I picked a word with a similar meaning, "join".  "joinStrings" sounds natural and is exactly
what is being accomplished.  I went with very simple strings for this exercise and used names in my family.  I chose "myMom" and
"mySon" to indicate that there was a relation to the variable "me".

*/
