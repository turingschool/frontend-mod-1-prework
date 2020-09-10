/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/


// YOU DO: Add two methods to the `lunchOrder` object below.
// 1. `prepare` - log out a sentence to let the user know the order is being worked on.
// 2. `complete` - log out a sentence to let the user know the order is complete.

// Log to the console each property on the `lunchOrder` object.
// Call each method and run the file in node to verify they are working as expected.
/*
var lunchOrder = {
  dish: "BLT",
  beverage: "iced tea",
  tableNumber: 47,
  prepare: true,
  complete: true
};

if ( lunchOrder.prepare ) {
  console.log( "Table number " + lunchOrder.tableNumber + ", your " + lunchOrder.dish +
    " and " + lunchOrder.beverage + " is being prepared." )

} else if ( lunchOrder.prepare == false || lunchOrder.complete ) {
  console.log( "Table number " + lunchOrder.tableNumber + ", your " + lunchOrder.dish +
    " and " + lunchOrder.beverage + " is ready for pickup." )

} else {
  console.log( "Table number " + lunchOrder.tableNumber + ", please confirm your order." )
}
*/
// I wasn't 100% sure what you were looking for here, but the code that I have *below* seems to work.
// I don't know if I even need to validate both .prepare and .complete on line 54.
// Also, I haven't figured out how to change the spacing that this atom package has yet.



var lunchOrder = {
  dish: "BLT",
  beverage: "iced tea",
  tableNumber: 47,
  prepare: true,
  complete: true
};

if ( lunchOrder.complete ) {
  console.log( "Table number " + lunchOrder.tableNumber + ", your " + lunchOrder.dish +
    " and " + lunchOrder.beverage + " is ready for pickup." )

} else if ( lunchOrder.prepare && lunchOrder.complete ) {
  console.log( "Table number " + lunchOrder.tableNumber + ", your " + lunchOrder.dish +
    " and " + lunchOrder.beverage + " is being prepared." )

} else {
  console.log( "Table number " + lunchOrder.tableNumber + ", please confirm your order." )
}