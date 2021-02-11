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
class Dog{

}
var goldenRetriever = new Dog();
var corgi = new Dog();

console.log(goldenRetriever);
console.log(corgi);

// Prompt 2: Snack
class Snack{

}
var chip = new Snack();
var grape = new Snack();

console.log(chip);
console.log(grape);

// Prompt 3: Shirt
class Shirt{

}
var tankTop = new Shirt();
var shortSleeve = new Shirt();

console.log(tankTop);
console.log(shortSleeve);
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
class DogType {
  constructor(){
    this.age = 2;
    this.name = "Berkeley";
    this.color = "cream";
  }
}
var goldenRetriever = new DogType();
console.log(goldenRetriever);


//Prompt 2: Snack
class SnackType{
  constructor(){
    this.price = 2.50;
    this.weight = .5;
    this.color = "purple";
  }
}
var grape = new SnackType();
console.log(grape);
// Prompt 3: Shirt
class ShirtType{
  constructor(){
    this.color = "white";
    this.size = "small";
    this.price = 15;
  }
}
var tankTop = new ShirtType();
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
class DogInfo {
  constructor(dogAge, dogName, furColor){
    this.age = dogAge;
    this.name = dogName;
    this.color = furColor;
  }
};
var berner = new DogInfo(4,"Brady","black, brown and white");
console.log(berner);
var dalmation = new DogInfo(6,"Spot","White and Black")
console.log(dalmation);

// Prompt 2: Snack
class SnackInfo{
  constructor(snackPrice, snackWeight, snackColor){
    this.price =snackPrice;
    this.weight=snackWeight;
    this.color = snackColor;
  }
};
var lays = new SnackInfo(1.50,.2,"yellow");
console.log(lays);

var doritos = new SnackInfo(2.30,.1,"red");
console.log(doritos);

// Prompt 3: Shirt
class ShirtInfo{
  constructor(shirtSize,shirtPrice,shirtColor){
    this.size =shirtSize;
    this.price =shirtPrice;
    this. color = shirtColor;
  }
};
var tankTop = new ShirtInfo("small",15.50,"pink");
console.log(tankTop);

var cropTop = new ShirtInfo("medium", 100, "white");
console.log(cropTop);
