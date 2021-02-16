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


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push("Red Panda");


// YOU DO: Write code that will log the String "Elephant" in the animals array
// "Elephant" was removed from the animals array when the last item was
// reassigned to "Gorilla". This code will log "Gorilla". Otherwise "Elephant"
// could be added back into the array.
console.log(animals[2]);


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var vegetables = ['carrot','onion','pepper','garlic'];


// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(vegetables.length);


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
vegetables.unshift('broccoli');
console.log(vegetables);


// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
vegetables.pop();
console.log(vegetables);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
vegetables.push('eggplant','turnip','kale');
console.log(vegetables);


// YOU DO: Remove the food that is in index position 0.
vegetables.shift();


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

// 1: FitBit app: var restingHeartRate =[46,48,47,50,53];
// 2: FitBit :  var exercises = ['Run','Weights','Hike','Yoga','Intervals'];
// 3: Fitbit: var drinkWater = ['glass','bottle','large bottle'];


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
var percentBatteryLeft = 13;
var hasCharger = true;
var chargerType = "house";

// Write your conditional here
//Declares condition 1
if (percentBatteryLeft >= 15) {
  //block of code executes if condition 1 is true
  console.log('I can call an Uber');
  //Declares condition 2, to be evaluated if condition 1 is false
} else if (percentBatteryLeft < 15 && hasCharger === false) {
  //block of code is executed if condition 1 is false and condition 2 is true
  console.log('I cannot call an uber');
  //Declares condition 3 to be evaluated if conditions 1 and 2 are false
} else if (percentBatteryLeft < 15 && chargerType !== 'car') {
  //block of code executes if conditions 1 and 2 are false and condition 3 is true
  console.log('I cannot call an uber');
  //Block of code executes if conditions 1-3 are evaluated to be false.
} else {
  console.log('I can call an uber');
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
