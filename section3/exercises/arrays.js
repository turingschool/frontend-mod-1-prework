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
animals[animals.length - 1] = "Gorilla"
console.log(animals);


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = "Flamingo"
console.log(animals)

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals.unshift("Elephant")
console.log(animals[0])


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ['sushi', 'ramen', 'wontons', 'edamame']

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length)


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push('broccoli')
console.log(foods);


// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop()
console.log(foods);


// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods[foods.length - 1] = "sashimi"
foods.push('crab')
foods.unshift('miso')
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
foods.shift()
console.log(foods)

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

// 1: Gmail, an array of emails. Spam folder may be an array of spam mail
// 2: Netflix uses an area when you view movies based on genres
// 3: spotify uses an area of tracks to an album


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
// An if statement is made with condition of having greater or equal to battery percentage left
if (percentBatteryLeft >= 15) {
  // If its true, the code block will execute a message to the log
  console.log('You may call an uber')
  // If the above conditional fails then it'll proceed to the else if statement. If the person has both a charger AND its a car charger, the code will break after the next line
} else if (hasCharger === true && chargerType === "car") {
  // If this is true, the code will simply execute this log.
  console.log('You may call an uber and charge your phone')
  // If the code fails both conditionals then it'll proceed onto the next line with the else statement
} else {
  // All conditions weren't met so the final log is just what remains and the line below will execute.
  console.log("You probably shouldn't call an uber"
  )
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟

// All variable's values were change to test each line of code.
