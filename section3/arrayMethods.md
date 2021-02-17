# Array Methods
- **pop**

Removes the last element from an array and returns that element. This method changes the length of the array. \
In my own words, the pop() method removes the last element from an array and shows which element was removed from the array. \
var fruits = ["apple", "peach", "blackberry"]; \
console.log(fruits.pop()); \
//displays: "blackberry" //shows the removed element \
//break \
console.log(fruits); \
//displays: ["apple", "peach"]; //shows what is left in the array \
fruits.pop();  //removes the last element again \
//displays "peach" //"peach was removed from Array" \
console.log(fruits); \
//displays ["apple"] //which is all that's left in array 


- **push**

Adds one or more elements to the end of an array, and returns the new length of the array. \
Unlike the pop() method which removes the last element of an array, the push() method adds more elements to an array instead. \

var fruits = ["apple", "peach","blackberry"]; \
var moreFruits = fruits.push("mango", "avocado"); \
console.log(fruits); //shows the complete list again with the added elements \
//displays ["apple", "peach", "blackberry", "mango", "avocado"] \
console.log(moreFruits); // shows the new length of the array \
//displays: 5

- **shift**
The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. \
var shoppingList = ["coffe", "juice", "rice"]; \
var removeFirstElement = shoppingList.shift(); \
console.log(shoppingList); \
//displays: ["juice", "rice"]; //"coffee is gone" \
//break \
console.log(removeFirstElement); \
//displays: coffee

- **unshift**
Adds one or more elements to the front of an array, and returns the new length of the array. \
var shoppingList = ["coffe", "juice", "rice"]; \
shoppingList.unshift("pen", "paper"); \
console.log(shoppingList); \
//displays: ["pen", "paper", "coffee", "juice", "rice"] \
//Or another way to do it: \
var shoppingList = ["coffe", "juice", "rice"]; \
console.log(shoppingList.unshift("pen", "paper")); \
//displays: 5 \
console.log(shoppingList); \
//displays: ["pen", "paper", "coffee", "juice", "rice"]
