/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.\
node section4/exercises/classProperties.js
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

var breed1 = new Dog();
console.log(breed1);

var breed2 = new Dog();
console.log(breed2);

// Prompt 2: Snack
class Snack {
}

var spicyChips = new Snack();
console.log(spicyChips);

var onionChips = new Snack();
console.log(onionChips);

// Prompt 3: Shirt
class Shirt {
}

var sShirt = new Shirt();
console.log(sShirt);

var mShirt = new Shirt();
console.log(mShirt);

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
    this.hair = "black";
    this.ears = "floppy";
    this.tail = "long";
  }
}

var breed1 = new Dog();
console.log(breed1);


// Prompt 2: Snack
class Snack {
  constructor(){
    this.snackType = "chips";
    this.envelope = "plastic";
    this.salted = true;
  }
}

var spicyChips = new Snack();
console.log(spicyChips);

// Prompt 3: Shirt
class Shirt {
  constructor(){
    this.size = "small";
    this.color = "blue";
    this.price = 22.50;
  }
}

var sShirt = new Shirt();
console.log(sShirt);

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
  constructor(hStyle, eType, tLength){
    this.hair = hStyle;
    this.ears = eType;
    this.tail = tLength;
  }
}

var breed1 = new Dog("black", "floppy", "long");
console.log(breed1);

var breed2 = new Dog("brown", "stiff", "short");
console.log(breed2);

// Prompt 2: Snack
class Snack {
  constructor(sType, wrapper, flavoring){
    this.snackType = sType;
    this.envelope = wrapper;
    this.salted = flavoring;
  }
}

var spicyChips = new Snack("Spicy Chips","Plastic",false);
console.log(spicyChips);

var onionChips = new Snack("Onion Chips","Wax",true);
console.log(onionChips);

// Prompt 3: Shirt
class Shirt {
  constructor(measures, style, price){
    this.size = measures;
    this.color = style;
    this.price = price;
  }
}

var sShirt = new Shirt("small", "blue", 22.50);
console.log(sShirt);

var mShirt = new Shirt("medium", "red", 25);
console.log(mShirt);
