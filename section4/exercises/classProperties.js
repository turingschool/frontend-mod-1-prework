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
  constructor() {

  }
};

var beasley = new Dog();
var moro = new Dog();

console.log(beasley);
console.log(moro);

// Prompt 2: Snack
class Snack {
  constructor() {

  }
};

var frito = new Snack();
var puppyChow = new Snack();

console.log(fritos);
console.log((puppyChow));

// Prompt 3: Shirt
class Shirt {
  constructor() {

  }
}

var polo = new Shirt();
var flannel = new Shirt();

console.log(polo);
console.log(flannel);

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
  constructor(name, breed, age, isVaccinated) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.isVaccinated = isVaccinated;
  }
};

var beasley = new Dog('Beasley', 'basset hound', 10, true);

console.log(beasley);


// Prompt 2: Snack
class Snack {
  constructor(name, parentBrand, weight, isHealthy) {
    this.name = name;
    this.parentBrand = parentBrand;
    this.weight = weight;
    this.isHealthy = isHealthy;
  }
};

var frito = new Snack('Fritos', 'Frito-Lay', '14oz', false);

console.log(fritos);


// Prompt 3: Shirt
class Shirt {
  constructor(name, size, color, washingInstructions) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.washingInstructions = washingInstructions;
  }
};

var polo = new Shirt('polo, ''medium', 'blue', [{'machine wash': 'warm', 'tumble dry': 'low'}]);

console.log(polo);

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
  constructor(name, isTrained, nextCheckup, hasSpots) {
    this.name = name;
    this.isTrained = isTrained;
    this.nextCheckup = nextCheckup;
    this.hasSpots = hasSpots;
  }
}

var beasley = new Dog('Beasly', true, 'December 3, 2020', false);
var moro = new Dog('Moro', false, 'October 26, 2020', true);

console.log(beasley);
console.log(moro);

// Prompt 2: Snack
class Snack {
  constructor(name, quantityOfBags, isSweet, inStock) {
    this.name = name;
    this.quantityOfBags = quantityOfBags;
    this.isSweet = isSweet;
    this.inStock = inStock;
  }
}

var frito = new Snack('Fritos', 50, false, true);
var puppyChow = new Snack('Puppy Chow', 20, true, true);

console.log(frito);
console.log(puppyChow);

// Prompt 3: Shirt
class Shirt {
  constructor(name, style, hasStripes, fabric) {
    this.name = name;
    this.style = style;
    this.hasStripes = hasStripes;
    this.fabric = fabric;
  }
}

var polo = new Shirt('Polo', 'short sleeve', true, 'cotton');
var flannel = new Shirt('Flannel', 'long sleeve', false, 'wool');

console.log(polo);
console.log(flannel);
