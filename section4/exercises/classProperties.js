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

var dogInThePark = new Dog ();
var dogInTheHouse = new Dog ();

console.log(dogInThePark);
console.log(dogInTheHouse);

// Prompt 2: Snack
class Snack {

}

var sweet = new Snack ();
var savory = new Snack();

console.log(sweet);
console.log(savory);

// Prompt 3: Shirt
class Shirt {

}
var tshirt = new Shirt();
var dressShirt = new Shirt();

console.log(tshirt);
console.log(dressShirt);

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
class DogProperties {
  constructor() {
    this.name = "Buster";
    this.age = 3;
    this.breed = "Buldog";
  }

}
var myFriendPet = new DogProperties();
console.log(myFriendPet);

// Prompt 2: Snack
class SnackProperties {
  constructor() {
    this.name = "Doritos";
    this.flavor = "nacho cheese";
    this.quantitie = "2 oz";

  }

}
var favoriteSnack = new SnackProperties();
console.log(favoriteSnack);

// Prompt 3: Shirt
class ShirtProperties {
  constructor() {
    this.color = "white";
    this.fabric = "cotton";
    this.style = "sleeveless";

  }

}

var cozyShirt = new ShirtProperties();
console.log(cozyShirt);

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
class DogDynamicProperties {
  constructor(firtName, age, breedType) {
    this.name = firtName;
    this.age = age;
    this.breed = breedType;

  }
}

var stevenDog = new DogDynamicProperties("Zoe", 5 , "Pitbull");
console.log(stevenDog);

var joanaDog = new DogDynamicProperties("Lucky", 14, "Lhasa Apso");
console.log(joanaDog);

// Prompt 2: Snack
class SnackDynamicProperties {
  constructor(name, flavor, size) {
    this.name = name;
    this.flavor = flavor;
    this.quantitie = size;

  }

}

var britneyFavoriteSnack = new SnackDynamicProperties("Doritos", "Nacho cheese","2 oz");
console.log(britneyFavoriteSnack);

var joanaFavoriteSnack = new SnackDynamicProperties("KitKat", "Dark Chocolate", "1.05 oz");
console.log(joanaFavoriteSnack);

// Prompt 3: Shirt

class ShirtDynamicProperties {
  constructor(color, fabricType, style) {
    this.color = color;
    this.fabric = fabricType;
    this.style = style;

  }

}
 var menPartyShirt = new ShirtDynamicProperties("White", "Dobby", "Dress Shirt");
 console.log(menPartyShirt);

 var womenPartyShirt = new ShirtDynamicProperties("Gray", "Chiffon","Dress Shirt");
 console.log(womenPartyShirt);
