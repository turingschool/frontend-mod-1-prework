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

var germanShepherd = new Dog();
var shibaInu = new Dog();

console.log(germanShepherd);
console.log(shibaInu);
// Prompt 2: Snack

class Snack {

}

var pretzel = new Snack();
var peanuts = new Snack();

console.log(pretzel);
console.log(peanuts);

// Prompt 3: Shirt

class Shirt {

}

var tankTop = new Shirt();
var tShirt = new Shirt();

console.log(tankTop);
console.log(tShirt);

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
class SecondDog {
  constructor() {
    this.name = 'Nova';
    this.age = 6;
    this.isBarking = false;
  }
}

var myDog = new SecondDog();
console.log(myDog);

// Prompt 2: Snack

class SecondSnack {
  constructor() {
    this.name = peanuts;
    this.isSalted = true;
    this.isShelled = true;
  }
}

var favoriteSnack = new SecondSnack();
console.log(favoriteSnack);

// Prompt 3: Shirt

class SecondShirt {
  constructor() {
    this.type = 'V Neck';
    this.price = '$100';
    this.isNew = true;
  }
}

var favoriteShirt = new SecondShirt;
console.log(favoriteShirt);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the constructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

class SmartDog {
  constructor(dogType, dogAge, isBarking){
    this.dogType = dogType;
    this.dogAge = dogAge;
    this.isBarking = isBarking;
  }
}

var fwaygo = new SmartDog('Shiba Inu', 7, false);
var bang = new SmartDog('German Shepard', 2, true);

console.log(fwaygo);
console.log(bang);


// Prompt 2: Snack

class SmartSnack {
  constructor(snackName, isSweet, amount){
    this.snackName = snackName;
    this.isSweet = isSweet;
    this.amount = amount;
  }
}

var goodPeanuts = new SmartSnack('Peanuts', false, 100);
var goodApple = new SmartSnack('Honey Crisp Apple', true, 1);

console.log(goodPeanuts);
console.log(goodApple);

// Prompt 3: Shirt

class SmartShirt{
  constructor(shirtType, isNew, amount){
    this.shirtType = shirtType;
    this.isNew = isNew;
    this.amount = amount
  }
}

var coolNewShirts = new SmartShirt('V Neck', true, 2);
var dumbOldShirts = new SmartShirt('T Shirt', false, 5);

console.log(coolNewShirts);
console.log(dumbOldShirts);