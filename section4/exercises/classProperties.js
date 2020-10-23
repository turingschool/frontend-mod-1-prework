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

/*
Note: I had to comment out Part 1 and Part 2 because when I went to log this
using node in the terminal it would give me an error that my Class has already
been defined. As I understand, unlike variables which can be re-assigned, a
class is basically a function so once you declare a function/class it remains
that way. Also I messaged David and he told me not to go down that rabbit hole,
maybe after I have finished all the pre-work...

class Dog {

};
var goldenRetriever = new Dog();
var poodle = new Dog();
console.log(goldenRetriever);
console.log(poodle);
*/
// Prompt 2: Snack
/*
class Snack {

};
var cookie = new Snack();
var apple = new Snack();
console.log(cookie);
console.log(apple);
*/
// Prompt 3: Shirt
/*
class Shirt {

};
var longSleeve = new Shirt();
var shortSleeve = new Shirt();
console.log(longSleeve);
console.log(shortSleeve);
*/

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
/*
class Dog {
  constructor() {
    this.name = "Sparky";
    this.weight = 150
    this.neutered = true;
  }
};
var bullDog = new Dog();
console.log(bullDog);


// Prompt 2: Snack

class Snack {
  constructor() {
    this.name = "Apple";
    this.calorie = 50;
    this.weight = 100;
  }
};
var orange = new Snack();
console.log(orange);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.brand = "L.L. Bean";
    this.material = "wool";
    this.size = "large";
  }
};
var tankTop = new Shirt();
console.log(tankTop);
*/

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
  constructor(name, weight, neutered, hasTail) {
    this.name = name;
    this.weight = weight;
    this.neutered = neutered;
    this.hasTail = hasTail;
  }
};

var frenchBullDog = new Dog("Joe", 30, true, false);
console.log(frenchBullDog);
var borderCollie = new Dog("Gus", 45, true, true);
console.log(borderCollie);


// Prompt 2: Snack
class Snack {
  constructor(name, calories, weight) {
    this.name = name;
    this.calorie = calories;
    this.weight = weight;
  }
};
var banana = new Snack("Banana", 30, 40);
console.log(banana);
var carrot = new Snack("Carrot", 10, 15);
console.log(carrot);

// Prompt 3: Shirt
class Shirt {
  constructor(brand, material, size) {
    this.brand = brand;
    this.material = material;
    this.size = size;
  }
};
var shortSleeve = new Shirt("Patagonia", "cotton", "small");
var bottonDown = new Shirt("North Face", "wool", "medium");
console.log(shortSleeve);
console.log(bottonDown);
