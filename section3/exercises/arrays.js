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
var animalCount = animals.length;
console.log(animalCount);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
animals[2] = "Gorilla";

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = "Lemur";

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals[4] = "Elephant";
console.log(animals[4]);

console.log(animals);
console.log("End of Part 1");


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var snacks = ['apple', 'chips', 'trail mix', 'grapes'];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(snacks.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added

snacks.push("broccoli");
console.log(snacks);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
snacks.pop();
console.log(snacks);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
snacks.push('cold pizza', 'PB&J', 'carrots');
console.log(snacks);

// YOU DO: Remove the food that is in index position 0.
snacks.shift();
console.log(snacks);
console.log("End of Part 2");
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

// 1: Shopping cart on Amazon might use array to store items together for purchase.
// 2: Recently viewed items on Amazon might be populated in an array.
// 3: When Amazon provides a list of similar items to the one you're viewing, they could be stored in an array.


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
// This conditional statement will check whether percentBatteryLeft is less than
// 15 and if hasCharger is true and if chargerType is "car".
if (percentBatteryLeft < 15 && hasCharger === true && chargerType === "car") {
// If all three of those conditions above are true, it will log the next line as written.
  console.log("You can call an Uber if you charge in the car.");
// Otherwise, it will check the next line to see if percentBatteryLeft is greater
//than or equal to 15...
} else if (percentBatteryLeft >= 15) {
// If this condition above is met, it will log the following line
  console.log("You have enough battery to call an Uber!");
//Finally, if neither the first if or else if conditions are true, it will
// log the last line
} else {
// Because this is in the "else" section, the following line will log if none
// of the prior conditions are met:
  console.log("Sorry, not enough charge to call an Uber.");
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does. Done!

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟 Done!👍
