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

var beagle = new Dog();
var cairnTerrier = new Dog();


console.log(beagle);
console.log(cairnTerrier);

// Prompt 2: Snack
class Snack {

}

var afternoon = new Snack();
var afterDinner = new Snack();

console.log(afternoon);
console.log(afterDinner);
// Prompt 3: Shirt
class Shirt {

}

var tShirt = new Shirt();
var longSleeved = new Shirt();

console.log(tShirt);
console.log(longSleeved);
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
    this.size = "9 kgs";
    this.age = 12;
    this.name = "Seven";
  }
}

var beagle = new Dog2();
console.log(beagle);

// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.name = "chips";
    this.amount = "handful";
    this.flavor = "BBQ";
  }
}

var afternoon = new Snack2();
console.log(afternoon);
// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.color = "black";
    this.size = "small";
    this.cost = "$19.99";
  }
}

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
class Dog3 {
  constructor (name, age, size) {
    this.size = size;
    this.age =  age;
    this.name = name;
  }
}

var beagle = new Dog3("Seven", 11, "9 kgs");
var cairnTerrier = new Dog3("Joey", 10, "7 kgs");


console.log(beagle);
console.log(cairnTerrier);

// Prompt 2: Snack
class Snack3 {
  constructor (name, amount, flavor) {
    this.name = name;
    this.amount = amount;
    this.flavor = flavor;
  }
}

var afternoon = new Snack3("chips", "handful", "BBQ");
var afterDinner = new Snack3("ice cream", "scoop", "chocolate pb");


console.log(afternoon);
console.log(afterDinner);
// Prompt 3: Shirt
class Shirt3 {
  constructor (color, size, cost) {
    this.color = color;
    this.size = size;
    this.cost = cost;
  }
}

var tShirt = new Shirt3("black", "S", "$19.99");
var longSleeved = new Shirt3("red", "XL", "$29.99");


console.log(tShirt);
console.log(longSleeved);
