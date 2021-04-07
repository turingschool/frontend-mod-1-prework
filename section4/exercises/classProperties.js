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
  // Class: Dog. Object instances: rottweiler, golden retriever

  class Dog {


  }

  var rottweiler = new Dog();
  var goldenRetriever = new Dog();

  console.log(rottweiler);
  console.log(goldenRetriever);

   //Prompt 2: Snack
   //Class: Snack. Object instances: brownie, banana

  class Snack {


  }

  var brownie = new Snack();
  var banana = new Snack();

  console.log(brownie);
  console.log(banana);

  // Prompt 3: Shirt
  // Class: Shirt. Object instances: Dress shirt, workout shirt

  class Shirt {


  }

  var dressShirt = new Shirt();
  var workoutShirt = new Shirt();

  console.log(dressShirt);
  console.log(workoutShirt);


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
    constructor() {
      this.name = "Lucy";
      this.weightInLbs = 90;
      this.temperament = "Goofy & loyal";
    }
  }

  var rottweiler = new Dog2();
  console.log(rottweiler);

  // Prompt 2: Snack
class Snack2 {
  constructor() {
    this.brand = "Little Debbie"
    this.kidFriendly = true
    this.calories = 120
  }
}

  var brownie = new Snack2();
  console.log(brownie);

  // Prompt 3: Shirt

class Shirt2{
  constructor() {
    this.neckline = "collar"
    this.color = "white"
    this.material = "silk"
  }
}
 var dressShirt = new Shirt2();
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
  class Dog3 {
    constructor(name, weightInLbs, temperament){
      this.name = name;
      this.weightInLbs = weightInLbs;
      this.temperament = temperament;
    }
  }

  var rottweiler = new Dog3("Lucy", 90, "Goofy & loyal");
  console.log(rottweiler);

  var goldenRetriever = new Dog3("Wilson", 75, "Obedient & friendly")
  console.log(goldenRetriever)

  // Prompt 2: Snack
class Snack3 {
    constructor(brand, kidFriendly, calories) {
      this.brand = brand;
      this.kidFriendly = kidFriendly;
      this.calories = calories;
    }
  }

  var brownie = new Snack3("Little Debbie", true, 120)
  console.log(brownie);

  var banana = new Snack3("Chiquita", true, 65)
  console.log(banana);

  // Prompt 3: Shirt
  class Shirt3{
    constructor(neckline, color, material){
    this.neckline = neckline;
    this.color = color;
    this.material = material;
    }
  }

  var dressShirt = new Shirt3("collar", "white", "silk")
  console.log(dressShirt);

  var workoutShirt = new Shirt3("crew neck", "black", "cotton")
  console.log(workoutShirt);
