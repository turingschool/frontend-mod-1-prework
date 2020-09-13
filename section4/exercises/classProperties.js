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

class DogOne {

}

var dalmation = new DogOne();
var pitbull = new DogOne();

console.log(dalmation);
console.log(pitbull);

// Prompt 2: Snack

class SnackOne {

}

var oreo = new SnackOne();
var potatoChips = new SnackOne();

console.log(oreo);
console.log(potatoChips);

// Prompt 3: Shirt

class ShirtOne {

}

var turtleNeck = new ShirtOne();
var tankTop = new ShirtOne();

console.log(turtleNeck);
console.log(tankTop);

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

class DogTwo {
  constructor() {
    this.name = "Shelby"
    this.age = 2
    this.breed = "dalmation"
  }
}

var dalmation = new DogTwo();

console.log(dalmation);

// Prompt 2: Snack

class SnackTwo {
  constructor() {
    this.type = "oreo"
    this.numberInPackage = 4
    this.isExpired = false
  }
}

var oreo = new SnackTwo();
console.log(oreo);

// Prompt 3: Shirt

class ShirtTwo {
  constructor() {
    this.sleeveLength = "Long Sleeve"
    this.material = "cotton"
    this.size = 5
  }
}

var turtleNeck = new ShirtTwo()

console.log(turtleNeck);

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

class DogThree {
  constructor(dogName, dogAge, dogBreed) {
    this.name = dogName
    this.age = dogAge
    this.breed = dogBreed
  }
}

var goldenRetreiver = new DogThree("Molly", 3, "Golden Retreiver")
var poodle = new DogThree("Sheila", 5, "Poodle")

console.log(goldenRetreiver);
console.log(poodle);

// Prompt 2: Snack

class SnackThree {
  constructor(snackType, number, expiration) {
    this.type = snackType
    this.numberInPackage = number
    this.isExpired = expiration
  }
}

var fruitSnacks = new SnackThree("Fruit Snacks", 10, false)
var popcorn = new SnackThree("Popcorn", 50, true)

console.log(fruitSnacks);
console.log(popcorn);

// Prompt 3: Shirt

class ShirtThree {
  constructor(shirtSleeve, shirtMaterial, shirtSize) {
    this.sleeveLength = shirtSleeve
    this.material = shirtMaterial
    this.size = shirtSize
  }
}

var tshirt = new ShirtThree("Short Sleeve", "Cotton", 8)
var tankTop = new ShirtThree("None", "Silk", 6)

console.log(tshirt);
console.log(tankTop);


// i considered commenting out sections of the code so that there wouldn't be an error running 
// things with the repeating class names. but i just ended up naming each prompt section One, Two, and Three
