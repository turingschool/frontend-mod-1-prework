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
class DogA {

}

var dog1 = new DogA();
var dog2 = new DogA();

console.log(dog1);
console.log(dog2);

// Prompt 2: Snack
class SnackA {

}

var snack1 = new SnackA();
var snack2 = new SnackA();

console.log(snack1);
console.log(snack2);

// Prompt 3: Shirt
class ShirtA {

}

var henley = new ShirtA();
console.log(henley);

var crewNeck = new ShirtA();
console.log(crewNeck);

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
class DogB {
  constructor() {
    this.name = "Clifford";
    this.breed = "Big";
    this.color = "Red";
  }
}

var dog3 = new DogB();
console.log(dog3);

// Prompt 2: Snack
class SnackB {
  constructor() {
    this.type = "Chips";
    this.flavor = "BBQ";
    this.servingSize = "About 15 chips (28g)";
  }
}

var snack3 = new SnackB();
console.log(snack3);

// Prompt 3: Shirt
class ShirtB {
  constructor() {
    this.style = "Long Sleeve";
    this.color = "Black";
    this.size = "Medium";
  }
}

var shirt3 = new ShirtB();
console.log(shirt3);

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
class DogC {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
}

var dog4 = new DogC("Jameson", "Border Collie", "Blue Merle");
var dog5 = new DogC("Jax", "Australian Cattle Dog", "Red/Blue");

console.log(dog4);
console.log(dog5);

// Prompt 2: Snack
class SnackC {
  constructor(type, flavor, servingSize) {
    this.type = type;
    this.flavor = flavor;
    this.servingSize = servingSize;
  }
}

var snack4 = new SnackC("pudding", "chocolate", "3.5 oz");
var snack5 = new SnackC("fruit roll", "strawberry", "59 grams");

console.log(snack4);
console.log(snack5);

// Prompt 3: Shirt
class ShirtC {
  constructor(style, color, size) {
    this.style = style;
    this.color = color;
    this.size = size;
  }
}

var shirt4 = new ShirtC("Button Up", "Blue", "Small");
var shirt5 = new ShirtC("Tee", "White", "Large");

console.log(shirt4);
console.log(shirt5);
