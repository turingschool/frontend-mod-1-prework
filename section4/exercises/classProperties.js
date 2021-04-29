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
var boxer = new Dog();
var whippet = new Dog();

console.log(boxer);
console.log(whippet);

// Prompt 2: Snack

class Snack {

}
var cheese =  new Snack();
var pretzel = new Snack();

console.log(cheese);
console.log(pretzel);

// Prompt 3: Shirt

class Shirt {

}
var tshirt = new Shirt();
var longSleeve = new Shirt();

console.log(tshirt);
console.log(longSleeve);

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
  constructor(size, color, owner) {
    this.size = "large";
    this.color = "multi";
    this.owner = "Juliana and Hugh";
  }
}

var boxer = new Dog2();
console.log(boxer);

var whippet = new Dog2();
console.log(whippet);

// Prompt 2: Snack

class Snack2 {
  constructor(taste, healthy, calories) {
    this.taste = "delicious";
    this.healthy = false;
    this.calories = 100;
  }
}

var cheese = new Snack2();
console.log(cheese);

var pretzel = new Snack2();
console.log(pretzel);

// Prompt 3: Shirt

class Shirt2 {
  constructor(size, color, age) {
    this.size = "XS";
    this.color = "yellow";
    this.age = 3;
  }
}

var tshirt = new Shirt2();
console.log("tshirt",tshirt);

var longSleeve = new Shirt2();
console.log({longSleeve});

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
  constructor(size, color, owner) {
    this.size = size;
    this.color = color;
    this.owner = owner;
  }
}

var boxer = new Dog3("large", "brown", "Huey");
console.log(boxer);

var whippet = new Dog3("medium", "white", "Juliana");
console.log(whippet);


// Prompt 2: Snack

class Snack3 {
  constructor(taste, healthy, calories) {
    this.taste = taste;
    this.healthy = healthy;
    this.calories = calories;
  }
}

var cheese = new Snack3("salty and sweet", false, 80);
console.log(cheese);

var pretzel = new Snack3("salty breadlike", true, 110);
console.log(pretzel);

// Prompt 3: Shirt

class Shirt3 {
  constructor(size, color, age) {
    this.size = size;
    this.color = color;
    this.age = age;
  }
}

var tshirt = new Shirt3("Medium", "Pink", 2);
console.log("tshirt",tshirt);

var longSleeve = new Shirt3("Large", "Black", 1);
console.log({longSleeve});
