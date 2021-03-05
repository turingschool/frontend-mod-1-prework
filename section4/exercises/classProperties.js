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
// var dogSeen = new Dog();
// console.log(dogSeen);

// var dogPetted = new Dog();
// console.log(dogPetted);



// // Prompt 2: Snack
// class Snack {
//
// }
// var morningSnack = new Snack();
// console.log(morningSnack);
// var eveningSnack = new Snack();
// console.log(eveningSnack);
// // // Prompt 3: Shirt
// class Shirt {
//
// }
// var party = new Shirt();
// var professional = new Shirt();
// console.log(party);
// console.log(professional);

// COMMENTED OUT SO FOLLOWING CODE CAN RUN

// //-------------------
// Part 2: Properties
// //-------------------
//
// // For each prompt:
//   // Write a class skeleton
//   // Add a constructor method
//   // Assign 3 properties (names and values of your choice) to each class
//   // Create an object instance and store in variable
//   // Log that variable to the console.
//
// // Prompt 1: Dog
// class Dog {
//   constructor(){
//     this.breed = "chihuahua";
//     this.size = "small";
//     this.age = 8;
//   }
// }
//
// var dogPetted = new Dog();
// console.log(dogPetted);
// //
// // // Prompt 2: Snack
// class Snack {
//   constructor(){
//     this.type ="fruit";
//     this.calories = 100000;
//     this.sweet = true;
//   }
// }
// var morning = new Snack();
// console.log(morning);
//
// // // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.color = "black";
//     this.type = "halter top";
//     this.isSexy = true;
//   }
// }
// var party = new Shirt();
// console.log(party);

// COMMENTED OUT SO FOLLOWING CODE CAN RUN

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

//Prompt 1: Dog

class Dog {
  constructor(brd, dogSize, age) {
    this.breed = brd;
    this.size = dogSize;
    this.age = age;
  }
}
var dogSeen = new Dog("chihuahua", "small", 8);
console.log(dogSeen);

var dogPetted = new Dog("lab", "medium", 2);
console.log(dogPetted);

//Prompt 2: Snack

class Snack {
  constructor(timeEaten, snackType, amount) {
    this.time = timeEaten;
    this.type = snackType;
    this.amount = amount;
  }
}

var morningSnack = new Snack("8:00 AM", "Apple", 1);
console.log(morningSnack);
var eveningSnack = new Snack("8:30 PM", "Ice Cream", 4);
console.log(eveningSnack);

// Prompt 3: Shirt

class Shirt {
  constructor(type, color, size){
    this.type = type;
    this.color = color;
    this.size = size;
  }
}
var party = new Shirt("blouse", "black", 8);
console.log(party);
var professional = new Shirt("ButtonUp", "white", 4);
console.log(professional);
