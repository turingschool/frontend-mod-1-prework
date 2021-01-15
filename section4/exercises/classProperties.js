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
class Dog{
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}
  var dog1 = new Dog("Pete", "bulldog");
  var dog2 = new Dog("Zombie", "pitbull");

  console.log(dog1)
  console.log(dog2) 
  console.log(" ")
// Prompt 2: Snack
class Snack {
  constructor(chips, vegatables) {
    this.chips = chips;
    this.vegatables = vegatables;
  }
}

var snack1 = new Snack("Pringles", "Carrots");
var snack2 = new Snack("Doritos", "Broccoli");

console.log(snack1)
console.log(snack2) 
console.log(" ")

// Prompt 3: Shirt

class Shirt {
  constructor(sleeves, color) {
    this.sleeves = sleeves;
    this.color = color;
  }
}
var shirt1 = new Shirt("Sleeveless", "Gree")
var shirt2 = new Shirt("Long sleeve", "Black")

console.log(shirt1)
console.log(shirt2)

//-------------------
// Part 2: Properties
//-------------------
console.log(" ")
console.log("======================")
console.log(" ")

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

class Pitbull {
  constructor(name, height, gender) {
    this.name = ("Zombie");
    this.height = ("3FT, 4IN");
    this.gender = ("Male")
  }
}
var dog1 = new Pitbull();
console.log(dog1) 
console.log(" ")


// Prompt 2: Snack

class TortillaChip {
  constructor(shape, flavor, type) {
    this.shape = ("Triangle");
    this.flavor = ("Salted");
    this.type = ("Corn")
  }
}
var chip = new TortillaChip();
console.log(chip) 
console.log(" ")


// Prompt 3: Shirt

class TankTop {
  constructor(length, color, material){
    this.length = ("Extra Long");
    this.color = ("Grey");
    this.material = ("Polyester")
  }
}
var stankTop = new TankTop();
console.log(stankTop)


console.log(" ")
console.log("======================")
console.log(" ")
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
class DogAgain {
  constructor(color, height, spots){
    this.color = color;
    this.height = height;
    this.spots = spots
  }
}
var dog1 = new DogAgain("black", "2FT, 4IN", "yes")
var dog2 = new DogAgain("white", "1FT, 1IN", "yes")
var dog3 = new DogAgain("brindle", "4FT, 0IN", "no")

console.log(dog1)
console.log(dog2)
console.log(dog3)
console.log(" ")

// Prompt 2: Snack

class Beer{
  constructor(abv, ibu, type){
    this.abv = abv;
    this.ibu = ibu;
    this.type = type
  }
} 
var porter = new Beer("5.6%", "35", "Porter");
var stout = new Beer("6.2%", "70", "Stout");
var ipa = new Beer("7.5%", "90", "IPA")

console.log(porter);
console.log(stout);
console.log(ipa);
console.log(" ")
// Prompt 3: Shirt

class LongSleeve {
  constructor(color, material, maker) {
    this.color = color;
    this.material = material;
    this.maker = maker
  }
}
var ls1 = new LongSleeve("gold", "silk", "Gucci");
var ls2 = new LongSleeve("black", "cotton", "Hanes");
var ls3 = new LongSleeve("burgundy", "wool", "Patagonia")

console.log(ls1);
console.log(ls2);
console.log(ls3)