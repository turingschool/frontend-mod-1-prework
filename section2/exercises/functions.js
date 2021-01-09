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
}

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
	console.log("Oh, Hello!");
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(fullName) {
	if (fullName != "John McClane") {
		console.log("Hello " + fullName + ", how are you?");
	} else {
		console.log("Hello " + fullName + ", yippee ki yay moth...");
	}
}

var myName = "Jon Schlandt";
greetMe(myName);

myName = "Anthony Fauci";
greetMe(myName);

greetMe("John McClane");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function getSum(numberOne, numberTwo) {
	var sum = numberOne + numberTwo;
	return sum;
}

console.log(getSum(40, 2));
console.log(getSum(52, 3));

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function getFacts(nameOne, nameTwo) {
	var factualStatement = nameOne + " and " + nameTwo + " are terrible people.";
	return factualStatement;
}

console.log(getFacts("Kelly Loeffler", "Ted Cruz"));

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
As my function was going to be returning a value, the first word I chose was
"get" - which is a verb (it's doing something). The second word in my function
is describing what my function is returning - in this case I was trying to
be clever, but in the real world it should be a bit more descriptive (like
"Statement" or "Message").

As the statement that is returned requires two names, my parameter names
were "nameOne" and "nameTwo" to describe what was needed (a person's name) and
the number of names needed.
*/
