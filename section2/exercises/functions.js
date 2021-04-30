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
 }

 sayHello();
 sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

greetMe('Samantha', 'Brown');
greetMe('Matt', 'Stevens');
greetMe('Paisley', 'Stevens');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function calculateArea(width, height) {
  console.log(width * height);
}

calculateArea(4, 6);
calculateArea(11, 7);
calculateArea(3, 2);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function sayThanks(name, reason) {
  console.log("Thank you " + name + " for " + reason + "!");
}

sayThanks("Samantha", "visiting");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?
EXPLAIN:

I named the function sayThanks because that was exactly what I wanted the message to do, say thanks.
I named the first paramenter *name* because I wanted the thanks to be personalized with the user's name.
I named the second parameter *reason* because I wanted tp be specific in wait I was thanking the user
for doing. The person could be visiting, purchasing, volunteering, etc and *reason* would still describe
the second parameter. 

*/
