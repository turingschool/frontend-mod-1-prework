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
class DogBreed {

}
var purchase = new DogBreed();
console.log(purchase);

var sell = new DogBreed();
console.log(sell);

// Prompt 2: Snack
class Snack {

}
var eat = new Snack ();
console.log(eat);

var throwOut = new Snack();
console.log(throwOut);

// Prompt 3: Shirt
class Shirt {

}
var clean = new Shirt();
console.log(clean);

var dirty = new Shirt();
console.log(dirty);
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
  constructor(){
    this.breed = "Poodle";
    this.costInDollars = 400;
    this.gender = "male";
  }
}
var sell = new Dog();
console.log(sell);

// Prompt 2: Snack
class Skittle {
  constructor() {
    this.color = "red";
    this.numEaten = 27;
    this.isNowSick = true;
  }
}
var reward = new Skittle();
console.log(reward);

// Prompt 3: Shirt
class WorkShirt {
  constructor() {
    this.material = "silk";
    this.brand = "Armani";
    this.priceInDollars = 78;
  }
}
var needToLaunder = new WorkShirt();
console.log(needToLaunder);
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
class MyDog {
  constructor(dogName, dogAge, dogGender) {
    this.name = dogName;
    this.age = dogAge;
    this.gender = dogGender;
  }
}
var firstDog = new MyDog ("Sugar", 18, "female");
console.log(firstDog);

// Prompt 2: Snack
class CurrentlyEating {
  constructor(snack, drink, nextSnack) {
    this.snack = snack;
    this.drink = drink;
    this.seconds = nextSnack;
  }
}
var midnightSnack = new CurrentlyEating ("popcorn", "wine", "ice cream");
console.log(midnightSnack);

// Prompt 3: Shirt
class SchoolUniformShirt {
  constructor(schoolColor, style, size) {
    this.color = schoolColor;
    this.style = style;
    this.size = size;
  }
}
var middleSchoolShirt = new SchoolUniformShirt ("blue", "polo", "small");
console.log(middleSchoolShirt);
