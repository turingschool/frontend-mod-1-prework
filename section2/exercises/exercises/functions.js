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

function greetMe(name) {
  console.log(name);
};

greetMe("Henry");
greetMe("Jim");
greetMe("Patrice");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function addNumbers(num1,  num2) {
  console.log(num1 + num2);
};

addNumbers(99, 74);
addNumbers(13, 33);
addNumbers(-77, 44)


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function potPlants(plant1, plant2) {
  console.log("Today, we will pot the " + plant1 + " in a terra cotta planter and the " + plant2 + " in a hanging basket.");
};

potPlants("hoya carnosa", "string of tears");
potPlants("monstera deliciosa", "oxalis");
potPlants("ZZ raven", "nepenthes")

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
The function is named potPlants - this describes the action to be taken. I chose this name to describe what
I wanted to accomplish (verb + noun)
The parameter is named plant1 or plant2 to identify the placeholder for the specific plant to be potted,
indicated by the arguments passed through when the function is called.

*/
