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
  //class Burrito. Object instances: chicken, steak, veggie, beef
    constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  changeProtein (switchProtein) {
    this.protein = switchProtein
  };
  addTopping(topping) {
  this.toppings.push(topping);
  return this.toppings;
  };
};
var chickenBurrito = new Burrito ('chicken', 'flour', ['lettuce', 'tomato', 'cheese ' ]);

var steakBurrito = new Burrito ('steak', 'corn', ['lettuce', 'tomato', 'cheese '] ');

var veggieBurrito = new Burrito ('veggies', 'wrap', ['lettuce', 'tomato', 'cheese '] );

var beefBurrito = new Burrito ('beef', 'corn', ['lettuce', 'tomato', 'cheese ']);

chickenBurrito.changeProtein('pork');
console.log(chickenBurrito);

veggieBurrito.changeProtein('fish');
console.log(veggieBurrito)

steakBurrito.addTopping('hot peppers, onions');
console.log(steakBurrito)

beefBurrito.addTopping('extra cheese');
console.log(beefBurrito)

  // ADD CODE


// ADD CODE
