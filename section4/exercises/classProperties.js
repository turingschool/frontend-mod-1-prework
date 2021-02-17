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

var blackLab = new Dog();
var germanShepard = new Dog();

console.log(blackLab);
console.log(germanShepard);

// Prompt 2: Snack
class Snack {
}
var chips = new Snack();
var cheese = new Snack();

console.log(chips);
console.log(cheese);

// Prompt 3: Shirt
class Shirt {

}
var longSleeve = new Shirt();
var bandTee = new Shirt();

console.log(longSleeve);
console.log(bandTee);
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
    this.age = 5;
    this.color = "black";
    this.weight = "60lbs";
  }
}
var blackLab = new Dog();

console.log(blackLab);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.sizeBag = "large";
    this.flavor = "nacho cheese";
    this.color = "orange";
  }
}

var chips = new Snack();

console.log(chips);


// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "small";
    this.color = "blue";
    this.material = "cotton";
  }
}

var bandTee = new Shirt();

console.log(bandTee);
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
  constructor(age, color, weight) {
    this.age = age;
    this.color = color;
    this.weight = weight;
  }
}
var blackLab = new Dog(14, black, 62lbs);
var beagle = new Dog(2, brownn, 20lbs);

console.log(blackLab);
console.log(beagle);

// Prompt 2: Snack
class Snack{
  constructor(sizeOfBag, flavor, color) {
    this.sizeBag = sizeOfBag;
    this.flavor = flavor;
    this.color = color;
  }
}

var chips = new Snack("large", "cheddar cheese", "orange");
var popcorn = new Snack("small", "butter blast", "yellow");

console.log(chips);
console.log(popcorn);

// Prompt 3: Shirt
class Shirt {
  constructor(size, color, material) {
    this.size = size;
    this.color = color;
    this.material = material;
  }
}

var pajamaTop = new Shirt("medium", "light blue", "cotton");
var bandTee = new Shirt("large", "black", "polyester");

console.log(pajamaTop);
console.log(bandTee);
