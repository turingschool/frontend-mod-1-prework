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
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {};

var lab = new Dog();
var husky = new Dog();

console.log(lab , husky);

// Prompt 2: Snack
class Snack {};

var chips = new Snack();
var popcorn = new Snack();

console.log(chips , popcorn);

// Prompt 3: Shirt
class Shirt {};

var shortSleeve = new Shirt();
var longSleeve = new Shirt();

console.log(shortSleeve , longSleeve);

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
    constructor () {
      this.name = "Jack";
      this.age = 10;
      this.color = "yellow";
    }
  };

  var lab = new Dog();

  console.log(lab);

  // Prompt 2: Snack
  class Snack {
    constructor () {
      this.tastes = "salty";
      this.flavor = "Salt & Vinegar";
      this.isHealthy = false;
    }
  };

  var chips = new Snack();

  console.log(chips);

  // Prompt 3: Shirt
  class Shirt {
    constructor () {
      this.color = "black";
      this.fabric = "cotton";
      this.hasPattern = false;
    }
  };

  var shortSleeve = new Shirt();

  console.log(shortSleeve);


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
  constructor (dogName , dogAge , dogColor) {
    this.name = dogName;
    this.age = dogAge;
    this.color = dogColor;
  }
}

var lab = new Dog("Jack" , 10 , "yellow");
var boxer = new Dog("Spencer" , 8 , "brown");

console.log(lab , boxer);

// Prompt 2: Snack
class Snack {
  constructor (snackTastes , snackFlavor , snackIsHealthy) {
    this.tastes = snackTastes;
    this.flavor = snackFlavor;
    this.isHealthy = snackIsHealthy;
  }
}

var chips = new Snack("salty" , "BBQ" , false);
var apple = new Snack("sweet" , "honeycrisp" , true);

console.log(chips , apple);

// Prompt 3: Shirt
class Shirt {
  constructor (shirtColor , shirtFabric , shirtHasPattern) {
    this.color = shirtColor;
    this.fabric = shirtFabric;
    this.hasPattern = shirtHasPattern;
  }
}

var shortSleeve = new Shirt("black" , "cotton" , false);
var longSleeve = new Shirt("grey" , "linen" , true);

console.log(shortSleeve , longSleeve);
