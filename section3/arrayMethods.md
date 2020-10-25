**Array Methods**
=================

If an array is a list of things, then an array method is an action, that takes into account or changes items across the array, and elicits a returned value

(These methods are joined with a variable by a . and no extra space before the .)


**.pop()** removes the last element from an array; shoots it out as the return value

```
var snakePlant = ['Roots', 'Soil' , 'Pot']
console.log(snakePlant.pop())

//expected return: Pot

```

**.push()** adds an item to the front of an array, returns new length of that array

```
var snakePlant = ['roots', 'soil',  'pot']

console.log(snakePlant.push('leaves'))

//expected return: 4

```

**.shift()** removes an element from the front of the Array, index position zero, and returns that item

```
var snakePlant = ['roots', 'soil',  'pot']

var first = snakePlant.shift()
console.log(first)

//expected return: roots

```

**.unshift()** adds to the front of an array and returns the value of the new length of the Array

```
var snakePlant = ['roots', 'soil', 'pot']
console.log(snakePlant.unshift('leaves'))

// expected return: 4

```

**.concat()** copy's array and adds to another array

```
var snakePlant = ['roots', 'soil']
var fern =['leaves', 'pot']
console.log(snakePlant.contat(fern))

```
