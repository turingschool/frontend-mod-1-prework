/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

//DONE
// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.

//DONE
// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.

//DONE
// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

//DONE
// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.

//DONE
// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.

//DONE
// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.

class Burrito {
  constructor(protein, base, toppings) {
    this.protein = protein;
    this.base = base;
    this.toppings = toppings;
  }
  changeProtein (update) {
    this.protein = update;
  }
  addTopping (newTop) {
    this.toppings.push(newTop);
  }
}
  var veggie = new Burrito ("tofu", "beans and rice", ["cheese", "salsa", "lettuce", "cilantro"]);
  veggie.addTopping("fajita veggies");
  console.log(veggie);

  var chicken = new Burrito ("chicken", "beans and rice", ["cheese", "salsa", "lettuce"]);
  chicken.changeProtein("fish");
  console.log(chicken);

  var steakFajita = new Burrito ("beef", "fajita veggies", ["cheese", "salsa", "sour cream"]);
  steakFajita.addTopping("extra cheese");
  console.log(steakFajita);
