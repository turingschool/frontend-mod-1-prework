Method Name notes.

pop- It takes out the last element in the array and removes it from the array.

E.x.   
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
  // expected output: "tomato"
console.log(plants);
  // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

push- Adds an element to the end of the array. Then returns the new array.

E.x.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
  // expected output: 4
console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows"]

shift- Removes the first element of the array Then makes it it's own element.

E.x.
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
  // expected output: Array [2, 3]
console.log(firstElement);
  // expected output: 1

unshift- Adds a element to the beginning of the array.

E.x.
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
  // expected output: 5
console.log(array1);
  // expected output: Array [4, 5, 1, 2, 3]
