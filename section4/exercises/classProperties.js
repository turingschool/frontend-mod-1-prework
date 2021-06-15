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
class Dog {
  constructor(){

  }
}

var breed1 = new Dog();
var breed2 = new Dog();

console.log(breed1);
console.log(breed2);

// Prompt 2: Snack
class Snack {
  constructor(){

  }
}

var snack1 = new Snack();
var snack2 = new Snack();

console.log(snack1);
console.log(snack2);

// Prompt 3: Shirt
class Shirt {
  constructor(){

  }
}

var shirt1 = new Shirt();
var shirt2 = new Shirt();

console.log(shirt1);
console.log(shirt2);

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
  constructor(){
    this.breed = 'Beagle'
    this.color = 'Tan, White, and Black'
    this.isShedding = true
  }
}

var breed1 = new Dog();

console.log(breed1);

// Prompt 2: Snack
class Snack {
  constructor(){
    this.name = "Lays"
    this.isSalty = true
    this.isCheesy = false
  }
}

var snack1 = new Snack();

console.log(snack1);

// Prompt 3: Shirt
class Shirt {
  constructor(){
    this.sleeveLength = "short"
    this.color = "White"
    this.isCollared = false
  }
}

var shirt1 = new Shirt();

console.log(shirt1);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the constructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, color, isShedding){
    this.breed = breed
    this.color = color
    this.isShedding = isShedding
  }
}

var breed1 = new Dog('Beagle', 'Tan, White, and Black', true);
var breed2 = new Dog('Poodle', 'White', false);

console.log(breed1);
console.log(breed2);

// Prompt 2: Snack
class Snack {
  constructor(name, isSalty, isCheesy){
    this.name = name
    this.isSalty = isSalty
    this.isCheesy = isCheesy
  }
}

var snack1 = new Snack('Lays', true, false);
var snack2 = new Snack('Cheetos', true, true);

console.log(snack1, snack2);

// Prompt 3: Shirt
class Shirt {
  constructor(sleeveLength, color, isCollared){
    this.sleeveLength = sleeveLength
    this.color = color
    this.isCollared = isCollared
  }
}

var shirt1 = new Shirt('Short', 'White', false);
var shirt2 = new Shirt('Long', 'black', true);

console.log(shirt1, shirt2);
