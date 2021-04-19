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

/* Commented out because I used Dog, Snack, and Shirt as classes in the next YOU DO and when logging
to the console, I got an error messgae.


class Dog {
  constructor(){

  }
}

var terrier = new Dog();
console.log(terrier);

var yorkie = new Dog();
console.log(yorkie);



// Prompt 2: Snack
class Snack {
  constructor(){

  }
}

var goldFish = new Snack();
console.log(goldFish);

var chips = new Snack();
console.log(chips);

// Prompt 3: Shirt
class Shirt {
  constructor(){

  }
}

var longSleeve = new Shirt();
console.log(longSleeve);

var shortSleeve = new Shirt();
console.log(shortSleeve);

*/

// SEE NOTE ABOVE and UNCOMMENT CODE to run

// ====================================================================================

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

class Band {
  constructor(){
    this.name = "The Band";
    this.genre = "Classic Rock";
    this.formed = 1967;
  }
}

var newBand = new Band();
console.log(newBand);

class Building {
  constructor(){
    this.type = "cottage";
    this.yearBuilt = 1942;
    this.materials = "Wood: Logs";
  }
}

var newBuilding = new Building();
console.log(newBuilding);

class Instrument {
  constructor(){
    this.name = "Guitar";
    this.type = "String instrument";
    this.acoustic = false;
  }
}

var guitar = new Instrument();
console.log(guitar);


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
    constructor(dogBreed, dogName, dogAge) {
      this.breed = dogBreed;
      this.name = dogName;
      this.age = dogAge;
    }
  }

  var terrier = new Dog("Terrier", "Terry", 4);
  console.log(terrier);

  var yorkie = new Dog("Yorkie-Mix", "Coco", 2);
  console.log(yorkie);

// Prompt 2: Snack

  class Snack {
    constructor(snackName, snackFlavor, calsPerServing){
      this.name = snackName;
      this.flavor = snackFlavor;
      this.calories = calsPerServing;
    }
  }

  var goldFish = new Snack("Gold Fish", "Cheesy!", 150 + " calories per serving.");
  console.log(goldFish);

// Prompt 3: Shirt

  class Shirt {
    constructor(shirtStyle, shirtSize, shirtColor) {
      this.style = shirtStyle;
      this.size = shirtSize;
      this.color = shirtColor;
    }
  }

  var shortSleeve = new Shirt("Band Tee", "Large", "black");
  console.log(shortSleeve);
