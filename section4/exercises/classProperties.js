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
  constructor(name,age,breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}
var sallyDog = new Dog();
var jeffDog = new Dog();
console.log(sallyDog, jeffDog);

// Prompt 2: Snack
class Snack {
  constructor(type,dollarPrice,expirationDate){
    this.type = type;
    this.dollarPrice = dollarPrice;
    this.expirationDate = expirationDate;
  }
}
var gasStationSnack = new Snack();
var movieSnack = new Snack ();
console.log(gasStationSnack,movieSnack);

// Prompt 3: Shirt
class Shirt {
  constructor(price,season,size) {
    this.price = price;
    this.season = season;
    this.size = size;
}
}
var gucciShirt = new Shirt();
var lvShirt = new Shirt();
console.log(gucciShirt,lvShirt);

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
class Dog {
    constructor(name,age,type){
      this.name = name;
      this.age = age;
      this.breed = type;
    }
}

var sallyDog = new Dog ("Suzie",5,"Bichon");
console.log(sallyDog);

// Prompt 2: Snack
class Snack {
  constructor(calories,lengthInches,weightGrams){
    this.calories = calories;
    this.lengthInches = lengthInches;
    this.weightGrams = weightGrams;
  }
}
var kitKat = new Snack (100,6,10);
console.log(kitKat);
// Prompt 3: Shirt
class Shirt {
  constructor(material,stitchCount,dollarPrice) {
    this.matierial = material;
    this.stitchCount = stitchCount;
    this.dollarPrice = dollarPrice;
  }
}
var favoriteShirt = new Shirt ("cotton",100,10)
console.log(favoriteShirt);
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
  constructor(length,height,weight){
    this.length = length;
    this.height = height;
    this.weight = weight;
  }
}
var puppySteve = new Dog (50,10,30);
var puppyShay = new Dog (75,15,120);
console.log(puppySteve,puppyShay);

// Prompt 2: Snack
class Snack {
  constructor(origin,price,sugarGrams){
    this.origin = origin;
    this.price = price;
    this.sugarGrams = sugarGrams;
  }
}
var pocky = new Snack ("Japan",5,9);
var trolliSourCrawlers = new Snack ("Germany",3,7);
console.log(pocky,trolliSourCrawlers);

// Prompt 3: Shirt
class Shirt {
  constructor(color,canButtonDown,designer){
    this.color = color;
    this.canButtonDown = canButtonDown;
    this.designer = designer
  }
}
var craigShirt = new Shirt ("black",false,"SmartWool");
var melShirt = new Shirt ("white",true,"NorthFace");
console.log(craigShirt,melShirt);
