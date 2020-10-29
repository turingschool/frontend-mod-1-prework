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

  // Sorry I made a mistake. I did part 1 before reading to part 2. looks like I did more work on ! then needed.

// Prompt 1: Dog
class Dog {
  constructor() {
    this.size ="small";
    this.firType ="long";
  }
}

var amie = new Dog();
console.log(amie);

// Prompt 2: Snack
class Snack {
  constructor(sal, swet, prc) {
    this.satlty = sal;
    this.sweet = swet;
    this.price = prc;
  }
}

var chips = new Snack(true, false, "$0.75")
console.log(chips);
// Prompt 3: Shirt

class Shirt {
  constructor(slev, col, sz) {
    this.sleeve = slev;
    this.color = col;
    this.size = sz;
  }
}
var basketBallShirt = new Shirt("none","green", "large")
console.log(basketBallShirt);
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

class NewDog {
  constructor() {
    this.size ="small";
    this.firType ="long";
    this.mainFurColor ="Black"
  }
}

var amie = new NewDog();
console.log(amie);
// Prompt 2: Snack

class NewSnack {
  constructor(sal, swet, prc) {
    this.salty = sal;
    this.sweet = swet;
    this.price = prc;
  }
}

var chips = new NewSnack(true, false, "$0.75")
console.log(chips);

// Prompt 3: Shirt

class NewShirt {
  constructor(slev, col, sz) {
    this.sleeve = slev;
    this.color = col;
    this.size = sz;
  }
}
var basketBallShirt = new NewShirt("none","green", "large")
console.log(basketBallShirt);

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

class DogThree {
  constructor(fr, sz, col, nam) {
    this.fur = fr;
    this.size = sz;
    this.color = col;
    this.name = nam;
  }
}

var sammie = new DogThree("short", "small", "brown", "Sammie");
var rex = new DogThree("long", "large", "grey", "Rex");
console.log(sammie);
console.log(rex);

// Prompt 2: Snack

class SnackThree {
  constructor(nm, sal, swet, fil) {
    this.name = nm;
    this.salty = sal;
    this.sweet = swet;
    this.filling = fil;
  }
}

var doritos = new SnackThree("Doritos", true, false, "no");
console.log(doritos);
var snickers = new SnackThree("Snickers", false, true, "kinda of")
console.log(snickers);

// Prompt 3: Shirt

class ShirtThree {
  constructor(sz, col, pat) {
    this.size = sz;
    this.color = col;
    this.pattern = pat;
  }
}

var dressShirt = new ShirtThree("small", "Red", "Stripes");
var hipsterShirt = new ShirtThree("small", "red/black", "plad");

console.log(dressShirt);
console.log(hipsterShirt);
