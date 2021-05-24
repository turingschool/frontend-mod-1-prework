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
animals[2] = 'Gorilla';
// console.log(animals);

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push('Guineafowl');
// console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.unshift('Elephant');
// console.log(animals);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var healthyFoods = ["cake", "pie", "turkey leg", "fried chicken"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(healthyFoods.length);


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
healthyFoods.push('broccoli');
console.log(healthyFoods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
healthyFoods.pop();
console.log(healthyFoods);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
healthyFoods.unshift("chicken nuggets", "french fries", "pizza");
console.log(healthyFoods);

// YOU DO: Remove the food that is in index position 0.
healthyFoods.shift();
// console.log(healthyFoods);

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

// 1: Epicurious has unordered lists for the ingredients that go into a particular recipe. The items in each recipe's list
//could be stored in an array.
// 2: The Boston Marathon registration wesbiste can give you the results of your overall finishing placement (i.e. finished 3rd out of 25,831 people).
//one method for getting this placeent would be when the rfid on your anke/wrist is logged at the finish line--your finishing placement could be automatically
//thrown into an array in chronological order. This list could then generate a list of finishing time in order by taking the array index of your bib number and
//then adding 1 to it for display to the public. (this is probably better suited to an object to include name, but bib number is as good as name, RIGHT?!)
// 3: Instagram has a list called "Close Friends" which allows you to create a personalized list of people that is an option for sharing stories or posts with
//rather than sharing to everyone you are friends with on instagram. I imagine this is kept in an array, no need for a particular order (unordered list)as they
//are all going to be granted access to your post at the same time.

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

// Create an if statement that checks for two differing conditions using the OR logical operator:
  //condition 1: is percentBatteryLeft variable greater than or equal to 15 percentBatteryLeft
  //condition 2: is the percentBatteryLeft variable less than 15 AND (use logical operator) is the hasCharger variable equal to the "true" boolean AND
  //the chargerType variable equal to "car"
if(percentBatteryLeft >= 15 || percentBatteryLeft < 15 && hasCharger === true && chargerType === "car") {
  //if condition 1 logs to true OR condition 2 logs to true then console to the log "The user may call an uber!"
  console.log("The user may call an uber!");
} else {
  //for any other condition, which indicates that the percent battery life is below 15 percent and the user either has a charger that is not a car charger,
  //or has no charger at all, log to the console "The user may not call an uber, sorry!"
  console.log("The user may not call an uber, sorry!");
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
