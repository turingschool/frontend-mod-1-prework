/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// X The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// X Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// X The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// X Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// X The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// X Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  changeProtein(newProtein) {
    this.protein = newProtein;
  }
  addTopping(newTopping) {
    this.toppings.push(newTopping);
  }
};

// ADD CODE
var breakfastBurrito = new Burrito("egg", "potato", ["tabasco sauce", "onion", "chorizo", "pepperjack"]);
var barbacoaBurrito = new Burrito("barbacoa", "rice", ["guacamole", "habanero sauce", "lettuce", "jalapenos"]);
var chickenBurrito = new Burrito("chicken", "rice", ["black beans", "corn", "green chili", "salsa verde"]);

chickenBurrito.changeProtein("BBQ chicken");
console.log(chickenBurrito);

barbacoaBurrito.addTopping("mozzarella");
console.log(barbacoaBurrito);

breakfastBurrito.addTopping("mushrooms");
console.log(breakfastBurrito);
