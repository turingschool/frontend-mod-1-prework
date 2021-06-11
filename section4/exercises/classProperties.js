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
var shiba = new Dog();
var poodle = new Dog();
console.log(shiba);
console.log(poodle);

// Prompt 2: Snack
class Snack {

}
var chips = new Snack;
var popcorn = new Snack;
console.log(chips);
console.log(popcorn);

// Prompt 3: Shirt
class Shirt{

}
var vneck = new Shirt;
var polo = new Shirt;
console.log(vneck);
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
class Dog1 {
  constructor(){
    this.breed = "golden retriever";
    this.size = "large";
    this.hairType = "long"
  }
}
var woof = new Dog1();
console.log(woof);

// Prompt 2: Snack
class Snack1 {
  constructor(){
    this.flavor = "sweet";
    this.color = "red";
    this.shape = "round"
  }
}
var gummy = new Snack1;
console.log(gummy);

// Prompt 3: Shirt
class Shirt1 {
  constructor() {
    this.material = "cotton";
    this.sleeve = "short";
    this.season = "summer"
  }
}
var nike = new Shirt1;
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
class Dog2 {
  constructor(breed, size, hair) {
    this.dogBreed = breed;
    this.bodySize = size;
    this.hairType = hair;
  }
}
var pewpew = new Dog2("chiwawa", "small","short");
var dewdew = new Dog2("pug", "medium", "short")
console.log(pewpew);
console.log(dewdew);

// Pro mpt 2: Snack
class Snack2 {
  constructor(flavor, texture, price){
    this.snackFlavor = flavor;
    this.snackTexture = texture;
    this.snackPrice = price;
  }
}
var icecream = new Snack2("sweet", "soft", 2)
var chips = new Snack2("salty", "hard", 1.5)
console.log(icecream);
console.log(chips);

// Prompt 3: Shirt
class Shirt2 {
  constructor(brand, material, season){
    this.shirtBrand = brand;
    this.shirtMaterial = material;
    this.shirtSeason = season;
  }
}
var shirtOne = new Shirt2("Vans", "cotton", "summer");
var shirtTwo = new Shirt2("Valentino", "silk", "spring");
console.log(shirtOne);
console.log(shirtTwo);
