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

  // A class skeleton is displayed as an object literal, a syntax that is one of possibly many pieces
  // for later implimentation.

  var dog = {
    size: "small",
    weightInPounds: 4,
    inShow: true,
  };
  console.log(dog)

  // Expected Return in Hash data pairs: { size: 'small', weightInPounds: 4, inShow: true }


  // Instance of this object:

  var wildDog = {
    size: "large",
    weightInPounds: 15,
    inShow: false
  };

 var domesticDog = {
   size: "medium",
   weightInPounds: 8,
   inShow: true
 };

 console.log(wildDog);
 console.log(domesticDog);

 //Expected Return: { size: 'large', weightInPounds: 15, inShow: false }
//                  { size: 'medium', weightInPounds: 8, inShow: true }

// Prompt 2: Snack

var goodSnack = {
  keepCold: true,
  dry: ["veggies", "meats", "cheeses"],
  toCook: false
};
var chipSnack = {
  keepCold: false,
  dry: ["potatoe chips", "corn chips", "coconut chips"],
  toCook: false
}

console.log(goodSnack);
console.log(chipSnack);

/* Expected Return:
{
  keepCold: true,
  dry: [ 'veggies', 'meats', 'cheeses' ],
  toCook: false
}
{
  keepCold: false,
  dry: [ 'potatoe chips', 'corn chips', 'coconut chips' ],
  toCook: false
}
*/

// Prompt 3: Shirt

var shirtInStore = {
  cost: 309,
  soft: true,
  fabric: "silk"
};
var shirtOnline = {
  cost: 110,
  soft: false,
  fabric: "polyester"
};
console.log(shirtInStore);
console.log(shirtOnline);

// Expected Return:
// { cost: 309, soft: true, fabric: 'silk' }
// { cost: 110, soft: false, fabric: 'polyester' }

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

// Class Skeleton:

var dog = {
   size: "small",
   weightInPounds: 4,
   inShow: true,
 };
 console.log(dog);

 // Expected Return: { size: 'small', weightInPounds: 4, inShow: true }

//Class Declaration:
// object constructor method (syntax from duckett book), specific data types
// as properties and assigned value pairs with variables logged to the console:

class DogBreed {

}
  console.log(DogBreed)

var pomeranian = new DogBreed();
  pomeranian.size = "small";
  pomeranian.weightInPounds = 3;
  pomeranian.inShow = true;

  console.log(pomeranian);

var poodle = new DogBreed();
 poodle.size = "medium";
 poodle.weightInPounds = 6;
 poodle.inShow = false;

  console.log(poodle);

  // Expected Return:
  // [class DogBreed]
  // DogBreed { size: 'small', weightInPounds: 3, inShow: true }
  // DogBreed { size: 'medium', weightInPounds: 6, inShow: false }

// Prompt 2: Snack

class SnackFood {

}
console.log(SnackFood);

var publicPantry = new SnackFood();
    publicPantry.keepCold = "carrots";
    publicPantry.keepDry = "nuts";
    publicPantry.toPrepare = false;


console.log(publicPantry);

var privatePantry = new SnackFood();
    privatePantry.keepCold = "icecream";
    privatePantry.keepDry = "nutella";
    privatePantry.toPrepare = false;


console.log(privatePantry);
// Prompt 3: Shirt

class Shirt {
}
console.log(Shirt);

var teeShirt = new Shirt();

  teeShirt.cost = 24;
  teeShirt.soft = true;
  teeShirt.fabric = "cotton";
  teeShirt.color = "blue";

  console.log(teeShirt);

var swimShirt = new Shirt();
  swimShirt.cost = 33;
  swimShirt.soft = true;
  swimShirt.fabric = "olefin";
  swimShirt.color = "white";

console.log(swimShirt);

// Expected Return:
// [class SnackFood]
// SnackFood { keepCold: 'carrots', keepDry: 'nuts', toPrepare: false }
// SnackFood { keepCold: 'icecream', keepDry: 'nutella', toPrepare: false }


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

  class BestSyntaxSkeleton {
  constructor(bones, fascia, healthy) {
    this.hard = bones;
    this.soft = fascia;
    this.organs = healthy;
  }
}

var wholeBody = new BestSyntaxSkeleton(206, "everywhere", "good to go");
console.log(wholeBody);


  class LapDog {
    constructor(sex, lbs, extra, category) {
      this.assignment = sex;
      this.weight = lbs;
      this.showPup = extra;
      this.type = category;
    }
  }

  var chihuahua = new LapDog ("female", "3 pounds", "true", "chihuahua");
  console.log(chihuahua);
  var pug = new LapDog ("male", "2 pounds", "false", "pug");
console.log(pug);

/* Expected Return:

BestSyntaxSkeleton {
  hard: 206,
  soft: 'everywhere',
  organs: 'good to go'
}
LapDog {
  assignment: 'female',
  weight: '3 pounds',
  showPup: 'true',
  type: 'chihuahua'
}
LapDog {
  assignment: 'male',
  weight: '2 pounds',
  showPup: 'false',
  type: 'pug'
}
*/

// Prompt 2: Snack

class SchoolDaySnack {
  constructor(sensitive, noHumidity, easy, category) {
    this.keepCold = sensitive;
    this.KeepDry = noHumidity;
    this.toPrepare = easy;
    this.type = category;
  }
}

var healthySnack = new SchoolDaySnack("brocolli", "dried fruit", "homemade hummus", "healthy");
console.log(healthySnack);
var junkFoodSnack = new SchoolDaySnack("vegan donuts", "salt and vinegar chips", "cheese dip", "junk");
console.log(junkFoodSnack);

/* expected return:

SchoolDaySnack {
  keepCold: 'brocolli',
  KeepDry: 'dried fruit',
  toPrepare: 'homemade hummus',
  type: 'healthy'
}
SchoolDaySnack {
  keepCold: 'vegan donuts',
  KeepDry: 'salt and vinegar chips',
  toPrepare: 'cheese dip',
  type: 'junk'
}
*/


// Prompt 3: Shirt

class ShirtAtHome {
    constructor(enough, ideal, breathable, category) {
this.cost = enough;
this.soft = ideal;
this.fabric = breathable;
this.type = category;
}
}
var cozyShirt = new ShirtAtHome(24, true, "cotton", "cozy");
console.log(cozyShirt);

var runningShirt = new ShirtAtHome(100, false, "wool", "running");
console.log(runningShirt);

/* Expected Return:
ShirtAtHome { cost: 24, soft: true, fabric: 'cotton', type: 'cozy' }
ShirtAtHome { cost: 100, soft: false, fabric: 'wool', type: 'running' }
*/
