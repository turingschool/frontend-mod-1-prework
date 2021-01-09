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
function greetMe() {
  console.log(firstName);
}

firstName = 'Shawn';
greetMe();
firstName = 'Patrick';
greetMe();
firstName = 'Michael';
greetMe();


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function addSum() {
    console.log(num1 + num2);
}

num1 = 1;
num2 = 2;
addSum();
num1 = 3;
num2 = 4;
addSum();
num1 = 5;
num2 = 6;
addSum();

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
dude1 = "Oscar";
dude2 = "Rusk";

function bestFriends() {
    console.log(dude1 + ' and ' + dude2 + ' are BFFS');
}

bestFriends();


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function bestFriends because the main idea of the string was to convey who are the bestFriends.
I named each paramaete dude1 and dude2 but that probably wasn't the best naming of the variable. In this case, dude1 and
dude2 can be considered gendered language and may not always be applicable if the parameters being called are names
of dudettes. Person1 and Person2 would be a more appropriate term to the call each of those variables.

*/
