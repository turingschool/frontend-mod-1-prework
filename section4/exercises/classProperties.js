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
var lolo = new Dog();
var pepe = new Dog();

console.log(lolo);
console.log(pepe);

// Prompt 2: Snack

class Snack {}
var guac = new Snack();
var chips = new Snack();

console.log(guac);
console.log(chips);

// Prompt 3: Shirt

class Shirt{}
var sleveless = new Shirt();
var polo = new Shirt();

console.log(sleveless);
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
class Dog0{
  constructor(){
    this.breed = "doberman";
    this.color = "black";
    this.heightInFt = "3 ft"
  }
}
var lolo = new Dog0();
console.log(lolo);

// Prompt 2: Snack
class Snack0 {
  constructor(){
    this.texture = "crispy";
    this.taste = "salty";
    this.isOrganic = false;
  }
}
var chips = new Snack0();
console.log(chips);

// Prompt 3: Shirt

class Shirt0 {
  constructor(){
    this.color = "white";
    this.size = "large";
    this.priceIn$ = 12.00
  }
}
var polo = new Shirt0();
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
  // Log those variables to the console.

// Prompt 1: Dog

class Dog1 {
  constructor(breed, color, heightInFt) {
    this.breed = breed;
    this.color = color;
    this.heightInFt = heightInFt;
  }
}
  var lolo = new Dog1("doberman", "black", 3);
  var pepe = new Dog1("golden", "brown", 2.5);

  console.log(lolo);
  console.log(pepe);


// Prompt 2: Snack

class Snack1 {
  constructor(texture, taste, isOrganic) {
    this.texture = texture;
    this.taste = taste;
    this.isOrganic = isOrganic;
  }
}
var guac = new Snack1("smooth", "tangy", true);
var chips = new Snack1("crispy", "salty", false);

console.log(guac);
console.log(chips);

// Prompt 3: Shirt

class Shirt1 {
  constructor(color, size, priceIn$) {
    this.color = color;
    this.size = size;
    this.priceIn$ = priceIn$;
  }
}
var sleveless = new Shirt1("blue", "xl", 15.00);
var polo = new Shirt1("white", "large", 12.00);

console.log(sleveless);
console.log(polo);
