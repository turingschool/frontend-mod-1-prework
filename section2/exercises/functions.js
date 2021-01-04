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
  console.log('Oh, Hello!');
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name) {
  console.log('Hi there ' + name + "!");
}

greetMe('Marni');
greetMe('Wilma');
greetMe('Duke');


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(1, 2);
sum(23, 7);
sum(28327, 18273);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function bestFriends(dogName, ownerName) {
  console.log(ownerName + "'s best friend is " + dogName);
}

bestFriends('Wilma', 'Eric');
bestFriends('Duke', 'Karli');
bestFriends('Callie', 'Marni');

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
  -I named my function bestFriends because the statement in my code block that is printing to the console,
  describes the dog owners best friend (of course "A man's best friend") is their dog!

What did you name each parameter, and why?
EXPLAIN:
  - I name each parameter dogName and ownerName because it describes the value that needs to
  be passed when calling the function later in our code.  When calling the function later in code,
  it is easy to remember what the function is executing because of the function name and the arguments
  that will need to be passed to get our proper result.  

*/
