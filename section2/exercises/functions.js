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

var helloTest = "name";
// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello(){
  console.log("Oh, Hello " + helloTest);
};
sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.

function greetMe(name){
  console.log ("Oh hey there " + name);
}
greetMe("Nate Sheridan");
greetMe("John");

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function sumNumbers(num1,num2){
  var sum = num1+num2;
  console.log ("The sum of " + num1 + " added to " + num2 + " is " + sum);
}

sumNumbers(2,3);
sumNumbers(12312,410);
sumNumbers(1239017203,4210);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function bestFriends(name1,name2){

console.log(name1 + " is very best friends with " + name2);
}

bestFriends("Oscar","Nate");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:
  Because I was asked to define to names and also given the prompt of a best friend statement, I defined each accordingly.
  Both the names are given name then a number after because there are 2 names (ex name1,name2)
  For the function, I named it bestFriends because of what it does. The best friends function says that
  name1 and name2 are best friends so I named it after that.

*/
