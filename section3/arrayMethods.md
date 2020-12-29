### Array Methods

1. pop
  - The method pop when applied to arrays takes the last element in the array, removes it from the array and returns that specific element.  In turn, it shortens the length of the original array by 1. Here is an example:

``` javascript

var golfClubs = ['driver', '7 iron', 'putter'];

console.log(golfClubs.pop());

// expected output: 'putter';

console.log(golfClubs);

// expected output: ['driver', '7 iron']
```


2. push:
  - The push method when applied to arrays allows the developer to add elements to the end of an existing array.  When applied to an array, it will return the length (number of elements) of that array. Can be applied without any parameters and would return the original length of the array, or with as many new elements that you would like to add to the end of the existing array.  The pop method always returns the length of the array while changing the elements within the array in which it was applied.  

``` javascript
var sodas = ['Pepsi', 'Coke', 'Sprite'];

console.log(sodas.push());
// expected output: 3

var numberOfSodas = sodas.push('Mountain Dew', 'Dr. Pepper');

console.log(numberOfSodas);
// expected output: 5

console.log(sodas);
// expected output: ['Pepsi', 'Coke', 'Sprite', 'Mountain Dew', 'Dr. Pepper']

sodas.push('Grape');

console.log(sodas);
// expected output: ['Pepsi', 'Coke', 'Sprite', 'Mountain Dew', 'Dr. Pepper', 'Grape']
```


3. shift:
  - The shift method allows us to remove the first element (index 0) from an existing array and return that removed element.  If we call the shift method in a new variable declaration, that variable will be assigned the first value from the existing array.  As well, it changes the length of the existing array by - 1.  

``` javascript
var rouletteSpins = [5, 17, 4, 29, 00];

var firstSpin = rouletteSpins.shift();

console.log(firstSpin);
// expected output: 5

console.log(rouletteSpins);
// expected output: [17, 4, 29, 00]
```


4. unshift:
  - The unshift method allows us to add new elements (one or more) to the beginning of an array.  It always returns the length of the array that it is being called upon after adding the new elements.

``` javascript
var pets = ['Duke', 'Wilma'];

var newPet = pets.unshift('Deets', 'Stout');

console.log(newPet);
  // expected output: 4

console.log(pets);
  // expected output: ['Deets', 'Stout', 'Duke', 'Wilma']
```
