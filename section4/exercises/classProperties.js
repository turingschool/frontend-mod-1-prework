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

var breed = new Dog();
var color = new Dog();

console.log(breed);
console.log(color);

// Prompt 2: Snack
class Snack {

}

var chocolate = new Snack();
var apple = new Snack();

console.log(chocolate);
console.log(apple);

// Prompt 3: Shirt
class Shirt {

}

var tankTop = new Shirt();
var polo = new Shirt();

console.log(tankTop);
console.log(polo);
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

class Doggie {
  constructor() {
    this.breed = "chow",
    this.weight = 35,
    this.age = 3
  }
}

var chow = new Doggie();

console.log(chow);

// Prompt 2: Snack

class Snacky {
  constructor() {
    this.food = "apricot";
    this.sugar = true;
    this.fiber = true;
  }
}

var apricot = new Snacky();

console.log(apricot);
// Prompt 3: Shirt

class Shirtr {
  constructor() {
    this.color = "blue";
    this.sleeveLength = "short";
    this.collar = false;
  }
}

var sleeve = new Shirtr();

console.log(sleeve);
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

class Canine {
  constructor(years, pounds, breed) {
    this.age = years;
    this.weight = pounds;
    this.type = breed;
  }
}

var beagle = new Canine(5, 20, "beagle");
var pitBull = new Canine(2, 40, "pit bull");

console.log(beagle);
console.log(pitBull);

// Prompt 2: Snack

class LiquidSnack {
  constructor(type, ounces, alcohol) {
  this.variety = type;
  this.volume = ounces;
  this.intoxicating = alcohol;
  }
}

var pepsi = new LiquidSnack("cola", 12, false);
var fatTire = new LiquidSnack("ale", 22, true);

console.log(pepsi);
console.log(fatTire);
// Prompt 3: Shirt

class WorkShirt {
  constructor(buttons, neckArea, sleeve) {
    this.buttonUp = buttons;
    this.collar = neckArea;
    this.longSleeve = sleeve;
  }
}

var oxford = new WorkShirt(true, true, true);
var turtleNeck = new WorkShirt(false, false, true);

console.log(oxford);
console.log(turtleNeck);
