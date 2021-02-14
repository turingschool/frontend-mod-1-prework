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
  };
  var pug = new Dog();
  var bulldog = new Dog();

  console.log(pug);
  console.log(bulldog);

  // Prompt 2: Snack
  class Snack {
  };

  var chips = new Snack();
  var pretzel = new Snack();

  console.log(chips);
  console.log(pretzel);

  // Prompt 3: Shirt
  class Shirt {
  };

  var blouse = new Shirt();
  var flannel = new Shirt();

  console.log(blouse);
  console.log(flannel);

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
    constructor() {
      this.color = "white";
      this.numOfPaws = 3;
      this.name = "Tchotchke"
    }
  };

  var husky = new Dog1();
  console.log(husky);

  // Prompt 2: Snack

  class Snack1 {
    constructor() {
      this.isSalty = "false";
      this.numOfCalories = 45;
      this.ingredients = ["bananas", "yogurt"]
    }
  }

  var parfait = new Snack1();
  console.log(parfait);

  // Prompt 3: Shirt

  class Shirt1 {
    constructor() {
      this.fabricType = "linen";
      this.size = 8;
      this.isPatched = true;
    }
  }

  var dressShirt = new Shirt1();
  console.log(dressShirt);

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
    constructor(isBarking, name, weightInPounds) {
      this.isBarking = isBarking;
      this.name = name;
      this.weight = weightInPounds;
    }
  };

  var dalmation = new Dog2(false, "Joji", 45);
  console.log(dalmation);

  var blackLab = new Dog2(true, "Enzo", 89);
  console.log(blackLab);

  // Prompt 2: Snack

  class Snack2 {
    constructor (hasElectrolytes, color, numOfSeeds) {
      this.hasElectrolytes = hasElectrolytes;
      this.color = color;
      this.numOfSeeds = numOfSeeds;
    }
  }

  var watermelon = new Snack2(true, "pink", 68);
  console.log(watermelon);

  var bagel = new Snack2(false, "beige", 0);
  console.log(bagel);

  // Prompt 3: Shirt

  class Shirt2 {
    constructor(fiberType, hasCuffs, numOfSleeves) {
      this.fiberType = fiberType;
      this.hasCuffs = hasCuffs;
      this.numOfSleeves = numOfSleeves;
    }
  }

  var hoodie = new Shirt2("cotton", true, 2);
  console.log(hoodie);

  var tankTop = new Shirt2("spandex", false, 0);
  console.log(tankTop);
