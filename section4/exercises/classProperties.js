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
class PartOneDog {
  constructor() {

  }
}
var poodle = new PartOneDog();
console.log(poodle);

var golden = new PartOneDog();
console.log(golden);

// Prompt 2: Snack
class PartOneSnack {
  constructor() {

  }
}
var chips = new PartOneSnack();
console.log(chips);

var carrots = new PartOneSnack();
console.log(carrots);
// Prompt 3: Shirt
class PartOneShirt {
  constructor() {

  }
}
var tankTop = new PartOneShirt();
console.log(tankTop);

var sweatShirt = new PartOneShirt();
console.log(sweatShirt);
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
class PartTwoDog {
  constructor() {
    this.color = "White";
    this.weight = 60;
    this.breed = "Poodle";
  }
}
poodle = new PartTwoDog();
console.log(poodle);
// Prompt 2: Snack
class PartTwoSnack {
  constructor() {
    this.flavor = "Sweet";
    this.brand = "Little Debbie";
    this.price = "2.00";
  }
}
var oatmealCreamPie = new PartTwoSnack();
console.log(oatmealCreamPie);
// Prompt 3: Shirt
class PartTwoShirt {
  constructor() {
    this.color = "Black";
    this.brand = "Nike";
    this.price = "15.00";
  }
}
var athleticShirt = new PartTwoShirt();
console.log(athleticShirt);
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
class PartThreeDog {
  constructor(clr, dogWeight, dogBreed) {
    this.color = clr;
    this.weight = dogWeight;
    this.breed = dogBreed;
  }
}
poodle = new PartThreeDog("white", 55, "poodle");
console.log(poodle);
golden = new PartThreeDog("gold", 60, "golden");
console.log(golden);
// Prompt 2: Snack
class PartThreeSnack {
  constructor(flvr, snackBrand, snackPrice) {
    this.flavor = flvr;
    this.brand = snackBrand;
    this.price = snackPrice;
  }
}
chips = new PartThreeSnack("salty", "Lays", 3.50);
console.log(chips);
carrots = new PartThreeSnack("sweet", "Green Giant", 2.25);
console.log(carrots);
// Prompt 3: Shirt
class PartThreeShirt {
  constructor(shirtColor, shirtBrand, shirtPrice) {
    this.color = shirtColor;
    this.brand = shirtBrand;
    this.price = shirtPrice;
  }
}
tankTop = new PartThreeShirt("white", "Nike", 12.50);
console.log(tankTop);
sweatShirt = new PartThreeShirt("black", "Adidas", 34.99);
console.log(sweatShirt);
