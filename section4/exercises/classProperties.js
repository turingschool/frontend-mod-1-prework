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

};

var schnauzer = new Dog();
var greatDane = new Dog();

console.log(schnauzer);
console.log(greatDane);

// Prompt 2: Snack

class Snack {

};

var chips = new Snack();
var pretzel = new Snack();

console.log(chips);
console.log(pretzel);

// Prompt 3: Shirt

class Shirt {

};

var longSleeve = new Shirt();
var vNeck = new Shirt();

console.log(longSleeve);
console.log(vNeck);

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
    this.puppy = 1;
    this.adult = 5;
    this.elderly = 10;
  }
};

var poodle = new Dog();

console.log(poodle);

// Prompt 2: Snack

class Snack {
  constructor() {
    this.licorice = 'sweet';
    this.crackers = 'cheesy';
    this.chips = 'salty';
  }
};

var cookie = new Snack();

console.log(cookie);

// Prompt 3: Shirt

class Shirt {
  constructor() {
    this.polo = 'striped';
    this.tankTop = 'blue';
    this.thermal = 'thick';
  }
};

var turtleNeck = new Shirt();

console.log(turtleNeck);

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
  constructor(breed, years, mood) {
    this.breed = breed;
    this.age = years;
    this.disposition = mood;
  }
};

var rescue = new Dog('German Shepherd', 4, 'Tolerant');
var myDog = new Dog('Akita', 12, 'Alpha');

console.log(rescue);
console.log(myDog);

// Prompt 2: Snack

class Snack {
  constructor(flavor, size, name) {
    this.taste = flavor;
    this.ounces = size;
    this.type = name;
  }
};

var donut = new Snack('Maple', 12, 'Maple Log');
var biscotti = new Snack('Vanilla', 6, 'Nabisco Vanilla Biscotti');

console.log(donut);
console.log(biscotti);

// Prompt 3: Shirt

class Shirt {
  constructor(material, brand, price) {
    this.fabric = material;
    this.brand = brand;
    this.cost = price;
  }
};

var buttonUp = new Shirt('Flannel', 'Columbia', 65);
var dressShirt = new Shirt('Silk', 'Guess', 125);

console.log(buttonUp);
console.log(dressShirt);
