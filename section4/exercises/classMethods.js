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
  constructor(base, toppingsArray, opt_protein="") {
    this.protein = opt_protein;
    this.base = base;
    this.toppingsArray = toppingsArray;
  }
  
  changeProtein(preferedProtein){
    this.protein = preferedProtein;
  }

  addTopping(singleTopping){
    this.toppingsArray.push(singleTopping);
  }
};

var beanBurrito = new Burrito('Wheat', ['Spinach', 'Peppers', 'Guacamole']);

beanBurrito.changeProtein('Bean');
console.log('After protein change' ,beanBurrito);
beanBurrito.addTopping('Salsa');
console.log('After topping change' ,beanBurrito);

var beefBurrito = new Burrito('Flour', ['Lettuce', 'Cheese', 'Queso']);

beefBurrito.changeProtein('Beef');
console.log('After protein change' ,beefBurrito);
beefBurrito.addTopping('Sour Cream');
console.log('After topping change' ,beefBurrito);

var chickenBurrito = new Burrito('Bowl', ['Spinach', 'Peppers', 'Sour Cream', 'Cheese']);

chickenBurrito.changeProtein('Chicken');
console.log('After protein change' ,chickenBurrito);
