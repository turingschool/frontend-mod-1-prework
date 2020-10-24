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
  // You do not need any properties at this time!!

// Prompt 1: Dog
// Class: Dog. Object
// Instances: poodle, doodle, pointer.
// Properties: name, isPureBreed, age, weight.

// Write a class skeleton
// You do not need any properties at this time!!
class Dog {
 //empty class
}

// Create 2 object instances and store in variables
var poodle = new Dog();
var doodle = new Dog()

// Log each variable to the console.
console.log(poodle); //logs Dog () since class is empty
console.log(doodle); //logs Dog () since class is empty

// Prompt 2: Snack
// Class: Snack.
// Object Instances: iceCream, chips, protienBar.
// Properties: flavor, inStock, count.

// Write a class skeleton
// You do not need any properties at this time!!
class Snack {
  // empty class
}

// Create 2 object instances and store in variables
var iceCream = new Snack();
var protienBar = new Snack()

// Log each variable to the console.
console.log(iceCream); //logs Snack () since class is empty
console.log(protienBar); //logs Snack () since class is empty

// Prompt 3: Shirt
// Class: Shirt.
// Object Instances: polo, tShirt
// Properties: color, style, isClean.

class Shirt {
  // empty class
}

// Create 2 object instances and store in variables
var polo = new Shirt();
var tShirt = new Shirt();

// Log each variable to the console.
console.log(polo); //logs Shirt () since class is empty
console.log(tShirt); //logs Shirt () since class is empty

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
// Class: Dog. Object
// Instances: poodle, doodle, pointer.
// Properties: name, isPureBreed, age, weight.

// Write a class skeleton
// Add a constructor method
// Assign 3 properties (names and values of your choice)
class Dog2 {
 constructor() {
   this.name = "Bessie";
   this.breed = "Poodle";
   this.isPureBreed = true;
   this.age = "7 years";
   this.weight = "35 lbs";
 }
}

// Create an object instance and store in variable
var poodle = new Dog2();

// Log that variable to the console.
console.log(poodle);

// Prompt 2: Snack
// Class: Snack.
// Object Instances: iceCream, chips, protienBar.
// Properties: flavor, inStock, amount.

class Snack2 {
 constructor() {
   this.flavor = "Chocolate";
   this.inStock = true;
   this.amount = "5 gallons";
 }
}

// Create an object instance and store in variable
var iceCream = new Snack2();

// Log that variable to the console.
console.log(iceCream);

// Prompt 3: Shirt
// Class: Shirt.
// Object Instances: polo, tShirt
// Properties: color, style, isClean.

class Shirt2 {
 constructor() {
   this.color = "green";
   this.style = "business casual";
   this.isClean = true;
 }
}

// Create an object instance and store in variable
var polo = new Shirt2();

// Log that variable to the console.
console.log(polo);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)

// Prompt 1: Dog
// Class: Dog. Object
// Instances: poodle, doodle, pointer.
// Properties: name, isPureBreed, age, weight.

// Write a class skeleton
// Add a constructor method
// Declare 3 parameters in the consutructor
// Assign 3 properties (names and values of your choice)
class Dog3 {
 constructor(name, breed, isPureBreed, age, weight) {
   this.name = name;
   this.breed = breed;
   this.isPureBreed = isPureBreed;
   this.age = age;
   this.weight = weight;
 }
}

// Create 2 object instances and store in variables (passing in different arguments)
var poodle = new Dog3("Bessie", "poodle", true, "7 years", "35lbs");
var doodle = new Dog3("Lilly", "doodle", false, "3 months", "15lbs");

// Log that variable to the console.
console.log(poodle);
console.log(doodle);


// Prompt 2: Snack
// Class: Snack.
// Object Instances: iceCream, chips, protienBar.
// Properties: flavor, inStock, amount.

// Write a class skeleton
// Add a constructor method
// Declare 3 parameters in the consutructor
// Assign 3 properties (names and values of your choice)
class Snack3 {
 constructor(flavor, inStock, amount) {
   this.flavor = flavor;
   this.inStock = inStock;
   this.amount = amount;
 }
}

// Create 2 object instances and store in variables (passing in different arguments)
var iceCream = new Snack3("Vanilla", true, "100 scoops");
var protienBar = new Snack3("Peanut Butter", false, "10 bars");

// Log that variable to the console.
console.log(iceCream);
console.log(protienBar);

// Prompt 3: Shirt
// Class: Shirt.
// Object Instances: polo, tShirt
// Properties: color, style, isClean.

// Write a class skeleton
// Add a constructor method
// Declare 3 parameters in the consutructor
// Assign 3 properties (names and values of your choice)
class Shirt3 {
 constructor(color, style, isClean) {
   this.color = color;
   this.style = style;
   this.isClean = isClean;
 }
}

// Create 2 object instances and store in variables (passing in different arguments)
var polo = new Shirt3("orange", "dress", true);
var tShirt = new Shirt3("yellow", "casual", false);

// Log that variable to the console.
console.log(polo);
console.log(tShirt);
