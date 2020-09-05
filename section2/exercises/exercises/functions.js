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
function greetWorld() {
  console.log("Oh, Hello!");
}

greetWorld();
greetWorld();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log("Hello, " + name + "!");
}

greetMe("Kai");
greetMe("Nicola");
greetMe("Michael");



// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function doAddition() {
  console.log(numberA+numberB)
}
var numberA = 2
var numberB = 3

doAddition();

numberA = 3423509
numberB = 2983743039

doAddition();


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function happyHour() {
  console.log("The neighbors are acting like it's " + time + place + ".");
}
var time = "5 o'Clock ";
var place = "next door";

happyHour();


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function happyHour because after all of this, that sounds really good right now.  Happy Hour typically
starts around 5 o'Clock. I choose time and place because they were reasonably discriptive. Lets not make this
any more challenging than it needs to be.


Question!!!! Why is there a ";" after the "}" in the example. I didn't think we needed that?
QUESTION!!!! Why did the code statement freak out and give me a file locaiton when I named a variable "location"? How was
I supposed to know that was going to happen?
*/
