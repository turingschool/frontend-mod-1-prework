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
//I'm kind of confused as to where the variable should go. Inside the class? I don't know if this is correct.
//We aren't supposed to use the constructor() here are we?
class Dog {}
var arya = new Dog();
var layla = new Dog();
console.log(arya);
console.log(layla);


// Prompt 2: Snack
class Snack {}
var chips = new Snack();
var yogurt = new Snack();
console.log(chips);
console.log(yogurt);
// Prompt 3: Shirt
class Shirt {}
var workoutShirt = new Shirt();
var sleepShirt = new Shirt();
console.log(workoutShirt);
console.log(sleepShirt);
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
class MyDog {
  constructor(breed, weightInPounds, color) {
    this.breed = "Pitbull";
    this.weightInPounds = 74;
    this.color = "tawny";
  }
}
var arya = new MyDog();
console.log(arya);
// Prompt 2: Snack
class MySnack {
  constructor(brand, flavor, type) {
    this.brand = "Cheetos";
    this.flavor = "Flaming Hot Lime";
    this.type = "chip";
  }
}
var chip = new MySnack();
console.log(chip);
// Prompt 3: Shirt
class MyShirt {
  constructor(color, size, fabric) {
    this.color = "green";
    this.size = "small";
    this.fabric = "tri-blend";
  }
}
var sweatshirt = new MyShirt();
console.log(sweatshirt);
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
class Doggy {
  constructor(breed, weightInPounds, color) {
    this.breed = breed;
    this.weightInPounds = weightInPounds;
    this.color = color;
  }
}
var myPet = new Doggy("Pitbull", 74, "tawny");
console.log(myPet);

// Prompt 2: Snack
class BestSnack {
  constructor(brand, flavor, amount) {
    this.brand = brand;
    this.flavor = flavor;
    this.amount = amount;
  }
}
var cookies = new BestSnack("Tollhouse", "chocolate chip", 4);
console.log(cookies);

// Prompt 3: Shirt
class LeShirt {
  constructor(color, size, fabric) {
    this.color = color;
    this.size = size;
    this.fabric = fabric;
  }
}
var favSweatshirt = new LeShirt("green", "small", "tri-blend");
console.log(favSweatshirt);
