/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Complete each task, using the Burrito class below as a starting point.

Make sure to run the file with node in your command line.
*/

// The burrito should also have a property called `toppings`. It should be assigned to
// the toppings parameter in the constructor.
class Burrito {
  constructor(toppings){
    this.toppings= toppings;
    this.protein= "chicken";
  }
  changeProtein(){
    this.protein ="steak";
    }
    addToppings(){
      this.toppings.push("salsa");
    }
  }


// Below/outside of the class declaration, create 3 object instances of a burrito.
// The toppings argument should be an Array of Strings.
var burrito1 = new Burrito (["lettuce","brown rice","tomato"]);
var burrito2 = new Burrito (["white rice","lettuce",]);
var burrito3 = new Burrito (["cilantro rice","veggies"]);

// The burrito class should have a method named `changeProtein`.
// This method should accept one argument, a String.
// The method should re-assign this.protein to the value that was passed in.

// Call the `changeProtein` method on a burrito, then log the burrito to verify
// that the protein has been changed.
burrito1.changeProtein();
console.log(burrito1);

// The burrito class should have a method named `addTopping`.
// This method should accept one argument, a String.
// The method should add a topping to the list of toppings held in state.
burrito1.addToppings();
console.log(burrito1)
// Call the `addTopping` method on two burritos, then log the burritos to verify
// that the proteins have been changed.
burrito2.addToppings();
burrito2.changeProtein();
console.log(burrito2);

burrito3.addToppings();
burrito3.addToppings();
console.log(burrito3);

class BurritoInfo {
  constructor(protein, base) {
    this.protein = protein;
    this.base = base;
  }

  // ADD CODE
};

// ADD CODE
