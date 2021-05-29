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
  // You do not need any properties at this time!!

// Prompt 1: Dog

class Dog {
}
var labradoodle = new Dog();
var berneseMountain = new Dog();

console.log(labradoodle);
console.log(berneseMountain);

// Prompt 2: Snack

class Snack {
}
var doritos = new Snack();
var sourPatchKids = new Snack();

console.log(doritos);
console.log(sourPatchKids);

// Prompt 3: Shirt

class Shirt{
}
var shortSleeve = new Shirt();
var longSleeve = new Shirt();

console.log(shortSleeve);
console.log(longSleeve);


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
class LargeDog{
  constructor(){
    this.name = "Yoder";
    this.weight = 80;
    this.breed = "Colorado Mountain Dog";
  }
}

var myPet = new LargeDog();
console.log(myPet);

// Prompt 2: Snack

class SaltySnack{
  constructor(){
    this.name = "peanuts";
    this.calories = 200;
    this.isSalty = true;
  }
}
var mySnack = new SaltySnack();
console.log(mySnack);

// Prompt 3: Shirt

class FavoriteShirt{
  constructor(){
    this.style = "T Shirt";
    this.hasGraphics = false;
    this.size = "XL";
  }
}
var myShirt = new FavoriteShirt();
console.log(myShirt)

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
class UserDog{
  constructor(breed,weight,friendly,name){
    this.breed = breed;
    this.weight = weight;
    this.friendly = friendly;
    this.name = name
  }
}
var bopi = new UserDog("Teacup Maltese", 5, true, "Bopi");
var gizmo = new UserDog("Yorkshire Terrier", 12, true);

console.log (bopi);
console.log(gizmo);

// Prompt 2: Snack

class UserSnack{
  constructor(name, isSalty, calories){
    this.name = name;
    this.isSalty = isSalty;
    this.calories = calories;
  }
}
var carrots = new UserSnack("carrots", false, 20);
var chips = new UserSnack("chips", true, 250);

console.log(carrots);
console.log(chips);

// Prompt 3: Shirt

class UserShirt{
  constructor(style,isCozy,price){
    this.style = style;
    this.isCozy = isCozy;
    this.price = price;
  }
}
var buttonDown = new UserShirt("Formal Button Down",false,"$20")
var sweatshirt = new UserShirt("Grey Sweatshirt", true, "$40")

console.log(buttonDown)
console.log(sweatshirt)
