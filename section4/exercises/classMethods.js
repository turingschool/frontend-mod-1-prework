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
  this.protein = "steak"
}
addTopping() {
this.toppings.push("cilantro");
}
};

var breakfastBurrito = new Burrito("pulled pork", " black beans", ["sour cream","avocado","cheese"]);
var kidsBurrito = new Burrito("egg", "potato", ["sour cream", "cheese", "onion"]);
var spicyBurrito = new Burrito("spicy chicken", "kidney beans", ["onion","roasted pepper","cheddar cheese", "sour cream"]);

//console.log(breakfastBurrito);
//console.log(kidsBurrito);
//console.log(spicyBurrito);

spicyBurrito.changeProtein();
console.log(spicyBurrito);
breakfastBurrito.addTopping();
console.log(breakfastBurrito);
kidsBurrito.addTopping();
console.log(kidsBurrito);

//EXPECTED OUTPUT SHOULD LOOK LIKE FROM THIS:

/*

Burrito {
  protein: 'pulled pork',
  base: ' black beans',
  toppings: [ 'sour cream', 'avocado', 'cheese' ]
}
Burrito {
  protein: 'egg',
  base: 'potato',
  toppings: [ 'sour cream', 'cheese', 'onion' ]
}
Burrito {
  protein: 'spicy chicken',
  base: 'kidney beans',
  toppings: [ 'onion', 'roasted pepper', 'cheddar cheese', 'sour cream' ]
}
*/

// TO THIS:

/*
Burrito {
  protein: 'steak',
  base: 'kidney beans',
  toppings: [ 'onion', 'roasted pepper', 'cheddar cheese', 'sour cream' ]
}
Burrito {
  protein: 'pulled pork',
  base: ' black beans',
  toppings: [ 'sour cream', 'avocado', 'cheese', 'cilantro' ]
}
Burrito {
  protein: 'egg',
  base: 'potato',
  toppings: [ 'sour cream', 'cheese', 'onion', 'cilantro' ]
}
*/
