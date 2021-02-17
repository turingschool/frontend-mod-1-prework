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

var fido = new Dog1();
var spot = new Dog1();

console.log(fido);
console.log(spot);

// Prompt 2: Snack

class Snack1 {
}

var carrot = new Snack1();
var berry = new Snack1();

console.log(carrot);
console.log(berry);

// Prompt 3: Shirt

class Shirt1 {
}

var tshirt = new Shirt1();
var longsleeve = new Shirt1();

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

class Dog2 {
  constructor() {
    this.weight = 0;
    this.age = 0;
    this.breed = "Unknown";
  }
}

var fido = new Dog2();
console.log(fido);

// Prompt 2: Snack

class Snack2 {
  constructor() {
    this.quantity = 0;
    this.weight = 0;
    this.color = "Unknown";
  }
}

var carrot = new Snack2();
console.log(carrot);

// Prompt 3: Shirt

class Shirt2 {
  constructor() {
    this.brand = 0;
    this.location = 0;
    this.color = "Unknown";
  }
}

var tshirt = new Shirt2();
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

class Dog3 {
	constructor(wt, age, breed) {
    this.weight = wt;
    this.age = age;
    this.breed = breed;
  }
}

var fido = new Dog3(50, 3, "pug");
console.log(fido);

var spot = new Dog3(10, 8, "lab");
console.log(spot);

// Prompt 2: Snack

class Snack3 {
	constructor(quantity, oz, color) {
    this.quantity = quantity;
    this.weight = oz;
    this.color = color;
  }
}

var carrot = new Snack3(2, 3, "orange");
console.log(carrot);

var berry = new Snack3(3, 1, "red");
console.log(berry);

// Prompt 3: Shirt

class Shirt3 {
  constructor(brand, location, color) {
    this.brand = brand;
    this.location = location;
    this.color = color;
  }
}

var tshirt = new Shirt3("hanes", "dresser", "red");
console.log(tshirt);

var longsleeve = new Shirt3("bcbg", "closet", "blue");
console.log(longsleeve);
