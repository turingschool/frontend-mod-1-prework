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

}

var dog1 = new Dog ('Rotweiler', 100, 5);
var dog2 = new Dog ('German Shepherd', 84, 6);

console.log(dog1);
console.log(dog2);

// Prompt 2: Snack
class Snack {

}

var apple = new Snack (100, 'red', 'fruit');
var sourPatchKids = new Snack (0, 'multi-colored', 'sugar');

console.log(apple);
console.log(sourPatchKids);

// Prompt 3: Shirt
class Shirt {

}

var tank = new Shirt ('cotton', 'small', 15);
var sweater = new Shirt ('wool', 'large', 40);

console.log(tank);
console.log(sweater);
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
    this.breed = 'poodle';
    this.weightInPounds = 60;
    this.age = 4;
  }
}

var dog3 = new Dog ();

console.log(dog3);

// Prompt 2: Snack
class Snack {
  constructor () {
    this.nutritionValue = 100;
    this.color = 'green';
    this.type = 'vegetable';
  }
}

var broccoli = new Snack ();

console.log(broccoli);

// Prompt 3: Shirt
class Shirt {
  constructor () {
    this.material = 'cotton-poly';
    this.size = 'medium';
    this.costInDollars = 25;
  }
}

var longSleeve = new Shirt ();

console.log(longSleeve);

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

// Nina note - for all classes, I created 3 object instances instead of 2.
// Prompt 1: Dog
class Dog {
  constructor(breed, weight, age) {
    this.breed = breed;
    this.weightInPounds = weight;
    this.age = age;
  }
}

var dog1 = new Dog ('Rotweiler', 100, 5);
var dog2 = new Dog ('German Shepherd', 84, 6);
var dog3 = new Dog ('Poodle', 60, 4);

console.log(dog1);
console.log(dog2);
console.log(dog3);

// Prompt 2: Snack
class Snack {
  constructor (nutrition, color, type) {
    this.nutritionValue = nutrition;
    this.color = color;
    this.type = type;
  }
}

var apple = new Snack (95, 'red', 'fruit');
var sourPatchKids = new Snack (0, 'multi-colored', 'sugar');
var broccoli = new Snack (100, 'green', 'vegetable');

console.log(apple);
console.log(sourPatchKids);
console.log(broccoli);

// Prompt 3: Shirt

class Shirt {
  constructor (material, size, cost) {
    this.material = material;
    this.size = size;
    this.costInDollars = cost;
  }
}

var tank = new Shirt ('cotton', 'small', 15);
var sweater = new Shirt ('wool', 'large', 40);
var longSleeve = new Shirt ('cotton-poly', 'medium', 25);

console.log(tank);
console.log(sweater);
console.log(longSleeve);

// I had to run the 3 'Parts' seperately in node because node is reading that I am attempting each class three times.
