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
var dachshund = new Dog();
var goldenRetriever = new Dog();
console.log(dachshund);
console.log(goldenRetriever);

// Prompt 2: Snack
class Snack {

}
var granolaBar = new Snack();
var chocolate = new Snack();
console.log(granolaBar);
console.log(chocolate);

// Prompt 3: Shirt
class Shirt {

}
var buttonUp = new Shirt();
var teeShirt = new Shirt();
console.log(buttonUp);
console.log(teeShirt);

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
    this.neuteredOrSpayed = true;
    this.sex = "male";
    this.color = "golden";
  }
}
var dachshund = new Dog();
console.log(dachshund);
// Prompt 2: Snack
class Snack {
  constructor() {
    this.ingredients = ["oats", "almonds", "raisins"];
    this.healthy = true;
    this.servings = 3
  }
}
var granolaBar = new Snack();
console.log(granolaBar);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.material = "cotton";
    this.size = "large";
    this.colore = "blue";
  }
}
var longSleeve = new Shirt();
console.log(longSleeve);

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
  constructor(fixed, sexType, colorType) {
    this.neuteredOrSpayed = fixed;
    this.sex = sexType;
    this.color = colorType;
  }
}
var goldenLab = new Dog("yes", "female", "gold");
console.log(goldenLab);

// Prompt 2: Snack
class Snack {
  constructor(recipeContents, isHealthy, numberOfServings) {
    this.ingredients = recipeContents;
    this.healthy = isHealthy;
    this.servings = numberOfServings;
  }
}
var granolaBar = new Snack(["oats", "raisins", "nuts"], true, 4);
console.log(granolaBar);

// Prompt 3: Shirt
class Shirt {
  constructor(materialType, shirtSize, shirtColor) {
    this.material = materialType;
    this.size = shirtSize;
    this.color = shirtColor;
  }
}
var buttonUp = new Shirt("linen", "large", "white");
console.log(buttonUp);
