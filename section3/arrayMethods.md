# Methods to Research
## pop()
-removes the last element from an array and returns that element.
-This method changes the length of the array

var plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
//expected output: "tomato"
console.log (plants);
//expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

## push()
adds one more more elements to the end of an array and returns the new length of the Array

var animals = ["pigs", "goats", "sheep"];
var count = animals.push("cows");
console.log(count);
//expected output: Array ["pigs", "goats", "sheep", "cows"]

## unshift()
-adds one or more elements to the beginning of an array and returns the new length of the array

const array1= [1,2,3];
console.log(array1.unshift(4,5));
//expected output: 5

console.log(array1);
//expected output: Array [4,5,1,2,3]
