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

// I COMMENTED OUT MY "PART 1" WHEN I MOVED ON TO "PART 2"
// Prompt 1: Dog

// class Dog {
// }
//
// var saraDachshund = new Dog();
// var theoDachshund = new Dog();
//
// console.log(saraDachshund);
// console.log(theoDachshund);
//
// // Prompt 2: Snack
//
// class Snack {
// }
// var apple = new Snack();
// var celery = new Snack();
//
// console.log(apple);
// console.log(celery);
//
// // Prompt 3: Shirt
//
// class Shirt {
// }
// var weldwerksShirt = new Shirt();
// var rockiesShirt = new Shirt();
//
// console.log(weldwerksShirt);
// console.log(rockiesShirt);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// // Prompt 1: Dog
//
// class Dog {
//   constructor() {
//     this.name = "Sara";
//     this.age = 7;
//     this.coat = "blue and tan";
//   }
// }
// var saraDachshund = new Dog();
//
// console.log(saraDachshund);
//
// // Prompt 2: Snack
//
// class Snack {
//   constructor() {
//     this.foodGroup = "fruit";
//     this.color = "red";
//     this.healthy = true;
//   }
// }
// var apple = new Snack();
//
// console.log(apple);
//
// // Prompt 3: Shirt
//
// class Shirt {
//   constructor() {
//     this.color = "grey";
//     this.type = "short sleeve";
//     this.material = "cotton";
//   }
// }
// var weldwerksShirt = new Shirt();
//
// console.log(weldwerksShirt);

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

//
// Prompt 1: Dog
class Dog {
  constructor(name, age, coat) {
    this.name = name;
    this.age = age;
    this.coat = coat;
  }
}
var saraDachshund = new Dog("Sara", 7, "blue and tan");
var theoDachshund = new Dog("Theo", 3, "black and tan");

console.log(saraDachshund);
console.log(theoDachshund);


// Prompt 2: Snack
class Snack {
  constructor(foodGroup, color, healthy) {
    this.foodGroup = foodGroup;
    this.color = color;
    this.healthy = healthy;
  }
}
var apple = new Snack("fruit", "red", true);
var celery = new Snack("vegetable", "green", true);

console.log(apple);
console.log(celery);

// Prompt 3: Shirt

class Shirt {
  constructor(color, type, material) {
    this.color = color;
    this.type = type;
    this.material = material;
  }
}
var weldwerksShirt = new Shirt("grey", "short sleeve", "cotton");
var rockiesShirt = new Shirt("blue", "long sleeve", "polyester");

console.log(weldwerksShirt);
console.log(rockiesShirt);
