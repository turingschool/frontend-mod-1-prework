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
//
// var husky = new Dog();
// console.log(husky);
//
// var daschund = new Dog();
// console.log(daschund);

// Prompt 2: Snack

// class Snack {
//
// }
//
// var oreo = new Snack();
// console.log(oreo);
//
// var gummyBear = new Snack();
// console.log(gummyBear);

// Prompt 3: Shirt

// class Shirt {
//
// }
//
// var vNeck = new Shirt();
// console.log(vNeck);
//
// var longSleeve = new Shirt();
// console.log(longSleeve);

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
//     this.color = 'brown';
//     this.numberLegs = 4;
//     this.isHappy = true;
//   }
//
// }
//
// var brownLab = new Dog();
// console.log(brownLab);
//
// var mutt = new Dog();
// console.log(mutt);

// Prompt 2: Snack

// class Snack {
//   constructor() {
//     this.isTasty = true;
//     this.isSweet = true;
//     this.sugarContent = 50;
//   }
//
// }
//
// var cookie = new Snack();
// console.log(cookie);
//
// var muffin = new Snack();
// console.log(muffin);

// Prompt 3: Shirt

// class Shirt {
//   constructor() {
//     this.color = 'White';
//     this.hasSleeves = true;
//     this.weight = 20;
//   }
// }
//
// var longSleeve = new Shirt();
// console.log(longSleeve);
//
// var vNeck = new Shirt();
// console.log(vNeck);

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
  constructor(fur, legs, temperment) {
    this.color = fur;
    this.numberLegs = legs;
    this.isHappy = temperment;
  }
}

var husky = new Dog('white & black', 4, true);
console.log(husky);

var daschund = new Dog('reddish-orange', 3, false);
console.log(daschund);

// Prompt 2: Snack

class Snack {
  constructor(sugar, fat, tasty) {
    this.sugarContent = sugar;
    this.fatContent = fat;
    this.isDelicious = tasty;
  }
}

var oreo = new Snack(25,10, true);
console.log(oreo);

var twinky = new Snack(33,24, true);
console.log(twinky);

// Prompt 3: Shirt
class Shirt {
  constructor(fabric, color, stylish) {
    this.material = fabric;
    this.color = color;
    this.isStylish = stylish;
  }
}
var vNeck = new Shirt('Cashmere', 'Red',true);
console.log(vNeck);
var polo = new Shirt('Cotton', 'Pink', false);
console.log(polo);
