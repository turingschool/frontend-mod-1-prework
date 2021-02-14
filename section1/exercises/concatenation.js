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
displays: The Chudley Cannons are Ron's favorite Quidditch team

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";
console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")
displays: My zoo has 7 unicorns!

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
String will be logged to the console because even though the first value is a number and the second is a string, there is
something called type coercion which means that Javascript is trying to help us by converting the number into a string so we can combine the two together.
// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";
console.log("The " + speedy + " jumped over the " + slowPoke);
displays: The quick red fox jumped over the lazy brown dog


// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log("In a predictable result, the " +slowPoke + " beat the " + speedy);
displays: In a predictable result, the tortoise beat the hare


// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.
var name = "Julie";
var totalHours = 24;
var days = ["Mondays", "Tuesdays"];
console.log(name + " is active " + totalHours + " hours every " + days);
displays: Julie is active 24 hours every Mondays, Tuesdays


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
