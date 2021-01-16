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
  // You do not need any properties at this time!!

// Prompt 1: Dog
class Dog {

  }
var milo = new Dog()
var marley = new Dog()

console.log(milo)
console.log(marley)

// Prompt 2: Snack
class Snack {

}
var doritos = new Snack()
var kale = new Snack()

console.log(doritos);
console.log(kale);

// Prompt 3: Shirt
class Shirt {

}

var abercrombie = new Shirt()
var aeropostale = new Shirt()

console.log(abercrombie)
console.log(aeropostale)
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
class Doggy {
  constructor(breed, age, size) {

  }
}
var milo = new Doggy()
var marley =  new Doggy()

console.log(milo)
console.log(marley)

// Prompt 2: Snack
class Snacky {
  constructor(amt, flavor, healtyStr) {

  }
}
var doritos = new Snacky()
var kale = new Snacky()

console.log(doritos);
console.log(kale);


// Prompt 3: Shirt
class Shirty {
  constructor(size, cottonStr, sleeves) {

  }
}

var abercrombie = new Shirt()
var aeropostale = new Shirt()

console.log(abercrombie)
console.log(aeropostale)

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
  class Dogg {
    constructor(breed, age, size) {
      this.breed = breed
      this.age = age
      this.size = size
    }
  }
  var milo = new Dogg('husky', 3,'large')
  var marley = new Dogg('toy poodle', 2, 'small')

  console.log(milo)
  console.log(marley)

  // Prompt 2: Snack
  class Snaack {
    constructor(amt, flavor, healthStr) {
      this.price = amt
      this.flaver = flavor
      this.healthy = healthStr
    }
  }
  var doritos = new Snaack (3, "salty", "no")
  var kale = new Snaack (2, "bitter", "yes")

  console.log(doritos);
  console.log(kale);

  // Prompt 3: Shirt
  class Shiirt {
    constructor(size, cottonStr, sleeves) {
      this.shirtSize = size
      this.isCotton = cottonStr
      this.sleeves = sleeves
    }
  }
  var abercrombie = new Shiirt ("medium", true, "long sleeves")
  var aeropostale = new Shiirt ("large", false, "short sleeves")

  console.log(abercrombie)
  console.log(aeropostale)
