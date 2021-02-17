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

animals.push("Hippo");

// YOU DO: Write code that will log the String "Elephant" in the animals array

animals.unshift("Elephant");
console.log(animals[0]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)

var favFoods = ["Pizza", "Fried Rice", "Tacos", "Pasta"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.

console.log(favFoods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added

favFoods.unshift("Broccoli");
console.log(favFoods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed

favFoods.pop();
console.log(favFoods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added

favFoods.push("Celery", "Quinoa", "Sweet Potato");
console.log(favFoods);

// YOU DO: Remove the food that is in index position 0.

favFoods.shift();
console.log(favFoods);

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

// 1:Previous orders on Amazon
// 2:Profile information on a dating profile- questions/prompts where you input info about your likes and dislikes.
// 3:Youtube- a list of the accounts I've subscribed to.


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

//My Comment: Here I am establishing my first conditional statement. If a value of 15 or more is passed into this
//conditional statement (from the variable percentBatteryLeft) then the very next line is executed in the code block, directly
//below and within the curly braces: "You can use your phone to call an Uber." If percentBatteryLeft is less than 15 then the script will move to the next
//line.

if (percentBatteryLeft >= 15) {
  console.log("You can use your phone to call an Uber.");
}
//My Comment: If the script has moved onto this part of the code, then the if statement (above) returned false. Here
//the script will evaluate both of the statements, on either side of the AND operator. If either statement returns false
//the script will move on to the next part of the conditional statement and will not run the command in the code block,
//directly below else if. If both statements, on either side of the AND operator, return true then the line "You can
//charge your phone and use it to call an Uber." will be logged and the script will not move onto any other statements.
//Here I had to change my code, so that I'm using the strict equality operator. I attempted to run my code in the terminal,
//using simply the assignment operator in the parentheses here), and received an error warning. I understand that JavaScript
//would be assuming that I am attempting to reassign the values of hasCharger and chargerType instead of asking JavaScript
//to compare the values.
else if (hasCharger === true && chargerType === "car") {
  console.log("You can charge your phone and use it to call an Uber");
}
//My Comment: If the script has moved onto this part of the code, then the if and the else if statements (above) have
//returned false. Here, the script will default to running this code block, directly below else, and the line "You
//cannot use your phone to call an Uber. Start Walking!" will be logged.
else {
  console.log("You cannot use your phone to call an Uber. Start Walking!");
};

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
