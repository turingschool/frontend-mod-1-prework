/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/dataTypes.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:

/* Steve Calla's Answer: The console.log in line 22 will result in a string.
Although the data types are inconistent with numberOfCreatures defined as
a number/integer and creaturesd defined as a string, per the reading "The
reason this works even though the first value is a number and the second
is a string, is a result of type coercion. JavaScript is essentially trying
to help us by converting the number into a string so we can combine the two
together."*/

// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";
console.log("The " + speedy + " jumped over the " + slowPoke)
//expected result "The quick red fox jumped over the lazy brown dog"

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";
console.log("In a predictable results, the " + slowPoke + " beat the " + speedy + "!")
//expected result "In a predictable result, the tortoise beat the hare!"


// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.

var dogName = "Bessie"
var breed = "Labradoodle"
var ageOfDog = 7
console.log("My dog's name is " + dogName + " and she's a " + ageOfDog + " year old " + breed + ".")
//expected result "My dog's name is Bessie and she's a 7 year old Labradoodle."

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
