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
// expected output: ["Zebra", "Giraffe", "Elephant"]

// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);
// expected output: Zebra

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length); // preferred method
// expected output: 3

console.log(animals.push());
// expected output: 3


// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals.push("Gorilla");
console.log(animals);
// expected output: ["Zebra", "Giraffe", "Elephant", "Gorilla"]


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.splice(2, 0, "Tiger");
console.log(animals);
// expected output: ["Zebra", "Giraffe", "Tiger", "Elephant", "Gorilla"]


// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[3]);
// expected output: Elephant


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["peas", "carrots", "bacon", "spinach"];


// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);
// expected output: 4

console.log(foods.push());
// expected output: 4


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push("broccoli");
console.log(foods);
// expected output: ["peas", "carrots", "bacon", "spinach", "broccoli"]


// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);
// expected output: ["peas", "carrots", "bacon", "spinach"]


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("pizza", "chicken", "ice cream");
console.log(foods);
// expected output: ["peas", "carrots", "bacon", "spinach", "pizza", "chicken", "ice cream"]


// YOU DO: Remove the food that is in index position 0.
foods.shift();
console.log(foods);
// expected output: ["carrots", "bacon", "spinach", "pizza", "chicken", "ice cream"]

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

/*
 1: One application that I use from time to time that stores data in lists (arrays) could be my golf handicap
 (GHIN) app.  It takes information such as the course that was played, score on the round, and date for each
 round of golf that is logged.

 `var handicapInputs = ["City Park", 83, "August 12, 2020"];`

 2:  Another app I frequently use that could store data in arrays would be my run keeper app.  It stores
 the date of my runs, mile times, distance ran, etc. for each individual run that I go on.  It's array could
 look something along the lines of..

 `var runOne = ["August 12, 2020", 8.32, 2.8,];`

 3: I like to cook a lot, so I am constantly using different apps to find new recipes. One of the applications
 could use arrays to store things like ingredients, prep time, cooking time, is delicious, etc.

 `var chickenParmRecipe = ["chicken", "tomato sauce", "mozzarella", 1, 2, true] `

*/

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
// if your phone has at least 15% battery left, "Your Uber awaits you!"
if (percentBatteryLeft >= 15) {
  console.log("Your Uber awaits you!");
} // Otherwise, your phone has less than 15% and you'll need a charger AND that charger is a car charger, then you are able to order a ride
  else if (hasCharger && chargerType === "car") {
  console.log("Go ahead order a ride");
} // If your phone has less than 15% battery and you don't have a way to charge your phone, no Uber ride is possible
  else {
  console.log("You're going to need to charge your phone to order an Uber");
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.


// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
