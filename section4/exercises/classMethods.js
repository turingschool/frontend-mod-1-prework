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
  changeProtein(newProtein) {
    this.protein = newProtein;
  }

  addTopping(newTopping) {
    this.toppings.push(newTopping);
  }

};

var bean = new Burrito("beans", "flour tortilla", ["cheese", "salsa", "sour cream"]);
var chicken = new Burrito("shredded chicken", "corn tortilla", ["cheese", "jalapeños", "tomatoes"]);
var beef = new Burrito("shredded beef", "wheat tortilla", ["lettuce", "salsa", "pico de gallo"]);

console.log("\nMy first instance of the Burrito class: ");
console.log(bean);

console.log("\nMy second instance of the Burrito class: ");
console.log(chicken);

console.log("\nMy third instance of the Burrito class: ");
console.log(beef);


// ADD CODE
bean.changeProtein("chicken");
console.log("\nAfter changing a protein in the first burrito: ");
console.log(bean);

chicken.addTopping("hot sauce");
console.log("\nAfter adding a topping to the second burrito: ");
console.log(chicken);

beef.addTopping("sunflower seeds");
console.log("\nAfter adding a topping to the third burrito: ");
console.log(beef);
