/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
}

var goldenRetriever = new Dog();
var beagle = new Dog();

console.log(goldenRetriever, beagle);

// Prompt 2: Snack
class Snack{
}

var peanutButter = new Snack();
var candyBar = new Snack();

console.log(peanutButter, candyBar);

// Prompt 3: Shirt
class Shirt {
}

var polo = new Shirt();
var tankTop = new Shirt();

console.log(polo, tankTop);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

//Prompt 1: Dog
class Dog1 {
  constructor() {
    this.color = 'brown';
    this.length = 'short';
    this.height = 'short';
  }
}

var beagle = new Dog1();

console.log(beagle);


// Prompt 2: Snack
class Snack1{
  constructor() {
    this.protein = '7 grams';
    this.calorie = 160;
    this.sugar = '25 grams';
  }
}

var peanutButter = new Snack1();

console.log(peanutButter);

// Prompt 3: Shirt
class Shirt1 {
  constructor() {
  this.sleeve = false;
  this.color = 'red';
  this.button = false;
  }
}

var tankTop = new Shirt1();

console.log(tankTop);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog2 {
  constructor(furColor, furLength, height) {
    this.color = furColor;
    this.length = furLength;
    this.height = height;
  }
}

var goldenRetriever = new Dog2('yellow', 'medium', 'medium');
var beagle = new Dog2('brown', 'short', 'short');

console.log(goldenRetriever);
console.log(beagle);

// Prompt 2: Snack
class Snack2{
  constructor(protein, calorie, carb) {
    this.protein = protein;
    this.calorie = calorie;
    this.sugar = carb;
  }
}
 var candyBar = new Snack2('3 grams', 300, '50 grams');
var peanutButter = new Snack2('7 grams', 160, '25 grams');

console.log(candyBar);
console.log(peanutButter);

// Prompt 3: Shirt
class Shirt2 {
  constructor(hasSleeves, color, button) {
  this.sleeve = hasSleeves;
  this.color = color;
  this.button = button;
  }
}

var polo = new Shirt2(true, 'blue', true);
var tankTop = new Shirt2(false, 'red', 'false');

console.log(polo);
console.log(tankTop);
