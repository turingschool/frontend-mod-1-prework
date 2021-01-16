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

// NOTE: Turned the following prompts to comments to allow future prompts to run properly.
// Prompt 1: Dog
// class Dog {
//
// }
// var goldenLab = new Dog();
// var poodle = new Dog();
// console.log(goldenLab);
// console.log(poodle);

// Prompt 2: Snack
// class Snack {
//
// }
// var cheezIt = new Snack();
// var hummus = new Snack();
// console.log(cheezIt);
// console.log(hummus);

// Prompt 3: Shirt
// class Shirt {
//
// }
// var tShirt = new Shirt();
// var buttonUp = new Shirt();
// console.log(tShirt);
// console.log(buttonUp);

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
// class Dog {
//   constructor() {
//     this.furColor = "yellow";
//     this.dogSize = "medium";
//     this.averageAge = 13;
//   }
// }
// var goldenLab = new Dog();
// console.log(goldenLab);

// Prompt 2: Snack
// class Snack {
//   constructor() {
//     this.flavor = "cheddar";
//     this.bagSize = "family";
//     this.shelfLife = "2 years";
//   }
// }
// var cheezIt = new Snack ();
// console.log(cheezIt);

// Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.shirtSize = "large";
//     this.shirtColor = "blue";
//     this.shirtStyle = "graphic";
//   }
// }
// var tShirt = new Shirt ();
// console.log(tShirt);
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
class Dog {
  constructor(furColor, dogSize, averageAge) {
    this.color = furColor;
    this.size = dogSize;
    this.age = averageAge;
  }
}
var goldenLab = new Dog("yellow", "medium", 13);
console.log(goldenLab);
var poodle = new Dog("white", "small", 10);
console.log(poodle);

// Prompt 2: Snack
class Snack {
  constructor(snackFlavor, snackSize, snackLife) {
    this.flavor = snackFlavor;
    this.bagSize = snackSize;
    this.shelfLife = snackLife;
  }
}
var cheezIt = new Snack("cheddar", "family", "2 years");
console.log(cheezIt);
var hummus = new Snack("garlic", "individual portion", "1.5 weeks");
console.log(hummus);

// Prompt 3: Shirt
class Shirt {
  constructor(size, color, style) {
    this.shirtSize = size;
    this.shirtColor = color;
    this.shirtStyle = style;
  }
}
var tShirt = new Shirt("large", "blue", "graphic");
console.log(tShirt);
var buttonUp = new Shirt("medium", "red", "plaid");
console.log(buttonUp);
