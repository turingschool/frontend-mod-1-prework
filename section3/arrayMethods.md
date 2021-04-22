### **Pop** -  The pop() method *removes the last element from an array* and returns that element. This method changes the length of the array.
///
console.log(plants);
expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
expected output: Array ["broccoli", "cauliflower", "cabbage"]
///


### **Push** - The push() method *adds one or more elements to the end of an array* and returns the new length of the array.
///
const count = animals.push('cows');
console.log(count);
expected output: 4
console.log(animals);
expected output: Array ["pigs", "goats", "sheep", "cows"]
///


### **Shift**  - The shift() method *removes the first element from an array* and returns that removed element. This method changes the length of the array.
///
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
expected output: Array [2, 3]
console.log(firstElement);
///


### **Unshift** - The unshift() method *adds one or more elements to the beginning of an array* and returns the new length of the array.

///
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
expected output: 5
console.log(array1);
expected output: Array [4, 5, 1, 2, 3]
///
