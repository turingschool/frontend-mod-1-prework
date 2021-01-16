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

}

var animal = new Dog();
console.log(animal);

var pet = new Dog();
console.log(pet);

// Prompt 2: Snack
class Snack {

}
var food = new Snack();
console.log(food);

var diet = new Snack();
console.log(diet);

// Prompt 3: Shirt
class Shirt {

}
var top = new Shirt();
console.log(top);

var clothing = new Shirt();
console.log(clothing);

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
    this.breed = 'chihuahua';
    this.size = 'small';
    this.bark = 'loud';
  }
}
var animal = new Dog();
console.log(animal);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.type = 'chip';
    this.price = '3.50';
    this.flavor = 'nacho cheese';
  }
}
var food = new Snack();
console.log(food);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.color = 'white';
    this.size = 8;
    this.style = 'casual'
  }
}
var top = new Shirt();
console.log(top);

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
  constructor(breed, size, bark) {
    this.breed = breed;
    this.size = size;
    this.bark = bark;
  }
}
var animal = new Dog('chihuahua', 'small', 'loud');
console.log(animal);

var pet = new Dog('german shepard', 'large', 'loud');
console.log(pet);

// Prompt 2: Snack
class Snack {
  constructor(type, price, flavor) {
    this.type = type;
    this.price = price;
    this.flavor = flavor;
  }
}
var food = new Snack('chip', '3.50', 'nachos cheese');
console.log(food);

var diet = new Snack('apple', '1.00', 'granny smith');
console.log(diet);

// Prompt 3: Shirt
class Shirt {
  constructor(color, size, style) {
    this.color = color;
    this.size = size;
    this.style = style;
  }
}
var top = new Shirt('white', '8', 'casual');
console.log(top);

var clothing = new Shirt('blue', '6', 'formal');
console.log(clothing);
