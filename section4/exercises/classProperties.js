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
class Dog {
}
var breed = "Puggle";
var weight = 25;

console.log(breed)
console.log(weight)

// Prompt 2: Snack
class Snack {
  }
  var type = "Apple";
  var isHealthy = true;

console.log(type)
console.log(isHealthy)

// Prompt 3: Shirt
class Shirt {
  }
  var size = "XL";
  var isClean = false;

console.log(size)
console.log(isClean)

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
      this.breed = "Puggle";
      this.weight = 25;
      this.isSweet = true;
    }
  }

  var dogInfo = new Dog();
  console.log(dogInfo);

// Prompt 2: Snack
class Snack {
    constructor() {
      this.type = "Apple";
      this.isHealthy = true;
      this.variety = "Honey Crisp";
    }
  }

  var snackChoice = new Snack();
  console.log(snackChoice);

// Prompt 3: Shirt
class Shirt {
    constructor() {
      this.size = "XL";
      this.isClean = false;
      this.color = "black";
    }
  }

  var shirtSpecs = new Shirt();
  console.log(shirtSpecs);

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
  constructor(breed, weight, temperment) {
    this.breed = breed;
    this.weight = weight;
    this.isSweet = temperment;
  }
}

var dogInfo = new Dog("Puggle", 25, true);
console.log(dogInfo);
var dogInfo = new Dog("Shitzu", 15, false);
console.log(dogInfo);

// Prompt 2: Snack
class Snack {
    constructor(type, healthy, variety) {
      this.type = type;
      this.isHealthy = healthy;
      this.variety = variety;
    }
  }

  var snackChoice = new Snack("Apple", true, "Honey Crisp");
  console.log(snackChoice);
  var snackChoice = new Snack("Chocolate", false, "Carmel Fudge");
  console.log(snackChoice);

// Prompt 3: Shirt
class Shirt {
    constructor(size, washed, color) {
      this.size = size;
      this.isClean = washed;
      this.color = color;
    }
  }

  var shirtSpecs = new Shirt("XL", false, "black");
  console.log(shirtSpecs);
  var shirtSpecs = new Shirt("S", true, "green");
  console.log(shirtSpecs);
