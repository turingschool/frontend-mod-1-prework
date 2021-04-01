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
// Class: Dog; Object Instances: poodle, germanShepard
class Dog {

}
var poodle = new Dog();
var germanShepard = new Dog();

console.log(poodle);
console.log(germanShepard);
// Prompt 2: Snack
class Snack {

}
var iceCream = new Snack();
console.log(iceCream);

var strawberry = new Snack();
console.log(strawberry);

// Prompt 3: Shirt
class Shirt {

}
var tee = new Shirt();
console.log(tee);

var longSleeve = new Shirt();
console.log(longSleeve);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class Dog1 {
 constructor() {
   this.color = "white";
   this.hasFourLegs = true;
   this.eyeCount = 2;
 }
}
var goldenDoodle = new Dog1();
console.log(goldenDoodle);
// Prompt 2: Snack
class Snack1 {
  constructor() {
    this.isTasty = true;
    this.color = "green";
    this.amount = 5;
  }
}
var asparagas = new Snack1();
console.log(asparagas);

// Prompt 3: Shirt
class Shirt1 {
  constructor() {
    this.color = "black";
    this.hasSleeves = false;
    this.amountOfPatches = 2;
  }
}
var tee = new Shirt1();
console.log(tee);
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
  constructor(color, hasFourLegs, eyeCount) {
    this.color = color;
    this.hasFourLegs = hasFourLegs;
    this.eyeCount = eyeCount;
  }
}
var huskey = new Dog2("gray", true, 2);
console.log(huskey);
// Prompt 2: Snack
class Snack2 {
  constructor(isTasty, color, amount) {
    this.isTasty = isTasty;
    this.color = color;
    this.amount = amount;
  }
}
var juniorMint = new Snack2(true, "brown", 25);
console.log(juniorMint);
// Prompt 3: Shirt
class Shirt2 {
  constructor(color, hasSleeves, amountOfPatches) {
    this.color = color;
    this.hasSleeves = hasSleeves;
    this.amountOfPatches = amountOfPatches;
  }
}
var buttonUp = new Shirt2("orange", true, 1);
console.log(buttonUp);
