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

var germanShepherd = new Dog();
console.log(germanShepherd);

var borderCollie = new Dog();
console.log(borderCollie);

// Prompt 2: Snack
class Snack {

}

var doritos = new Snack();
console.log(doritos);

var pretzels = new Snack();
console.log(pretzels);

// Prompt 3: Shirt
class Shirt {

}

var redShirt = new Shirt();
console.log(redShirt);

var yellowShirt = new Shirt();
console.log(yellowShirt);

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
class DogInfo {
  constructor () {
    this.name = "Billy";
    this.breed = "German Shepherd";
    this.age = 2;
  }
}

var billy = new DogInfo();
console.log(billy);

// Prompt 2: Snack
class SnackNutritionInfo {
  constructor () {
    this.productName = "Lays Chips";
    this.calories = 500;
    this.gramsCarbs = 40;
  }
}

var laysChips = new SnackNutritionInfo();
console.log(laysChips);

// Prompt 3: Shirt
class Shirts {
  constructor () {
    this.shirtcolor = "Red"
    this.longSleeves = false
    this.price = "$15"
  }
}

var redShirt = new Shirts();
console.log(redShirt);

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
class PuppyInfo {
  constructor(dogName, dogBreed, favoriteToy) {
    this.name = dogName;
    this.breed = dogBreed;
    this.favoriteToy = favoriteToy;
  }
}

var sally = new PuppyInfo ("Sally", "German Shepherd", "tennis ball");
console.log(sally);

var lizzie = new PuppyInfo ("Lizzie", "Border Collie", "rubber ducky");
console.log(lizzie);

// Prompt 2: Snack
class SnackNutrition {
  constructor(snackName, calories, gramsCarbs, gramsFat) {
    this.snackName = snackName;
    this.calories = calories;
    this.gramsCarbs = gramsCarbs;
    this.gramsFat = gramsFat;
  }
}

var tostitos = new SnackNutrition ("Tostitos", 300, 35, 4);
console.log(tostitos);

var sourPatchKids = new SnackNutrition ("Sour Patch Kids", 350, 24, 5);
console.log(sourPatchKids);

// Prompt 3: Shirt
class ShirtChoice {
  constructor(shirtColor, hasLongSleeves, shirtPrice) {
    this.color = shirtColor;
    this.longSleeves = hasLongSleeves;
    this.price = shirtPrice;
  }
}

var shirtNumberOne = new ShirtChoice("red", true, "$30");
console.log(shirtNumberOne);

var shirtNumberTwo = new ShirtChoice("blue", false, "$35");
console.log(shirtNumberTwo);
