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

var goldenRetriever = new Dog();
var lab = new Dog();

console.log(goldenRetriever);
console.log(lab);

// Prompt 2: Snack

class Snack {
};

var apple = new Snack();
var cookie = new Snack();

console.log(apple);
console.log(cookie);

// Prompt 3: Shirt

class Shirt {
};

var flannel = new Shirt();
var teeshirt = new Shirt();

console.log(flannel);
console.log(teeshirt);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

class Dog2 {
  constructor() {
    this.color = 'brown';
    this.weight = 70;
    this.breed = 'lab';
  };
}

var lab = new Dog2;
console.log(lab);

// Prompt 2: Snack

class Snack2 {
  constructor() {
    this.taste = 'sweet';
    this.calories = 250;
    this.ingredients = ['chocolate chips', 'sugar', 'flour', 'eggs'];
  };
}

var cookieDough = new Snack2;
console.log(cookieDough);

// Prompt 3: Shirt

class Shirt2 {
  constructor() {
    this.color = 'blue';
    this.style = 'teeshirt';
    this.material = 'cotton';
  }
}

var blueShirt = new Shirt2;
console.log(blueShirt);

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
  constructor(color, weight, breed) {
    this.color = color;
    this.weight = weight;
    this.breed = breed;
  }
}

var finley = new Dog3('Black and white', 75, 'Bernedoodle');
console.log(finley);

var teddy = new Dog3('yellow', 85, 'Golden retriever')
console.log(teddy);

// Prompt 2: Snack

class Snack3 {
  constructor(taste, calories, ingredients) {
    this.taste = taste;
    this.calories = calories;
    this.ingredients = ingredients;
  }
}

var apple = new Snack3('sweet and tart', 80, 'apple');
console.log(apple);

var charcuterie = new Snack3('Savory', 300, ['cheese', 'crackers', 'salami']);
console.log(charcuterie);

// Prompt 3: Shirt

class Shirt3 {
  constructor(color, style, material) {
    this.color = color;
    this.style = style;
    this.material = material;
  }
}

var paigesBlueShirt = new Shirt3('blue', 'tank top', 'polyester');
console.log(paigesBlueShirt);

var finleysJersey = new Shirt3('Green and yellow', 'Packer\'s jersey', 'polyester and cotton blend');
console.log(finleysJersey);
