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
function sayHello() {
  console.log("Oh, Hello!")
};
// Then, call the function 2 times.
sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
function greetMe(name) {
  console.log('Howdy ' + name);
};
// Then, call the function 3 times, each time, passing it a different name.
greetMe('Zach');
greetMe('Jeff');
greetMe('Frank');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
function calculateSum(number1, number2) {
  console.log(number1 + number2);
};
// Then, call that function 3 times, each time, passing in 2 different Numbers.
calculateSum(4, 7);
calculateSum(87, 74);
calculateSum(11933, 99932);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function longtimePals(name1, name2) {
  console.log(name1 + ' and ' + name2 + ' are longtime pals!');
};

longtimePals('Napoleon', 'Josephine');
longtimePals('peanut butter', 'jelly');
longtimePals('Rick', "Sally");



//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named it longtimePals because my creative juices are not flowing at the moment
and that's the term I used in the printed phrase.
I named the parameters name1 + name2 because the function uses two different names.

*/
