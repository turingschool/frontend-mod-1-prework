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
  constructor(){
  }
}

var pitbull = new Dog("Pitbull");
var blueHeeler = new Dog("Blue Heeler");

console.log(pitbull);
console.log(blueHeeler);

// Prompt 2: Snack
class Snack {
  constructor(){
  }
}

var apple = new Snack("Apple");
var pretzels = new Snack("Pretzels")

console.log(apple);
console.log(pretzels);


// Prompt 3: Shirt

class Shirt {
  constructor (){
  }
}

var blackTshirt = new Shirt("Black t-shirt");
var blueTankTop = new Shirt ("Blue tank top");

console.log(blackTshirt)
console.log(blueTankTop)

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
      this.name= "Jasmine";
      this.weightInPounds= 45;
      this.boopableSnoot= true;
    }
  }

  var pitbull = new Dog();
  var blueHeeler = new Dog();

  console.log(pitbull);
  console.log(blueHeeler);

  // Prompt 2: Snack
  class Snack {
    constructor(){
      this.name= "Ice Cream";
      this.texture= "Smooth";
      this.flavor= "Sweet";
    }
  }

  var apple = new Snack();
  var pretzels = new Snack()

  console.log(apple);
  console.log(pretzels);


  // // Prompt 3: Shirt
  class Shirt {
    constructor (){
      this.name= "Crop Top";
      this.color= "Pink";
      this.sleeves= true;
    }
  }

  var blackTshirt = new Shirt();
  var blueTankTop = new Shirt ();

  console.log(blackTshirt)
  console.log(blueTankTop)

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
    constructor(name, weight, boop){
      this.name= name;
      this.weightInPounds= weight;
      this.boopableSnoot= boop;
    }
  }

  var pitbull = new Dog("Pitbull", 60, true);
  var blueHeeler = new Dog("Blue Heeler", 40, true);

  console.log(pitbull);
  console.log(blueHeeler);

  // Prompt 2: Snack
  class Snack {
    constructor(name, texture, flavor){
      this.name= name;
      this.texture= texture;
      this.flavor= flavor;
    }
  }

  var apple = new Snack("Apple", "crisp", "sweet");
  var pretzels = new Snack("Pretzels", "crunchy", "salty")

  console.log(apple);
  console.log(pretzels);


  // Prompt 3: Shirt
  class Shirt {
    constructor (name, color, sleeves){
      this.name= name;
      this.color= color;
      this.sleeves= sleeves;
    }
  }

  var blackTshirt = new Shirt("Black t-shirt", "black", true);
  var blueTankTop = new Shirt ("Blue tank top", "blue", false);

  console.log(blackTshirt)
  console.log(blueTankTop)
