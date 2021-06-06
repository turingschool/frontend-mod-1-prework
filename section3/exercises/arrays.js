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
console.log(animals);
animals[2]= "Gorilla";
console.log(animals);


// YOU DO: Write code that will add a new animal (type of your choice) to position 3.
addAnimal = animals.push('Lion');
console.log(animals);

// YOU DO: Write code that will log the String "Elephant" in the animals array
addAnotherAnimal=animals.push('Elephant');
console.log(animals);
console.log(addAnotherAnimal);


//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foods = ['Apples', 'Cucumbers', 'Kale', 'Bread'];
console.log(foods);


// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foods.length);


// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
addFood = foods.push('Broccoli');
console.log(foods);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
popped = foods.pop();
console.log(popped);
console.log(foods);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
addFoods =foods.push('Watermelon', 'Pears', 'Ice cream');
console.log(foods);
console.log(addFoods);

// YOU DO: Remove the food that is in index position 0.
firstElement = foods.shift();
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

// 1: Schoology: var schoologyCourse = ['assignments', 'calendar', 'posts'];
// 2: Google drive: var googleDocs = ['blank document', 'templates', 'edit history'];
// 3: Gmail: var gmail = ['credentials', 'user image', 'google logo'];


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
// this conditional below could only be met if the variable about battery percent was strict equality to meet the condition.
//Because this condition cannot be met, the next conditional code must be read to see if it can be executed.
  if (percentBatteryLeft === 15) {
    console.log("cannot call an uber");
//the below conditional would need to be met by the battery percent equals to or is great than 15% and if so, the condition would allow calling an uber.
  } else if (percentBatteryLeft >= 15) {
      console.log("can call an uber");
} //this line of code is stating that if the battery (variable decalred) is below 15%  (using a number) which
//is shown given that it is at 12%, there cannot be an uber called. The line of code
// checks to see if the percentBatteryLeft is strictly equal to the condition set, but the condition cannot meet it because it is less than 15.
//In this case, the condition is not strictly equal to the amount of battery needed,
//therefore there would not be a way to call an uber so the if statement cannot meet the conditions.
 else if (hasCharger === true && chargerType === "car") {
//Because the conditions can be met, despite the fact that the battery is below 15%, then an uber can be called succesfully as the output when the console.log is run.
  console.log("can call an uber");
}
//finally if the above conditions were not met, then



    //block of code executes if condition1 evaluates to true
    //block of code executes if condition1 evaluates to false and condition2 evaluates to true.
    //block of code executes if condition1 and condition2 evaluate to false
    //and condition3 evaluates to true.
    //block of code executes if none of the conditions above evaluate to true.


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
