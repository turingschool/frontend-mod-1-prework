/*
In the exercise below, write your own code where indicated to achieve the desired result.

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

class Dog {}

var dog1 = new Dog;
var dog2 = new Dog;

console.log(dog1, dog2);

// Prompt 2: Snack

class Snack {}

var snack1 = new Snack;
var snack2 = new Snack;

console.log(snack1, snack2);

// Prompt 3: Shirt

class Shirt {}

var shirt1 = new Shirt;
var shirt2 = new Shirt;

console.log(shirt1, shirt2);

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

class Dog2 {
  constructor() {
    this.breed ='labrador',
    this.weight = 56,
    this.isSterilized = true
  }
}

var favDog = new Dog2;
console.log(favDog);

// Prompt 2: Snack

class Snack2 {
  constructor() {
    this.flavor = 'chocolate',
    this.shape = 'round',
    this.isTasty = true
  }
}

var favSnack = new Snack2;
console.log(favSnack);

// Prompt 3: Shirt

class Shirt2 {
  constructor() {
    this.designer = 'Gucci & Gabbana',
    this.size = 32,
    this.isStylish = true
  }
}

var favShirt = new Shirt2;
console.log(favShirt);

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

class Dog3 {
  constructor(breed, age, color) {
    this.breed = breed,
    this.age = age,
    this.color = color
  }
}

var favDog1 = new Dog3('labrador', 12, 'yellow');
console.log(favDog1);

var favDog2 = new Dog3('dachshund', 8, 'black');
console.log(favDog2);

// Prompt 2: Snack

class Snack3 {
  constructor(flavor, shape, isTasty) {
    this.flavor = flavor,
    this.shape = shape,
    this.isTasty = isTasty
  }
}

var favSnack1 = new Snack3('vanilla', 'square', true);
console.log(favSnack1);

var favSnack2 = new Snack3('strawberry', 'rectangle', false);
console.log(favSnack2);

// Prompt 3: Shirt

class Shirt3 {
  constructor(designer, size, isStylish) {
    this.designer = designer,
    this.size = size,
    this.isStylish = isStylish
  }
}

var favShirt1 = new Shirt3('Banana Republic', 32, true);
console.log(favShirt1);

var favShirt2 = new Shirt3('Abercrombie', 31, false);
console.log(favShirt2);
