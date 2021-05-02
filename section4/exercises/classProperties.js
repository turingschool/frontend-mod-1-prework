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

// Prompt 2: Snack

// Prompt 3: Shirt

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
    this.cost = 1500;
    this.type = "Bull";
    this.cute = true;
  }
}
var home = new Dog();
console.log(home)
// Prompt 2: Snack
class Snack {
  constructor() {
    this.name = "KitKat";
    this.cost = 2.50;
    this.size = "king";
  }
}
var candy = new Snack();
console.log(candy)
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.cost = 225;
    this.brand = "Supreme";
    this.size = "XL";
  }
}
var outfit = new Shirt();
console.log(outfit)
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
class Pug {
  constructor(age , dogsize , date ) {
    this.type = age;
    this.size = dogsize;
    this.date = date;
  }
}var pugPurchase = new Pug(1,"small","01/01/2020")
console.log(pugPurchase)
var pugBirthday =  new Pug(2,"Medium","06/13/2020")
console.log(pugBirthday)
// Prompt 2: Snack
class Butterfinger {
  constructor(cost, size, qnt){
  this.cost = cost;
  this.barsize = size;
  this.quantity = qnt;
 }
}var barPurchase = new Butterfinger(15,"king",3)
console.log(barPurchase)
var barSell = new Butterfinger(20,"king",2)
console.log(barSell)
// Prompt 3: Shirt
class Gucci {
  constructor(cost , size, color) {
    this.cost = cost;
    this.size = size;
    this.color = color;
  }
}var shirtPurchase = new Gucci(450,'XL',"Red")
console.log(shirtPurchase)
var shirtSell = new Gucci(850,'XL','Red')
console.log(shirtSell)
