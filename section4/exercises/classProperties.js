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

var fido = new Dog();
var spot = new Dog();

console.log(fido);
console.log(spot);

// Prompt 2: Snack

class Snack {
}

var carrot = new Snack();
var berry = new Snack();

console.log(carrot);
console.log(berry);

// Prompt 3: Shirt

class Shirt {
}

var tshirt = new Shirt();
var longsleeve = new Shirt();

console.log(tshirt);
console.log(longsleeve);

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
    this.weight = 0;
    this.age = 0;
    this.breed = "Unknown";
  }
}

var fido = new Dog();
console.log(fido);

// Prompt 2: Snack

class Snack {
  constructor() {
    this.quantity = 0;
    this.weight = 0;
    this.color = "Unknown";
  }
}

var carrot = new Snack();
console.log(carrot);

// Prompt 3: Shirt

class Shirt {
  constructor() {
    this.brand = 0;
    this.location = 0;
    this.color = "Unknown";
  }
}

var tshirt = new Shirt();
console.log(tshirt);

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
	constructor(wt, age, breed) {
    this.weight = wt;
    this.age = age;
    this.breed = breed;
  }
}

var fido = new Dog(50, 3, "pug");
console.log(fido)

var spot = new Dog(10, 8, "lab");
console.log(spot)

// Prompt 2: Snack

class Snack {
	constructor(quantity, oz, color) {
    this.quantity = quantity;
    this.weight = oz
    this.color = color
  }
}

var carrot = new Snack(2, 3, "orange");
console.log(carrot);

var berry = new Snack(3, 1, "red");
console.log(berry)

// Prompt 3: Shirt

class Shirt {
  constructor(brand, location, color) {
    this.brand = brand;
    this.location = location;
    this.color = color;
  }
}

var tshirt = new Shirt("hanes", "dresser", "red");
console.log(tshirt);

var longsleeve = new Shirt("bcbg", "closet", "blue");
console.log(longsleeve);
