/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

// EXAMPLE: Write code below that iterates through a list of animals and print
// each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
console.log(" ")

// YOU DO: Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.
console.log("=====================")
console.log(" ")

var awesome = ['lion', 'lemur', 'rhino'];

for (var i = 0; i < awesome.length; i++) {
  console.log("The " + awesome[i] + " is awesome!") 
}
console.log(" ")
console.log("=====================")
console.log(" ")

// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.

var food = ['noodles', 'sushi', 'rice']

for (var i = 0; i < food.length; i++) {
  console.log("Add " + food[i] + " to shopping list");
}
console.log(" ")
console.log("=====================")
console.log(" ")



// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)

// create array of numbers
var sum = [1, 2, 3, 4, 5]
for(var i = 0; i < sum.length; i++){
  console.log(sum[i] * 2 )
}


console.log(" ")
console.log("=====================")
console.log(" ")
// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.

var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];
names.shift(0,1)
for (var i = 0; i < names.length; i++) {
  console.log("Happy Birthday " + names[i])
}



console.log(" ")
console.log("=====================")
console.log(" ")
// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far. 

// Remember, stuck for 15-20 minutes? Reach out to your pre-work group on Slack.

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];
for (var i = 0; i <= ages.length; i++) {
  if (ages[i] <= 17) {
    console.log("Oh no, you can't vote quite yet")}
    else if (ages[i] >= 18) {
      console.log('Make sure you get out and vote')
    }
    }