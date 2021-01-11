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

var labrador = new Dog();
var chihuaha = new Dog();
console.log(labrador, chihuaha);
// Prompt 2: Snack
class Snack {

}

var goldfish = new Snack();
var cherry = new Snack();
console.log(goldfish);
console.log(cherry);

// Prompt 3: Shirt
class Shirt {

}

var longSleeve = new Shirt();
var collared = new Shirt();
console.log(longSleeve);
console.log(collared);

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
    this.weight = "44 pounds";
    this.sex = "female";
    this.color = "white";
  }
}

var husky = new Dog();
console.log(husky);


// Prompt 2: Snack
class Snack {
  constructor(color, brand, price) {
    this.color = "orange";
    this.brand = "Dole";
    this.price = "$.80 each";

  }
}

var tangerine = new Snack();
console.log(tangerine);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = "small";
    this.material = "polyester";
    this.style = "casual";
  }
}

var crewNeckTee = new Shirt();
console.log(crewNeckTee);



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
  constructor(weight, sex, color) {
    this.weight = weight;
    this.sex = sex;
    this.color = color;
  }
}

var labrador = new Dog("58 pounds", "female", "black");
console.log(labrador);

var chihuaha = new Dog("11 pounds", "male", "tan");
console.log(chihuaha);

// Prompt 2: Snack
class Snack {
  constructor(color, brand, price) {
    this.color = color;
    this.brand = brand;
    this.price = price;

  }
}

var goldfish = new Snack("orange", "Nabisco", "$1.99/ 12 oz.");
console.log(goldfish);

var cherry = new Snack("purple", "Oregon Natural Farms", "$4.99/ pound");
console.log(cherry)

// Prompt 3: Shirt
class Shirt {
  constructor(size,material,style) {
    this.size = size;
    this.material = material;
    this.style = style;
  }
}

var longSleeve = new Shirt("medium", "cotton", "casual");
console.log(longSleeve);


var collared = new Shirt("large","silk","formal");
console.log(collared);
