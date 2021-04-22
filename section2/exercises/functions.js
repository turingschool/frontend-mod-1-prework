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
  console.log(name);
}

greetMe('Rachel');
greetMe('Navead');
greetMe('Star Butterfly');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function sum(num1, num2) {
  console.log(num1 + num2);
}

sum(1, 3);
sum(-14, 200);
sum(2, 5.5);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function addToList(item, list) {
  console.log(`Please add ${item} to the ${list} list`);
}

addToList('pickles', 'grocery');
addToList('swim suits', 'packing');

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

// EXPLAIN: In the function greetMe (which came with a function name already), I used 'name' as my parameter since the function expects a name to be the argument. I called the sum function sum, because that is what it is doing--returning the sum of numbers. I called the parameters num1 and num2 for the numbers they represent. The last function I named 'addToList' because it concatinates some strings to form a request to add something to a specified list. I thought about calling it addToWhichList but that seemed cumbersome without adding a lot of meaning. For the parameters I used 'item' which is not the most despcriptive and 'list' which ends up looking confusing in the actual code. Perhabs using 'type' or 'description' might have conveyed more. I suppose the larger context of a piece of code and the project it belongs to might impact the naming conventions used.
*/
