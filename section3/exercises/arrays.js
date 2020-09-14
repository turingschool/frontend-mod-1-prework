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
animals[3] = "Sloth";

// YOU DO: Write code that will log the String "Elephant" in the animals array
animals[4] = "Elephant";
//had to add "Elephant" back to array since it's place was taken by "Gorilla" at line 31
console.log(animals[4]);

//-------------------
// PART 2: Foods: Array Methods
//-------------------

// YOU DO: Declare a variable that will store an an array of at least 4 foods (strings)
var foodyFoodFood = new Array(4);


// YOU DO: Write code below that will log the number of elements in the array of
// foods from above.
console.log(foodyFoodFood.length);

// YOU DO: Write code below that uses a method to add "broccoli" to the foods array and
// log the changed array to verify "broccoli" has been added
foodyFoodFood[3] = "broccoli";
console.log(foodyFoodFood);

// YOU DO: Write code below that removes the last item of food from the foods array and
// log the changed array to verify that item has been removed
foodyFoodFood.pop();
console.log(foodyFoodFood);

// YOU DO: Write code to add 3 new foods to the array.
  // There are several ways to do this - choose whichever you'd like!
// Then, log the changed array to verify the new items have been added
foodyFoodFood.unshift("supreme pizza", "rice krispy treat", "blueberries");
console.log(foodyFoodFood);
// YOU DO: Remove the food that is in index position 0.
foodyFoodFood.shift();
console.log(foodyFoodFood);

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

//1: Wyzant
// var tutoringSubjects = ["biology","LSAT","elementary science","writing","philosophy"]

// 2: Netflix
//var continueWatching = ["Downton Abbey","Star Trek: The Next Generation", "Garfield: The Movie"]

// 3: Coursera
//var courseInstructors = ["Professor Michela Massimi", "Dr. Alasdair Richmond", "Dr. Suilin Lavelle", "Dr David Carmel"]


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
/* In the code below, the computer is told to evaluate truth of a conjunction, and, if it is evaluated to the boolean 'true',
to run the string "Sorry, not until you charge up". The first conjunct in this conjunction is the statement that the value of the
variable percentBatteryLeft is less than 15, which evaluates to true because percentBatteryLeft === 12 (assigned at line 117)
and 12 is less than 15. The second conjunct is a disjunction. The first disjunct is the statement that the value of the variable
hasCharger is false. This statement evaluates to false because (as assigned at line 118) the value of hasCharger is true.
The second disjunct is the statement that the value of the variable chargerType is not equal to "car". This disjunct evaluates
to false because (as assigned at line 119) the value of the variable chargerType is "car", and "car" is equal to "car". In order
to evaluate to true, a disjunction needs at least one true disjunct. Both of the disjuncts in this disjunction are false
so the disjunction evaluates to false. Both of the conjuncts in a conjunction must be true in order for the conjunction to evaluate
to true. In this case, the second conjunct (the disjunction) is false, so the conjunction evaluates to false, and the computer does
not run the string "Sorry, not until you charge up". */
if (percentBatteryLeft < 15 && (hasCharger = false || chargerType != "car")) {
  console.log("Sorry, not until you charge up");
/* the code below does not specify a completely new condition, but defines a condition relative to the conditional statement
on lines 133-134. It tells the computer to run the script "You can call and uber" if and only if the condition specified at
line 133 evaluates to false. As explained in the comments on line 122-132, the condition at line 133 does evaluate so false.
So THIS condition, the condition specified by the 'else' statement, is satisfied, and the computer runs the script "You can
call an uber".*/
} else {
  console.log("You can call an uber");
}


// YOU DO - ANNOTATE: Above each line of your code for this if statement, create a comment.
// That comment should describe, in your own words, and as technically precise as possible,
// what the line of code below, does.

// MAKE 100% SURE that you have RUN the code in node in your command line, to ensure it works
// as you think it does🌟
