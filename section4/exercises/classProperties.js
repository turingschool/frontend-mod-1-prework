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
var dog = new Dog();
var dogBreed = new Dog();
console.log(dog);
console.log(dogBreed);



// Prompt 2: Snack
class Snack {

}
var snackOne = new Snack();
var snackTwo = new Snack();
console.log(snackOne);
console.log(snackTwo);


// Prompt 3: Shirt
class Shirt {

}
var shirtOne = new Shirt();
var shirtTwo = new Shirt();
console.log(shirtOne);
console.log(shirtTwo);

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
class DogInfo {
  constructor() {
    this.breed = "Collie";
    this.class = "working dog";
    this.treat = "biscuit";
  }
}
var dogInfo = new DogInfo();
console.log(dogInfo);

// Prompt 2: Snack
class SnackTime {
  constructor() {
    this.category = "chips";
    this.calories = 9000;
    this.benefits = "selfcare";
  }
}
var snacksAreYummy = new SnackTime();
console.log(snacksAreYummy);


// Prompt 3: Shirt
class ShirtForWork {
  constructor() {
    this.type = "work shirt";
    this.fit = "good";
    this.color = "blue";
  }
}
var workShirt = new ShirtForWork();
console.log(workShirt);

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
class DogFinal {
  constructor(breed, workGroup, treat) {
    this.breed = breed;
    this.class = workGroup;
    this.treat = treat;
  }
}
var dogInfo = new DogFinal("Collie", "working dog", "biscuit");
console.log(dogInfo);
var dogFacts = new DogFinal("Great Dane", "Guard dog", "Steak");
console.log(dogFacts);

// Prompt 2: Snack
class SnackFinal {
  constructor(type, flavor, texture) {
    this.type = type;
    this.flavor = flavor;
    this.texture = texture;
  }
}
var snackPack = new SnackFinal("Chips", "French Onion", "Crunchy");
console.log(snackPack);
var snackPackTwo = new SnackFinal("Cookies", "Sweet", "Crumbly");
// Prompt 3: Shirt
class ShirtFinal {
  constructor(type, fit, color) {
    this.type = type;
    this.fit = fit;
    this.color = color;
  }
}
var workShirtFinal = new ShirtFinal("button up", "good", "blue");
console.log(workShirtFinal);
var newWorkShirt = new ShirtFinal("sweater", "loose","black");
console.log(newWorkShirt);
