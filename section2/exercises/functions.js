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

function greetMe(beatleName) {
  console.log("Cheers to " + beatleName + "!");
}

greetMe('John Lennon');
greetMe('George Harrison');
greetMe('Ringo Starr');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function numberSum(num1, num2) {
  console.log("The sum of " + num1 + " and " + num2 + " is " + (num1 + num2));
}

numberSum(2, 7);
numberSum(12, 40.5);
numberSum(0, -6);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function quoteDickens(twoCities1, twoCities2) {
  console.log(twoCities1 + ", " + twoCities2 + "...");
}

quoteDickens("It was the best of times", "it was the worst of times");


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named the function 'quoteDickens' so that it's specific enough that anyone reading the code would know
that that function should only be used for Dickens quotes, but broad enough that it could be used to print
quotes from any other Dickens novel.  Then I thought I'd be more specific with the parameter names, and reference
that particular novel - A Tale of Two Cities - split into 'twoCities1' and 'twoCities2'.  Again, I figured
that this is specific enough that no programmer would confuse it with any other parameter name,
but broad enough to allow for any number of additional params in this category
(e.g. twoCities3, twoCities4, and so on).

*/
