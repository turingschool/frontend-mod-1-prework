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
function greetMe(newName) {
  console.log("Hello" + newName);
};
greetMe(" Eva");
greetMe(" Aria");
greetMe(" Flip");
greetMe(" Gabe");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function number(num1, num2) {
  var sum = num1 + num2
console.log(sum);

}
number(10,36)
number(8,6)
number(4,10)
number(6,6)

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function friendsName(friend1, friend2) {
  console.log("My friends names are " + friend1 + " ,and " + friend2 + ". They're cool people!");

}
friendsName("Oscar" , "Ruck")


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named my function friendsName I chose that name people the exercise asked me for arguements
which were string, names. so in order to make it obvious of what the argument value contained I chose
friendsName. I named the parameters friend1 and friend2 to make it simple and easy to understand that the value of the
arguments are going to be the names of friend 1 and friend2. It's to the point and easy to understand.


*/
