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
var dashund = new Dog;
var lab = new Dog;
console.log(dashund);
console.log(lab);

// Prompt 2: Snack
class Snack {

}
var apple = new Snack;
var popcorn = new Snack;
console.log(apple);
console.log(popcorn);
// Prompt 3: Shirt
class Shirt {

}
var tShirt = new Shirt;
var buttonDown = new Shirt;
console.log(tShirt);
console.log(buttonDown);


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
class DogPartTwo {
  constructor() {
    this.wieght = 18;
    this.height = 12;
    this.fur = "short";
  }
}
var chihuahua = new DogPartTwo;
console.log(chihuahua);
// Prompt 2: Snack
class SnackPartTwo {
  constructor() {
    this.calorie = 100;
    this.carbohydate = "28g";
    this.servingSize = "2 peanut butter cups";
  }
}
var reeses = new SnackPartTwo;
console.log(reeses);
// Prompt 3: Shirt
class ShirtPartTwo {
  constructor() {
    this.size = "medium";
    this.fabric = "cotton";
    this.isMachineWashable = true;

  }
}
var tankTop = new ShirtPartTwo;
console.log(tankTop);
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
class DogPartThree {
  constructor(pounds, inchesTall, typeOfFur) {
    this.wieght = pounds;
    this.height = inchesTall;
    this.fur = typeOfFur;
  }
}
var australianShepherd = new DogPartThree(56, 33, "long");
var corgi = new DogPartThree(32, 14, "medium");

// Prompt 2: Snack
class SnackPartThree {
  constructor(cal, carb, serving) {
    this.calorie = cal;
    this.carbohydate = carb;
    this.servingSize = serving;
  }
}
var hummus = new SnackPartThree(130, "8g", "3 tbsp");
var cheddarCheese = new SnackPartThree(100, "12g", "1 oz");
console.log(hummus);
console.log(cheddarCheese);

// Prompt 3: Shirt
class ShirtPartThree {
  constructor(sizeOfShirt, typeOfFabric, washable) {
    this.size = sizeOfShirt;
    this.fabric = typeOfFabric;
    this.isMachineWashable = washable;

  }
}
var breweryShirt = new ShirtPartThree("medium", "Cotton", true);
var workUniform = new ShirtPartThree("large", "polyester", true);
console.log(breweryShirt);
console.log(workUniform);
