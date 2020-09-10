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
  constructor( breed, weight, age, name ) {
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.name = name;
  }
}
var myDog = new Dog( "Doberman", "100 lbs", 7, "Tiny" );
console.log( myDog );
console.log( "My dog is a " + myDog.breed + "." );

var myDog = new Dog( "Chiweenie", "4 lbs", 3, "Bruiser" );
console.log( myDog );
console.log( "My dog " + myDog.name + " is " + myDog.age + " years old." );

var myDog = new Dog( "Tibetan Terrier", "35 lbs", 13, "Sophie" );
console.log( myDog );
console.log( myDog.name + " weighs " + myDog.weight + "." );

// Prompt 2: Snack
class Snack {
  constructor( brand, flavor, isHomemade ) {
    this.brand = brand;
    this.flavor = flavor;
    this.isHomemade = isHomemade;
  }
}

var mySnack = new Snack( "Pringles", "Cool Ranch", false );
console.log( mySnack );

var mySnack = new Snack( "Toast", "Sourdough", true );
console.log( mySnack );

// Prompt 3: Shirt

class Shirt {
  constructor( color, size, fit ) {
    this.color = color;
    this.size = size;
    this.fit = fit;
  }
}

var myShirt = new Shirt( "blue", "xl", "boyfriend" );
console.log( myShirt )

var myShirt = new Shirt( "yellow", "small", "deep v" );
console.log( "Do you like my new " + myShirt.size + " " + myShirt.color + " " + myShirt.fit + " shirt?" )

// I think I did part 3 already with these answers ... oops?


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

// Prompt 2: Snack

// Prompt 3: Shirt

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

// Prompt 2: Snack

// Prompt 3: Shirt