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
// expected return: 3

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"

console.log(animals.pop())
// expected return: Elephant
console.log(animals.push("Gorilla"))
// expected return: 3
console.log(animals)
// expected return: ['Zebra', 'Giraffe', 'Gorilla']

//  YOU DO: Write a code that will allow you to replace the last animal in the array with an animal of your choosing

animals.splice( 3, 2, "Lynx")
console.log(animals)
//  expected return: ['Zebra, 'Giraffe', 'Gorilla', 'Lynx']

// YOU DO: Write code that will log the String "Elephant" in the animals array

var position = animals.indexOf("Elephant")
console.log(position)


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)

var favoriteFoods = ["Pizza", "Croissant", "Tamale", "Cheese", "Arroz con Gondulez", "Chorizo"]

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.

console.log(favoriteFoods.length)
//expected return:  6

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and

console.log(favoriteFoods.push("Broccoli"))
// expected return: 8

// log the changed array to verify "broccoli" has been added

console.log(favoriteFoods)
// expected return: ["Pizza", "Croissant", "Tamale", "Cheese", "Arroz con Gondulez", "Chorizo", "Broccoli"]

// YOU DO: Write code below that removes the last item of food from the foods array and

console.log(favoriteFoods.pop())
// expected return:  "Broccoli"

// log the changed array to verify that item has been removed
console.log(favoriteFoods)
// expected return: ["Pizza", "Croissant", "Tamale", "Cheese", "Arroz con Gondulez", "Chorizo"]

// YOU DO: Write code to add 3 new foods to the array.
// There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
var favoriteFoods = ["Pizza", "Croissant", "Tamale", "Cheese", "Arroz con Gondulez", "Chorizo"]
var dessertFoods = ["Churros", "Pasteis de Nata", "Tres Leches"]
var allMyFoods = favoriteFoods.concat()
console.log(favoriteFoods.concat(dessertFoods))
// expected return: ["Pizza", "Croissant", "Tamale", "Cheese", "Arroz con Gondulez", "Chorizo", "Churros", "Pasteis de Nata", "Tres Leches"]

// YOU DO: Remove the food that is in index position 0.
var first = favoriteFoods.shift()
console.log(first)
//expected return: "Pizza"
console.log(favoriteFoods)
//expected return: ["Croissant", "Tamale", "Cheese", "Arroz con Gondulez", "Chorizo", "Churros", "Pasteis de Nata", "Tres Leches"]

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

//  AppleMusic:

//  1: var browse = ["Listen Now", "You Gotta Hear", "New Music"]
//  2: var forYou = ["New Music Mix", "Recently Played", "Soul"]
//  3: var library = ["Playlists", "Artists", "Albums"]

//  4: var playlists = ["Classical", "My Top Rated", "Recently Played"]
//  5: var classical = ["Pascal Rogé", "Ludovico Einaudi", "Johann Sebastian Bach"]


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
var hasCharger = true;
var chargerType = "car";


// Write your conditional here

if (percentBatteryLeft >= 15) {
  console.log("Please plug phone into charger." + " " + "Press green arrow to call Uber Driver.");
} else if (percentBatteryLeft < 15) {
  console.log("Warning, battery too low to sustain Uber call.");
}
// expected return:  "Warning battery too low to sustain Uber call."

// If the variable percentBatteryLeft meets the condition that it is greater than or equal to fifteen, then the logical statement
// is the string that "Please plug phone into charger. Press green arrow to call Uber Driver."
// Should the first condition result in false the next condition to consider is that if the variable percentBatteryLeft
// is less than fifteen then the next logical statement "Warning, battery too low to sustain Uber call." is that value that is returned
// and I imagine it is to be run back to the user interface
// warning them that their battery is too low for a phone call right now.


if (chargerType = "car")
console.log(hasCharger)
// expected return: true

// If the variable chargerType meets the condition that it is the value of the string car then it is appropriate to log the that the boolean variable hasCharger as true.


if (chargerType = "car") {
  console.log("Please plug phone into charger." + " " + "Press green arrow to call Uber Driver.")
} else {
  console.log("Warning, battery too low to sustain Uber call.")
}
// expected return: "Please plug phone into charger. Press green arrow to call Uber Driver."

// If the variable named chargerType meets the condition that it is defined as the string value car, then log the string
//"Please plug phone into charger. Press green arrow to call Uber Driver." Otherwise, the string "Warning, battery too low to sustain Uber call."
// is the value that returns.


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// (this is annotated after each statement above. if that is ok, I will leave it.)

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
