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

var bullTerrier = new Dog();
var poodle = new Dog();

console.log(bullTerrier);
console.log(poodle);


// Prompt 2: Snack
class FavoriteSnack {}

var potatoChip = new FavoriteSnack();
var iceCream = new FavoriteSnack();

console.log(potatoChip);
console.log(iceCream);

// Prompt 3: Shirt
class Shirt {}

var warmWeather = new Shirt();
var coolWeather = new Shirt();

console.log(warmWeather);
console.log(coolWeather);

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

// class DogBreed {}

class DogBreed {
  constructor(){
    this.color = 'white';
    this.hair = 'short';
    this.size = 'medium';
  }
}

var bullTerrier = new DogBreed();

console.log(bullTerrier);

// Prompt 2: Snack
// class SnackAttack {}

class SnackAttack {
  constructor(){
    this.salty = 'chips';
    this.sweet = 'candy';
    this.hungerLevel = 8;
  }
}

var snackTime = new SnackAttack();

console.log(snackTime);

// Prompt 3: Shirt
// class OutfitTop {}

class OutfitTop {
  constructor(){
    this.work = 'white blouse';
    this.home = 'pajama';
    this.summer = 'T-shirt';
  }
}

var officeTop = new OutfitTop();

console.log(officeTop);

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
// class Canine {}

class Canine {
  constructor (color, hair, size) {
    this.color = color;
    this.hair = hair;
    this.size = size;
  }
}

var bichonFrise = new Canine('white', 'short', 'small');
var goldenRetriever = new Canine('golden', 'long', 'medium');

console.log(bichonFrise);
console.log(goldenRetriever);


// Prompt 2: Snack
// class Snack {}

class Snack {
  constructor (flavor, handfuls, crunchy) {
    this.type = flavor;
    this.amount = handfuls;
    this.crunchy = crunchy;
  }
}

var laysPotatoChip = new Snack('original', 6, true);
var swedishFish = new Snack('gummy', 4, false);

console.log(laysPotatoChip);
console.log(swedishFish);

// Prompt 3: Shirt
// class ClothesTop {}

class ClothesTop {
  constructor (fabric, color, style) {
    this.fabric = fabric;
    this.color = color;
    this.style = style;
  }
}

var workTop = new ClothesTop('cotton', 'pink', 'button-down');
var joggingTop = new ClothesTop('polyester', 'blue', 'tank-top');

console.log(workTop);
console.log(joggingTop);
