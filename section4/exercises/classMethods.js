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
  changeProtein() {
    this.protien = "ground beef";
  }
  addTopping() {
    this.toppings[3] = "jalepenos"
  }
  // ADD CODE
};

var chickenBurrito = new Burrito ("chicken", "wheat", ["cheese", "sour cream", "beans"])
var veggieBurrito = new Burrito ("mushrooms", "white", ["rice", "corn", "salsa"])
var steakBurrito = new Burrito ("steak", "wheat", ["salsa", "beans", "sour cream"])
// ADD CODE
chickenBurrito.changeProtein();
console.log(chickenBurrito);
veggieBurrito.addTopping();
steakBurrito.addTopping();
console.log(veggieBurrito);
console.log(steakBurrito);
