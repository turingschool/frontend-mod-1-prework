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
var ownerToddOlsson = new Dog();
var ownerTajBullock = new Dog();

console.log(Dog.ownerToddOlsson);
console.log(Dog.ownerTajBullock);

// Prompt 2: Snack
class Snack {

}
  var lemonCookies = new Snack();
  var funyons = new Snack();

  console.log(Snack.lemonCookies);
  console.log(Snack.funyons);


// Prompt 3: Shirt
class Shirt {

}
var tankTop = new Shirt();
var vest = new Shirt();
console.log(tankTop);
console.log(vest);

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
    this.dogPedigree = ['Corgi', 'Australian Shepherd'];
    this.birthDate = 'April 1, 2012';
    this.weightInLbs = 72;
  }
}

var ownerOmarNagi = new Dog();
console.log(ownerOmarNagi);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.ingredients = [ 'corn syrup', 'dried corn syrup', 'sugar', 'pear puree concentrate', 'palm oil', 'citric acid', 'dextrose', 'natural flavor' ];
    this.servingSizePerContainer = 2;
    this.caloriesPerServing = 50;
  }
}

var fruitGummies = new Snack();
console.log(fruitGummies);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.color = 'blue';
    this.closureType = 'draw string';
    this.priceInDollars = 59;
  }
}

var pullOver = new Shirt();
console.log(pullOver);

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
  constructor(typ, birth, lbs) {
    this.dogPedigree = typ;
    this.birthDate = birth;
    this.weightInLbs = lbs;
  }
}

var ownerAmyWilkins = new Dog(['Corgi', 'Australian Shepherd'], 'April 1, 2012', 72);
var ownerNadiaNaji = new Dog('Golden Retriever', 'March 18, 2011', 50);
console.log(ownerAmyWilkins);
console.log(ownerNadiaNaji);

// Prompt 2: Snack
class Snack {
  constructor(ingds, servSize, cals) {
    this.ingredients = ingds;
    this.servingSizePerContainer = servSize;
    this.caloriesPerServing = cals;
  }
}

var fruitRollUp = new Snack([ 'corn syrup', 'dried corn syrup', 'sugar', 'pear puree concentrate', 'palm oil', 'citric acid', 'dextrose', 'natural flavor' ], 2, 50);
var chocoChipCookies = new Snack([ 'semi-sweet chocolate chips', 'butter', 'sugar', 'flour', 'vanilla extract' ], 12, 140);
console.log(fruitRollUp);
console.log(chocoChipCookies);
// Prompt 3: Shirt
class Shirt {
  constructor(clr, fastener, price) {
    this.color = clr;
    this.closureType = fastener;
    this.priceInDollars = price;
  }
}

var longSleeve = new Shirt('blue', 'button', 59);
var shortSleeve = new Shirt('yellow', 'zip', 77);
console.log(longSleeve);
console.log(shortSleeve);
