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

}

var firstNuevoDog = new Dog();
var secondNuevoDog = new Dog();

console.log(firstNuevoDog);
console.log(secondNuevoDog);

// Prompt 2: Snack
class Snack {

}

var firstNuevoSnack = new Snack();
var secondNuevoSnack = new Snack();

console.log(firstNuevoSnack);
console.log(secondNuevoSnack);

// Prompt 3: Shirt
class Shirt {

}

var firstNuevoShirt = new Shirt();
var secondNuevoShirt = new Shirt();

console.log(firstNuevoShirt);
console.log(secondNuevoShirt);

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
class Doggie {
  constructor() {
    this.breed = "Goldendoodle";
    this.name = "Colby Jack";
    this.age = 4;
  }
}

var nuevoDoggie = new Doggie();
console.log(nuevoDoggie);

// Prompt 2: Snack
class Snackie {
  constructor() {
    this.type = "Sugary";
    this.name = "Ice Cream";
    this.price = "$1.99";
  }
}

var nuevoSnackie = new Snackie();
console.log(nuevoSnackie);

// Prompt 3: Shirt
class Shirtie {
  constructor() {
    this.style = "Polo";
    this.brand = "Generic";
    this.price = "$23.99";
  }
}

var nuevoShirtie = new Shirtie();
console.log(nuevoShirtie);

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
class DoggiePoo {
  constructor(brd, name, age) {
    this.breed = brd;
    this.name = name;
    this.age = age;
  }
}

var firstNuevoDoggiePoo = new DoggiePoo("Goldendoodle", "Colby Jack", 4);
console.log(firstNuevoDoggiePoo);

var secondNuevoDoggiePoo = new DoggiePoo("Bichon Frise", "Neige", 16);
console.log(secondNuevoDoggiePoo);

// Prompt 2: Snack
class SnackiePoo {
  constructor(type, name, moolah) {
    this.type = type;
    this.name = name;
    this.price = moolah;
  }
}

var firstNuevoSnackiePoo = new SnackiePoo("Sugary", "Ice Cream", "$1.99");
console.log(firstNuevoSnackiePoo);

var secondNuevoSnackiePoo = new SnackiePoo("Salty", "Chips", "$2.99");
console.log(secondNuevoSnackiePoo);

// Prompt 3: Shirt
class ShirtiePoo {
  constructor(style, brand, dough) {
    this.style = style;
    this.brand = brand;
    this.price = dough;
  }
}

var firstNuevoShirtiePoo = new ShirtiePoo("Polo", "Generic", "$23.99");
console.log(firstNuevoShirtiePoo);

var secondNuevoShirtiePoo = new ShirtiePoo("T-Shirt", "H&M", "Too Much ($8 billion)");
console.log(secondNuevoShirtiePoo);
