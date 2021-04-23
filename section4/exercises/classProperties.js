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

var bigDog = new Dog();
console.log(bigDog);

var smallDog = new Dog();
console.log(bigDog);

// Prompt 2: Snack

class Snack {

}

var salty = new Snack();
console.log(salty);

var sweet = new Snack();
console.log(sweet);

// Prompt 3: Shirt

class Shirt {

}

var clean = new Shirt();
console.log(clean);

var dirty = new Shirt();
console.log(dirty);

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
  this.weight = weight;
  this.breed = breed;
  this.color = color;
  }
}

var myDog = new Dog
console.log(myDog);

var neighborDog = new Dog();
console.log(neighborDog);

// Prompt 2: Snack

class Snack {
constuctor(){
  this.type = type;
  this.cost = cost;
  this.size = size;
  }
}

var onTheGo = new Snack();
console.log(onTheGo);

var atHome = new Snack();
console.log(atHome);


// Prompt 3: Shirt

class Shirt {
constuctor(){
  this.type = type;
  this.size = size;
  this.color = color;
  }
}

var clean = new Shirt();
console.log(clean);

var dirty = new Shirt();
console.log(dirty);

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
constructor(weight, breed, color) {
  this.weight = weight;
  this.breed = breed;
  this.color = color;
  }
}

var myDog = new Dog("53 pounds", "Border Collie", "black");
console.log(myDog);

var neighborDog = new Dog("30 pounds", "mutt", "tan");
console.log(neighborDog);

// Prompt 2: Snack

class Snack {
constructor(type, cost, size) {
  this.type = type;
  this.cost = cost;
  this.size = size;
  }
}

var onTheGo = new Snack("Cookie", "6.99", "24 ounces");
console.log(onTheGo);
// Question- both of these object instances run but they show differently with the
// two different ways that I entered the cost. which way is correct?
var atHome = new Snack("Popcorn", 2.75, "1 pound");
console.log(atHome);

// Prompt 3: Shirt

class Shirt {
constructor(type, size, color) {
  this.type = type;
  this.size = size;
  this.color = color;
  }
}

var hangingOut = new Shirt("tshirt", "medium", "blue");
console.log(hangingOut);

var professional = new Shirt("blouse", "small", "pink");
console.log(professional);
