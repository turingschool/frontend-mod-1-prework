Array Methods:
1. pop
When you use the method .pop() on an array it removes the last element in the array. It then returns that last element.
Ex.
```var colors = ['blue', 'pink', 'red', 'green'];
colors.pop()
prints: 'green'
console.log(colors)
prints = ['blue', 'pink', 'red']
```

2. push
When you use .push() on an array it adds a new element (whatever element you specify in the push command) to the end of the array.
Ex.
```var colors = ['blue', 'pink', 'red'];
colors.push('orange');
console.log(colors)
prints: ['blue', 'pink', 'red', 'orange']
```
3. shift
When you use .shift() on an array it removes the first element (or the element in the 0 position).
All the subsequent elements in the array are moved down to start at the 0 position and the array is shortened by one.
Shift then returns the first element at was removed.
Ex.
```colors.shift();
prints: 'blue'
console.log(colors);
prints: ['pink', 'red', 'orange']
```

4. unshift
When you use .unshift() on an array, it adds whatever element or elements you specify to the front of the array (starting in the 0 position).
ex.
```colors.unshift('purple', 'grey')
console.log(colors)
prints: ['purple', 'grey', 'pink', 'red', 'orange']
