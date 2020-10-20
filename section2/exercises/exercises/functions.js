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

function sayHello(){
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

function greetMe(name){
  console.log(name);
}

greetMe("Buffalo Bill");
greetMe("John Wayne");
greetMe("John Denver");


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

var number1;
var number2;

function calculateSum(number1, number2){
  console.log(number1 + number2);
}

calculateSum(10,20);
calculateSum(1,23338884910);
calculateSum(10,23939252);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

var brothersName;
var sistersName;

function familyRelation(brothersName, sistersName){
  console.log(brothersName + " and " + sistersName + " are brother and sister");
}

familyRelation("John","Sally");
familyRelation("Ben","Jennifer");
familyRelation("Lester","Ursela");

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

- [x] What did I name the function, and why? **_For the previous YOU DO I named the function "familyRelation". I named it as such because I envision a more complicate code that determines family relationships based on a combination of name and relationship input._**
- [x] What did I name each parameter, and why? **_I had two paramaters. One for the brothers name and another for the sisters name. I named the former brothersName and the later sistersName to be as specific as possible for future use._**

EXPLAIN:


*/
