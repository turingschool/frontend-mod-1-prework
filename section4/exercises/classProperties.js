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
//
// // Prompt 1: Dog
// class Dog {
//
// }
// var smallDog = new Dog();
// var bigDog = new Dog();
//
// console.log(smallDog);
// console.log(bigDog);
//
// // Prompt 2: Snack
// class Snack {
//
// }
//
// var morningSnack = new Snack();
// var eveningSnack = new Snack();
//
// console.log(morningSnack);
// console.log(eveningSnack);
//
// // Prompt 3: Shirt
// class Shirt {
//
// }
//
// var shortSleeve = new Shirt();
// var longSleeve = new Shirt();
//
// console.log(shortSleeve);
// console.log(longSleeve);

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

// class Dog {
//   constructor() {
//     this.weight = 10;
//     this.color = 'Black';
//     this.breed = 'Chihuahua';
//   }
// };
//
// var smallDog = new Dog();
//
//
// console.log(smallDog);
//
//
// // Prompt 2: Snack
//
// class Snack {
//   constructor() {
//     this.name = 'Chesse';
//     this.protein = 10;
//     this.fat = '10%';
//   }
// };
//
// var morningSnack = new Snack();
//
//
// console.log(morningSnack);
//
//
// //Prompt 3: Shirt
//
// class Shirt {
//   constructor () {
//     this.dressCode = 'Casual';
//     this.numberOfButtons = 9;
//     this.color = 'Beige';
//   }
// };
//
// var shortSleeve = new Shirt();
//
//
// console.log(shortSleeve);


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
    constructor(lbs, dogColor, dogBreed) {
      this.weight = lbs;
      this.color = dogColor;
      this.breed = dogBreed;
    }
  };

  var smallDog = new Dog(10, 'Black', 'Chihuahua');
  var bigDog = new Dog(70, 'Caramel', 'Golden Retriever');

  console.log(smallDog);
  console.log(bigDog);

  // Prompt 2: Snack

  class Snack {
    constructor(name, gr, percent) {
      this.name = name;
      this.protein = gr;
      this.fat = percent;
    }
  };

  var morningSnack = new Snack('Cheese', 10, '10%');
  var eveningSnack = new Snack('butter', 14, '40%');

  console.log(morningSnack);
  console.log(eveningSnack);

  //Prompt 3: Shirt

  class Shirt {
    constructor (dressCode, numberOfButtons, color) {
      this.dressCode = dressCode;
      this.numberOfButtons = numberOfButtons;
      this.color = color;
    }
  };

  var shortSleeve = new Shirt('Formal', 9, 'Blue');
  var longSleeve = new Shirt('Casual', 8, 'Beige');

  console.log(shortSleeve);
  console.log(longSleeve);
