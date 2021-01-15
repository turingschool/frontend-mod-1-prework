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
// var ShibaInu = new Dog();
// var PitBull = new Dog();
// console.log(ShibaInu);
// console.log(PitBull);

// Prompt 2: Snack
// class Snack {
//
// }
// var Prezel = new Snack();
// var Cookie = new Snack();
// console.log(Prezel);
// console.log(Cookie);

// Prompt 3: Shirt
// class Shirt {
//
// }
// var Blouse = new Shirt();
// var TankTop = new Shirt();
// console.log(Blouse);
// console.log(TankTop);

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
// class Dog{
//   constructor() {
//   }
//   height =  20
//   weight = 50
//   floof = "very"
// }
// var Samoyed = new Dog();
// console.log(Samoyed);

// Prompt 2: Snack
// class Snack{
//   constructor(){
//
//   }
//   flavor = "salty"
//   texture = "crunchy"
//   sharable = true
// }
// var Prezel = new Snack();
// console.log(Prezel);

// Prompt 3: Shirt
// class Shirt{
//   constructor(){
//
//   }
//   size = "medium"
//   color = "red"
//   material = "polyester"
// }
// var Blouse = new Shirt();
// console.log(Blouse);
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
class Dog{
  constructor(height, weight, floof) {
    this.height = height;
    this.weight = weight;
    this.floof = floof;
  }
}
var Samoyed = new Dog(20, 50, "Extremly floofy");
console.log(Samoyed);
var PitBull = new Dog(18, 40, "No floof");
console.log(PitBull);
// Prompt 2: Snack
class Snack{
  constructor(flavor, texture, sharable) {
    this.flavor = flavor;
    this.texture = texture;
    this.sharable = sharable;
  }
}
var Prezel = new Snack("Salty", "Crunchy", true);
console.log(Prezel);
var Cookie = new Snack("Sweet", "Soft", true);
console.log(Cookie);

// Prompt 3: Shirt
class Shirt{
  constructor(size, color, material) {
    this.size = size;
    this.color = color;
    this.material = material;
  }
}
var Blouse = new Shirt("Medium", "Red", "polyesther");
console.log(Blouse);
var TankTop = new Shirt("Small", "Blue", "Cotton");
console.log(TankTop);
