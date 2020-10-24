# Array Methods
[Array Methods Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Hello - I know I copied these from the MDN reference but I did take time to work thru each one as well as several others in the list. I've noted the URL referenced above in my list of useful references (kept in a google sheet).

#Common operations

##Create an Array
```JavaScript
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2
```

##Access an Array item using the index position
```JavaScript
let first = fruits[0]
// Apple
let last = fruits[fruits.length - 1]
// Banana
```

##Loop over an Array
```JavaScript
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1
```

##Add an item to the end of an Array
```JavaScript
let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
```

##Remove an item from the end of an Array
```JavaScript
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]
```

##Remove an item from the beginning of an Array
```JavaScript
let first = fruits.shift() // remove Apple from the front
// ["Banana"]
```

##Add an item to the beginning of an Array
```JavaScript
let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]
```

##Find the index of an item in the Array
```JavaScript
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf('Banana')
// 1
```

##Remove an item by index position
```JavaScript
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]
```

##Remove items from an index position
```JavaScript
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]
let pos = 1
let n = 2
let removedItems = vegetables.splice(pos, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems)
// ["Turnip", "Radish"]
```

##Copy an Array
```JavaScript
let shallowCopy = fruits.slice() // this is how to make a copy
// ["Strawberry", "Mango"]
```
