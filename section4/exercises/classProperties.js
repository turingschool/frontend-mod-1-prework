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

};

var eskimo = new Dog();
var akita = new Dog();

console.log(eskimo);
console.log(akita);
// Prompt 2: Snack
class Snack {

};

var banana = new Snack();
var apple = new Snack();

console.log(banana);
console.log(apple);
// Prompt 3: Shirt
class Shirt {

};

var color = new Shirt();
var size = new Shirt();

console.log(color);
console.log(size);
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
    this.name = "bob";
    this.age = 12;
    this.color = "brown";
  }
}

var eskimo = new Dog ();
console.log(eskimo);
// Prompt 2: Snack
class Snack {
  constructor(){
    this.name = "Banana";
    this.color = "yellow";
    this.type = "Fruit";
  }
}

var banana = new Snack ();
console.log(banana);
// Prompt 3: Shirt
class Shirt {
  constructor(){
    this.brand = "Nike";
    this.color = "yellow";
    this.type = "soccer jersey";
  }
}

var nike = new shirt ();
console.log(nike);

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
  constructor(nam,age,col){
  this.name = nam;
  this.age = age;
  this.color = col;
  }
}

var peper = new Dog ("Peper",12,"brown");
console.log(peper);
var jorge = new Dog ("Jorge", 4, "white mixed golden");
console.log(jorge);
// Prompt 2: Snack
class Snack {
  constructor(nam,typ,col){
  this.name = nam;
  this.type = typ;
  this.color = col;
  }
}

var apple = new Snack ("apple","fruit","red");
console.log(apple);
var hershey = new Snack ("hershey", "junk food", "brown");
console.log(hershey);

// Prompt 3: Shirt

class Shirt {
  constructor(sz,typ,col){
  this.size = sz;
  this.type = typ;
  this.color = col;
  }
}

var nike = new Shirt ("M","long sleeve","purple");
console.log(nike);
var adidas = new Shirt ("S", "short sleeve", "black");
console.log(adidas);
