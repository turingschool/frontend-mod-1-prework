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
class Dog {}

var shihTzu = new Dog();
var labradorRetriever = new Dog();

console.log(shihTzu, labradorRetriever);

// Prompt 2: Snack
class Snack {}

var frenchFries = new Snack();
var potatoChips = new Snack();

console.log(frenchFries, potatoChips);

// Prompt 3: Shirt
class Shirt {}

var longSleeve = new Shirt();
var tee = new Shirt();

console.log(longSleeve, tee);

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
class DogTwoPointOh {
	constructor() {
		this.height = 16;
		this.weight = 24;
		this.furColor = "black and tan";
	}
}

var dachshund = new DogTwoPointOh();

console.log(dachshund);

// Prompt 2: Snack
class SnackTwoPointOh {
	constructor() {
		this.brand = "hershey's";
		this.flavor = "milk chocolate";
		this.sellBy = "02/01/2022";
	}
}

var chocolateBar = new SnackTwoPointOh();

console.log(chocolateBar);

// Prompt 3: Shirt
class ShirtTwoPointOh {
	constructor() {
		this.color = "red and black";
		this.size = "medium";
		this.sleeveType = "long";
	}
}

var flanel = new ShirtTwoPointOh();

console.log(flanel);

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
	class DogThreePointOh {
		constructor(hgt, wgt, furColor) {
			this.height = hgt;
			this.weight = wgt;
			this.color = furColor;
		}
	}

	dachshund = new DogThreePointOh(16, 24, "black and tan");
	var dobermann = new DogThreePointOh(26, 94, "blue and rust");
	var dogArray = [dachshund, dobermann];

	console.log(dogArray);

	// Prompt 2: Snack
	class SnackThreePointOh {
		constructor(brand, flavor, sellByDate) {
			this.brand = brand;
			this.flavor = flavor;
			this.sellBy = sellByDate;
		}
	}

	chocolateBar = new SnackThreePointOh("hershey's", "milk chocolate", "02/01/2022");
	var cookie = new SnackThreePointOh("chips ahoy!", "original", "04/01/1992");
 	var snackArray = [chocolateBar, cookie];

	console.log(snackArray);

	// Prompt 3: Shirt
	class ShirtThreePointOh {
		constructor(color, shirtSize, sleeveType) {
			this.color = color;
			this.size = shirtSize;
			this.sleeveType = sleeveType;
		}
	}

	flanel = new ShirtThreePointOh("red and black", "medium", "long");
	var muscle = new ShirtThreePointOh("white", "large", null);
	var shirtArray = [flanel, muscle];

	console.log(shirtArray);
