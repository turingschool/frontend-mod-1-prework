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
console.log(animals.length); //3

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla

// Since I know the length is 3 from above I can write fixed code as such
animals[2] = "Gorilla";
console.log(animals[2]);

/*console.log("NOTE TO REVIEWER: I also considered the following code because I ")
console.log("might not always know the array length or I might want the code to ")
console.log("be flexibile enough to figure it out")*/

animals[animals.length-1] = "Monkey";
console.log(animals[animals.length - 1]);


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.

//position 3 is actually index 2
animals[2] = "Snake";
console.log(animals[2]);

// YOU DO: Write code that will log the String "Elephant" in the animals array

// add Elephant back to the last position then log it
animals[2] = "Elephant";
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["apple", "orange", "grapes", "berries"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push("broccoli");
console.log(foods)

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop()
console.log(foods)

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push("tomato", "lettuce", "kale");
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

// 1: silvercar.com car rental website: storing rental locations in an array e.g. ["Austin", "Miami", "Boston"]
// 2: silvercar.com car rental website: storing different car types e.g. ("Audi A4", "Audi Q5", "Audi Q7")
// 3: silvercar.com car rental website: storing different price points e.g. floats (59.99, 69.99, 79.99)


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
/* Creates variable to evaluate (a) if percentBatteryLeft >=15 true then given logical conditional
or statement ensures they can call an Uber. Or if they have a charger = true and it's a car charge
is strictly equal to "car"*/
var canCallUber = percentBatteryLeft >= 15 || (hasCharger && chargerType === "car")
//console.log(canCallUber); //true, used to quality control the results of the canCallUber variable

//if canCallUber = true
if (canCallUber) {
//if canCallUber = true, tell user they can call uber
  console.log("You can call an Uber!!");
} else {
// if canCallUber if false, tell user they can not call an uber
  console.log("I'm sorry. You don't have enough battery life to call an Uber");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
