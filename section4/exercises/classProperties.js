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

/* class Dog {

}
var poodle = new Dog();
console.log(poodle);
var pitbull = new Dog();
console.log(pitbull)
// Prompt 2: Snack
class Snack {

}
var chips = new Snack();
console.log(chips);
var gronolaBar = new Snack();
console.log(gronolaBar);


// Prompt 3: Shirt

class Shirt {

}
var crewNeck = new Shirt();
console.log(crewNeck);
var vNeck = new Shirt();
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
  constructor(){
    this.size = "Big";
    this.color = "black";
    this.age = 3;
  }
}
var poodle = new Dog();
console.log(poodle);

// Prompt 2: Snack
class Snack {
  constructor(){
    this.flavor = "Chocolate";
    this.calories = 100
    this.vegan = true;
  }
}
var chips = new Snack();
console.log(chips);

// Prompt 3: Shirt
class Shirt {
  constructor(){
    this.size = "Small";
    this.color = "Black"
    this.price = 10
  }
}
var crewNeck = new Shirt();
console.log(crewNeck);
*/
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
//I tested all code below in another file because this node says the identifiers are already declared.
class Dog {
  constructor(size, color, age){
    this.size = size;
    this.color = color;
    this.age = age;
  }
}
var poodle = new Dog("Small", "White", "Old");
console.log(poodle);

var pitbull = new Dog("Medium", "Black", "Young");
console.log(pitbull);


// Prompt 2: Snack
class Snack {
  constructor(flavor, calories, isVegan){
    this.flavor = flavor;
    this.calories = calories;
    this.isVegan = isVegan;
  }
}
var chips = new Snack("BBQ", 100, false);
console.log(chips);

var gronolaBar = new Snack("Chocolate", 120, true);
console.log(gronolaBar);


// Prompt 3: Shirt
class Shirt {
  constructor(size, color, price){
    this.size = size;
    this.color = color;
    this.price = price;
  }
}
var crewNeck = new Shirt("XL", "Blue", 10);
console.log(crewNeck);

var vNeck = new Shirt("XS", "Pink", 12);
console.log(vNeck);
