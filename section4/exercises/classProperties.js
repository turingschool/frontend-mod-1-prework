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
class SmallDog {

}

var chihuahua = new SmallDog();
var pomeranian = new SmallDog();

console.log(chihuahua);
console.log(pomeranian);


// Prompt 2: Snack
class FruitSnack{

}
var fruitByTheFoot = new FruitSnack();
var gushers = new FruitSnack();

console.log(fruitByTheFoot);
console.log(gushers);


// Prompt 3: Shirt

class AnyShirt{

}

var shirtOne =  new AnyShirt();
var shirtTwo = new AnyShirt();

console.log(shirtOne);
console.log(shirtTwo);


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
class BigDog {
  constructor(){
    this.breed = "Pitbull";
    this.name = "Crunch";
    this.age = 1;
  }
}

var dogThree = new BigDog();
console.log(dogThree);
//
//

//
// Prompt 2: Snack
class FancySnack{
  constructor(){
    this.flavor = "BBQ";
    this.type = "Seaweed";
    this.quantity = 18;
  }
}

var snackThree = new FancySnack();
console.log(snackThree);
//
//
//
// Prompt 3: Shirt
//
class FancyShirt{
  constructor(){
    this.collar = "polo";
    this.color = "purple";
    this.company = "Ralph Lauren";
  }
}

var shirtOne = new FancyShirt ();
console.log(shirtOne);
//
//
//
// //-------------------
// // Part 3: Dynamic Properties
// //-------------------
//
// // For each prompt:
//   // Write a class skeleton
//   // Add a constructor method
//   // Declare 3 parameters in the consutructor
//   // Assign 3 properties (names and values of your choice), using the parameters
//   // Create 2 object instances and store in variables (passing in different arguments)
//   // Log those variables to the console.
//
// // Prompt 1: Dog
class FrenchDog {
  constructor(breed, name, age){
    this.breed = breed;
    this.name = name;
    this.age = age;
  }
}

var dogFive = new FrenchDog("French Mastif", "Shahan", 13);
var dogSix = new FrenchDog ("French Bulldog", "Butters", 3);
console.log(dogFive);
console.log(dogSix);
//
// Prompt 2: Snack
class GasStationSnack {
  constructor(brand, flavor, amount){
    this.brand = brand;
    this.flavor = flavor;
    this.amount = amount;
  }
}

var chips = new GasStationSnack ("Pringles", "original", 39.5);
var cookies = new GasStationSnack ("Chips Ahoy", "chocolate chip", 72);
console.log(chips);
console.log(cookies);
//
// Prompt 3: Shirt
class MallShirt {
  constructor(color, size, fit){
    this.color = color;
    this.size = size;
    this.fit = fit;

  }
}

var shirtThree = new MallShirt ("black", "large", "loose");
var shirtFour = new MallShirt ("turquiose", "X small", "boyfriend");

console.log(shirtThree);
console.log(shirtFour);
