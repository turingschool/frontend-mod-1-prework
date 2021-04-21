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

class Dog1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

 console.log(this.name);
 console.log(this.age);


// Prompt 2: Snack

class Snack1 {
  constructor(fruit, vegetable) {
    this.fruit = fruit;
    this.vegetable = vegetable;
  }
}

console.log(this.fruit);
console.log(this.vegetable);

// Prompt 3: Shirt

class Shirt1 {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }
}

console.log(this.color);
console.log(this.brand);

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
  constructor(name, age, color) {
    this.name = "Birdie";
    this.age = 1.5;
    this.color = "Black";
  }
}

var davePet = new Dog2();
console.log(davePet);

// Prompt 2: Snack

class Snack2 {
  constructor(fruit, vegetable, drink) {
    this.fruit = "Grapes";
    this.vegetable = "Carrot";
    this.drink = "High Quality H20";
  }
}

var daveSnack = new Snack2();
console.log(daveSnack);

// Prompt 3: Shirt

class Shirt2 {
  constructor (color, style, brand) {
    this.color = "Cerulean";
    this.style = "Tank";
    this.brand = "Hand-Me-Down-Special"
  }
}

var daveShirt = new Shirt2();
console.log(daveShirt);

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
  constructor(name, age, toy) {
    this.name = name;
    this.age = age;
    this.toy = toy;
  }
}

var davePet = new Dog3("Birdie", 1.5, "Stick");
console.log(davePet);

var laurenPet = new Dog3("Loola", 2, "Hand");
console.log(laurenPet);

// Prompt 2: Snack

class Snack3 {
  constructor(fruit, vegetable, drink) {
    this.fruit = fruit;
    this.vegetable = vegetable;
    this.drink = drink;
  }
}

var daveSnack = new Snack3("Orange", "Broccoli", "Coffee");
console.log(daveSnack);

var joeSnack = new Snack3("Tomato", "Banana", "Joe's Special");
console.log(joeSnack);

// Prompt 3: Shirt

class Shirt3 {
  constructor(color, type, brand) {
    this.color = color;
    this.type = type;
    this.brand = brand;
  }
}

var summerShirt = new Shirt3("White", "Crop", "Lakeview");
console.log(summerShirt);

var winterShirt = new Shirt3("Lotsacolors", "Sweater", "Momma");
console.log(winterShirt);
