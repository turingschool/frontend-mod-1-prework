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
var chihuahua = new Dog();
var germanShepherd = new Dog();
console.log(chihuahua);
console.log(germanShepherd);

// Prompt 2: Snack
class Snack {
}
var potatoChip = new Snack();
var olive = new Snack();
console.log(potatoChip);
console.log(olive);

// Prompt 3: Shirt
class Shirt {
}
var hawaiian = new Shirt();
var collar = new Shirt();
console.log(hawaiian);
console.log(collar);


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
  class ShowDog {
    constructor() {
      this.hair = "short and curly";
      this.skillLevel = 8;
      this.pompCircumstance = 9.5;
    }
  }
var poodle = new ShowDog();
console.log(poodle);

  // Prompt 2: Snack

  class yumSnack {
    constructor() {
      this.sugarContent = 3.5;
      this.shape = "cube";
      this.crunch = true;
    }
  }
var cheezIt = new yumSnack();
console.log(cheezIt);

  // Prompt 3: Shirt

  class TeeShirt {
    constructor() {
      this.material = "cotton";
      this.shirtSize = "medium";
      this.design = true;
    }
  }
  var skateOrDie = new TeeShirt();
  console.log(skateOrDie);

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

class DogChar {
  constructor(snout, size, speed) {
    this.snoutLength = snout;
    this.bodySize = size;
    this.speed = speed;
  }
}
var labrador = new DogChar(5, 15, 21);
var bassettHound = new DogChar(6.5, 13, 7);
console.log(labrador);
console.log(bassettHound);

// Prompt 2: Snack

class SnackToday {
  constructor(health, company, weight) {
    this.candy = health;
    this.manufacturer = company;
    this.packageSize = weight;
  }
}
var oreoBag = new SnackToday(false, "Nabisco", 12);
var raisinBox = new SnackToday(true, "Sun-Maid", 2.5)
console.log(oreoBag);
console.log(raisinBox);

// Prompt 3: Shirt

class NewShirt {
  constructor(button, collar, design) {
    this.buttonUp = button;
    this.collarHeight = collar;
    this.design = design;
  }
}
var tee = new NewShirt(false, 0, true);
var hawaiian = new NewShirt(true, 2, true)
console.log(tee);
console.log(hawaiian);
