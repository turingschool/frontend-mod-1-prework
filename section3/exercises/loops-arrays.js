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

// YOU DO: Write code below that iterates through a list of animals and prints "The
// <animal> is awesome!" for each animal.
var animals = ["Zebra", "Giraffe", "Elephant"];

for (var i=0; i < animals.length; i++) {
  console.log("The" + " " + animals[i] + " is awesome!")
}



// YOU DO: Create an array of foods and then iterate over that array to log "Add
// <food> to shopping list" for each food item.
var food = ["Banana", "Apple", "Lettuce", "Potatoes"]

for (var i = 0; i < food.length; i++)
console.log("Add" + " " + food[i] + " " + "to the shopping list")

// YOU DO: Create an array of numbers and then iterate over that array to log double
// of each of the number. (Ex: 4 doubled is 8.)
var numbers = [6, 8, 12, 15, 18, 20]

for (var i = 0; i < numbers.length; i++){
console.log(numbers[i] * 2)
}

// YOU DO: Using the array of names below, print out "Happy Birthday <name>" for
// each name except the first two.
var names = ["Sevy", "Lindsey", "Jericho", "Raeonna", "Latrina", "Jhana", "Luca"];

for (var i = 3; i < names.length; i++)
  var first = names.shift();{
    console.log("Happy Birthday" + " " + names)
  }


// THE FINAL YOU DO: Using the array of ages below, print out a statement for each age.
// The age should determine which message is printed out:
  // Under 18? "Oh no, you can't vote quite yet."
  // 18 or over? "Make sure you get out and vote!"

// WORD FROM THE WISE: Before you start coding, jot down, with pen and paper, what steps you
// want to tell the program to take. Think of all the concepts you've learned so far.

// Remember, stuck for 15-20 minutes? Reach out to your pre-work group on Slack.

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];

for (var i = 0; i < ages.length; i++)
if (ages [i] === 10) {
  console.log("I want to go play outside")
}else if (ages [i] === 16) {
  console.log("I can't wait to get my drivers license")
}else if (ages [i] === 17) {
  console.log("It'll be fun to drive this year")
}else if (ages [i] === 18) {
  console.log("We made it to senior year!")
}else if (ages [i] === 20) {
  console.log("Being 20 years old is brutal")
}else if (ages [i] === 22) {
  console.log("Feels good to finally be over 21")
}else if (ages [i] === 34) {
  console.log("34 is the new 24")
}else if (ages [i] === 49) {
  console.log("49 and feeling fine")
}else if (ages [i] === 65) {
  console.log("I'm retired, whats work?")
}
