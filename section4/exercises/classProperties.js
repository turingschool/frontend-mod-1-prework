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

  var type = "husky";
  var toy = "rope";

console.log(type);
console.log(toy);

// Prompt 2: Snack

class Snack {}

var time = "afternoon";
var bestSnack = "cheese and crackers";


console.log(time);
console.log(bestSnack);

// Prompt 3: Shirt

class Shirt {}

var blouse = "silk";
var style = "dressy";


console.log(blouse);
console.log(style);
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


class DogDetails {
constructor() {
this.type = "Australian shepherd";
this.toy = "tennis ball";
this.treat = "peanut butter biscuit";
 }
}

var toy = new DogDetails();
console.log(toy);

// Prompt 2: Snack


class SnackToEnjoy {
  constructor(){
this.cheese = "cheddar"
this.fruit = "cherries"
this.vegetable = "cucumber"
  }
}

var afternoonSnack = new SnackToEnjoy ();
console.log(afternoonSnack);


// Prompt 3: Shirt

class ShirtsPacked {
  constructor(){
this.fancy = "blouse"
this.casual = "tank top"
this.material = "cotton"
  }
}

var newShirt = new ShirtsPacked();
console.log(newShirt);


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

class Dogs {
constructor(breed, toys, treats) {
this.type = breed;
this.toy = toys;
this.treat = treats;
 }
}

var dogAdopted = new Dogs("husky", "sticks", "dog biscuits");
console.log(dogAdopted);

var dogNextDoor = new Dogs("beagle", "tennis ball", "pig's ear");
console.log(dogNextDoor);


//Prompt 2: Snack



class SnacksToBring {
  constructor(dips, chips, salads){
this.dip = dips;
this.chip = chips;
this.salad = salads;
  }
}

var picnic = new SnacksToBring("salsa", "tortilla chips", "fruit salad");
console.log(picnic);

var familyReunion = new SnacksToBring("queso", "corn chips", "bean salad");
console.log(familyReunion);

 // Prompt 3: Shirt

class ShirtsBought {
  constructor(work, style, pattern){
this.work = work;
this.type = style;
this.pattern = pattern;
  }
}

var summerLook = new ShirtsBought("button-down oxford", "t-shirt", "polka dots");
console.log(summerLook);

var updateWardrobe = new ShirtsBought("silk blouse", "button-down", "stripes");
console.log(updateWardrobe);
