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
var alice = new Dog();
var shae = new Dog();

console.log(alice);
console.log(shae);


// Prompt 2: Snac
class Snack {}
var chips = new Snack();
var dip = new Snack();

console.log(chips);
console.log(dip);


// Prompt 3: Shirt
class Shirt {}
var buttonDown = new Shirt();
var tankTop = new Shirt();

console.log(buttonDown);
console.log(tankTop);



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
  constructor(){
    this.breed = "retriever";
    this.weight = 50;
    this.color = "red";
  }
}
var alice = new Dog2();
console.log(alice);

// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.taste = "salty";
    this.texture = "crunchy";
    this.brand = "Lays";
  }
}
var chips = new Snack2();
console.log(chips);

// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.color = "blue";
    this.style = "businessCasual";
    this.brand = "Target";
  }
}
var buttonDown = new Shirt2();
console.log(buttonDown);

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
  constructor(breed, weightInLbs, color){
    this.breed = breed;
    this.weight = weightInLbs;
    this.color = color;
  }
}
var alice = new Dog3("retriever", 50, "red");


console.log(alice);

// Prompt 2: Snack
class Snack3{
  constructor(taste, textureType, brand) {
    this.taste = taste;
    this.texture = textureType;
    this.brand = brand;
  }
}
var chips = new Snack3("salty", "crunchy", "Lays");
console.log(chips);

// Prompt 3: Shirt
class Shirt3{
  constructor(color, typeOfShirt, storeBrand) {
    this.color = color;
    this.style = typeOfShirt;
    this.brand = storeBrand;
  }
}
var buttonDown = new Shirt3("blue", "businessCasual", "Target");
console.log(buttonDown);
