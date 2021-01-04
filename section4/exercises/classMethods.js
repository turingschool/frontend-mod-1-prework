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

  changeProtein(protein) {
    this.protein = protein;
  }

  addTopping(topping) {
    this.toppings.push(topping);

  }

  // ADD CODE
}


//Storing a new burrito with different toppings for each instance of each burritos.
var chickenBurrito = new Burrito("chicken", "white rice", ["pico", "corn salsa", "sour cream"]);
var steakBurrito = new Burrito("steak", "brown rice", ["tomatillo", "lettuce", "cilantro"]);
var veggieBurrito = new Burrito("black beans", "brown rice", ["red salsa", "fajita onions", "fajita peppers"]);
//Logging each burrito to conole to make sure they appear correctly
console.log(chickenBurrito);
console.log(steakBurrito);
console.log(veggieBurrito);
//Using the changeProtein method to change the protein from chicken to carnitas.
chickenBurrito.changeProtein("carnitas");
//Log the burrito to the console to make sure protein changed.
console.log(chickenBurrito);
//Using the addTopping function to add toppings to two of the burritos.
steakBurrito.addTopping("ranch");
veggieBurrito.addTopping("onion");
//Logging the burritos to the console to make sure the toppings have been added.
console.log(steakBurrito);
console.log(veggieBurrito);







// ADD CODE
