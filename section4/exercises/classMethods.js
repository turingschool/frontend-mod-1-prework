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
    this.protein = "sofritas";
    console.log("We updated your protein to sofritas!");
  }
  addTopping() {
    this.toppings.push("salsa");
    console.log("We added salsa to your burrito!");
  }
};

// ADD CODE
var burritoBowl = new Burrito("chicken", "bowl", ["brown rice", "pinto beans", "fajitas"]);
burritoBowl.changeProtein();
console.log(burritoBowl);
//console.log(burritoBowl);

var beefBurrito = new Burrito("beef", "whole wheat wrap", ["white rice", "black beans", "zucchini"]);
beefBurrito.addTopping();
console.log(beefBurrito);
//console.log(beefBurrito);

var chickenBurrito = new Burrito("chicken", "white wrap", ["fajitas", "avocado", "corn"]);
chickenBurrito.addTopping();
console.log(chickenBurrito);

//console.log(chickenBurrito);
