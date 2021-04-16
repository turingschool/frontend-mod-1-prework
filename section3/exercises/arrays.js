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

// // EXAMPLE: Write code below that will log "Zebra" from the animals array
// // YOUR CODE HERE
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[0]);

// YOU DO: Write code below that will log the number of elements in array of
// animals from above.
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals.length);

// YOU DO: Write code that will reassign the last item in the animals
// array to "Gorilla"
var animals = ["Zebra", "Giraffe", "Elephant"];
animals [2] = "Gorilla";
console.log(animals);


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
var animals = ["Zebra", "Giraffe", "Elephant"];
animals [3] = "Tiger";
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
var animals = ["Zebra", "Giraffe", "Elephant"];
console.log(animals[2]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["Hotdog", "Pizza", "Burgers", "Tacos"];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
var foods = ["Hotdog", "Pizza", "Burgers", "Tacos"];
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
var foods = ["Hotdog", "Pizza", "Burgers", "Tacos"];
foods [4] = "Broccoli";
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
var foods = ["Hotdog", "Pizza", "Burgers", "Tacos","Broccoli"];
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
var foods = ["Hotdog", "Pizza", "Burgers", "Tacos"];
foods.unshift("Carne asada","Tortas");
foods.push("Chicken nuggets");
console.log(foods);


// YOU DO: Remove the food that is in index position 0.
var foods = ["Hotdog", "Pizza", "Burgers", "Tacos"];
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

// 1: Comments from a post.probably has a list where it keeps the amout of comments each post has.
var amountOfComments = [70,32,98,12];

// 2: A app can have a list of your friends names in a group chat.
var name = ["Luis", "Jake", "David"];

// 3: A app can have list of selections of local 1-5 star rated restuarants.
var restuarantsRating = ["Sunshine Cafe", "Mountain Lion Cafe", "White Boots"];


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

// For this example I used the If statement

if (percentBatteryLeft >= 15){
  console.log("You're able to call a uber !");
} else if (percentBatteryLeft < 15){
  console.log("Sorry you wont be able to call a Uber");
}

/* in line 138 I used the if statement meaning proccess if my variable percentBatteryLeft
is greater then 15 or equal to 15.Line 139 will print out if line 138 was greater or equal to 15.
which would be a result of a boolean expression which was true and execute and print out "Youre able to call a Uber !"
letting the user know that they are able to call a Uber. In line 140 I used a else if statement because we have to make sure
that is not just would be true. We have to know that its a false as well so I used a else statement. Line 140
means if my fist statement was incorrect then the else if statement would come and process if percentBatteryLeft is less then 15.
Line 141 would execute print out my log if the statement was less then 15. Which would have a output of "sorry you wont be able
to call a uber". Line 142 would be the end of my if statement code block. */


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
