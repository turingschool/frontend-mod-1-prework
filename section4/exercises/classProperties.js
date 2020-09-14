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
  constructor() {
  }
}

var ilsa = new Dog();
console.log(ilsa);
var georgia = new Dog();
console.log(georgia);

// Prompt 2: Snack
class Snack {
  constructor() {
  }
}

var cheezeIts = new Snack();
console.log(cheezeIts);
var saltines = new Snack();
console.log(saltines);

// Prompt 3: Shirt
class Shirt {
  constructor() {
  }
}

var buttonDown = new Shirt();
console.log(buttonDown);
var polo = new Shirt();
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
class MoreDog {
  constructor() {
    this.breed = "pointer";
    this.owner = "me";
    this.color = "ginger";
  }
}

var ilsa = new MoreDog();
console.log(ilsa);
var georgia = new MoreDog();
console.log(georgia);

// Prompt 2: Snack
class MoreSnack {
  constructor() {
    this.flavor = "savory";
    this.type = "cracker";
    this.priceDollars = 5;
  }
}

var cheezeIts = new MoreSnack();
console.log(cheezeIts);
var saltines = new MoreSnack();
console.log(saltines);

// Prompt 3: Shirt
class MoreShirt {
  constructor() {
    this.color = "red";
    this.buttonStyle = "ceramic";
    this.neckline = "square";
  }
}

var buttonDown = new MoreShirt();
console.log(buttonDown);
var polo = new MoreShirt();
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
  class AnotherDog {
    constructor(brd, onr, clr) {
      this.breed = brd;
      this.owner = onr;
      this.color = clr;
    }
  }

  var ilsa = new AnotherDog("German Shepherd", "Hart", "brown and black");
  console.log(ilsa);
  var georgia = new AnotherDog("Mixed", "Lucy and Peter", "grey and black");
  console.log(georgia);

  // Prompt 2: Snack
  class AnotherSnack {
    constructor(fl, tp, prc) {
      this.flavor = fl;
      this.type = tp;
      this.priceDollars = prc;
    }
  }

  var cheezeIts = new AnotherSnack("cheesy","cracker","4");
  console.log(cheezeIts);
  var saltines = new AnotherSnack("salty","cracker","3");
  console.log(saltines);

  // Prompt 3: Shirt
  class AnotherShirt {
    constructor(clr, btt, neck) {
      this.color = clr;
      this.buttonStyle = btt;
      this.neckline = neck;
    }
  }

  var buttonDown = new AnotherShirt("blue","plastic","scoop");
  console.log(buttonDown);
  var polo = new AnotherShirt("white","none","v");
  console.log(polo);
