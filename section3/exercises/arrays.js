/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
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
animals.pop();
animals.push("Gorilla");
console.log(animals);
//Question for feedback - this technically isn't reassigning since I deleted the
//end with pop and pushed a new element to the end. Is this what you are looking
//for? Or is there a different function I need to be calling here?

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Monkey");
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
//Reassigning animals to the original array.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var food = ["bread", "rice", "orange", "carrot"]

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(food.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
food.push("broccoli");
// log the changed array to verify "broccoli" has been added
console.log(food);


// YOU DO: Write code below that removes the last item of food from the foods array and
food.pop();
// log the changed array to verify that item has been removed
console.log(food);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
food.push("potato", "gummy", "cereal")
// Then, log the changed array to verify the new items have been added
console.log(food);
// YOU DO: Remove the food that is in index position 0.
food.splice(0,1);
console.log(food);

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

// 1: Amazon shopping cart
var cart = ["Toothpaste", "Toothbrush", "Floss"]
// 2: Doordash list of resturaunts in my area
var localResturaunts = ["Maria's Taqueria", "Rise Pies", "Difranco's"]
// 3: Google Maps list of directions
var directions = ["Turn left in 500 feet", "Continue for 1 mile", "Turn right",
"Destination in 300 feet on the right"]


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

//Creating a new variable called percentBatteryLeft and assigning it a
//value of the number 12.
var percentBatteryLeft = 12;
//Creating a new variable called hasCharger and assigning it to the
//boolean value of true.
var hasCharger = true;
//Creating a new variable called chargerType and assigning it to the string
//value "car".
var chargerType = "car";

// Write your conditional here
// If the value of percentBatteryLeft is greater than 15, log the console
// with the message "You are able to call an Uber". If the value is less than
// 15 the code will not log this message, and will move onto the else if
// argument in the code.
if (percentBatteryLeft > 15) {
  console.log("You are able to call an Uber");
//If the variable has charger is equal to true and the value of the variable
//chargerType is equal to the string "car", then log the following message
//to the console: "You are able to call an Uber".
} else if (hasCharger == true && chargerType == "car") {
  console.log("You are able to call an Uber");
}
//If the conditions for the previous lines of code were not met, then
//log the following message to the console:
// "You are unable to call an Uber until you charge your phone to
// fifteen percent or bring car charger."
  else {
  console.log("You are unable to call an Uber until you charge your phone to fifteen percent or bring car charger.");
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
