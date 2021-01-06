/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/
// [x] task below complete
// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// [x] task below complete
// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

// [x] task below complete
// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// [x] task below complete
// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// [x] task below complete
// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

// [x] task below complete
// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the toppings have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  // ADD CODE

  changeProtein(protein) {
    this.protein = protein;
  }

  addTopping(toppings) {
    this.toppings.push(toppings);
  }

}

// ADD CODE
var burrito1 = new Burrito("chicken", "rice", ["avocado", "sour cream", "salsa"]);
var burrito2 = new Burrito("steak", "beans", ["cheese", "pico de gallo", "hot sauce"]);
var burrito3 = new Burrito("carnitas", "rice + beans", ["corn", "lettuce", "tomato"]);

console.log(burrito1);
console.log(burrito2);
console.log(burrito3);

burrito3.changeProtein("barbacoa");
console.log(burrito3);

burrito1.addTopping("black olives");
burrito2.addTopping("fajita vegetables", "random thing");
console.log(burrito1);
console.log(burrito2);
