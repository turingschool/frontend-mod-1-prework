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
class Dog{}

var dog1 = new Dog();
console.log(dog1);

var dog2 = new Dog();
console.log(dog2);
// Prompt 2: Snack
class Snack {}

var snack1 = new Snack;
var snack2 = new Snack;
console.log(snack1);
console.log(snack2);
// Prompt 3: Shirt
class Shirt {}

var shirt1 = new Shirt;
var shirt2 = new Shirt;

console.log(shirt1);
console.log(shirt2);

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
    this.name = 'Kumo';
    this.age = 1;
    this.breed = 'Shiba Inu';
  }
}
var dog1 = new Dog();
console.log(dog1);

// Prompt 2: Snack
class Snack {
  constructor(){
    this.name = "Cheetos";
    this.isSweet = false;
    this.isMessy = true;
  }
}
var snack1 = new Snack();
console.log(snack1);
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.isShortSleeve = true;
    this.color = 'blue';
    this.fabric = 'cotton';
    }
}
var shirt1 = new Shirt();
console.log(shirt1);
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
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
  }
}
var dog1 = new Dog('Kumo', 'Shiba Inu', 1);
console.log(dog1);
var dog2 = new Dog('Hachi', 'Shepherd mix', 10);
console.log(dog2);
// Prompt 2: Snack
class Snack {
  constructor(name, sweet, calories) {
    this.name = name;
    this.sweet = sweet;
    this.calories = calories;
  }
}
var snack1 = new Snack('Cheetos', false, 200);
console.log(snack1);
var snack2 = new Snack('Apple', true, 100);
console.log(snack2);
// Prompt 3: Shirt
class Shirt {
  constructor(color, size, type) {
    this.color = color;
    this.size = size;
    this.type = type;
  }
}
var shirt1 = new Shirt('red', 'L', 'Short Sleeve');
console.log(shirt1);
var shirt2 = new Shirt('grey', 'XL', 'Sweater');
console.log(shirt2);
