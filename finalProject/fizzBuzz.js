for(var i = 1; i < 100; i++){
  if(i % 15 === 0){
    console.log("FizzBuzz")
  } else if (i % 5 === 0){
    console.log("Buzz")
  } else if(i % 3 === 0){
    console.log("Fizz")
  } else {
    console.log(i)
  }
}

//this should work for any number combination you would want to plug in using the variables below the code
function fizzBuzz(num, num2, numCombined) {
  for(var i = 1; i < 100; i++){
    if(i % numCombined === 0){
      console.log("FizzBuzz")
    } else if (i % num2 === 0){
      console.log("Buzz")
    } else if(i % num === 0){
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
};

var num = 2;
var num2 = 4;
var numCombined = num * num2
fizzBuzz(num, num2, numCombined)
