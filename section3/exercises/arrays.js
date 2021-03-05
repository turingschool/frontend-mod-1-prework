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
// will log ["Zebra", "Giraffe", "Elephant"]


// EXAMPLE: Write code below that will log "Zebra" from the animals array
// YOUR CODE HERE
console.log(animals[0]);
// will log "Zebra"

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
console.log(animals.length);
//Will log 3

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2]="Gorilla";
// Will replace "Elephant" (the last item) with "Gorilla"


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Chihuahua");
// Will add "Chihuahua" at the end of the array

// YOU DO: Write code that will log the String "Elephant" in the animals array
//console.log();

// Elephant should have been replaced with "Gorilla" at line 35, Here I added back in elephant in order to log the string "Elephant"
animals.push("elephant");
console.log(animals[4])


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["pizza", "ramen", "saurkraut", "gummybears"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.unshift("broccoli");
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("kiwi", "lemon", "sandwitch");
console.log(foods);
// YOU DO: Remove the food that is in index position 0.
foods.shift();
console.log(foods);
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

// 1:AirBNB - each listing has a set of data in an arrays that describes what the space has
// 2:AirBNB - each search has a set of data in an array that describes what is desired in the space
// 3:PetFinders - each listings has a set of tata in an array that describes the pet so people can find the right pet for them.


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

//Block of code executing if condition is true (if percentBatteryLeft is greater than 15). If true, it will log "can call uber".
//If false will move to next condition
if (percentBatteryLeft >= 15) {
  console.log("Can call Uber")
// Block of code executing if condition is true (if hasCharger is true AND chargerType is Car). If true, it will log, "also can call uber"
//If false will move on to the next condition
} else if (hasCharger === true && chargerType === "car" ){
  console.log("also can call uber");
}
//Block of code that will execute if the previous conditions are not true. Will log "cannot call Uber"
else {
  console.log("cannot call Uber");
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
