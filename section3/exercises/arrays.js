/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
node section3/exercises/arrays.js
*/


//-------------------
// PART 1: Animals: Array Syntax
//-------------------

// EXAMPLE: write code below that will log an array of animals.
// Store the array in a variable.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals);

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
console.log(animals[2]= "Gorilla");

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Dog");
 console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.unshift("Elephant");
console.log(animals);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var typeOfFoods = ["broth", "pasta", "salad", "tacos","enchiladas"];
console.log(typeOfFoods);

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(typeOfFoods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
typeOfFoods.unshift("broccoli");
console.log(typeOfFoods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
typeOfFoods.pop();
console.log(typeOfFoods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
typeOfFoods.push("pizza", "hot god", "mole");
console.log(typeOfFoods);

// YOU DO: Remove the food that is in index position 0.
console.log(typeOfFoods.shift());
console.log(typeOfFoods);

//-------------------
// PART 3: Where are Arrays used?
//-------------------

/*
Sometimes we need to hold on to multiple pieces of data, but have it grouped together in a list.
This is why programming languages have arrays!

One example of a web/mobile application that uses arrays is Instagram. Each user has a set of posts
associated with their account. Each post, is one of potentially many, that are grouped together in a list,
or, array.

The post itself likely has more complex data, but here's one way we can think about it:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

// YOU DO: Think of a web application you commonly use. Where do you see LISTS utilized, where arrays
// may be storing data? Come up with 3 examples - they could be from different web applications or
// all from the same one.

// 1: Guitar Center: var guitars = ["LesPaul", "Fender", "Martin"];
// 2: Guitar Center: var relatedProducts = ["Acoustic guitars", "Bass guitar", "Ukulele"];
// 3: guitar Center: paymentOptions = ["Credit/Debit", "PayPal", "Cash"];


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
The can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = true;
var chargerType = "car";

// Write your conditional here
// In this first line of code I stablish my first "if" conditional statement base on battery percent conditions.
if (percentBatteryLeft >=15){
// If the battery conditions meets the requirements, the console will log this message.
  console.log("The user can call an uber");
// In this line I incorporate two values as conditional statements trought logical operator, it will be applied if
//they dont meet with the firs "if" condition.
} else if (chargerType === "car" && hasCharger){
// If the chargerType and hasCharger values meets the requirements, the console will log this message.
  console.log("The user can call an uber");
// This last line of code "else" will be applied if none of the values achieve with the stablish conditions statements.
} else {
// If it is the case, the console will log this message.
  console.log("The user can not call the uber");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
