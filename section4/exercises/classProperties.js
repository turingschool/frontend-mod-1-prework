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

var floofie = new Dog
console.log(floofie);
var spike = new Dog
console.log(spike);
// Prompt 2: Snack
class Snack {
}

var takis = new Snack
console.log(takis);
var latiao = new Snack
console.log(latiao);
// Prompt 3: Shirt
class Shirt {
}

var thrifted = new Shirt
console.log(thrifted);
var francescas = new Shirt
console.log(francescas);
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
class Instafamous {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

var duke = new Instafamous ('Duke', 9, 'poodle')
console.log(duke);
// Prompt 2: Snack
class KingSoopersSnack {
  constructor(brand, flavorProfile, mainIngredient) {
    this.brand = brand;
    this.flavorProfile = flavorProfile;
    this.mainIngredient = mainIngredient;
  }
}

var doritos = new KingSoopersSnack ('Frito-Lay', 'salty', 'whole corn')
console.log(doritos);
// Prompt 3: Shirt
class CheapShirt {
  constructor(size, material, color) {
    this.size = size;
    this.material = material;
    this.color = color
  }
}

var targetMensButtonDown = new CheapShirt ('XL', 'linen', 'tan')
console.log(targetMensButtonDown);
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
class FamilyPet {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

var dubu = new FamilyPet ('dubu', 2, 'corgi')
console.log(dubu);
var knight = new FamilyPet ('knight', 7, 'poodle')
console.log(knight);
// Prompt 2: Snack
class CabinetSnack {
  constructor(brand, flavorProfile, mainIngredient) {
    this.brand = brand;
    this.flavorProfile = flavorProfile;
    this.mainIngredient = mainIngredient;
  }
}

var extraHotCheetoes = new CabinetSnack ('Frito-Lay', 'spicy', 'corn meal')
console.log(extraHotCheetoes);
var jackLinksTeriyaki = new CabinetSnack ('Link Snacks', 'salty', 'beef')
console.log(jackLinksTeriyaki);
// Prompt 3: Shirt
class ClosetMensShirt {
  constructor(size, material, color) {
    this.size = size;
    this.material = material;
    this.color = color
  }
}

var ralphLaurnClassic = new ClosetMensShirt ('M', 'cotton', 'blue')
console.log(ralphLaurnClassic);
var nikeAthleticTee = new ClosetMensShirt ('L', 'polyester', 'black')
console.log(nikeAthleticTee);
