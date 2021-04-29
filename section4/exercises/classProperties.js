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
// NOTE: commenting out due to each of the classes interferring
// with classes of same name in other exerice parts.

class Dog {
};

var poodle = new Dog ();
  console.log(poodle);

var terrier = new Dog ();
  console.log(terrier);

// Prompt 2: Snack
class Snack {
};

var potatoChips = new Snack ();
  console.log(potatoChips);

var appleSlices = new Snack ();
  console.log(appleSlices);

// Prompt 3: Shirt
class Shirt {
};

var concertTShirt = new Shirt();
  console.log(concertTShirt);

var turtleNeck = new Shirt();
  console.log(turtleNeck);

console.log("End of Part 1");
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

/*
  // NOTE: commenting out due to each of the classes interferring
  // with classes of same name in other exerice parts.

  // Prompt 1: Dog
  class Dog {
    constructor() {
      this.color = "white";
      this.age = 3;
      this.height = 36;
    }
  }

  var poodle = new Dog ();
    console.log(poodle);

  // Prompt 2: Snack
  class Snack {
    constructor() {
      this.unProcessed = true;
      this.caloriesPerServing = 45;
      this.costPerServing = 0.90;
    }
  }

  var potatoChips = new Snack (false, 125, 0.75);
    console.log(potatoChips);

  // Prompt 3: Shirt
  class Shirt {
    constructor() {
      this.size = "small";
      this.color = "blue";
      this.price = 18;
    }
  }

  var concertTShirt = new Shirt("medium", "black", 75);
    console.log(concertTShirt);

console.log("End of Part 2");
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
      constructor(furColor, age, heightInInches) {
        this.color = furColor;
        this.age = age;
        this.height = heightInInches;
      }
    }

    var poodle = new Dog ("white", 3, 36);
      console.log(poodle);

    var terrier = new Dog ("black", 2, 21);
      console.log(terrier);

    // Prompt 2: Snack
    class Snack {
      constructor(fresh, calories, cost) {
        this.unProcessed = fresh;
        this.caloriesPerServing = calories;
        this.costPerServing = cost;
      }
    }

    var potatoChips = new Snack (false, 125, 0.75);
      console.log(potatoChips);

    var appleSlices = new Snack (true, 45, 0.8);
      console.log(appleSlices);

    // Prompt 3: Shirt
    class Shirt {
      constructor(size, color, price) {
        this.size = size;
        this.color = color;
        this.price = price;
      }
    }

    var concertTShirt = new Shirt("medium", "black", 75);
      console.log(concertTShirt);

    var turtleNeck = new Shirt("large", "grey", 22);
      console.log(turtleNeck);

  console.log("End of Part 3");
