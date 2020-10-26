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

// class Dog {
//
// };
//
// var gretchen = new Dog();
//   console.log(gretchen);
//
// var poochie = new Dog();
//   console.log(poochie);
//
//
// // Prompt 2: Snack
//
// class Snack {
//
// };
//
// var wasabiPeas = new Snack();
//   console.log(wasabiPeas);
//
// var oreos = new Snack();
//   console.log(oreos);
//
// // Prompt 3: Shirt
//
// class Shirt {
//
// };
//
// var blackStripedWorkoutTop = new Shirt();
//   console.log(blackStripedWorkoutTop);
//
// var blueTshirt = new Shirt();
//   console.log(blueTshirt);

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

// class Dog {
//   constructor() {
//     this.color = "black and tan";
//     this.breed = "German shepherd mix";
//     this.favoriteTreat = "cheese";
//   }
// };
//
// var gretchen = new Dog();
//   console.log(gretchen);
//
// var poochie = new Dog();
//   console.log(poochie);
//
//
// // Prompt 2: Snack
//
// class Snack {
//   constructor() {
//     this.brand = "Nabisco";
//     this.flavor = "chocolate"
//     this.price = 3.99
//   }
// };
//
// var wasabiPeas = new Snack();
//   console.log(wasabiPeas);
//
// var oreos = new Snack();
//   console.log(oreos);
//
// // Prompt 3: Shirt
//
// class Shirt {
//   constructor() {
//     this.color = "black";
//     this.size = ["S"];
//     this.neckline = "scoop"
//   }
// };
//
// var blackStripedWorkoutTop = new Shirt();
//   console.log(blackStripedWorkoutTop);
//
// var blueTshirt = new Shirt();
//   console.log(blueTshirt);


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
  constructor(name, color, breed, favoriteTreat) {
    this.name = name;
    this.color = color;
    this.breed =  breed;
    this.favoriteTreat = favoriteTreat;
  }
};

var gretchen = new Dog("Gretchen", "black and tan", "German shepherd", "bacon");
  console.log(gretchen);

var poochie = new Dog("Poochie", "tan and white", "shepherd mix", "cheese");
  console.log(poochie);


// Prompt 2: Snack

class Snack {
  constructor(brand, flavor, type, price) {
    this.brand = brand;
    this.flavor = flavor;
    this.type = type;
    this.price = price;
  }
};

var wasabiPeas = new Snack("hapi snacks", "Hot Wasabi", "flavored green peas", 2.99);
  console.log(wasabiPeas);

var oreos = new Snack("Nabisco", "Double Stuff Oreos", "cookie", 3.99);
  console.log(oreos);


// Prompt 3: Shirt

class Shirt {
  constructor(color, size, neckline, sleeveType) {
    this.color = color;
    this.size = size;
    this.neckline = neckline;
    this.sleeveType = sleeveType;
  }
};

var blackStripedWorkoutTop = new Shirt("Black with white stripes", 6, "scoop", "tank top");
  console.log(blackStripedWorkoutTop);

var blueTshirt = new Shirt("navy blue", "large", "crew neck", "short sleeves");
  console.log(blueTshirt);
