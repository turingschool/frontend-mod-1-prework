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
  console.log("Oh,Hello!");
};
sayHello();
sayHello();


//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name){
  console.log("Hello, " + name);
}
greetMe("Eric");
greetMe("Alice");
greetMe("Ellen");
// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function addSum(num1, num2) {
  console.log(num1 + num2);
}
addSum(3, 4);
addSum(5, 9);
addSum(157, 343);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function sentence(friend1, friend2) {
  console.log(friend1 + " and " + friend2 + " are best friends!");
}

sentence("Lady", "Shae");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?
I started out with what I wanted my sentence to be, and worked backwards.  sentence is a bad name for my function, because if this
were long code, it would probably not be specific enough.  sentenceFriends may have been better for this example.  I named the parameters
friend1 and friend2 because the sentence was going to read Lady and Shae are best friends!  So in theory, you could call the function again
with any two names, and they would be best friends!



*/
