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
animals[2] = "Gorilla";
console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = "Tiger";
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.push("Elephant");
console.log(animals[animals.length - 1]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var goodFood = ["yogurt", "oatmeal", "collard greens", "gnocchi"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(goodFood.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
goodFood.unshift("broccoli");
console.log(goodFood);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
goodFood.pop();
console.log(goodFood);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
goodFood.push("smoothie", "almonds", "popcorn");
console.log(goodFood);

// YOU DO: Remove the food that is in index position 0.
goodFood.shift();
console.log(goodFood);

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

/* 1: The 'start your cart' section on the King Soopers website - it's a list of items I have
bought there before and can select from to buy again.
// 2: Any of the suggested shopping lists on the Amazon page. There are a bunch of different
ones - 'current customer favorites' or 'deals of the day.'
// 3: The repositories section on my GitHub homepage, listing all of my recently used repositories. */


//-------------------
// Part 4: Don't let yourself forget everything from Section 2 of Pre-work
//-------------------

/*
YOU DO:
Using the variables defined below, write a program that will tell a user if they
will be able to call an Uber.

The user can call an uber if they have 15% battery remaining, or more. In this case, it doesn't matter
if the user has a charger at all, or what type.
They can call an uber if they have a charger and it is a car charger.

*/
var percentBatteryLeft = 12;
var hasCharger = false;
var chargerType = "car";

// Write your conditional here
// Checks to see if the value for the percentBatteryLeft variable is greater than or equal to 15
if (percentBatteryLeft >= 15) {
//if the line above is true then the program will log "You can call an uber" and stop.
  console.log("You can call an Uber!");
//if the first line is false, the program keeps reading.
//Checks to see the values for hasCharger and chargerType. If hasCharger is true the program will continue to
// read the chargerType variable.
} else if (hasCharger && chargerType == "car") {
//if the line above is true then the program will log "You can call an Uber" and stop.
  console.log("You can call an Uber!");
//if the previous lines of code have not had conditions that have been met then this line will run.
} else {
//if the line above runs then the program will log "Better start walking." and stop.
  console.log("Better start walking.");
}



// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
