/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// [x] The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// [x] Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// [x] The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// [x] Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// [x] The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// [x] Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }

  // ADD CODE

  changeProtein(newProtein) {
    this.protein = newProtein;
  }
  addTopping(newTopping) {
    this.toppings.push(newTopping);
  }
};

// ADD CODE

var deansBurrito = new Burrito("Chicken", "White Rice", ["Beans", "Cheese", "Lettuce", "Queso"]);
// console.log(deansBurrito);
var mattsBurrito = new Burrito("Beef", "White Rice", ["Beans", "Cheese", "Salsa", "Sour Cream"]);
var augustsBurrito = new Burrito("Pork", "Brown Rice", ["Lettuce", "Salsa", "Sour Cream", "Corn"]);

deansBurrito.changeProtein("Pork");
console.log(deansBurrito);

mattsBurrito.addTopping("Queso");
console.log(mattsBurrito);

augustsBurrito.addTopping("Beans");
console.log(augustsBurrito);
