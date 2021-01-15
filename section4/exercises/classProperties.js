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
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {
}
  var blueHeeler = new Dog();
  var pointer = new Dog();

console.log(blueHeeler);
console.log(pointer);

// Prompt 2: Snack
class Snack {
}
  var potatoChip = new Snack();
  var gummyWorm  = new Snack();

console.log(potatoChip);
console.log(gummyWorm);

// Prompt 3: Shirt
class Shirt {
}
  var shortSleeve = new Shirt();
  var longSleeve = new Shirt();

console.log(shortSleeve);
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
class Pup {
  constructor() {
    this.name = "Leon";
    this.age = 5;
    this.birthday = "12/5/2015";
  }
}

var blueHeeler = new Pup();
console.log(blueHeeler);


// Prompt 2: Snack
class Food {
  constructor() {
    this.type = "Chip";
    this.name = "Lays";
    this.expiration = "01/23/2021";
  }
}

var potatoChip = new Food();
console.log(potatoChip);

// Prompt 3:
class Clothing {
  constructor() {
    this.type = "T-shirt";
    this.color = "Red";
    this.size = 2;
  }
}

var shortSleeve = new Clothing();
console.log(shortSleeve);

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

class Hound {
  constructor(age, dogType, color) {
    this.age = age;
    this.type = dogType;
    this.color = color;
  }
}

var myDog = new Hound(5, "Blue Heeler", "Black and white");
console.log(myDog);

// Prompt 2: Snack
class ThirdSnack {
  constructor(snackType, snackBrand, expiration) {
    this.type = snackType;
    this.brand = snackBrand;
    this.expiration = expiration;
  }
}

var mySnack = new ThirdSnack("corn chip", "tostitos", "01/23/2021");
console.log(mySnack);

// Prompt 3: Shirt
class ThirdShirt {
  constructor(size, type, color) {
    this.size = size;
    this.type = type;
    this.color = color;
  }
}

var myShirt = new ThirdShirt("small", "long sleeve", "purple");
console.log(myShirt);
