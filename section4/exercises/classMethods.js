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

  changeProtein(proteinChanged) {
    this.protein = proteinChanged;
  }

  addTopping(toppingAdded) {
    this.toppings = toppingAdded + "," + this.toppings;
  }

  // I founded the answer but i did not understant very well.
};

var breakfastBurrito = new Burrito('eggs', 'tortilla', ["mossarela cheese", "breakfast sausages","avocado"]);
console.log(breakfastBurrito);

breakfastBurrito.changeProtein("carnitas");
console.log(breakfastBurrito);

var beefBurrito = new Burrito('beef', 'tortilla', ["guacamole", "tomatoes", "black beans", "rice"]);
console.log(beefBurrito);

beefBurrito.addTopping("chives, parmesan cheese, peper ");
//beefBurrito.addTopping("parmesan cheese ");
console.log(beefBurrito);

var chickenBurrito = new Burrito('chicken', 'tortilla', ["guacamole", "salsa verde", "tomatoes","cream cheese"]);
chickenBurrito.changeProtein("eggs");
console.log(chickenBurrito);

// ADD CODE
