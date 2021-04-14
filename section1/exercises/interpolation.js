/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/interpolation.js`
*/

// EXAMPLE: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log(`The ${team} are ${name}'s favorite Quidditch team.`);

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log( `My zoo has ${numberOfCreatures} ${creatures}!`);

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
/*
The code on line 22 will log a String to the console. Interpolation is a similar method to
concatenation where it can inject other data types into a string. Even though the variable of
'numberOfCreatures' is is a number data-type, interpolation, just like concatenation, will convert
the number intro a string. The benefit of interpolation is that it is easier to read longer Strings
and we don't need to Concatenate multiple strings together.
*/


// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log( `The ${speedy} jumped over the ${slowPoke}`);


// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log(`In a predictable result, the ${slowPoke} beat the ${speedy}!`)


// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables uisng interpolation.

  var trick = "kickflip";
  var difficulty = "very hard";
  var numOfTries = 1000;

  console.log(`Doing a ${trick} is ${difficulty}, and requires AT LEAST ${numOfTries} attempts to master.`);


//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
