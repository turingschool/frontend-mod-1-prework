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
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
}

var husky = new Dog();
var poodle = new Dog();

console.log(husky);
console.log(poodle);


// Prompt 2: Snack
class Snack {
}

var barbequeChips = new Snack();
var chocolateIceCream = new Snack();

console.log(barbequeChips);
console.log(chocolateIceCream);

// Prompt 3: Shirt
class Shirt {
}

var hawaiianShirt = new Shirt();
var oxford = new Shirt();

console.log(hawaiianShirt);
console.log(oxford);

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

class Dog1 {
  constructor() {
    this.breed = 'Spaniel';
    this.size = 'Medium';
    this.personality = 'Friendly';
  }
};

var bailey = new Dog1();
console.log(bailey);

/* NOTE: Since I already declared the class Dog in Part 1 - I was getting an error
 that I had already declared a class. I decided to deal with this issue by
alling this class Dog1. I did the same with the next two prompts. */

// Prompt 2: Snack

class Snack1 {
  constructor() {
    this.hasNuts = true;
    this.calorieCount = 250;
    this.name = "Snickers";
  }
};

var snickers = new Snack1()
console.log(snickers);
// Prompt 3: Shirt

class Shirt1 {
  constructor() {
    this.size = "Medium";
    this.brand = "J Crew";
    this.pattern = "Plaid";
  }
};

var flannelShirt = new Shirt1()
console.log(flannelShirt);

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
class Dog2 {
  constructor(color, weight, temperment) {
    this.color = color;
    this.weight = weight;
    this.temperment = temperment;
  }
}

var borderCollie = new Dog2('black and white', 50, 'energetic')
console.log(borderCollie);

var labrador = new Dog2('yellow', 60, 'affectionate')
console.log(labrador);

// Prompt 2: Snack
class Snack2 {
  constructor(flavorProlfile, health, price) {
    this.flavorProlfile = flavorProlfile;
    this.health = health;
    this.price = price;
  }
}

var cheetos = new Snack2("savory", "unhealthy", "$1.99")
console.log(cheetos);

var chocolate = new Snack2("sweet", "sometimes healthy", "$3.99" )
console.log(chocolate);

// Prompt 3: Shirt
class Shirt2 {
  constructor(buttonCount, sleeveLength, pattern) {
    this.buttonCount = buttonCount;
    this.sleeveLength = sleeveLength;
    this.pattern = pattern;
  }
}

var polo = new Shirt2 (6, "short", "stripes")
console.log(polo);

var blouse = new Shirt2 (1, "long", "floral")
console.log(blouse);
