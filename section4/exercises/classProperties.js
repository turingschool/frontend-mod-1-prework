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
var newfoundland = new Dog();
var lab = new Dog();

console.log(newfoundland);
console.log(lab);

// Prompt 2: Snack
class Snack {}
var chips = new Snack();
var carrots = new Snack();

console.log(chips);
console.log(carrots);

// Prompt 3: Shirt
class Shirt {}
var concert = new Shirt();
var button = new Shirt();

console.log(concert);
console.log(button);

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
class Dogs {
  constructor() {
    this.type = 'newfie';
    this.weight = 120;
    this.age = 14;
  }
}

var annabelle = new Dogs();
console.log(annabelle);

// Prompt 2: Snack
class Snacks {
  constructor () {
    this.isHealthy = true;
    this.servings = 2;
    this.kidsWillEat = 'maybe';
  }
}

var snapPeas =  new Snacks();
console.log(snapPeas);

// Prompt 3: Shirt
class Shirts {
  constructor() {
    this.wear = 'at the beach';
    this.style = 'short-sleeve';
    this.isComfy = true;
  }
}

var hawaii = new Shirts();
console.log(hawaii);

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
  class DogA {
    constructor(breed, size, howOld) {
      this.type = breed;
      this.weight = size;
      this.age = howOld;
    }
  }

  var annabelle = new DogA('newfoundland', 120, 14);
  var soya = new DogA('teacup chihuahua', 5, 8);
  console.log(annabelle);
  console.log(soya);

  // Prompt 2: Snack
  class SnackA {
    constructor (healthy, quantity, kidFriendly) {
      this.isHealthy = healthy;
      this.servings = quantity;
      this.kidsWillEat = kidFriendly;
    }
  }

  var snapPeas =  new SnackA(true, 6, true);
  var popcorn = new SnackA(true, 4, true);
  console.log(snapPeas);
  console.log(popcorn);


  // Prompt 3: Shirt

  class ShirtA {
    constructor(whereToWear, type, comfy) {
      this.wear = whereToWear;
      this.style = type;
      this.isComfy = comfy;
    }
  }

  var buttonUp = new ShirtA(['work', 'date', 'special occasions'], 'long-sleeve, button-up', false);
  var tshirt = new ShirtA(['home', 'beach', 'workout'], 'short-sleeve, screen print', true);
  console.log(buttonUp);
  console.log(tshirt);
