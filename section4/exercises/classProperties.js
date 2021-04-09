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
//class Dog {

// }
//
// var dachshund = new Dog();
// console.log(dachshund);
//
// var greyhound = new Dog();
// console.log(greyhound);
//
// // Prompt 2: Snack
// class Snack {
//
//   }
//
//
// var candy = new Snack ();
// console.log(candy);
//
// var chips = new Snack();
// console.log(chips)
//
// // Prompt 3: Shirt
// class Shirt {
//
// }
//
// var blue = new Shirt();
// console.log(blue);
//
// var green = new Shirt();
// console.log(green);
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
// class Dog {
//   constructor(){
//     this.color = "gray";
//     this.numberTails = 1;
//     this.isGoodBoy = True;
//   }
//
// }
//
// var dachshund = new Dog();
// console.log(dachshund);
//
// var greyhound = new Dog();
// console.log(greyhound);
//
//
// // Prompt 2: Snack
//
// class Snack {
// //   constructor(){
// //     this.tasty = true;
//     this.highCalories = true;
//     this.sodium = 100;
//   }
//
// var candy = new Snack ();
// console.log(candy);
// //
// var chips = new Snack();
// console.log(chips)
//
// // Prompt 3: Shirt
//
// class Shirt {
//   constructor(){
//     this.fit = "Large";
//     this.length = "crop top";
//     this.clean = true;
//   }
// }
//
// var blue = new Shirt();
// console.log(blue);
//
// var green = new Shirt();
// console.log(green);

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
  constructor(fur, tails, good){
    this.color = fur;
    this.numberTails = tails;
    this.isGoodBoy = good;
  }
}

var dachshund = new Dog("red", 1, false);
console.log(dachshund);

var greyhound = new Dog("black", 2, true);
console.log(greyhound);


// Prompt 2: Snack
class Snack {
  constructor(tasty, calories, salty){
    this.tasty = tasty;
    this.highCalories = calories;
    this.sodium = salty;
  }
}
var candy = new Snack (true, true, 200);
console.log(candy);

var chips = new Snack(false, true, 2199);
console.log(chips)

// Prompt 3: Shirt

class Shirt {
  constructor(fit, length, clean){
    this.fit = fit;
    this.length = length;
    this.clean = clean;
  }
}

var blue = new Shirt("small", "croptop", true);
console.log(blue);

var green = new Shirt("large", "tunic", false);
console.log(green);
