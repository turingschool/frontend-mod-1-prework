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

};
var pit = new Dog();
var poodle = new Dog();
console.log(Dog.pit);
console.log(Dog.poodle);

// Prompt 2: Snack

class Snack {

};
var peanuts = new Snack();
var pretzelCrisps = new Snack();
console.log(Snack.peanuts);
console.log(Snack.pretzelCrisps);

// Prompt 3: Shirt

class Shirt {

};
var mLIW = new Shirt();
var dtSwiss = new Shirt();
console.log(Shirt.mLIW);
console.log(Shirt.dtSwiss);

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
    this.breed = "pit";
    this.weightLbs = 45;
    this.color = "brindle";
  }
};
var pit = new Dog();
console.log(pit);

// Prompt 2: Snack

class Snack {
  constructor() {
    this.name = "peanut";
    this.servingSizeG = 146;
    this.calories = 828;
  }
};
var peanut = new Snack();
console.log(peanut);

// Prompt 3: Shirt

class Shirt {
  constructor() {
    this.brand = "Polo";
    this.color = "Black";
    this.shortSleeve = true;
  }
};
var Polo = new Shirt();
console.log(Polo);

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
  constructor(breed, weightLbs, color) {
    this.type = breed;
    this.wt = weightLbs;
    this.color = color;
  }
};

var mrWoofers = new Dog("pit", 45, "brindle");
var turboDog = new Dog("poodle", 5, "black");

console.log(mrWoofers);
console.log(turboDog);

// Prompt 2: Snack

class Snack {
  constructor(name, servingSizeG, cal) {
    this.name = name;
    this.serving = servingSizeG;
    this.calories = cal;
  }
};

var peanut = new Snack("peanut", 146, 828);
var pretzelCrisps = new Snack("Pretzel Crisps", 15, 73);

console.log(peanut);
console.log(pretzelCrisps);

// Prompt 3: Shirt

class Shirt {
  constructor(brand, color, shortSleeve) {
    this.brand = brand;
    this.color = color;
    this.sleeve = shortSleeve;
  }
};

var shirt1 = new Shirt("Polo", "black", true);
var shirt2 = new Shirt("REI", "tan", false);

console.log(shirt1);
console.log(shirt2);
