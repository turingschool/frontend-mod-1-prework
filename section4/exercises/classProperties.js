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

var husky = new Dog();
var collie = new Dog();

console.log(husky);
console.log(collie);

// Prompt 2: Snack

class Snack {

}

var chips = new Snack();
var popcorn = new Snack();

console.log(chips);
console.log(popcorn);

// Prompt 3: Shirt

class Shirt {

}

var buttonUp = new Shirt();
var shortSleeve = new Shirt();

console.log(buttonUp);
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
  name =  'Rover';
  age =  5;
  breed =  'Border Collie';
};

var collie = new Dog();

console.log(collie);

// Prompt 2: Snack

class Snack {
  type = 'Chips';
  brand = 'Lays';
  expirationDate = '2/22/2021';
}

var chips = new Snack();

console.log(chips);

// Prompt 3: Shirt

class Shirt {
  hasButtons = true;
  brand = 'Gap';
  material = 'Cotton';
}

var shortSleeve = new Shirt();
console.log(shortSleeve);


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
    constructor(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;
    }
  };

  var collie = new Dog('Loki', 4, 'Border Collie');
  var husky = new Dog('Nanuk', 7, 'Siberian Husky');
  console.log(collie);
  console.log(husky);

  // Prompt 2: Snack

  class Snack {
    constructor(type, brand, expDate) {
      this.type = type;
      this.brand = brand;
      this.expirationDate = expDate;
    }
  };

  var chips = new Snack('Chips', 'Lays', '2/22/2021');
  var popcorn = new Snack('Popcorn', 'Act II', '3/4/2022');
  console.log(chips);
  console.log(popcorn);

  // Prompt 3: Shirt

  class Shirt {
    constructor(hasBtns, brand, material) {
      this.hasButtons = hasBtns;
      this.brand = brand;
      this.material = material;
    }
  };

  var shortSleeve = new Shirt(false, 'Gap', 'Cotton');
  var buttonUp = new Shirt(true, 'Bonobos', 'Merino Wool');
  console.log(shortSleeve);
  console.log(buttonUp);
