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
//class Dog. Object instances: labrador,shepard

var dogs = ["labrador", "shepard"];

console.log(dogs)

// Prompt 2: Snack
//class Snack. Object instances: pretzels, chips

var snacks = ["pretzels", "chips"]

console.log(snacks)

// Prompt 3: Shirt
//class Shirt. Object instances: long sleeve, button up

var shirts = ["long sleeve", "button up"]

console.log(shirts)

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
//class Dog. Object instances: labrador, basset hound

class Dog{
constructor(){
this.color = "brown";
this.weight = 70;
this.age = 5;
}
}

var labrador = new Dog();
console.log(labrador);

// Prompt 2: Snack
// class Snack. Object instances: pretzels, chips
 class Snack{
constructor(){
  this.size = "large";
  this.type = "salty";
  this.healthy= false;
}
}
var pretzels = new Snack();
console.log(pretzels);

// Prompt 3: Shirt
// class Shirt. Object instances: long sleeve, button up
 class Shirt{
constructor(){
  this.size = "medium";
  this.type = "dress shirt";
this.color = "blue";
}
}
var buttonUp = new Shirt();
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
// class Dog. Object instances: labrador, basset hound

{
  class Dog {
constructor (color, weight, age){
this.color = color;
this.weight = weight;
this.age = age;
}
}
var bassetHound = new Dog("black", 50, 10 );
console.log(bassetHound);

var labrador = new Dog ("brown", 70, 5);
console.log(labrador);
}
// Prompt 2: Snack
// class Snack. Object instances: pretzels, terra chips

{
  class Snack{
constructor(size, type, healthy){
  this.size = size;
  this.type = type;
  this.healthy= healthy;
}
}
var pretzels = new Snack ("large", "salty", false);
console.log(pretzels);
var terraChips = new Snack ("small", "veggie", true);
console.log(terraChips);
}
// Prompt 3: Shirt
// class Shirt. Object instances: long sleeve, button up

{
  class Shirt{
constructor(size, type, color){
  this.size = size;
  this.type = type;
this.color = color;
}
}
var buttonUp = new Shirt("large", "flannel", "green");
console.log(buttonUp);
var longSleeve = new Shirt("xlarge", "cotton", "blue");
console.log(longSleeve);
}
