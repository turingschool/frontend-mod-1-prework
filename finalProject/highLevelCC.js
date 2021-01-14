class Letters {
  constructor(posVal,negVal) {
    this.posVal = posVal;
    this.negVal = negVal;
  }
  var a = new Letter(0,-26);
  var b = new Letter(1,-25);
  var c = new Letter(2,-24);
  var d = new Letter(3,-23);
  var e = new Letter(4,-22);
  var f = new Letter(5,-21);
  var g = new Letter(6,-20);
  var h = new Letter(7,-19);
  var i = new Letter(8,-18);
  var j = new Letter(9,-17);
  var k = new Letter(10,-16);
  var l = new Letter(11,-15);
  var m = new Letter(12,-14);
  var n = new Letter(13,-13);
  var o = new Letter(14,-12);
  var p = new Letter(15,-11);
  var q = new Letter(16,-10);
  var r = new Letter(17,-9);
  var s = new Letter(18,-8);
  var t = new Letter(19,-7);
  var u = new Letter(20,-6);
  var v = new Letter(21,-5);
  var w = new Letter(22,-4);
  var x = new Letter(23,-3);
  var y = new Letter(24,-2);
  var z = new Letter(25,-1);
}

function encode(input,shiftValue) {

}


// class TransactionItem {
//   constructor(amt, transactionDate, type) {
//     this.amount = amt;
//     this.date = transactionDate;
//     this.type = type;
//   }
// }
//
// var deposit = new TransactionItem(200, "02/03/20", "deposit");
// console.log(deposit);
// Set a function to encode with parameters of input (word to encode) and shift value (in spaces left);
//
// Set a class Letters;
// Create a new object instance for each letter of the alphabet;
// for each letter instance assign a positive value and negative value property that is based on:
//   positive: a = 0, b = 1, c = 2 .... z = 25
//   negative: a = -25, b = -24, c = -23 .... x = -3, y = -2, z = -1;
//
//   var a new Letter();
//   this.posVal = 0
//   this.negVal = -25
//
// Separate each character in the input into its own string in an array and set as new variable inputLetters;
//
// Create a loop on the array inputLetters with steps;
//   If the string is " ", (i.e. a space);
//     output " ";
//   else match the string value with the object instance of the same value;
//     Evaluate the positiveValue of the matched instance - the shift value and create variable newValue;
//     Find the instance that has newValue as a property;
//     log the value of that instance;
// Repeat for each element in the inputLetters array;
//
// Concatenate outputs to create one string and set as new variable output;
//
// call the encode function with your input and shift value;
// }
