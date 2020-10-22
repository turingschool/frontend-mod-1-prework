/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/


// YOU DO: Add two methods to the `lunchOrder` object below.
  // 1. `prepare` - log out a sentence to let the user know the order is being worked on.
  // 2. `complete` - log out a sentence to let the user know the order is complete.

// I added the methods from line 18 to line 22 as instructed above
var lunchOrder = {
  dish: "BLT",
  beverage: "iced tea",
  tableNumber: 47,
  prepare: function() {
    console.log("Hello, your order is being worked on, and will be ready soon");
  },
  complete: function() {
    console.log("Hello, your order is ready");
  }
};

// Log to the console each property on the `lunchOrder` object.
// A property is the combination of the key-value pair
console.log(lunchOrder);

//for fun, i made this sentence to use each value in the object
console.log("Table " + lunchOrder.tableNumber + " ordered a " + lunchOrder.dish + " with an " + lunchOrder.beverage);
//console.log(lunchOrder.dish);
//console.log(lunchOrder.beverage);
//console.log(lunchOrder.tableNumber);

// Call each method and run the file in node to verify they are working as expected.
// These logs call each method as requested
lunchOrder.prepare();
lunchOrder.complete();
