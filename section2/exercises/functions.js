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
//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log('Hello ' + name);

}
greetMe('Turing');
greetMe('Oscar');
greetMe('Bob')

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function getNum(num1, num2){
  console.log(num1 + num2 );
}
getNum(3,4);
getNum(10,5);
getNum(9,10);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function userName(user1, user2) {
  console.log(user1 + user2 + '' + "are a connection");
}
userName("Bob", "Nicole");
userName("Omar", "Ana");
userName("Bryan", "April");
//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN: With my first code block with numbers I called my function "getNum" because
I was trying to get 2 numbers and sum them. Inside the parameter I called each parameter
num1 and num2. This is because I only had to add two parameters together and it made it
easy to just give them a number to identify which one goes first or second. In line 64
I called my function userName because I thought of it as a person using a application.
This made it easy for me to identify them as a user. In the parameter I just used user1 and
user2 because I was just only adding and calling two people I did that so I can
identify who will be user 1 and who will be user 2.


*/
