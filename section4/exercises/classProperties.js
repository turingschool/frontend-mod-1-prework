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
Class: Dog;
var labradorRetriever = new Dog();
var corgi = new Dog();

// Prompt 2: Snack
Class: Snack;
var goldfish = new Snack();
var jerky = new Snack();

// Prompt 3: Shirt
Class: Shirt;
var jersey = new Shirt();
var polo = new Shirt();

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
  constructor(cat, ori, size ) {
    this.category = cat;
    this.ori = originCountry;
    this.size = size;
  }
}

var labradorRetriever = new Dog("gunDog", "Canada", "medium");
console.log(labradorRetriever);

// Prompt 2: Snack
class Snack {
  constructor(fdgr, taste, size ) {
    this.foodGroup = fdgr;
    this.tasteProfile = taste;
    this.size = size;
  }
}

var jerky = new Snack("meat", "salty", "large");
console.log(jerky);

// Prompt 3: Shirt
class Shirt {
  constructor(thick, mat, seas ) {
    this.thickness = thick;
    this.mat = material;
    this.seas = season;
  }
}

var basketballJersey = new Shirt("thin", "nylon", "summer");
console.log(basketballJersey);
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

I used the dyanmic method in the previous question.
