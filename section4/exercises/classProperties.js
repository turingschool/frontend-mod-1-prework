/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//BECAUSE EACH EXERCISE USES THE SAME CLASS NAME, MY RESPONSES, EXCEPT 1 ARE COMMENTED OUT TO PREVENT ERRORS WHEN RUNNING.

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog


/*
class Dog {}

var blue = new Dog();
var fido = new Dog();

console.log(blue);
console.log(fido);

// Prompt 2: Snack

class Snack {}

var chips = new Snack();
var nuts = new Snack();

console.log(chips);
console.log(nuts)

// Prompt 3: Shirt

class Shirt {}

var tShirt = new Shirt();
var buttonUP = new Shirt();
*/

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

/*

// Prompt 1: Dog
class Dog {
  constructor() {
    this.breed = "shiz tzu";
    this.size = "small";
    this.name = "blue";
  }
}

var blue = new Dog();
console.log(blue);

// Prompt 2: Snack

class Snack {
  constructor () {
    this.salty = true;
    this.type = "crunchy";
    this.name = "chips";
  }
}

var chips = new Snack();
console.log(chips);

// Prompt 3: Shirt

class Shirt {
  constructor () {
    this.casual = true;
    this.longsleeve = true;
    this.color = "red";
  }
}

var tShirt = new Shirt ();
console.log(tShirt);

*/

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
  constructor(brd,sze,nme) {
    this.breed = brd;
    this.size = sze
    this.name = nme;
  }
}

var blue = new Dog("shiz tzu" , "small" , "blue");
var fido = new Dog("beagle" , "medium" , "fido");

console.log(blue);
console.log(fido);


// Prompt 2: Snack

class Snack {
  constructor (stly,tpe,nme) {
    this.salty = stly;
    this.type = tpe;
    this.name = nme;
  }
}

var chips = new Snack(true , "crunchy" , "chips" );
var nuts = new Snack(true , "crunchy" , "nuts")

console.log(chips);
console.log(nuts);

// Prompt 3: Shirt

class Shirt {
  constructor (cas,ls,clr) {
    this.casual = cas;
    this.longsleeve = ls;
    this.color = clr;
  }
}

var tShirt = new Shirt (true , false , 'red');
var buttonUp = new Shirt (false , true , 'purple');

console.log(tShirt);
console.log(buttonUp);
