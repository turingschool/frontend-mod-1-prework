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
function printHello() {
  console.log('Oh, Hello!');
}
printHello();
printHello();
//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name){
  console.log(name);
}
greetMe('Steve');
greetMe('Tony');
greetMe('Thor');


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function numbers(num1, num2){
  console.log(num1 + num2);
}
numbers(4, 10);
numbers(6, 4);
numbers(7, 92);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function famousDuos(name1, name2){
  console.log(`${name1} and ${name2} are always getting into trouble`);
}
famousDuos('Rick', 'Morty');
famousDuos('Tom', 'Jerry');
famousDuos('Scooby', 'Shaggy');

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
I named my function famousDuos as it was short and descriptive. I used name1 and name2 as my parameters as this was also very short and to the point.
Naming funcions or variables should be short and descriptive so that anyone looking at the code knows what it is for.  You also don't want
it too long as it makes retyping the name tedious.

*/
