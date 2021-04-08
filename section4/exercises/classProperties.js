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
var sheppard = new Dog();
var lab = new Dog();
console.log(sheppard,lab);
// Prompt 2: Snack
class Snack {

}
var cheetos = new Snack();
var cheezits = new Snack();
console.log(cheetos, cheezits);
// Prompt 3: Shirt
class Shirt {

}
var blackShirt = new Shirt();
var whiteShirt = new Shirt();
console.log(blackShirt, whiteShirt);
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
  constructor(lgth, frnd, iclr) {
    this.fur = lgth;
    this.friendly = frnd;
    this.eyeColor = iclr;
  }
}
var bullDog = new Dogs("short", true, "green");
console.log(bullDog);
// Prompt 2: Snack
class Snacks {
  constructor(bag, salty, sweet) {
    this.bagged = bag;
    this.salty = salty;
    this.sweet = sweet;
  }
}
var chips = new Snacks(true, true, false);
console.log(chips);
// Prompt 3: Shirt
class Shirts {
  constructor(clr, sze, sleev) {
    this.color = clr;
    this.size = sze;
    this.sleeves = sleev;
  }
}
var tShirt = new Shirts("black", "Large", "long");
console.log(tShirt);
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
class Dogss {
  constructor(lgth, frnd, iclr) {
    this.fur = lgth;
    this.friendly = frnd;
    this.eyeColor = iclr;
  }
}
var bullDog = new Dogss("short", true, "green");
console.log(bullDog);
var goldLab = new Dogss("medium", true, "blue");
console.log(goldLab);
// Prompt 2: Snack
class Snackss {
  constructor(bag, salty, sweet) {
    this.bagged = bag;
    this.salty = salty;
    this.sweet = sweet;
  }
}
var chips = new Snackss(true, true, false);
console.log(chips);
var candy = new Snackss(true, false, true);
console.log(candy);
// Prompt 3: Shirt
class Shirtss {
  constructor(clr, sze, sleev) {
    this.color = clr;
    this.size = sze;
    this.sleeves = sleev;
  }
}
var tShirt = new Shirtss("black", "Large", "long");
console.log(tShirt);
var polo = new Shirtss("blue", "medium", "short");
console.log(polo);
