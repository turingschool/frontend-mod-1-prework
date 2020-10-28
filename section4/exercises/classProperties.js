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

var blueHeeler = new Dog();
var husky = new Dog();
console.log(blueHeeler);
console.log(husky);
// Prompt 2: Snack
class Snack {
}

var chipsAndSalsa = new Snack();
var honeyRoastedPeanuts = new Snack();
console.log(chipsAndSalsa);
console.log(honeyRoastedPeanuts);
// Prompt 3: Shirt
class Shirt {
}

var tShirt = new Shirt();
var longSleeveShirt = new Shirt();
console.log(tShirt);
console.log(longSleeveShirt);
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
class Dog2 {
  constructor() {
    this.name = 'Chainsaw';
    this.weight = '40lbs';
    this.coat = 'double';
  }
};

var blueHeeler = new Dog2();
console.log(blueHeeler);
// Prompt 2: Snack
class Snack2 {
  constructor () {
    this.spice = 5;
    this.mouthfeel = 'crunchy';
    this.taste = 'salty';
  }
};

var chipsAndSalsa = new Snack2();
console.log(chipsAndSalsa);
// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.size = 'xl';
    this.color = 'purple';
    this.neckline = 'crew';
  }
}

var tShirt = new Shirt2();
console.log(tShirt);
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
class Dog3 {
  constructor(name, weight, coat) {
    this.name = name;
    this.weight = weight;
    this.coatType = coat;
  }
};

var blueHeeler = new Dog3 ('Chainsaw', '40lbs', 'double');
var husky = new Dog3 ('Fern', '65lbs', 'double');
console.log(blueHeeler);
console.log(husky);
// Prompt 2: Snack
class Snack3 {
  constructor(spice, mouthfeel, taste) {
    this.spiceLevel = spice;
    this.mouthfeel = mouthfeel;
    this.taste = taste;
  }
};

var chipsAndSalsa = new Snack3 (5, 'crunchy', 'salty');
var honeyRoastedPeanuts = new Snack3 (0, 'crunchy', 'sweet and salty');
console.log(chipsAndSalsa);
console.log(honeyRoastedPeanuts);
// Prompt 3: Shirt
class Shirt3 {
  constructor(size, color, neckline) {
    this.size = size;
    this.color = color;
    this.neckline = neckline;
  }
}

var tShirt = new Shirt3 ('xl', 'purple', 'crew');
var longSleeveShirt = new Shirt3 ('xxl', 'charcoal', 'v');
console.log(tShirt);
console.log(longSleeveShirt);
