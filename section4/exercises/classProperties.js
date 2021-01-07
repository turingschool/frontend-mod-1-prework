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
class Dog {
};

var goldenRetriever = new Dog();
var poodle = new Dog();

console.log(goldenRetriever);
console.log(poodle);



// Prompt 2: Snack
class Snack {
};

var pretzelChip = new Snack();
var oreo = new Snack();

console.log(pretzelChip);
console.log(oreo);


// Prompt 3: Shirt

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
    this.legs = 4;
    this.name = "Hank";
    this.age = 3;
  }
};

var goldenRetriever = new Dog();

console.log(goldenRetriever);

// Prompt 2: Snack
class Snack {
  constructor() {
    this.calories = 100;
    this.isSalty = true;
    this.price = 3.99;
  }
};

var pretzelChip = new Snack();

console.log(pretzelChip);

// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.color = "black";
    this.hasCollar = false;
    this.size = "large"
  }
};

var longSleeve = new Shirt();

console.log(longSleeve);
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
    constructor(legs, name, age) {
      this.legs = legs;
      this.name = name;
      this.age = age;
    }
  };

  var poodle = new Dog(3, "Jarvis", 5);
  var bloodHound = new Dog(4, "Betsy", 4);

  console.log(poodle);
  console.log(bloodHound);

// Prompt 2: Snack
  class Snack {
    constructor(cal, isSalty, price) {
      this.calories = cal;
      this.isSalty = isSalty;
      this.price = price;
    }
  };

  var oreo = new Snack(300, false, 4.50);
  var carrot = new Snack(10, false, 0.75);

  console.log(oreo);
  console.log(carrot);

// Prompt 3: Shirt
  class Shirt {
    constructor(color, hasCollar, size) {
      this.color = color;
      this.hasCollar = hasCollar;
      this.size = size;
    }
  };

  var shortSleeve = new Shirt("white", true, "small");
  var tankTop = new Shirt("salmon", false, "medium");

  console.log(shortSleeve);
  console.log(tankTop);
