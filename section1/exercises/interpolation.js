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

console.log( `My zoo has ${numberOfCreatures} ${creatures}!`)

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
/*
The data type logged into the console will be "string" because as we already seem in the previous exercise
(concatenation.js) even though we have different variables with different values (string and numbers) due to
"Interpolation" works as same as "Concatenation:" creating a single string with the previously given information.
*/


// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";
console.log(`The ${speedy} jumped over the ${slowPoke}`);
// or
var greatEscape= `The ${speedy} jumped over the ${slowPoke}` ;
console.log(greatEscape);

// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";
console.log(`In a predictable result, the ${slowPoke} beat the ${speedy}`);
// or
var raceJournal = `In a predictable result, the ${slowPoke} beat the ${speedy}`;
console.log(raceJournal);

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables uisng interpolation.
  var coercion1= "concatenation";
  var coercion2= "interpolation";
  var commandNum= "2";
  console.log(`In a sentences we can incorporate ${commandNum} types of coercions: ${coercion1} and ${coercion2},
    in order to create a single coercion!`);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
