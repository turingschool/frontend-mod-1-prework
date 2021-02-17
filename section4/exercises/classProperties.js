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

var gsp = new Dog();
var goldenRetriever = new Dog();

console.log(gsp);
console.log(goldenRetriever);

// Prompt 2: Snack
class Snack {
}

var goldFish = new Snack();
var grapes = new Snack();

console.log(goldFish);
console.log(grapes);

// Prompt 3: Shirt
class Shirt {

}

var blouse = new Shirt();
var buttonUp= new Shirt();

console.log(blouse);
console.log(buttonUp);

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
class DogTwo {
  constructor() {
    this.age = 3;
    this.name = "Copper";
    this.type = "gsp";
  }
}

var gsp = new DogTwo();
var goldenRetriever = new DogTwo();

console.log(gsp);
console.log(goldenRetriever);

// Prompt 2: Snack
class SnackTwo {
  constructor() {
    this.serving = 12;
    this.texture = "crunchy";
    this.flavor = "salty";
  }
}

var goldFish = new SnackTwo();
var grapes = new SnackTwo();

console.log(goldFish);
console.log(grapes);

// Prompt 3: Shirt
class ShirtTwo {
  constructor() {
    this.style = "long sleeves";
    this.color = "orange"
    this.size = 4
  }
}

var blouse = new ShirtTwo();
var buttonUp= new ShirtTwo();

console.log(blouse);
console.log(buttonUp);

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
  constructor(age, name, type) {
    this.age = age;
    this.name = name;
    this.type = type;
  }
}

var gsp = new DogThree (3, 'Copper', 'GSP');
var goldenRetriever = new DogThree (2, 'Kona', 'Golden Retriever');

console.log(gsp);
console.log(goldenRetriever);

// Prompt 2: Snack
class SnackThree {
  constructor(servingSize, texture, flavor) {
    this.serving = servingSize;
    this.texture = texture;
    this.flavor = flavor;
  }
}

var goldFish = new SnackThree(15, "crunchy", "salty");
var grapes = new SnackThree(12, "squishy", "sweet");

console.log(goldFish);
console.log(grapes);

// Prompt 3: Shirt
class ShirtThree {
  constructor(style, color, size) {
    this.style = style;
    this.color = color;
    this.size = size;
  }
}

var blouse = new ShirtThree("tunic", "white", 4);
var buttonUp= new ShirtThree("long sleeves", "blue","Large");

console.log(blouse);
console.log(buttonUp);
