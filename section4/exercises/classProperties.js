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
};
let dog1 = new Dog();
console.log(dog1);
let dog2 = new Dog();
console.log(dog2);

// Prompt 2: Snack
class Snack {
};
let snack1 = new Snack();
console.log(snack1);
let snack2 = new Snack();
console.log(snack2)

// Prompt 3: Shirt
class Shirt {
};
let shirt1 = new Shirt();
console.log(shirt1);
let shirt2 = new Shirt();
console.log(shirt2)

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
  constructor(age, breed, color) {
    this.age = 10;
    this.breed = "Siberian Husky";
    this.color = "Black";
  }
};
let dog3 = new Doggy
console.log(dog3)

// Prompt 2: Snack
class DeliciousSnack {
  constructor(type, origin, amount) {
    this.type = "Candy"
    this.origin = "7-11"
    this.amount = 3
  }
};
let snickers = new DeliciousSnack;
console.log(snickers)


// Prompt 3: Shirt
class BeautifulShirt {
  constructor(color, size, maker) {
    this.color = "Blue";
    this.size = "Medium";
    this.maker = "Gucci";
  }
};
let shirt3 = new BeautifulShirt
console.log(shirt3)


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

class LovingDog {
  constructor(age, breed, color) {
    this.age = age;
    this.breed = breed;
    this.color = color;
  }

};
let dog4 = new LovingDog(4, "Great Pyrenees", "White");
console.log(dog4);
let dog5 = new LovingDog(2, "German Shepard", "Brown");
console.log(dog5)

// Prompt 2: Snack

class NutriousSnack {
  constructor(type, origin, amount) {
    this.type = type;
    this.origin = origin;
    this.amount = amount;
  }
};
let banana = new NutriousSnack("Fruit", "Shopper's", 10);
console.log(banana);
let pretzel = new NutriousSnack("Bread", "King Soopers", 4);
console.log(pretzel);

// Prompt 3: Shirt

class StylishShirt {
  constructor(color, size, maker) {
    this.color = color;
    this.size = size;
    this.maker = maker;
  }
};
let shirt4 = new StylishShirt("Green", "Medium", "Gap");
console.log(shirt4);
let shirt5 = new StylishShirt("Red", "Large", "Old Navy");
console.log(shirt5);
