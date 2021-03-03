# Array Methods

`pop` removes an item from the end of an array. For example, if I have the array:
```js
var myFavoriteThings = ['Josh', 'Jasmine', 'bubbles', 35, true, 10]
```
and I want to remove the the number 10, I could type:
```js
var myNewFavoriteThings = myFavoriteThings.pop()
```


`push` adds an item to the end of an array. I could add candy to the variable myFavoriteThings from above, with the following command:
```js
var myFavoriteThings2 = myFavoriteThings.push('Candy')
```

`shift` removes an item to the beginning of an array.
```js
var myArray = [false, 0, 'candy']
var shift = myArray.shift()
//removes false, returns [ 0, 'candy']
```

`unshift` adds an item to the beginning of an array.
```js
var unshift = myArray.unshift(35)
//myArray is now: [ 35, 0, 'candy' ]
