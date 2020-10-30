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

var blackDog = new Dog()
var redDog = new Dog()

console.log(blackDog, redDog);
// Prompt 2: Snack
class Snack {

}

var fruit = new Snack
var granolaBar = new Snack
console.log(fruit, granolaBar);

// Prompt 3: Shirt

class Shirt {

};

var blueShirt = new Shirt;
var blackShirt = new Shirt;
console.log(blueShirt, blackShirt);
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
class Dogs {
  constructor() {
    this.bark = true;
    this.weight = 100;
    this.smart = true;
  }
}

var blackDog = new Dogs();
var redDog = new Dogs();
console.log(blackDog, redDog);
// Prompt 2: Snack
class Snacks {
  constructor(){
    this.ammount = 4;
    this.healthy = true;
    this.name = "tasty"
  }
}

var fruit = new Snacks();
var granolaBar = new Snacks();
console.log(fruit, granolaBar)
// Prompt 3: Shirt
class Shirts {
  constructor() {
    this.size = "XL";
    this.brand = "Volcom";
    this.graphic = true;
  }
}

var blueShirt = new Shirts();
var blackShirt = new Shirts();
console.log(blueShirt, blackShirt)
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
  constructor(boolean, weightOfDog, boolean2){
    this.bark = boolean;
    this.weight = weightOfDog;
    this.smart = boolean2;
  }
}

var blackDog = new Dog2(true, 100, false)
var redDog = new Dog2(false, 65, true)
console.log(blackDog, redDog)
// Prompt 2: Snack
class Snack2 {
  constructor(snackAmount, isHealthy, snackName){
    this.ammount = snackAmount;
    this.healthy = isHealthy;
    this.name = snackName;
  }
}

var fruit = new Snack2(4, true, "bananas")
var granolaBar = new Snack2(3, false, "chewy")
console.log(fruit, granolaBar)
// Prompt 3: Shirt

class Shirt2 {
  constructor(size, brand, hasGraphic){
    this.size = size;
    this.brand = brand;
    this.graphic = hasGraphic
  }
}

var blueShirt = new Shirt2("XL", "Gap", true);
var blackShirt = new Shirt2("Large", "Volcom", false);
console.log(blueShirt, blackShirt)
