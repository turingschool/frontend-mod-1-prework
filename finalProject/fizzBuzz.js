
var lowest = 1;
var highest = 100;
var numList = [];

 //Create number array
for (var i = lowest; i <= highest; i++) {
  numList.push(i);
}


//function should loop an if statement numList.length times to perform modulus
//on array index and output fizz if 0 else output index slot contents.


for (i = numList[0]; i <= numList.length; i++) {
  if (numList[i] % 3 == 0 && numList[i] % 5 == 0) {
    numList[i] = "FizzBuzz";
  }else if (numList[i] % 3 == 0) {
    numList[i] = "Fizz";
  }else if (numList[i] % 5 == 0) {
    numList[i] = "Buzz";
  }
}
console.log(numList);
