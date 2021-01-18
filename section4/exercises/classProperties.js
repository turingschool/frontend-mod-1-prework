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
class Dog {};

var corgi = new Dog();
var bassethound = new Dog();
console.log(corgi);
console.log(bassethound);

// Prompt 2: Snack
class Snack {};

var goldfish = new Snack();
var trailMix = new Snack();
console.log(goldfish);
console.log(trailMix);

// Prompt 3: Shirt
class Shirt {};

var buttonDown = new Shirt();
var tShirt = new Shirt();
console.log(buttonDown);
console.log(tShirt);


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
// Named Dog2 because Dog was already declared in previous exercise
class Dog2 {
  constructor() {
    this.earType = "pointy";
    this.legLength = "short";
    this.color = "brown";
  }
};

var corgi = new Dog2();
console.log(corgi);
var bassethound = new Dog2();
console.log(bassethound);

// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.type = "crackers";
    this.sweetOrSalty = "salty";
    this.shareable = "perfect for sharing";
  }
};

var goldfish = new Snack2();
console.log(goldfish);
var trailMix = new Snack2();
console.log(trailMix);

// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.buttons = "Has buttons for full length of shirt";
    this.formalOrInformal = "formal";
    this.sleeveLength = "long-sleeved";
  }
};

var buttonDown = new Shirt2();
console.log(buttonDown);
var tShirt = new Shirt2();
console.log(tShirt);
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
// When run, the object instance corgi passes in the argument carrying its
// properties through the parameters set by the constructor for the class, Dog3.
// bassethound does the same.
class Dog3 {
  constructor(ear, leg, color) {
    this.earType = ear;
    this.legLength = leg;
    this.color = color;
  }
};

var corgi = new Dog3("pointy", "short", "brown and white");
console.log(corgi);
var bassethound = new Dog3("floppy", "short", "brown");
console.log(bassethound);


// Prompt 2: Snack
class Snack3 {
  constructor(type, sweetOrSalty, shareable) {
    this.type = type;
    this.sweetOrSalty = sweetOrSalty;
    this.shareable = shareable;
  }
};

var goldfish = new Snack3("cracker", "salty", "perfect for sharing");
console.log(goldfish);
var trailMix = new Snack3("nuts and fruit", "both sweet and salty", "perfect for sharing");
console.log(trailMix);


// Prompt 3: Shirt
class Shirt3 {
  constructor(buttons, formalOrInformal, sleeveLength) {
    this.buttons = buttons;
    this.formalOrInformal = formalOrInformal;
    this.sleeveLength = sleeveLength;
  }
};

var buttonDown = new Shirt3("Has buttons for full length of shirt", "formal", "long-sleeved");
console.log(buttonDown);
var tShirt = new Shirt3("no buttons", "informal", "short-sleeved");
console.log(tShirt);
