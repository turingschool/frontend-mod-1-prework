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
// expected output: "The Chudley Cannons are Ron's favorite Quidditch team"

// YOU DO: Read the next few lines of code...
var numberOfCreatures = 7;
var creatures = "unicorns";

console.log("My zoo has " + numberOfCreatures + " " + creatures + "!")
// expected output: "My zoo has 7 unicorns!"

// YOU DO: What data type will be logged to the console as a result of line 22? Explain.
// Your answer and explanation here:
// There could be two different data types that could be entered for the variable creatures.
  // The first could be a string as it is listed above, "unicorns".  There could also be
  // an array of strings that could be entered if there were mulitple different creatures
  // that we wanted to add to the variable.  Seeing as "creatures" is plural, it would
  // most likely imply to me that it would be a list and we would go with an array of
  // strings to list all the different creatures.


// YOU DO:
// Write code that combines the variables below into a string that
// reads "The quick red fox jumped over the lazy brown dog":
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

console.log("The " + speedy + " jumped over the " + slowPoke)
// expected output: "The quick red fox jumped over the lazy brown dog"


// YOU DO:
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";
console.log("In a predictable result, the " + slowPoke + " beat the " + speedy + "!")
// expected output: "In a predictable result, the tortoise beat the hare!"

// YOU DO:
// Declare three variables, name/content/data type of your choice. Think carefully about what
  // you name the variables. Remember, the goal is to be concise but descriptive (it's a hard balance!)
  // Then, log out ONE sentence that incorporates all THREE variables.
var favoriteBrewery = "Mockery";
var favoriteBeer = "Shout at the Pineapple";
var costOfBeer = 6;

console.log("My favorite brewery is " + favoriteBrewery + ", and their best beer is " + favoriteBeer + ". It only costs $" + costOfBeer + "!");
// expected output: "My favorite brewery is Mockery, and their best beer is Shout at the Pineapple. It only costs $6!"

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
  // as you would expect? You should be doing this by now, and getting into the habit of it.
// Looks wonderful! 
