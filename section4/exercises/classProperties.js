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

var borderCollie = new Dog();
var goldenRetriever = new Dog();

console.log(
  borderCollie,
  goldenRetriever);

// Prompt 2: Snack
class Snack {
}

var chip = new Snack();
var nut = new Snack();

console.log(
  chip,
  nut
);

// Prompt 3: Shirt

class Shirt {
}

var redShirt = new Shirt();
var plaidShirt = new Shirt();
var houndstoothShirt = new Shirt();

console.log(
  redShirt,
  plaidShirt,
  houndstoothShirt
);
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
class DogBreed {
  constructor() {
    this.personality = "angry";
    this.size = "large";
    this.skills = ["fetching", "singing", "dancing"];
  }
}

var borderCollie = new DogBreed();
console.log(borderCollie);


// Prompt 2: Snack
class HealthySnack {
  constructor() {
    this.name = "Apple";
    this.ounces = 6.4;
    this.color = "Green";
  }
}

var apple = new HealthySnack();
console.log(apple);

// Prompt 3: Shirt
class SummerShirt {
  constructor() {
    this.name = "Plaid";
    this.size = "Medium";
    this.isWarm = false;
  }
}

var plaid = new SummerShirt();
console.log(plaid);
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
class DogForAdoption {
  constructor(name, personality, size, skills ) {
    this.name = name
    this.personality = personality;
    this.size = size;
    this.skills = skills;
  }
}

var frederick = new DogForAdoption("Frederick", "Sad", "Giant", ["Dog Poetry", "Painting", "Juggling", "Reading Minds"]);
var steve = new DogForAdoption("Steve", "Ebullient", "Itty Bitty", ["Poker", "Lie Detecting", "Polo", "Shuffle Board", "Rolling Over"]);
console.log(
  frederick,
  steve
);

// Prompt 2: Snack
class UnhealthySnack {
  constructor(name, amount, isTasty) {
    this.name = name;
    this.amount = amount;
    this.isTasty = isTasty;
  }
}

var purinaCatChow = new UnhealthySnack("Purina Cat Chow", 3, false);
var chocolateButterStick = new UnhealthySnack("Chocolate Butter Stick", 40, true);
console.log(
  purinaCatChow,
  chocolateButterStick
);
// Prompt 3: Shirt
class CoolShirt {
  constructor(name, hasRips, numStains) {
    this.name = name;
    this.hasRips = hasRips;
    this.numStains = numStains;
  }
}

var threeWolvesHowl = new CoolShirt("Three Wolves Howl", true, 40);
var horsesInWind = new CoolShirt("Horses in Wind", true, 100);

console.log(
  threeWolvesHowl,
  horsesInWind
);
