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
var rover = new Dog();
var labrador = new Dog();
console.log(rover);
console.log(labrador);
// Prompt 2: Snack
class Snack {

}
var fritos = new Snack();
var oreos = new Snack();
console.log(fritos);
console.log(oreos);
// Prompt 3: Shirt
class Shirt {}
var plain = new Shirt();
var cotton = new Shirt();
console.log(plain);
console.log(cotton);
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
class Dog1 {
  constructor(name, breed, size) {
    this.name = name;
    this.breed = breed;
    this.size = size;
  }
}
var rover = new Dog1('rover', 'labrador', 'huge');
console.log(rover);

// Prompt 2: Snack
class Snack1 {
  constructor(name, sodium, ingredients) {
    this.name = name;
    this.sodium = sodium;
    this.ingredients = ingredients;
  }
}
var fritos = new Snack1('fritos', 1000, 'corn');
console.log(fritos);

// Prompt 3: Shirt
class Shirt1 {
  constructor(name, color, sleeves) {
    this.name = name;
    this.color = color;
    this.sleeves = sleeves;
  }
}
var delilah = new Shirt1('plain', 'white', false);
console.log(delilah);

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
class Dog2 {
  constructor(name, breed, size){
    this.name = name;
    this.breed = breed;
    this.size = size;
  }
}

var rover = new Dog2('rover', 'labrador', 'huge');
rover.name = 'luna';
rover.breed = 'chihuahua';
rover.size = 'even bigger than huge';
console.log(rover);

// Prompt 2: Snack
class Snack2 {
  constructor(name, sodium, ingredients){
    this.name = name;
    this.sodium = sodium;
    this.ingredients = ingredients;
  }
}

var fritos = new Snack2('fritos', 1000, 'corn');
fritos.name = 'super salty fritos';
fritos.sodium = 10000000;
fritos.ingredients = 'KORN';
console.log(fritos);

// Prompt 3: Shirt
class Shirt2{
  constructor(name, color, sleeves){
    this.name = name;
    this.color = color;
    this.sleeves = sleeves;
  }
}

var delilah = new Shirt2('plain', 'white', false);
delilah.name = 'totally cool joke about the plain white ts';
delilah.color = 'red';
delilah.sleeves = true;
console.log(delilah);
