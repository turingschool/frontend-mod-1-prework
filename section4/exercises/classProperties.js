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

var dog1 = new Dog();
var dog2 = new Dog();

console.log(dog1, dog2);

// Prompt 2: Snack
class Snack {
};

var snack1 = new Snack();
var snack2 = new Snack();

console.log(snack1, snack2);

// Prompt 3: Shirt
class Shirt {
};

var shirt1 = new Shirt();
var shirt2 = new Shirt();

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
class DogObject {
  constructor(){
  this.breed = "Lab";
  this.age = 5;
  this.name = "Sally";
  }
};

var dogOne = new DogObject();

console.log(dogOne);

// Prompt 2: Snack
class SnackObject {
  constructor(){
  this.type = "chips";
  this.expiration = "3/30/2022";
  this.costDollars = 5;
  }
};

var snackOne = new SnackObject();

console.log(snackOne);

// Prompt 3: Shirt
class ShirtObject {
  constructor(){
  this.brand = "H&M";
  this.material = "100% cotton";
  this.costDollars = 20;
  }
};

var shirtOne = new ShirtObject();

console.log(shirtOne);

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
  class DogDynamicObject {
    constructor(breed, age, name){
    this.breed = breed;
    this.age = age;
    this.name = name;
    }
  };

  var dogDyn = new DogDynamicObject("Pitbull", 2, "Emi");

  console.log(dogDyn);

  // Prompt 2: Snack
  class SnackDynamicObject {
    constructor(type, expDate, cost){
    this.type = type;
    this.expiration = expDate;
    this.costDollars = cost;
    }
  };

  var snackDyn = new SnackDynamicObject("veggies", "5/30/2021", 10);

  console.log(snackDyn);


// Prompt 3: Shirt
class ShirtDynamicObject {
  constructor(brand, material, cost){
  this.brand = brand;
  this.material = material;
  this.costDollars = cost;
  }
};

var shirtDyn = new ShirtDynamicObject("H&M", "90% cotton", 15);

console.log(shirtDyn);
