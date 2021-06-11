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
function greetMe(name) {
  console.log(name);
}
greetMe('Ruby');
greetMe('Johnny');
greetMe('Eliza');





// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function logsSum (x,y) {
  console.log(x+y);
}

logsSum(1,5);
logsSum(2,9);
logsSum(4,5);



// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function friends(name1, name2) {
  console.log( name1 + ' ' + 'and' + ' ' + name2 + ' ' + 'are BFFS.');
}

friends('Oscar', 'Ruck');

function catsOfMine(cat1, cat2) {
  console.log( cat1 + ' ' + 'and' + ' ' + cat2 + ' are my best kitties!');
}

catsOfMine('Franny', 'Mary');


//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:

//For the last exercise:

Since the code I was writing was about two people who are best friends, I wanted the
functions and parameters to make sense in context of the end results. Because the
function being named was about two friends, it made sense to me to call that function
friends so that if someone else was to look at my code later they would immediately know
it was about two people because the parameters of that function are the two names.
Thus when looking at the function, you immediately know it is about at least 2 people
since friends is plural and the parameters states that there are two names in string format.


I tried it again and I named the function catsOfMine because the two strings I was combining was about how these
two cats are my best kitties. The parameters were named as such because each cat is their own name and I wanted
for the person reading my code (in this case me) to be able to tell how each parameter related back to the function I had named.
The function was naming that they were catsOfMine and that each parameter were their names.


*/
