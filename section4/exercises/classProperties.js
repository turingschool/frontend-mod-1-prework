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
var food = new Dog();
console.log(food);
var bark = new Dog();
console.log(bark);
// Prompt 2: Snack
class Snack{

};
var popcorn = new Snack();
console.log(popcorn);
var ice cream = new Snack();
console.log(ice cream);
// Prompt 3: Shirt
class Shirt {

};
var red = Shirt();
console.log(red);
var blue = Shirt();
console.log(blue);
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
  this.age = 4;
  this.color = "brown";
  this.breed = "Havanese";
 }
};
var brown = new Dog();
console.log(brown);

// Prompt 2: Snack
class Snack{
 constructor(){
  this.flavor = "butter";
  this.kernel = "corn";
  this.location = "movies";
 }
};
var butter = new Snack();
console.log(butter);

// Prompt 3: Shirt
class Shirt {
 constructor(){
  this.color = "red";
  this.size = "medium";
  this.sleeves = "short";
 }
};
var short = Shirt();
console.log(short);
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
 constructor(4, brown, Havanese){
  this.age = 4;
  this.color = "brown";
  this.breed = "Havanese";
 }
};
var food = new Dog(6, "red", "Pitbull");
console.log(food);
var bark = new Dog(8, "white", "Greyhound");
console.log(bark);
// Prompt 2: Snack
class Snack{
 constructor(butter, corn, movies){
  this.flavor = "butter";
  this.kernel = "corn";
  this.location = "movies";
 }
};
var butter = new Snack("cheddar", "almond", "home");
console.log(butter);
var yummy = new Snack("white cheddar", "ladyfinger", "park");
console.log(yummy);
// Prompt 3: Shirt
class Shirt {
 constructor(red, medium, short){
  this.color = "red";
  this.size = "medium";
  this.sleeves = "short";
 }
};
var short = Shirt("blue", "large", "long");
console.log(short);
var long = Shirt("orange", "small", "threequarter");
console.log(long);
