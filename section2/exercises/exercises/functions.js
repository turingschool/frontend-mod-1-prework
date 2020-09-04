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
  console.log("Severus Snape, ew");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape, ew" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.

function sayHello() {
  console.log( "Oh, Hello!" )
};

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

var name = ""

function greetMe(name) {
  console.log( name )
}

greetMe ("Elsa");
greetMe ("Matt");
greetMe ("Hammer");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

var x = ""
var y = ""

function add( x, y ) {
  console.log ( x + y )
}

add ( 3, 4 );
add ( 5, 9 );
add ( 100, 1);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

var firstName = "";
var lastName = "";

function introDr( firstName, lastName ) {
  console.log ( "Hi, I'm Doctor " + lastName + " but you can call me " + firstName + ".")
}

introDr( "Daniel", "Jackson" );

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
  * I named the function introDr because it would be used when a doctor introduces themselves for the first time, so it says what it does and when you'd use it.
  * I named the parameters firstName and lastName because just using name for one and lastName for the other could be confusing in the future.

*/
var numerator = ""
var denominator = ""

function divide( numerator, denominator ) {
  console.log ( numerator / denominator )
}

divide ( 4, 2 );
divide ( 10, 2 );
divide ( 100, 10);
