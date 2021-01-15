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

var dog1 = new Dog();
var dog2 = new Dog();
console.log(dog1, dog2);

// Prompt 2: Snack
class Snack {}
var chips = new Snack();
var cookie = new Snack();
console.log(chips, cookie);

// Prompt 3: Shirt
class Shirt {}
var tank = new Shirt();
var tee = new Shirt();
console.log(tank, tee);
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
class Doggy {
  constructor() {
    this.name = "Kylo";
    this.age = 2;
    this.breed = "Bulldog";
  }
}
var doggy1 = new Doggy();
console.log(doggy1);




// Prompt 2: Snack
class Snacky {
  constructor() {
    this.calories = 230;
    this.heated = true;
    this.type = "Pizza rolls";
  }
}
var snacky1 = new Snacky();
console.log(snacky1);

// Prompt 3: Shirt
class Shirty {
  constructor() {
    this.color = "brown";
    this.type = "t-shirt";
    this.price = 29.99;
  }
}
var shirty1 = new Shirty();
console.log(shirty1);

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
class Doggo {
  constructor(nm, yr, type) {
    this.name = nm;
    this.age = yr;
    this.breed = type;
  }
}
var doggo1 = new Doggo("Doug", 7, "Corgi");
var doggo2 = new Doggo("Kiya", 9, "Yorkie");
var doggo3 = new Doggo("Rambo", 2, "French Bulldog");
console.log(doggo1, doggo2, doggo3.age);


// Prompt 2: Snack
class Snacko {
  constructor(cal, ht, typ) {
    this.calories = cal;
    this.heated = ht;
    this.type = typ;
  }
}
var snacko1 = new Snacko(360, true, "Hot Pocket");
var snacko2 = new Snacko(200, false, "Chips");
var snacko3 = new Snacko(130, false, "Granola Bar");
console.log(snacko1, snacko2, snacko3.type);

// Prompt 3: Shirt
class Shirto {
  constructor(clr, typ, prc) {
    this.color = clr;
    this.type = typ;
    this.price = prc;
  }
}
var shirto1 = new Shirto("Brown", "long sleeve", 30.50);
var shirto2 = new Shirto("Pink", "tank top", 19.99);
var shirto3 = new Shirto("Green", "short sleeve", 24.99);
console.log(shirto1, shirto2, shirto3.price);
