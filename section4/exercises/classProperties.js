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

var jackRussell1 = new Dog();
var poodle1 = new Dog();

console.log(jackRussell1);
console.log(poodle1);

// Prompt 2: Snack
class Snack {

}

var cake1 = new Snack();
var snickers1 = new Snack();

console.log(cake1);
console.log(snickers1);

// Prompt 3: Shirt
class Shirt {

}

var buttonUp1 = new Shirt();
var polo1 = new Shirt();

console.log(buttonUp1);
console.log(polo1);


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
  class Dog2 {
    constructor() {
      this.size = 'medium';
      this.color = 'white';
      this.age = 5;
    }
  }

  var jackRussell2 = new Dog2();
  console.log(jackRussell2);


  // Prompt 2: Snack
  class Snack2 {
    constructor() {
      this.flavor = 'chocolate';
      this.numberOfLayers = 7;
      this.baker = 'Susan';
    }
  }

  var cake2 = new Snack2();
  console.log(cake2);


  // Prompt 3: Shirt
  class Shirt2 {
    constructor() {
      this.color = 'red';
      this.material = 'cotton';
      this.size = 'small';
    }
  }

  var buttonUp2 = new Shirt2();
  console.log(buttonUp2);


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
  class Dog3 {
    constructor(size, color, ageInYears) {
      this.size = size;
      this.color = color;
      this.age = ageInYears;
    }
  }

  var jackRussell = new Dog3('medium', 'white', 5);
  var poodle = new Dog3('small', 'brown', 6)
  console.log(jackRussell);
  console.log(poodle);


  // Prompt 2: Snack
  class Snack3 {
    constructor(cakeFlavor, numberOfLayers, whoBaked) {
      this.flavor = cakeFlavor;
      this.numberOfLayers = numberOfLayers;
      this.baker = whoBaked;
    }
  }

  var weddingCake = new Snack3('vanilla', 5, 'Sally');
  var birthdayCake = new Snack3('chocolate', 4, 'Joe');
  console.log(weddingCake);
console.log(birthdayCake);

  // Prompt 3: Shirt
  class Shirt3 {
    constructor(color, material, size) {
      this.color = color;
      this.material = material;
      this.size = size;
    }
  }

  var buttonUp = new Shirt3('blue', 'cotton', 'large');
  var polo = new Shirt3('yellow', 'silk', 'medium');

  console.log(buttonUp);
  console.log(polo);
