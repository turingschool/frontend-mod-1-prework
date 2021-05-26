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

greetMe('Carlos');
greetMe('Mahsita');
greetMe('Karen');


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.

function adding(num1,num2) {
  console.log(num1 + num2);
}

adding(1,1);
adding(10,32);
adding(10,-2);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.

function teamMembers(name1,name2) {
  console.log(name1 + ' and ' + name2 + ' are in the same team!');
}

teamMembers('Carlos','Mahsita');
teamMembers('Jhon','Karen');
//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN:  I named my functions adding and teamMembers, because it's closely related with the task
this functions are performing on my script.
The case with the parameters it was the same, num1 and num2, it's very related with the desired input
for the task. The same case with name1 and name2.

I named the function teamMembers because it's going to return information of a determined team.
I named the arguments name1 and name2 bacause is clear that we are asking this information to be the names of the team members.

*/
