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
class Animal {

}

var bringHome = new Animal();
var bathe = new Animal();

console.log(bringHome);
console.log(bathe);

// Prompt 2: Snack
class Food {

}
var popInMicrowave = new Food();
var addSalt = new Food();

console.log(popInMicrowave);
console.log(addSalt);

// Prompt 3: Shirt
class Dress {

}
var unbutton = new Dress();
var takeToCleaners = new Dress();

console.log(unbutton);
console.log(takeToCleaners);
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
class K9 {
  constructor() {
    this.age = 2;
    this.weight = "14 lbs";
    this.color = "golden";
  }
}

var loveLots = new K9();

console.log(loveLots);


// Prompt 2: Snack
class Kernel {
  constructor() {
    this.smell = "delicious";
    this.kernelCount = 4123;
    this.cookingTime = "143 seconds";
  }
}
var readyToEat = new Kernel();

console.log(readyToEat);


// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "small";
    this.price = 12.54;
    this.length = "flows to knees";
  }
}
var dryClean = new Shirt();

console.log(dryClean);



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
class Retriever {
  constructor(age, weight, color) {
    this.age = age;
    this.weight = weight;
    this.color = color;
  }
}

var takeToPark = new Retriever;(9, "38 lbs", "brown");
var cleanUp = new Retriever(4, "21 lbs", "white");

console.log(takeToPark);
console.log(cleanUp);

// Prompt 2: Snack
class Snack {
  constructor(smell, kernelCount, cookingTime) {
    this.smell = smell;
    this.kernelCount = kernelCount;
    this.cookingTime = cookingTime;
  }
}
var eatQuick = new Snack("delicious", 234, "184 seconds");
var throwAway = new Snack ("burnt", 21, "1938 seconds");

console.log(eatQuick);
console.log(throwAway);

// Prompt 3: Shirt
class Tank {
  constructor(size, price, length) {
    this.size = size;
    this.price = price;
    this.length = length;
  }
}
var buyNew = new Tank("tiny", 38.38, "floor length");
var wearOut = new Tank("extra large", 90.23, "stops at waste");

console.log(buyNew);
console.log(wearOut);
