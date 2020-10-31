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
var lab = new Dog();
var goldenRetriever = new Dog();
console.log(goldenRetriever);
console.log(lab);
// Prompt 2: Snack
class Snack {
};
var cheezIt = new Snack();
var tortillaChip = new Snack();
console.log(cheezIt);
console.log(tortillaChip);
// Prompt 3: Shirt
class Shirt{
};
var buttonDown = new Shirt();
var longSleeveT = new Shirt();
console.log(buttonDown);
console.log(longSleeveT);
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
class DogExample2 {
  constructor(lbs, breedName, doesShed) {
    this.weight = lbs;
    this.breed = breedName;
    this.isHypoallergenic = doesShed;
  }
}
var poodle = new DogExample2(25, 'Poodle', false);
console.log(poodle);
// Prompt 2: Snack
class SnackExample2 {
  constructor(type, brand, flavor) {
    this.snackType = type
    this.snackBrand = brand
    this.snackFlavor = flavor
  }
}
var laysBarbecue = new SnackExample2('Potato chip', 'Lays', 'Barbecue');
console.log(laysBarbecue);
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
class DogExample3 {
  constructor(height, traits, ears){
    this.heightInInches = height
    this.dogPersonality = traits
    this.hasFloppyEars = ears
  }
}
var goldenDoodle = new DogExample3(24, 'friendly', true);
console.log(goldenDoodle);
var germanShepherd = new DogExample3(32, 'loyal', false);
// Prompt 2: Snack
class SnackExample3 {
  constructor(price, sweetness, salty){
    this.snackPrice = price;
    this.isSweet =  sweetness;
    this.isSalty = salty
  }
}
var saltine = new SnackExample3(1.5, false, true);
console.log(saltine);
var apple = new SnackExample3(.25, true, false);
console.log(apple);
// Prompt 3: Shirt
class ShirtExample2 {
  constructor(brand, collar, sleeve){
    this.shirtBrand = brand;
    this.collarStyle = collar;
    this.sleeveLength = sleeve;
  }
}
var jockeyUnderShirt = new ShirtExample2('jockey', 'crewneck', 'Sleeveless');
console.log(jockeyUnderShirt);
var poloShirt = new ShirtExample2('Polo', 'Knitted', 'ShortSleeve');
console.log(poloShirt);
