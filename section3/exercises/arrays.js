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
animals[4] = "Elephant";
console.log(animals);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foodArray = ["Ramen", "Pizza", "Burrito", "Salad"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foodArray.length);


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foodArray[4] = "Broccoli";
console.log(foodArray);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
console.log(foodArray.pop());

console.log(foodArray);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
console.log(foodArray.push("Couscous", "Rice", "Beans"));
console.log(foodArray);


// YOU DO: Remove the food that is in index position 0.
console.log(foodArray.shift());

console.log(foodArray);

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

// 1: Any website that has a "Shopping cart".
// 2: A website with a drop down menu to choose from.
// 3: Looking at a "Recently viewed" section on a site.


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
var percentBatteryLeft = 10;
var hasCharger = false;
var chargerType = "car";

// Write your conditional here
// The line of code here shows that regardless of the other circumstances, if the percentBatteryLeft
// is >= 15, the user is still able to call an Uber.
if (percentBatteryLeft >= 15) {
  console.log("User can call an Uber!");
// This next line shows that if that condition is false, we move on to the next. Maybe the battery
//is less than 15, but if we have a charger and it's a car charger, we can still call an uber.
} else if (percentBatteryLeft < 15 && hasCharger === true && chargerType === "car") {
  console.log("User can call an Uber!");
// This next line shows that if the previous is false, and we are less than 15 percent, but we don't
// have a charger either, we cannot call an uber.
} else if (percentBatteryLeft < 15 && hasCharger === false) {
  console.log("User cannot call an Uber!");
// Lastly, if all of these are false, it's fair to say that the user cannot call an uber if we've
// Exhausted the only combinations that would allow this to happen.
} else {
  console.log("User cannot call an Uber!");
}

// I'm a little unclear on the best method for organizing these. Not sure how many combinations
// to showcase before providing the else condition. Perhaps I missed this and I'm going to do some
// more research. 


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
