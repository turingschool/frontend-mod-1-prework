// var numbers = [];
//
// for (var x = 1; x <= 100; x++) {
//   numbers.push(x);
// }
//
// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//  }
//  // console.log(numbers);
//
//  var fizzbuzz = numbers.map(function(number){
//   if (number % 5 == 0) {
//      number = "fizz"
//       // console.log("fizz");
//    } else if (number % 3 == 0) {
//     number = "buzz"
//        // console.log("buzz");
//    };
//  });
// //
// var fizzbuzz = numbers.forEach((number, i) => {
//   if (number % 5 == 0) {
//     number = "fizz"
//      // console.log("fizz");
//   } else if (number % 3 == 0) {
//     number = "buzz"
//        // console.log("buzz");
//   };
// });

// console.log(fizzbuzz);

//the above code was my fist attempt at this exercise...




function fizzBuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0 ) {
      console.log("buzz");
    }else {
      console.log(i);
    }
  }
}

fizzBuzz();
