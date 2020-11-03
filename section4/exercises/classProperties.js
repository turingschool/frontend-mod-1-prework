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
  var bloodHound = new Dog();
  var greyHound = new Dog();
  console.log(bloodHound);
  console.log(greyHound);
// Prompt 2: Snack
class Snack {
}
var chips = new Snack();
var cookies = new Snack();
console.log(chips);
console.log(cookies);
// Prompt 3: Shirt
class Shirt {
}
var longSleeve = new Shirt();
var shortSleeve = new Shirt();
console.log(longSleeve);
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
class Dog {
  constructor() {
    this.age = 3;
    this.gender = 'male';
    this.fixed = false;
  }
}
var bo = new Dog();
console.log(bo)
// Prompt 2: Snack
class Snack {
  constructor() {
    this.calories = 50;
    this.sweet = false;
    this.timeAte = `3:23 pm`;
  }
}
var lays = new Snack();
console.log(lays)
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.size = 'large';
    this.vNeck = false;
    this.sleeveLength = 12;
  }
}
var patagonia = new Shirt();
console.log(patagonia)
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
  constructor(age, gender, fixed) {
    this.age = age;
    this.gender = gender;
    this.fixed = fixed;
  }
}
var bo = new Dog(3, 'male', true);
var nina = new Dog(9, 'female', false);
console.log(bo);
console.log(nina);
// Prompt 2: Snack
class Snack {
  constructor(cal, sweet, time) {
    this.calories = cal;
    this.sweet = sweet;
    this.timeAte = time;
  }
}
var lays = new Snack(50, false, `3:30 pm`);
var hotDog = new Snack(100, false, '12:30 pm')
console.log(lays);
console.log(hotDog);
// Prompt 3: Shirt
class Shirt {
  constructor(size, material, sleeveLength) {
    this.size = size;
    this.material = material;
    this.sleeveLength = sleeveLength;
  }
}
var patagonia = new Shirt(`large`, `cotton`, 12 );
var gucci = new Shirt(`small`, `silk`, 30);
console.log(patagonia);
console.log(gucci)
