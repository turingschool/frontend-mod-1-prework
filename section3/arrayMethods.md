
###JavaScript Array Methods


* pop: removes the last element in an array and returns it to the caller. This reduces the length of the array by 1.

```
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"
```

* push: adds one, or multiple, elements onto the end of an array. It then returns the length of the array, including the elements just added.

```
var animals = ['pigs', 'goats', 'sheep'];

var count = animals.push('cows');

console.log(count);
// expected output: 4
```

* shift: removes the first element in an array and returns it to the caller. This reduces the length of the array by 1.

```
var array1 = [1, 2, 3];

var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

```

* unshift: adds one, or multiple, elements onto the beginning of an array. It then returns the length of the array, including the elements just added.

```
var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

```
