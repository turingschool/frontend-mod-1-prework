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
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Canine {

}
var poodle = new Canine();
var chow = new Canine();
console.log(poodle);
console.log(chow);

// Prompt 2: Snack
class SnackFood {

}
var cookie = new SnackFood();
var jerky = new SnackFood();
console.log(cookie);
console.log(jerky);

// Prompt 3: Shirt
class Shirt {

}
var collared = new Shirt();
var turtle_neck = new Shirt();
console.log(collared);
console.log(turtle_neck);

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
  constructor(lifespan, temperament, coat) {
    this.lifespan = '12yrs';
    this.temperament = 'friendly';
    this.coat = 'short-haired';
  }
}
var poodle = new DogBreed();
console.log(poodle);

// Prompt 2: Snack
class Snack1 {
  constructor(name, calorieCount, nuts) {
    this.name = 'Yummy No-Nutty: Dark'
    this.calorieCount = 380;
    this.nuts = 'Contains nuts!';
  }
}
var yummyNoNutty = new Snack1();
console.log(yummyNoNutty);

// Prompt 3: Shirt
class Shirt1 {
  constructor(collar, size, print) {
    this.collar = 'V-neck';
    this.size = 'Large';
    this.print = 'Plaid';
  }
}
var button_down = new Shirt1();
console.log(button_down);




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
class DogBreed1 {
  constructor(breed, temperament, coat) {
    this.breed = breed;
    this.temperament = temperament;
    this.coat = coat;
  }
}
var beagle = new DogBreed1('Beagle', 'Gentle', 'Short, hard coat');
var husky = new DogBreed1('Husky', 'Alert', 'Thick, dense coat');

console.log(beagle);
console.log(husky);

// Prompt 2: Snack

class SnackFood1 {
  constructor(name, calorieCount, hasNuts) {
    this.name = name;
    this.calorieCount = calorieCount;
    this.hasNuts = hasNuts;
  }
}
var yummyNoNutty = new SnackFood1('Yummy No-Nutty: Dark', 380, 'Does not contain nuts!');
var nuttyMilkBar = new SnackFood1('Nutty Milk Bar', 460, 'Contains nuts!');

console.log(yummyNoNutty);
console.log(nuttyMilkBar);

// Prompt 3: Shirt

class Shirt2 {
  constructor(style, size, color) {
    this.style = style;
    this.size = size;
    this.color = color;
  }
}
var mensVee = new Shirt2('V-neck', 'Medium', 'Black');
var mensDress = new Shirt2('Dress Shirt', 'Large', 'Navy');

console.log(mensVee);
console.log(mensDress);
