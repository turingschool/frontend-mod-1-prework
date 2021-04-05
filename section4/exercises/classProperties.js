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
// I'm unsure if I accurately answered this section. I'm wondering
// if the variables cloud and flash are supposed to be logged instead of
// the class, Dog, twice.

class Dog {
}

var cloud = new Dog();
console.log(cloud);

var flash = new Dog();
console.log(flash);


// Prompt 2: Snack

class Snack {
}

var empanada = new Snack();
console.log(empanada);

var quesito = new Snack();
console.log(quesito);


// Prompt 3: Shirt

class Shirt {
}

var barong = new Shirt();
console.log(barong);

var aoDai = new Shirt();
console.log(aoDai);

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

class Dog1 {
  constructor() {
    this.name = "cloud";
    this.age = 6;
    this.complexion = "black and white";
  }
}

var cloud = new Dog1();
console.log(cloud);

// Prompt 2: Snack

class Snack1 {
  constructor(name, flavor, temp) {
    this.name = name;
    this.taste = flavor;
    this.temperature = temp;
  }
}

var empanada = new Snack1("empanada", "beef", "hot");
console.log(empanada);


// Prompt 3: Shirt

class Shirt1 {
  constructor() {
    this.name = "Ao Dai";
    this.countryOfOrigin = "Vietnam";
    this.construction = "Silk";
  }
}

var aoDai = new Shirt1();
console.log(aoDai);


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

class Dog2 {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.complexion = color;
  }
}

var cloud = new Dog2("Cloud", 6, "black and white");
console.log(cloud);

var flash = new Dog2("Flash,", 3, "white");
console.log(flash);


// Prompt 2: Snack

class Snack2 {
  constructor(name, flavor, temperature) {
    this.name = name;
    this.taste = flavor;
    this.temperature = temperature;
  }
}

var empanada = new Snack2("empanada", "beef", "hot");
console.log(empanada);

var quesito = new Snack2("quesito", "sweet", "warm");
console.log(quesito);


// Prompt 3: Shirt

class Shirt2 {
  constructor(name, origin, material) {
    this.name = name;
    this.countryOfOrigin = origin;
    this.construction = material;
  }
}

var aoDai = new Shirt2("Ao Dai", "Vietnam", "Silk");
console.log(aoDai);

var barong = new Shirt2("Barong", "Philippines", ["cotton", "piña", "silk"]);
console.log(barong);
