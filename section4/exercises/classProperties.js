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

var tucker = new Dog();
console.log(tucker);
var watson = new Dog();
console.log(watson);

// Prompt 2: Snack

class Snack {

}

var appleSlices = new Snack();
console.log(appleSlices);
var doritos = new Snack();
console.log(doritos);

// Prompt 3: Shirt

class Shirt {

}

var tricolorStarbombTee = new Shirt();
console.log(tricolorStarbombTee);
var boulderParksAndRecTee = new Shirt();
console.log(boulderParksAndRecTee);

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

class DogProperties {
  constructor(name, breed, age) {
    this.dogName = "Archer";
    this.dogBreed = "Pitbull";
    this.dogAge = 9;
  }
}

var arch = new DogProperties();
console.log(arch);

// Prompt 2: Snack

class SnackProperties {
  constructor(brand, servingSize, calories) {
    this.snackBrand = "Organic Banana";
    this.snackServingSize = 1;
    this.snackCalories = 90;
  }
}

var banana = new SnackProperties();
console.log(banana);

// Prompt 3: Shirt

class ShirtProperties {
  constructor(color, type, size) {
    this.shirtColor = "Black";
    this.shirtType = "Tee";
    this.shirtSize = "Small";
  }
}

var blackTee = new ShirtProperties();
console.log(blackTee);

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

class DogDynamic {
  constructor(name, age, breed) {
    this.dogName = name;
    this.dogAge = age;
    this.dogBreed = breed;
  }
}

var mocha = new DogDynamic("Mocha", 8, "Pitbull");
console.log(mocha);
var zuki = new DogDynamic("Zuki", 7, "Shepherd Mix");
console.log(zuki);

// Prompt 2: Snack

class SnackDynamic {
  constructor(type, size, calories) {
    this.snackType = type;
    this.servingSize = size;
    this.servingCalories = calories;
  }
}

var chips = new SnackDynamic("Corn Chips", 10, 140);
console.log(chips);
var apple = new SnackDynamic("Apple", 1, 95);
console.log(apple);

// Prompt 3: Shirt

class ShirtDynamic {
  constructor(color, design, size) {
    this.shirtColor = color;
    this.shirtDesign = design;
    this.shirtSize = size;
  }
}

var greenTee = new ShirtDynamic("Green", "None", "Medium");
console.log(greenTee);
var nikeWhite = new ShirtDynamic("White", "Black Nike logo", "Small");
console.log(nikeWhite);
