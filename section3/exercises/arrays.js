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
animals.push ("Gorilla");

// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
animals[3] = "Dog";

// YOU DO: Write code that will log the String "Elephant" in the animals array
console.log(animals[2]);
console.log(animals)


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ["Mac and Cheese", "Bread", "Apple", "Sour Patch Kids"]

// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foods.push ("broccoli");
console.log(foods);
console.log(foods.length);


// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foods.pop();
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foods.push(
  "Banana",
  "Mango",
  "Garlic Bread",
);
console.log(foods);

// YOU DO: Remove the food that is in index position 0.
delete foods[0];
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

// 1:
// Easiest example I can think of is my email. Although I know it works in a different way with mail servers,
// when organizing it in something like Gmail, I assume this is what is going on. A list of emails is grabbed from
// a database and sent to the client in a understandable viewing medium.
// 2:
// TikTok, I will always come back to TikTok, sorry.. This works the same way as the example above, each account is
// assigned an array of videoIDs, those video IDs translate to a link to a video that generates a thumbnail. These thumbnails
// will show up on the users phone below an account.
// 3:
// I immagine when looking at a video, the video will likely have an array of data as well. There is likely something that records
// the amount of likes, comments and views, each is a integer, so easy to store and manipulate just as you would a regular numbber.


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
//Set a required battery variable for later changes
var requiredBattery = 15
// In order to minimize code below I wrote messages out as a variable
var sorryMSG = "Sorry, not all conditions are met, You need at least " + requiredBattery + "% battery to use Uber, you only have "+ percentBatteryLeft + "% left unfortunatly";
var callMSG = "All conditions are met!, call an Uber and get home safe!";

//This checks if the users percentBatteryLeft is less than the defined requiredBattery,
if (percentBatteryLeft <= requiredBattery){

  //If less or equal to, sends sorryMSG variable to log
  console.log(sorryMSG);
}
//This will check if the percentBatteryLeft is greater than requiredBattery,
else if (percentBatteryLeft > requiredBattery){
  //log to the console callMSG, telling user they met conditions to call an Uber
  console.log(callMSG);
}

// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
