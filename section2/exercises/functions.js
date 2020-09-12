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
  console.log("Oh, Hello");
};

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
};

greetMe("Lenhardt");
greetMe("Steven");
greetMe("Ramona");



// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function weeksProgramming(weeksOfMod0, weeksOfSelfTeach) {
  console.log(weeksOfMod0 + weeksOfSelfTeach);
};

Numbers(1, 0);
Numbers(2, 135);
Numbers(4, 15);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function hotDrinks(tea, coffee) {
  console.log("We serve a tea called " + tea + " and a coffee called " + coffee);
};

hotDrinks("Matchaful", "Dazbog");
hotDrinks("Oregon Chai", "Corvus");
hotDrinks("Twinings Earl Grey", "Stumptown");


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
In the numbers activity, I named my function 'weeksProgramming' to suggest that the function
calculates the total number of weeks that a person has spent programming. I named the parameters 'weeksOfMod0'
and 'weeksOfSelfTeach' because I imagined this function applied to students beginning their Turing course
and describing their previous experience. With these parameter names, the function assumes that the only two possible
types of programming experience are time doing Turing Module 0 and time teaching oneself how to code.

In the strings activity, I named my function 'hotDrinks' and my parameters 'tea' and 'coffee' which
suggests that this is a function about two types of hot drinks, tea and coffee. Along with the strings
that remain constant in every concatenated output, these names tell us that the function is taking
the names of tea and coffee served as inputs.


*/
