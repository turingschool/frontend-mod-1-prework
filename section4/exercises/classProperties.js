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

  var boxer = new Dog();
  var goldenRetriever = new Dog();
  console.log(boxer);
  console.log(goldenRetriever);

  // Prompt 2: Snack
  class Snack {

  }

  var fruitCup = new Snack();
  var puddingCup =  new Snack();
  console.log(fruitCup);
  console.log(puddingCup);

  // Prompt 3: Shirt
  class Shirt {

  }

  var longSleeve = new Shirt();
  var hoodie = new Shirt();
  console.log(longSleeve);
  console.log(hoodie);

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
  class Dog2 {
    constructor(age, height, isNeutered) {
      this.age = age;
      this.height = height;
      this.isNeutered = isNeutered;
    }
  }

  var bulldog = new Dog2(6, "30cm", true);
  console.log(bulldog);

  // Prompt 2: Snack
  class Snack2 {
    constructor(type, price, expires) {
    this.snackType = type;
    this.price = price;
    this.expirationDate = expires;
    }
  }

  var lays = new Snack2("Potato Chip", 4, "2021-08-31T12:00:00Z");
  console.log(lays);


  // Prompt 3: Shirt
  class Shirt2 {
    constructor(brand, fabricType, isDryerSafe) {
      this.brand = brand;
      this.fabricType = fabricType;
      this.isDryerSafe = isDryerSafe;
    }

  }

  var graphicTee = new Shirt2("Adidas", "Polyester", true);
  console.log(graphicTee);


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
  class Dog3 {
    constructor(sex, birthDate, isPottyTrained) {
      this.sex = sex;
      this.birthDate = birthDate;
      this.isPottyTrained = isPottyTrained;
    }
  }

  var chihuahua = new Dog3("male", "2019-03-15T09:30:00Z", true);
  var beagle = new Dog3("female", "2017-05-19T08:45:00Z", true);
  console.log(chihuahua);
  console.log(beagle);

  // Prompt 2: Snack
  class Snack3 {
    constructor(madeFrom, price, expiration) {
    this.mainIngredient = madeFrom;
    this.price = price;
    this.expiration = expiration;
    }
  }

  var triskit = new Snack3("wheat", 3, "2021-05-31T12:00:00Z");
  var wheatThin = new Snack3("wheat", 4, "2021-07-22T12:00:00Z")
  console.log(triskit);
  console.log(wheatThin);


  // Prompt 3: Shirt
  class Shirt3 {
    constructor(color, origin, isLongSleeved) {
      this.color = color;
      this.origin = origin;
      this.isLongSleeved = isLongSleeved;
    }

  }

  var muscleTank = new Shirt3("blue", "USA", false);
  var turtleNeck = new Shirt3("black", "China", true);
  console.log(muscleTank);
  console.log(turtleNeck);
