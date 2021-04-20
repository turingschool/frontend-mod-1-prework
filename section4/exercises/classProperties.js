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
// class Dog {
//
// }
// var dog1 = new Dog();
// var dog2 = new Dog();
//
// console.log(dog1, dog2);

// Prompt 2: Snack
// class Snack {
//
// }
// var goodSnack = new Snack();
// var badSnack = new Snack();
//
// console.log(goodSnack, badSnack);

// Prompt 3: Shirt
// class Shirt {
//
// };
// var newShirt = new Shirt();
// var oldShirt = new Shirt();
//
// console.log(newShirt, oldShirt);

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
// class Dog {
//   constructor() {
//     this.name = "Freya";
//     this.breed = "Italian Greyhound";
//     this.age = 7;
//   }
// }
// var dog3 = new Dog();
// var dog4 = new Dog();
//
// console.log(dog3, dog4);

// Prompt 2: Snack
// class Snack {
//   constructor() {
//     this.brand = "Super Foodz";
//     this.calories = 300;
//     this.price = 19.24;
//   }
// }
//
// var anotherSnack = new Snack();
// var sameSnack = new Snack();
//
// console.log(anotherSnack, sameSnack);

// Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.size = "Large";
//     this.color = "Green";
//     this.isWorn = true;
//   }
// }
//
// var favShirt = new Shirt();
// var sameFavShirt = new Shirt();
//
// console.log(favShirt, sameFavShirt);
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
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}
var freya = new Dog("Freya", "Italian Greyhound", 8);
var citra = new Dog("Citra", "Corgi", 5);

console.log(freya, citra);

// Prompt 2: Snack

class Snack {
  constructor(brand, cal, price) {
    this.brand = brand;
    this.calories = cal;
    this.price = price;
  }
}

var goodSnack = new Snack("Super Foodz", 100, 18.00);
var badSnack = new Snack("Fatty Foodz", 300, 5.00);

console.log(goodSnack, badSnack);
// Prompt 3: Shirt
class Shirt {
  constructor(size, color, isWorn) {
    this.size = size;
    this.color = color;
    this.isWorn = isWorn;
  }
}

var newShirt = new Shirt("Large", "Black", false);
var oldShirt = new Shirt("Medium", "White", true);

console.log(newShirt,oldShirt);
