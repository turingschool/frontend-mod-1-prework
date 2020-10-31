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

// Commenting out this section because otherwise errors in Parts 2 and 3 below with classes already being declared

// // Prompt 1: Dog
// class Dog {
//
// }
//
// var labradorRetriever = new Dog();
// var dalmatian = new Dog();
//
// console.log(fido);
// console.log(fluffy);
//
//
//
// // Prompt 2: Snack
// class Snack {
//
// }
//
// var chip = new Snack();
// var pretzel = new Snack();
//
// console.log(chip);
// console.log(pretzel);
//
//
// // Prompt 3: Shirt
// class Shirt {
//
// }
//
// var hoodie = new Shirt();
// var sweater = new Shirt();
//
// console.log(hoodie);
// console.log(sweater);


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Commenting out this section because otherwise errors in Parts 2 and 3 below with classes already being declared

// // Prompt 1: Dog
// class Dog {
//   constructor() {
//     this.collarColor = "blue";
//     this.tailLength = "medium";
//     this.toys = ["kong", "bear", "rope"];
//   }
// }
//
// var fido = new Dog();
// console.log(fido);
//
// // Prompt 2: Snack
// class Snack {
//   constructor() {
//     this.type = "salty";
//     this.size = "small";
//     this.priceInUSDollars = 1.50;
//   }
// }
//
// var chip = new Snack();
// console.log(chip);
//
// // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.sleeveLength = "long";
//     this.collarType = "crew";
//     this.color = "gray";
//   }
// }
//
// var hoodie = new Shirt();
// console.log(hoodie);


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
  constructor(collar, tail, toys) {
    this.collarColor = collar;
    this.tailLength = tail;
    this.toys = toys;
  }
}

var fido = new Dog("blue", "medium", ["kong", "bear", "rope"]);
var fluffy = new Dog("pink", "short", ["stick", "ball", "blankie"]);

console.log(fido);
console.log(fluffy);

// Prompt 2: Snack
class Snack {
  constructor(type, size, price) {
    this.type = type;
    this.size = size;
    this.priceInUSDollars = price;
  }
}

var chip = new Snack("salty", "medium", 3.99);
var pretzel = new Snack("salty", "large", 1.79);

console.log(chip);
console.log(pretzel);


// Prompt 3: Shirt
class Shirt {
  constructor(sleeve, collar, color) {
    this.sleeveLength = sleeve;
    this.collarType = collar;
    this.color = color;
  }
}

var hoodie = new Shirt("long", "hood", "blue");
var sweater = new Shirt("long", "v-neck", "green");

console.log(hoodie);
console.log(sweater);
