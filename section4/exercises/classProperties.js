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

var poodle = new Dog();
var maltese = new Dog();

console.log(poodle);
console.log(maltese);

// Prompt 2: Snack
class Snack {

}

var nachos = new Snack();
var cheetos = new Snack();

console.log(nachos)
console.log(cheetos)

// Prompt 3: Shirt
class Shirt {

}

var denim = new Shirt();
var tee = new Shirt();

console.log(denim);
console.log(tee);

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
   this.age = 4
   this.size = "small"
   this.color = "white"
 }
}

var poodle = new Dog();
console.log(poodle);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.size = "large"
    this.cost = 5
    this.temp = "hot"
  }
}

var nachos = new Snack();
console.log(nachos)

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "medium"
    this.color = "black"
    this.price = 45
  }
}

var denim = new Shirt();
console.log(denim);



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
 constructor(dogAge, dogSize, dogColor) {
   this.age = dogAge;
   this.size = dogSize;
   this.color = dogColor;
 }
}

var poodle = new Dog(4, "small", "white");
var maltese = new Dog(5, "medium", "brown")
console.log(poodle);
console.log(maltese);

// Prompt 2: Snack
class Snack {
  constructor(snackSize, snackCost, snackTemp) {
    this.size = snackSize;
    this.cost = snackCost;
    this.temp = snackTemp;
  }
}

var nachos = new Snack("large", 6, "hot");
console.log(nachos)
var cheetos = new Snack("small", 2, "cold")

// Prompt 3: Shirt
class Shirt {
  constructor(shirtSize, shirtColor, shirtPrice) {
    this.size = shirtSize
    this.color = shirtColor
    this.price = shirtPrice
  }
}

var denim = new Shirt("large", "black", 45);
console.log(denim);

var tee = new Shirt("Extra Large", "white", 15);
console.log(tee);
