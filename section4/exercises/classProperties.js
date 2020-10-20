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

var germanShepherd    = new Dog();
var labradorRetriever = new Dog();

console.log(germanShepherd);
console.log(labradorRetriever);

// Prompt 2: Snack
class Snack {

};

var chips   = new Snack();
var carrots = new Snack();

console.log(chips);
console.log(carrots);

// Prompt 3: Shirt
class Shirt {

};

var sweater = new Shirt();
var tShirt  = new Shirt();

console.log(sweater);
console.log(tShirt);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.
class Dog2 {
  constructor() {
    this.name  = "Ivan";
    this.age   = 3;
    this.color = "black";
  }
};

var germanShepherd = new Dog2();

console.log(germanShepherd);


// Prompt 2: Snack
class Snack2 {
  constructor() {
    this.texture         = "crunchy";
    this.calories        =  150;
    this.isRefridgerated =  false;
  }
};

var chips  = new Snack2();

console.log(chips);


// Prompt 3: Shirt
class Shirt2 {
  constructor() {
    this.size     = "Medium";
    this.material = "Wool";
    this.price    = 50.44;
  }
};

var sweater = new Shirt2();

console.log(sweater);

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

  class Dog3 {
    constructor(name, age, hairColor) {
      this.name  = name;
      this.age   = age;
      this.color = hairColor;
    }
  };

  var germanShepherd    = new Dog3("Ivan", 1, "black");
  var labradorRetriever = new Dog3("Gumbo", 3, "black");

  console.log(germanShepherd);
  console.log(labradorRetriever);

  // Prompt 2: Snack
  class Snack3 {
    constructor(texture, cal, isRef) {
      this.texture         = texture;
      this.calories        = cal;
      this.isRefridgerated = isRef;
    }
  };

  var chips   = new Snack3("crunchy", 150, false);
  var carrots = new Snack3("crunchy", 0, true);

  console.log(chips);
  console.log(carrots);

  // Prompt 3: Shirt
  class Shirt3 {
    constructor(size, material, price) {
      this.size     = size;
      this.material = material;
      this.price    = price;
    }
  };

  var sweater = new Shirt3("Medium", "Wool", 50.44);
  var tShirt  = new Shirt3("Large", "Cotton", 10.99);

  console.log(sweater);
  console.log(tShirt);
