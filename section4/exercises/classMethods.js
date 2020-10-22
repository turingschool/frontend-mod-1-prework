/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    // 1) Add toppings property
    this.toppings = toppings;
  }

  // ADD CODE
  // 4) The burrito class should have a method named `changeProtein`.
  // 5) This method should accept one argument, a String.
  // 6) The method should re-assign this.protein to the value that was passed in.
  changeProtein(newProtein) {
    this.protein = newProtein;
  }
  // 8) The burrito class should have a method named `addTopping`.
  // 9) This method should accept one argument, a String.
  // 10) The method should add a topping to the list of toppings held in state.
  addTopping(newTopping) {
    this.toppings.push(newTopping);
    //console.log(this.toppings);
    //this.toppings = (this.toppings);
  }

};

// ADD CODE
// 2) Create 3 object Instances
// 3) The toppings argument should be an Array of Strings
var meat = new Burrito("Chicken", "Corn Tortillas", ["Lettuce", "Cheese", "Tomatoes"]);
console.log("1 Meat", meat)
var veggie = new Burrito("Tofu", "Gluten Free Tortillas", ["Lettuce", "Tomatoes", "Cucumbers"]);
console.log("2 Veggie", veggie)
var bean = new Burrito("Black Beans", "Flour Tortillas", ["Lettuce", "Sour Cream", "Tomatoes"]);
console.log("3 Bean", bean)

//this.protien = "Beef"
//protein = "Eggs"

// 7) Call the `changeProtein` method on a burrito, then log the burrito to verify
newProtein = "Beef"
//console.log(newProtein)
bean.changeProtein(newProtein)
console.log("4 New Protein Not Bean", bean) // result protein = Beef not bean

// 11) Call the `addTopping` method on two burritos, then log the burritos to verify
newTopping = "Salsa"
//console.log(addTopping)
meat.addTopping(newTopping)
console.log("5 Add Salsa to Meat", meat) // result 1 additioal topping = salsa

// INSTRUCTIONS
// 1) The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

// 2) Below/outside of the class declaration, create 3 object instances of a burrito.
// 3) The toppings argument should be an Array of Strings.

// 4) The burrito class should have a method named `changeProtein`.
// 5) This method should accept one argument, a String.
// 6) The method should re-assign this.protein to the value that was passed in.

// 7) Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

// 8) The burrito class should have a method named `addTopping`.
// 9) This method should accept one argument, a String.
// 10) The method should add a topping to the list of toppings held in state.

// 11) Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.
