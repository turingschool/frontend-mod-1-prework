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
class Dog{
  constructor(age, lengthInInches, color) {
    this.age = age;
    this.lengthInInches = length;
    ths.color = color;
  }
}
var lab = new Dog(3, 39, "yellow");
var boxer = new Dog(7, 30, "white");
// Prompt 2: Snack
class Snack{
  constructor(shape, texture, company) {
    this.shape = shape;
    this.texture = texture;
    this.company = company;
  }
}
var chips = new Snack("oval", "crunchy", "utz");
var cookies = new Snack("circle", "chewy", "chipsahoy");

// Prompt 3: Shirt
class Shirt{
  constructor(color, size, sleveLength) {
    this.color = color;
    this.size = size;
    this.sleveLengthInInches = length;
  }
}
var shortSleeve = new Shirt("black", "large", 6);
var longSleeve = new Shirt("blue", "medium", 20);

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
class Dog{
  constructor(age, lengthInInches, color) {
    this.age = 3;
    this.lengthInInches = 39;
    ths.color = yellow;
  }
}
var lab = new Dog();
var boxer = new Dog(7, 30, "white");
console.log(lab)
class Dog{
  constructor(age, lengthInInches, color) {
    this.age = 7;
    this.lengthInInches = 30;
    ths.color = white;
  }
}
var boxer = new Dog();
console.log(boxer)
// Prompt 2: Snack
class Snack{
  constructor(shape, texture, company) {
    this.shape = oval;
    this.texture = crunchy;
    this.company = utz;
  }
}
var chips = new Snack();
console.log(chips)

class Snack{
  constructor(shape, texture, company) {
    this.shape = circle;
    this.texture = chewy;
    this.company = chipsAHoy;
  }
}
var cookies = new Snack();
console.log(cookies)
// Prompt 3: Shirt
class Shirt{
  constructor(color, size, sleveLength) {
    this.color = black;
    this.size = medium;
    this.sleveLengthInInches = 6;
  }
}
var shortSleeve = new Shirt();
console.log(shortSleeve)

class Shirt{
  constructor(color, size, sleveLength) {
    this.color = white;
    this.size = large;
    this.sleveLengthInInches = 20;
  }
}
var longSleeve = new Shirt();

console.log(longSleeve)
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
  constructor(age, lengthInInches, color) {
    this.age = age;
    this.lengthInInches = length;
    ths.color = color;
  }
}
var lab = new Dog(3, 39, "yellow");
var boxer = new Dog(7, 30, "white");
console.log(lab)
console.log(boxer)
// Prompt 2: Snack
class Snack{
  constructor(shape, texture, company) {
    this.shape = shape;
    this.texture = texture;
    this.company = company;
  }
}
var chips = new Snack("oval", "crunchy", "utz");
var cookies = new Snack("circle", "chewy", "chipsahoy");
console.log(chips)
console.log(cookies)
// Prompt 3: Shirt
class Shirt{
  constructor(color, size, sleveLength) {
    this.color = color;
    this.size = size;
    this.sleveLengthInInches = length;
  }
}
var shortSleeve = new Shirt("black", "large", 6);
var longSleeve = new Shirt("blue", "medium", 20);
console.log(shortSleeve)
console.log(longSleeve)
