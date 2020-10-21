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

}

var lab = new Dog();
var husky = new Dog();

console.log(lab);
console.log(husky);

// Prompt 2: Snack
class Snack {

}

var pretzels = new Snack();
var jellyBeans = new Snack();

console.log(pretzels);
console.log(jellyBeans);


// Prompt 3: Shirt
class Shirt {

}

var polo = new Shirt();
var flannel = new Shirt();

console.log(polo);
console.log(flannel);


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
class Canine {
  constructor(){
    this.furColor = "black";
    this.averageWeight = 65;
    this.webbedPaws = false;
    }
}

var borderCollie = new Canine();

console.log(borderCollie);


// Prompt 2: Snack
class SimpleSnack {
  constructor(){
    this.sweet = false;
    this.sodiumContent = 5;
    this.salty = true;
    }
}

var chips = new SimpleSnack();

console.log(chips);


// Prompt 3: Shirt
class Top {
  constructor(){
    this.material = "cotton";
    this.color = "red";
    this.buttons = 0;
    }
}

var tankTop = new Top();


console.log(tankTop);



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
class Doggy {
  constructor(weight, eyeColor, tail){
    this.weight = weight;
    this.eyeColor = eyeColor;
    this.tail = tail;
  }
}

var greatDane = new Doggy(80, "brown", true);
var greyhound = new Doggy(55, "brown", true);

console.log(greatDane);
console.log(greyhound);

// Prompt 2: Snack
class AfternoonSnack {
  constructor(containsWheat, sugarContent, containsDairy){
    this.containsWheat = containsWheat;
    this.sugarContent = sugarContent;
    this.containsDairy= containsDairy;
  }
}

var pickle = new AfternoonSnack(false, 1, false);
var chocolate = new AfternoonSnack(false, 15, true);

console.log(pickle);
console.log(chocolate);

// Prompt 3: Shirt

class Blouse {
  constructor(size, logo, wool){
    this.size = size;
    this.logo = logo;
    this.wool = wool;
  }
}

var sweater = new Blouse("medium", true, true);
var buttonUp = new Blouse("medium", false, false);

console.log(sweater);
console.log(buttonUp);
