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
  console.log("Oh, Hello!");
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
  console.log("Hi " + name);
};

// Then, call the function 3 times, each time, passing it a different name.

greetMe("Janna");
greetMe("Sophie");
greetMe("Miriam");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum

function addNums(num1, num2) {
  console.log(num1 + num2);
};

// Then, call that function 3 times, each time, passing in 2 different Numbers.

addNums(39, 88);
addNums(.025, 101);
addNums(-72, 88);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.


function eatSnacks(snack1, snack2) {
  console.log("I am hungry for " + snack1 + " and maybe also " + snack2 + "...")
};

eatSnacks("popcorn", "cookies");


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

I named my function eatSnacks partially to emulate the naming conventions of the previous examples.
printName(), for example, used a verb as its first word and a noun for its second. I also realized
the noun could also be used as a parameter in the function. I named my parameters snack1 and snack2
because they directly related to the function name eatSnacks, and thus felt very precise. 

*/
