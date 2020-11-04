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

var goldenRetriever = new Dog();
var blackLab = new Dog();
console.log(goldenRetriever, blackLab);


// Prompt 2: Snack

class Snack {}

var potatoChips = new Snack();
var almonds = new Snack();
console.log(potatoChips, almonds);

// Prompt 3: Shirt

class Shirt {}

var teeShirt = new Shirt();
var blouse = new Shirt();
console.log(blouse, sweatShirt);

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

class Labrador {
  constructor(){
    this.name = "bob";
    this.age = 3;
    this.size = "large";
  }
}

var blackLab = new Labrador();
console.log(blackLab);


// Prompt 2: Snack

class Chips {
  constructor(){
    this.type = "salty";
    this.texture = "crunchy";
    this.healthy = false;
  }
}

var potatoChips = new Chips();
console.log(potatoChips);


// Prompt 3: Shirt

class SummerShirt {
  constructor(){
    this.color = "blue";
    this.graphics = false;
    this.sleeves ="long";
  }
}

var teeShirt = new SummerShirt();
console.log(teeShirt);


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

class Mutt {
  constructor(name, breeds, puppy){
    this.name = name;
    this.breeds = breeds;
    this.puppy = puppy;
  }
}

var labMix  = new Mutt ("Billy", "Labrador and Pit Bull", true);
console.log(labMix);

// Prompt 2: Snack

class Nut {
  constructor(type, texture, healthy) {
    this.type = type;
    this.texture = texture;
    this.healthy = healthy;
  }
}

var almonds = new Nut("salty", "crunchy", true);
console.log(almonds);


// Prompt 3: Shirt

class WinterShirt {
  constructor(color, graphics, sleeves) {
    this.color = color;
    this.graphics = graphics;
    this.sleeves = sleeves;
  }
}

var sweatShirt = new WinterShirt("blue", false, "short");
console.log(sweatShirt);
