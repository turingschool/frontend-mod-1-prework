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
var banjo = new Dog();
var duke = new Dog();

console.log(banjo);
console.log(duke);

// Prompt 2: Snack
class Snack {

};
var salad = new Snack();
var sandwich = new Snack();

console.log(salad);
console.log(sandwich);

// Prompt 3: Shirt
class Shirt {

};
var dress = new Shirt();
var tank = new Shirt();

console.log(dress);
console.log(tank);

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
  constructor() {
    this.color = 'black';
    this.weight = 64;
    this.isFriendly = true;
    this.breed = 'Lab';
  }
}

var wilma = new Dog();
console.log(wilma);
// expected output: Dog { color: 'black', weight: 64, isFriendly: true, breed: 'Lab' }

// Prompt 2: Snack
class Snack {
  constructor() {
    this.isHealthy = true;
    this.calories = 150;
    this.expiration = '08/12/21';
  }
}

var clifBar = new Snack();
console.log(clifBar);
  //expected output: { isHealthy: true, calories: 150, expiration: '08/12/21' }

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.material = 'cotton';
    this.cost = 15;
    this.hasCollar = false;
    this.color = 'green';
  }
}

var mockeryTee = new Shirt();
console.log(mockeryTee);

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
class Dog {
  constructor(coatColor, weight, isTrained, breed) {
    this.color = coatColor;
    this.weight = weight;
    this.isFriendly = isTrained;
    this.breed = breed;
  }
}

var deets = new Dog('amber', 25, true, "Shiba Inu");
console.log(deets);
  // expected  output: Dog { color: 'amber', weight: 25, isFriendly: true, breed: 'Shiba Inu' }

var stout = new Dog('black', 80, false, "Pitbull");
console.log(stout);
  // expected output: Dog { color: 'black', weight: 80, isFriendly: false, breed: 'Pitbull' }

// Prompt 2: Snack
class Snack {
  constructor(isHealthy, calorieContent, expirationDate) {
    this.isHealthy = isHealthy;
    this.calories = calorieContent;
    this.expiration = expirationDate;
  }
}

var cookie = new Snack(false, 275, '1/4/2021');
console.log(cookie);
  // expected output: Snack { isHealthy: false, calories: 275, expiration: '1/4/2021' }

var lunaBar = new Snack(true, 100, '6/28/2022');
console.log(lunaBar);
  // expected output: Snack { isHealthy: true, calories: 100, expiration: '6/28/2022' }

// Prompt 3: Shirt
class Shirt {
  constructor(materialType, costToBuy, hasCollar, color) {
    this.material = materialType;
    this.cost = costToBuy;
    this.hasCollar = hasCollar;
    this.color = color;
  }
}

var golfPolo = new Shirt('polyester', 50, true, 'orange');
console.log(golfPolo);
  // expected output: Shirt { material: 'polyester', cost: 50, hasCollar: true, color: 'orange' }

var vailTee = new Shirt('cotton', 10, false, 'blue');
console.log(vailTee);
  // expected output: Shirt { material: 'cotton', cost: 10, hasCollar: false, color: 'blue' }
