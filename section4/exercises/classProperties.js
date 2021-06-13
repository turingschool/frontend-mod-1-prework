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
  constructor() {

  }
}

var bowser = new Dog();
var malcolm = new Dog();
console.log(bowser);
console.log(malcolm);

// Prompt 2: Snack
class Snack {
  constructor() {

  }
}

var beefJerky = new Snack();
var macadamiaNuts = new Snack();
console.log(beefJerky);
console.log(macadamiaNuts);

// Prompt 3: Shirt
class Shirt {
  constructor() {

  }
}

var favShirt = new Shirt();
var sleepShirt = new Shirt();
console.log(favShirt);
console.log(sleepShirt);

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
class Doge {
  constructor(breed, weight, disposition) {
    this.breed = breed;
    this.weight = weight;
    this.disposition = disposition;
  }
}

var hobie = new Doge("mutt", "50 lbs", "hyper");
console.log(hobie);

// Prompt 2: Snack
class Snax {
  constructor(taste, macro, cost) {
    this.taste = taste;
    this.macro = macro;
    this.cost = cost;
  }
}

var greekYogurt = new Snax("tangy", "protein", "medium");
console.log(greekYogurt);

// Prompt 3: Shirt
class Top {
  constructor(sleeveLength, buttons, hasCollar) {
    this.sleeveLength = sleeveLength;
    this.buttons = buttons;
    this.hasCollar = hasCollar;
  }
}

var myTee = new Top("short", "none", false);
console.log(myTee);

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
class Doggy {
  constructor(isHungry, isSleepy, isHome) {
    this.isHungry = isHungry;
    this.isSleepy = isSleepy;
    this.isHome = isHome;
  }
}

var fiona = new Doggy(false, true, true);
var cletus = new Doggy(true, true, false);
console.log(fiona);
console.log(cletus);

// Prompt 2: Snack
class Munchy {
  constructor(type, packaging, doIConsume) {
    this.type = type;
    this.packaging = packaging;
    this.doIConsume = doIConsume;
  }
}

var kiwi = new Munchy("fruit", "none", true);
console.log(kiwi);
var coffee = new Munchy("drink", "canister", true);
console.log(coffee);

// Prompt 3: Shirt
class Shiirt {
  constructor(color, fabric, neckShape) {
    this.color = color;
    this.fabric = fabric;
    this.neckShape = neckShape;
  }
}

var xShirt = new Shiirt("burgundy", "cotton", "v-neck");
console.log(xShirt);
var yShirt = new Shiirt("olive", "cotton", "henley");
console.log(yShirt);
