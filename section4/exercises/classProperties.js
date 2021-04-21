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
class Dog {}
var dog1 = new Dog();
var dog2 = new Dog();
console.log(dog1);
console.log(dog2);

// Prompt 2: Snack
class Snack {}
var proteinShake = new Snack();
var cheese = new Snack();
console.log(proteinShake);
console.log(cheese);

// Prompt 3: Shirt
class Shirt {}
var longSleeve = new Shirt();
var tankTop = new Shirt();
console.log(longSleeve);
console.log(tankTop);

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
    this.breed = "chiweenie";
    this.birthMonth = "October";
    this.name = "Zoey";
  }
}
var dog3 = new Dog();
console.log(dog3);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.brand = "Dorito";
    this.flavor = "nacho cheese";
    this.color = "orange";
  }
}
var chip = new Snack();
console.log(chip);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.color = "black";
    this.material = "rayon";
    this.size = "small";
  }
}
var shortSleeve = new Shirt();
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
class Dog {
  constructor(breed, name, month) {
    this.breed = breed;
    this.name = name;
    this.birthMonth = month;
  }
}
var dog1 = new Dog("chiweenie", "Zoey", "October");
var dog2 = new Dog("chihuahua", "Mocha", "December");
console.log(dog1);
console.log(dog2);

// Prompt 2: Snack
class Snack {
  constructor(brand, flavor, color) {
    this.brand = name;
    this.flavor = flavor;
    this.color = color;
  }
}
var chip = new Snack("Dorito", "nacho cheese", "orange");
var cookie = new Snack("Chips Ahoy", "chocolate chip", "brown");
console.log(chip);
console.log(cookie);

// Prompt 3: Shirt
class Shirt {
  constructor(color, material, size) {
    this.color = color;
    this.material = material;
    this.size = size;
    }
  }
var shortSleeve = new Shirt("black", "rayon", "small");
var tankTop = new Shirt("pink", "cotton", "extra large");
console.log(shortSleeve);
console.log(tankTop);




// Prompt 3: Shirt
