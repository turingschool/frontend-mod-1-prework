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
console.log(animals.length)

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
var count = animals.push("Gorilla")
console.log(animals)
// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.splice(2, 0, "Dog")
console.log(animals)
// YOU DO: Write code that will log the String "Elephant" in the animals array
//I kept the elephant from the last code my splicing the array to add dog but keep Elephant as well.

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var food = ["Hot Wings", "Pizza", "Apples", "Bananas"]

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(food.length)

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
var count = food.push("Broccoli")
console.log(food)
// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
console.log(food.pop())
console.log(food)

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
console.log(food.push("Bread", "Cheese", "Ground Beef"))
console.log(food)
// YOU DO: Remove the food that is in index position 0.
console.log(food.shift())
console.log(food)
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
// 2: List of expenses in a checking account
// 3: List of videos in YouTube


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
//If our percentBatteryLeft is less than or equal to 14 and hasCharger is equal to false than the system will write out "I cannot call Uber" if these conditions are not met it continues to the next line of code.
if (percentBatteryLeft <=14 && (hasCharger==false)) {console.log("I cannot call Uber")}
//If out percentBatteryLeft is less than or equal to 14 and hasCharger is equal to true and the chargerType is equal to car than the system will write out "I can call Uber" if these conditions aren't met we move to the next line of code.
else if (percentBatteryLeft <=14 && (hasCharger==true) && (chargerType=="car")) {console.log("I can call Uber")}
//If the percentBatteryLeft is less than or equal to 14 and hasCharger is equal to true and chargerType is equal to not car than the system will log "I cannot call Uber" if these don't match up we continue to the next line.
else if (percentBatteryLeft <=14 && (hasCharger==true) && (chargerType=="not car")) {console.log("I cannot call Uber")}
//If the percentBatteryLeft is greater than or equal to 15 than the system will log "I can call Uber". With all these lines of code I have covered any condition that might be met and what the system should then populate to the user.
else if (percentBatteryLeft >=15) {console.log("I can call Uber")}
// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
