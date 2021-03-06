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

var catahoula = new Dog();
var pitbullLabMix = new Dog();

console.log(catahoula);
console.log(pitbullLablMix);


// Prompt 2: Snack
class Snack {

}

var sourCreamAndOnionChips = new Snack();
var hersheysBar = new Snack();

console.log(sourCreamAndOnionChips);
console.log(hersheysBar);

// Prompt 3: Shirt
class shirt {

}

var eveningblouse = new Shirt();
var nirvanaTee = new Shirt();

console.log(eveningBlouse);
console.log(nirvanaTee);
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
    this.breed = "catahoula";
    this.lifeExpectancy = "10-14 years";
    this.temperament = ["energetic", "gentle", "loving"];
  }
}
var catahoula = new Dog();

console.log(catahoula);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.type = "chip";
    this.temperature = "room";
    this.price = 5
  }
}

var sourCreamAndOnionChips = new Snack();

console.log(sourCreamAndOnionChips);

// Prompt 3: Shirt
class Shirt {
  constructor () {
    this.fabric = "silk";
    this.brand = "A New Day";
    this.colors = ["white", "gold"];
  }
}

var eveningBlouse = new Shirt();

console.log(eveningBlouse);

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
  constructor(breed, lifeExpectancy, temperament) {
    this.breed = breed;
    this.lifeExpectancy = lifeExpectancy;
    this.temperament = temperament;
  }
}

var yellowLab = new Dog("yellow lab", "10-12 years", ["playful",  "loving", "social"]);
console.log(yellowLab);

var pitLabMix = new Dog("pitbull lab mix", "10-14 years", ["active", "energetic", "independent"]);
console.log(pitLabMix);


// Prompt 2: Snack
class Snack {
  constructor(type, temperature, price) {
    this.type = type;
    this.temperatureKept = temperature;
    this.price = price;
  }
}

var hersheysBar = new Snack("candy", "room", .99);
var creamsicle = new Snack("popsicle", "frozen", .50);

console.log(hersheysBar);
console.log(creamsicle);

// Prompt 3: Shirt
class Shirt {
  constructor (fabric, brand, colors) {
    this.fabric = fabric
    this.brand = brand
    this.colors = colors
  }
}

var eveningBlouse = new Shirt("silk", "Brand New Day", ["white", "gold"]);
var nirvanaTee = new Shirt("cotton", "Black Heart", ["yellow", "black"])

console.log(eveningBlouse);
console.log(nirvanaTee);
