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
  //Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}
var poodle = new Dog();
var bullDog = new Dog();
console.log(poodle);
console.log(bullDog);

// Prompt 2: Snack
class Snack {
}
  var chips = new Snack();
  var candy = new Snack();
console.log(chips);
console.log(candy);


// Prompt 3: Shirt
class Shirt {
}
  var myShirt = new Shirt();
  var polo = new Shirt();
  console.log(myShirt);
  console.log(polo);




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
  name: "Max";
  age: 3;
  color: "brown";
}
}
var poodle = new Dog();
console.log(poodle);



// Prompt 2: Snack
class Snack{
constructor(){
  name: "Chippy";
  flavor: "apple";
  isHealthy: "false";
}

}
var candy = new Snack();
  console.log(candy);

// Prompt 3: Shirt
class Shirt {
constructor(){
  buttons: 1;
  owner: "Max";
  isNew: true;
}

}
var poloShirt = new Shirt();
console.log(poloShirt);
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
  constructor(name, age, color){
  this.name = name;
  this.age = age;
  this.color = color;
}
}
var poodle = new Dog("Max", 3, "brown");
var bullDog = new Dog("Kevin", 2, "white");
console.log(poodle);
console.log(bullDog);
// Prompt 2: Snack
class Snack {
constructor(name, flavor, isHealthy){
  this.name = name;
  this.flavor = flavor;
  this.isHealthy = isHealthy;
}
}
var candy = new Snack("Mint", "Apple", false);
var chocolate = new Snack("Milky Way", "Chocolate", true);
console.log(candy);
console.log(chocolate);
// Prompt 3: Shirt
class Shirt {
constructor(buttons, owner, isNew){
  this.buttons = buttons;
  this.owner = owner;
  this.isNew = isNew;
}
}
var poloShirt = new Shirt(1, "Max", true);
var myShirt = new Shirt(2, "Leo", false);
console.log(poloShirt);
console.log(myShirt);
