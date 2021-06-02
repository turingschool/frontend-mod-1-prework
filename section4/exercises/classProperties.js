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
var breed1 = new Dog("Mixed", 11);
var breed2 = new Dog("Golden Doodle", 2);

console.log(breed1);

// Prompt 2: Snack
class Snack {

}
var salty = new Snack("Peanuts");
var sweet = new Snack("Chocolate");

// Prompt 3: Shirt
class Shirt {

}
var winter = new Shirt("Long Sleeve", "Flannel");
var summer = new Shirt("Sleeveless", "Linen");

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
class AnotherDog {
  constructor(breed, age, gender) {
    this.breed = breed;
    this.ageYears = age;
    this.gender = gender;
  }
}

var breed3 = new AnotherDog("Mixed Breed", 11, "Female");
console.log(breed3);
// Prompt 2: Snack
class AnotherSnack {
  constructor(name, brand, category) {
    this.name = name;
    this.brand = brand;
    this.category = category;
  }
}

var snack3 = new AnotherSnack("Oreo's", "Nabisco", "Sweet");
console.log(snack3);
// Prompt 3: Shirt
class AnotherShirt {
  constructor(brand, fabric, price) {
    this.brand = brand;
    this.fabric = fabric;
    this.price = price;
  }
}
var shirt3 = new AnotherShirt("Gap", "Cotton", "$24.99");
console.log(shirt3);

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
class ThirdDog {
  constructor(weight, height, coat) {
    this.weightLbs = weight;
    this.heightInches = height;
    this.coat = coat;
  }
}
var breed4 = new ThirdDog(65, 36, "fluffy");
var breed5 = new ThirdDog(12, 12, "wirey");
console.log(breed4);
console.log(breed5);
// Prompt 2: Snack
class ThirdSnack {
  constructor(type, hasNuts, brand) {
    this.type = type;
    this.hasNuts = hasNuts;
    this.brand = brand;
  }
}
var snack4 = new ThirdSnack("Cracker", false, "Ritz");
var snack5 = new ThirdSnack("Candy Bar", true, "Snickers");
console.log(snack4);
console.log(snack5);

// Prompt 3: Shirt
class ThirdShirt {
  constructor(style, brand, color) {
    this.style = style;
    this.brand = brand;
    this.color = color;
  }
}
var shirt4 = new ThirdShirt("Button Up", "Bonobos", "Blue");
var shirt5 = new ThirdShirt("Tee Shirt", "Hane's", "White");
console.log(shirt4);
console.log(shirt5);
