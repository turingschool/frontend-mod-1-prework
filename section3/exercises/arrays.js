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
animals[2] = 'Gorilla';
console.log(animals[2]);
// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals.push('Rhino');
console.log(animals.indexOf('Rhino'));

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[2]);//Not sure where I went wrong because I thought we were deleting ELephant and reassigning it to gorilla.

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var groceryList = ['Tomatoes', 'Cucumbers', 'Carrots', 'Celery'];

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(groceryList.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
groceryList.unshift('broccoli');
console.log(groceryList);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
groceryList.pop();
console.log(groceryList);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
groceryList.push('Milk', 'Eggs', 'Bread');
console.log(groceryList);
// YOU DO: Remove the food that is in index position 0.
groceryList.shift();
console.log(groceryList);
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

// 1: I see lists storing data utilized in youtube a lot, The subscribtions page on youtube might have an array such as ['Tiny house video', 'dog video', 'JS tutorial']
// that hold each of those respecitve videos data in that array.
// 2: Also in youtube the recommended page probably uses a list, This list would probably be something quite similar to my last example, but instead of
// pulling data from your subscribed pages, it pulls data that has been formed to be similar to what you like.
// 3: Lastly in youtube you might see the settings page having a list or array of options on the sidebar, ['Account', 'Notifications', 'Playback and Performance' etc]
// this array allows you to visit a unique page with each option of the list, having to store all of these values in individual strings would get tedious.


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
//This if else statement will determine if the user has 15% of battery left and ignore the other variables because
//they are not relavant. If the user has 15% of battery or more they will receive a message telling them that they can call an uber and if not, vise versa.
if(percentBatteryLeft >= 15){
  console.log('You can call an Uber');
} else {
  console.log('Sorry, you cannot call an Uber');
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
