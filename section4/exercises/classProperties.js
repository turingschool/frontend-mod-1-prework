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
class Doggy{

};

var weimaraner = new Doggy();
console.log(weimaraner);

var germanShepherd = new Doggy();
console.log(germanShepherd);

// // Prompt 2: Snack
class Snack {

};

var oreos = new Snack();
console.log(oreos);

var chips = new Snack();
console.log(chips);

// // Prompt 3: Shirt
class Shirt {

}

var tshirt = new Shirt();
console.log(tshirt);

var buttonUp = new Shirt();
console.log(buttonUp);

// //-------------------
// // Part 2: Properties
// //-------------------
//
// // For each prompt:
//   // Write a class skeleton
//   // Add a constructor method
//   // Assign 3 properties (names and values of your choice) to each class
//   // Create an object instance and store in variable
//   // Log that variable to the console.
//
// // Prompt 1: Dog
class CarryableDog {
  constructor(furColor, barkVolume, temperment){
    this.color = furColor;
    this.loud = barkVolume;
    this.temperment = temperment;
  }
}

var chihuahua = new CarryableDog("varies", true, ["Charming", "Graceful", "Sassy"]);
console.log(chihuahua);


// // Prompt 2: Snack
class MovieSnack {
  constructor(amount, shareable, toppings){
    this.amount = amount;
    this.shareable = shareable;
    this.toppings = toppings;
  }
}

var popcorn = new MovieSnack("bucket", true, ["butter", "salt", "cheese"]);
console.log(popcorn);


// // Prompt 3: Shirt
class DateShirt {
  constructor(color, sparkles, neckline){
    this.color = color;
    this.sparkles = sparkles;
    this.neckline = neckline;
  }
}

var croptop = new DateShirt("black", false, "scoop neck");
console.log(croptop);

//
// //-------------------
// // Part 3: Dynamic Properties
// //-------------------
//
// // For each prompt:
//   // Write a class skeleton
//   // Add a constructor method
//   // Declare 3 parameters in the consutructor
//   // Assign 3 properties (names and values of your choice), using the parameters
//   // Create 2 object instances and store in variables (passing in different arguments)
//   // Log those variables to the console.
//
// // Prompt 1: Dog
class DogBreed {
  constructor(furLength, averageWeight, temperment){
    this.fur = furLength;
    this.avgWeight = averageWeight;
    this.temperment = temperment;
  }
}

var weimaraner = new DogBreed("short", 75, ["Friendly", "Fearless", "Obedient"]);
console.log(weimaraner);

var germanShepherd = new DogBreed("medium", 70, ["Confident", "Courageous", "Smart"]);
console.log(germanShepherd);

// // Prompt 2: Snack
class SnackAttack {
  constructor(crunchLevel, servingSize, sweetVsSalty){
    this.crunch = crunchLevel;
    this.servingSize = servingSize;
    this.sweet = sweetVsSalty;
  }
}

var oreos = new SnackAttack("medium", 2, true);
console.log(oreos);

var chips = new SnackAttack("extra crunchy", 18, false);
console.log(chips);


// // Prompt 3: Shirt
class EverydayShirt {
  constructor(fabric, comfortable, numOfButtons){
    this.fabric = fabric;
    this.comfort = comfortable;
    this.buttons = numOfButtons;
  }
}

var tshirt = new EverydayShirt("cotton", true, 0);
console.log(tshirt);

var buttonUp = new EverydayShirt("silk", false, 6);
console.log(buttonUp);
