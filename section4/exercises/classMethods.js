/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  // ADD CODE
  changeProtein() {
    this.protein = 'Impossibe Meat';
  }
  addTopping() {
    this.toppings.push("Cilantro");
  }

};

// ADD CODE
var vegan = new Burrito('Black Beans', 'Brown Rice', ['Guacamole', 'lettuce', 'Onions']);
var vegetarian = new Burrito('Morning Star Chickun', 'White Rice', ['Tomatoes', 'Jalapenos', 'Peppar Jack']);
var meat = new Burrito('Shredded Beef', 'White Rice', ['Guacamole', 'Jalapenos', 'Sour Cream', "Cheddar"]);

vegan.changeProtein();
console.log(vegan);

//My Comment: Lines 60 through 64 are the subject of my question in my reflection.md file 
//I originally combined lines 60 and 61 together and lines 63 and 64 together. I just separated
//with a comma and did a single semicolon after the line. This worked but I'm not sure if this
//(below) is the better way and is clearer.

meat.addTopping();
vegetarian.addTopping();

console.log(meat);
console.log(vegetarian);
