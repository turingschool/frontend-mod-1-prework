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
//class Dog {

//}
var size = "small";
console.log(small);

var breed = "gs";
console.log(gs);

// Prompt 2: Snack
//class Snack {

//}

var brand = new Snack();
console.log(brand);

var type = new Snack();
consolelog(type);

// Prompt 3: Shirt
//class Shirt {

//}
var style = new Shirt();
console.log(style);

var material = new Shirt();
console.log(material);
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
class Dog {
  constructor() {
    this.size = "small";
    this.breed = "chihuahua";
    this.numberOfSpots = 14;
  }
}

var chihuahua = new Dog("small", "chihuahua", 14);
console.log(chihuahua);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.brand = "twix";
    this.type = "chocolate";
    this.numberOfPieces = 2;
  }
}

var chocolate = new Snack("twix", "chocolate", 2);
console.log(chocolate);
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.style = "tshirt";
    this.material = "cotton";
    this.length = "medium";
  }
}

var medium = new Shirt("tshirt", "cotton", "medium");
console.log(medium);
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
  constructor(size, breed, spots) {
    this.size = size;
    this.breed = breed;
    this.numberOfSpots = spots;
  }
}

var size = new Dog("small", "chihuahua", 14);
console.log(size);

var spots = new Dog("big", "german sherpherd", "spots");
console.log(spots);

// Prompt 2: Snack
class Snack {
  constructor(br, chocolate, pieces) {
    this.brand = br;
    this.type = chocolate;
    this.numberOfPieces = pieces;
  }
}

var chocolate = new Snack("twix", "chocolate", 2);
console.log(chocolate);

var br = new Snack("br", "granola", 4);
console,log(br)
// Prompt 3: Shirt
class Shirt {
  constructor(sty, materialOfShirt, lengthOfShirt) {
    this.style = sty;
    this.material = materialOfShirt;
    this.length = lengthOfShirt;
  }
}

var tshirt = new Shirt("tshirt", "cotton", "medium");
console.log(tshirt);

var cotton = new Shirt("jacket", "cotton", "small");
console.log(cotton);
