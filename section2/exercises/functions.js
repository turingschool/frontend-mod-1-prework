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

function greeting() {
  console.log("Oh, Hello!");
}

greeting()
greeting()

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name) {
  console.log("Hello " + name);
}

greetMe("Adam");
greetMe("Lenny");
greetMe("Steven");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function calculateSpending(bills, groceries) {
  console.log(bills + groceries);
}

calculateSpending(67.92, 77.85);
calculateSpending(99.57, 87.88);
calculateSpending(101.76, 35.91);





// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function catFight(fighterOne, fighterTwo) {
  console.log("Wow! " + fighterOne  + " bopped " + fighterTwo + " in the head!");
}

catFight("Lenny", "Spot");




//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
The function "catFight" is descriptive of the situation at hand because it is about a fight between to cats.
I named the Parameters "fighterOne" and "fighterTwo" because they could be any cats that are fighting. 
*/
