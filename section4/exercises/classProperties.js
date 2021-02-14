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

class Dog1 {
}

var husky = new Dog1();
var bullTerrier = new Dog1();

console.log(husky);
console.log(bullTerrier);

// Prompt 2: Snack
class Snack1 {
}

var potatoChip = new Snack1();
var orange = new Snack1();

console.log(potatoChip);
console.log(orange);

// Prompt 3: Shirt
class Shirt1 {
}

var fittedTee = new Shirt1();
var turtleneck = new Shirt1();

console.log(fittedTee);
console.log(turtleneck);


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
class Dog2 {
  constructor () {
    this.type = "terrier";
    this.size = "small";
    this.coatColor = "brown";
  }
}

var terrier = new Dog2();
console.log(terrier);

// Prompt 2: Snack
class Snack2 {
  constructor () {
    this.type = "pretzel";
    this.salty = true;
    this.calories = "120 cal";
  }
}

var pretzel = new Snack2();
console.log(pretzel);

// Prompt 3: Shirt
class Shirt2 {
  constructor () {
    this.type = "tank top";
    this.color = "purple";
    this.onSale = false;
  }
}

var tankTop = new Shirt2();
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

class Dog3 {
  constructor(size, coatColor, breed) {
    this.size = size;
    this.color = coatColor;
    this.breed = breed;
  }
}

var corgi = new Dog3("medium", "black and tan", "corgi");
var dachshund = new Dog3("small", "merle", "dachshund");

console.log(corgi);
console.log(dachshund);

// Prompt 2: Snack
class Snack3 {
  constructor(isSalty, calories, type) {
    this.salty = isSalty;
    this.calories = calories;
    this.type = type;
  }
}

var hummus = new Snack3(true, "50 cal", "hummus");
var apple = new Snack3(false, "95 cal", "apple");

console.log(hummus);
console.log(apple);

// Prompt 3: Shirt
class Shirt3 {
  constructor(style, material, saleStatus) {
    this.style = style;
    this.material = material;
    this.onSale = saleStatus;
  }
}

var tShirt = new Shirt3("T-shirt", "cotton jersey", true);
var buttonDown = new Shirt3("Button down", "cotton", false);

console.log(tShirt);
console.log(buttonDown);
