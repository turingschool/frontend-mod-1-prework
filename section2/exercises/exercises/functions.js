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

function sayHello () {
  console.log("Oh, Hello!");
}

sayHello();
sayHello();
sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log(`${name}`);
}

greetMe ("Amelia");
greetMe ("Jennifer");
greetMe ("Charley");



// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function logsSum(num1,num2) {
  console.log(num1 + num2);
}
logsSum(2,44);
logsSum(23,45);
logsSum(8,15);



// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function conCate(str1,str2) {
  console.log("I hear that " + str1 + " likes " + str2 + "!");
}
conCate("Billy", "Miranda");
conCate("Bobby", "Matilda");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

I named the function conCate really only because I was researching why this is considered concatenation when the strings
are separate and in the same sentence but I became a little frustrated because I think of concatenation as the combination
of two strings into one new entity. It is perhaps not the greatest choice and I may be better off still saying what the
function does but being a bit more descriptive about it's particular type of operation, like function whoFancies()
or function hasCrush() 
*/
