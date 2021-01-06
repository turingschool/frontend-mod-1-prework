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

// Prompt 1: Dog..... commented this class skeleton out becuase i can only declare the dog class once.
class Dog {
}
var pitBull = new Dog();
var germanShepard = new Dog();

console.log(pitBull + germanShepard);

// Prompt 2: Snack
class Snack {

}
var chips = new Snack();
var babyCarrots = new Snack();

console.log(chips + babyCarrots);

// Prompt 3: Shirt
class Shirt {

}
var tShirt = new Shirt();
var buttonUp = new Shirt();

console.log(tShirt + buttonUp);

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
class Dog1 {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed
    this.friendly = true;
    }
}
var pitBull = new Dog1("Rubble",6, "pitty");
var germanShepard = new Dog1("Dobby", 1, "Shepard mix");

console.log(pitBull.name + " is " + pitBull.age + ". He is a " + pitBull.breed);
console.log(germanShepard.name + " is " + germanShepard.age + ". He is a " + germanShepard.breed);

// Prompt 2: Snack
class Snack1 {
  constructor(name, serving, healthy){
    this.nameOfSnack = name ;
    this.serving = serving;
    this.healthy = healthy ;
  }
}
var chips = new Snack1("Lays", 2 , false);
var babyCarrots = new Snack1("Organic Choice", 5 , true);

console.log(chips.nameOfSnack + chips.expirationDate + chips.healthy);
console.log(babyCarrots.nameOfSnack + babyCarrots.expirationDate + babyCarrots.healthy);

// Prompt 3: Shirt
class Shirt1 {
  constructor(material, size, brand){
    this.material = material;
    this.size = size;
    this.brand = brand;
  }
}
var tShirt = new Shirt1("Cotton", "large", "Nike");
var buttonUp = new Shirt1("Silk", "Medium", "Burberry");

 console.log(tShirt.material + tShirt.size + tShirt.brand);
 console.log(buttonUp.material + buttonUp.size + buttonUp.brand);
console.log(tShirt);
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
class Dog2 {
  constructor(name, age,breed){
    this.name = name;
    this.age = age;
    this.breed = breed
    this.friendly = true
    this.tired = false
  }
  walk(){
    this.tired = true;
    //console.log(this.tired);
  }

  birthday(){
    this.age ++;
    console.log("My dog " + this.name + " is " + this.age);
  }
}
var pitBull = new Dog2("Rubble",6, "pitty");
var germanShepard = new Dog2("Dobby ", 1 , "Shepard Mix");

pitBull.walk();
pitBull.birthday();
console.log(pitBull);

germanShepard.walk();
germanShepard.birthday();
console.log(germanShepard);


// Prompt 2: Snack
class Snack2 {
  constructor(name, serving, healthy){
    this.nameOfSnack = name ;
    this.serving = serving;
    this.healthy = healthy ;

  }
  getEaten(){
    this.serving --;
    console.log("You now have " + this.serving );
  }
}
var chips = new Snack2("Lays", 2, false);
var babyCarrots = new Snack2("Organic Choice", 5 , true);

chips.getEaten();
babyCarrots.getEaten();
console.log(chips);
console.log(babyCarrots);

// Prompt 3: Shirt
class Shirt2 {
  constructor(material, size, brand, condition){
    this.material = material;
    this.size = size;
    this.brand = brand;
    this.condition = condition
  }
  wear(){
    this.condition = "Used";
    console.log("My shirt has been " + this.condition);
  }
}
var tShirt = new Shirt2("Cotton", "large", "Nike", "New");
var buttonUp = new Shirt2("Silk", "Medium", "Burberry", "New");

tShirt.wear();
buttonUp.wear();
