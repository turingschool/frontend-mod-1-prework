Array Methods
=============

1. `pop`
This methods pops the last item out of an array. The array is now one unit shorter than it was before. The popped-item item is the returned value from the pop method. Example:
```javascript
var myArray0 = ['animal', 'vegetable', 'mineral'];
console.log(myArray0.pop()); // expected output: 'mineral'
console.log(myArray0); // expected output: ['animal', 'vegetable']
```

2. `push`
This method pushes its argument onto the end of a given array, making the array longer than it was before, and returns the new length of the array. Example:
```javascript
var myArray1 = ['animal', 'vegetable', 'mineral'];
console.log(myArray1.push('breadbox', 'spaceship')); // expected output: 5
console.log(myArray1); // expected output: ['animal', 'vegetable', 'mineral', 'breadbox', 'spaceship']
```

3. `shift`
This method shifts every item in an array one unit to the left, removing the first item in the array and shortening the array by one unit. The shifted-out item is the returned value. Example:
```javascript
var myArray2 = ['animal', 'vegetable', 'mineral'];
console.log(myArray2.shift()); // expected output: 'animal'
console.log(myArray2); // expected output: ['vegetable', 'mineral']
```

4. `unshift`
This method places its x arguments into the first x slots of an array, moving the existing array elements x units to the right and making the array x units longer, and returning the new length of the array. Example:
```javascript
var myArray3 = ['animal', 'vegetable', 'mineral'];
console.log(myArray3.unshift('muffin', 'molecule')); // expected output: 5
console.log(myArray3); // expected output: ['muffin', 'molecule', 'animal', 'vegetable', 'mineral']
```
