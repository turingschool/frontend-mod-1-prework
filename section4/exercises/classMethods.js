/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor. √

// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings. √

// The burrito class should have a method named `changeProtein`. √
// This method should accept one argument, a String. √
// The method should re-assign this.protein to the value that was passed in. √

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed. √

// The burrito class should have a method named `addTopping`. √
// This method should accept one argument, a String. √
// The method should add a topping to the list of toppings held in state. √

// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed. √

// ADD CODE

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
    this.toppings.push = newTopping
  }

};

var vegetarianBurrito = new Burrito("Black and pinto beans", "burrito bowl with rice", ["cilantro", "salsa verde", "sour cream", "shredded cheese", "guacamole", "pico de gallo"])
  vegetarianBurrito.changeProtein("Grilled tofu");
  vegetarianBurrito.addTopping("jalapenos");
 console.log(vegetarianBurrito);
// the .push is logging the word "push" in the output...this looks weird but it's at least adding the thing to the array...

var beefBurrito = new Burrito("Shredded beef", "toasted tortilla and rice", ["pico de gallo", "shredded lettuce", "sour cream", "green chile"]);
  beefBurrito.changeProtein("Grilled steak");
  beefBurrito.addTopping("shredded cheese");
console.log(beefBurrito);

var chickenBurrito = new Burrito ("Grilled chicken", "toasted tortilla and rice", ["mango salsa", "habanero salsa", "shredded lettuce", "shredded cheese", "sour cream"]);
  chickenBurrito.changeProtein("Shredded chicken");
console.log(chickenBurrito);

// ADD CODE
