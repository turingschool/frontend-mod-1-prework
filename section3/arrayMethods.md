#Array Methods


#### push
*used to add an item to the end of an array*

```
//create the array "fruits" and begin a a list
var fruits = ['apple', 'banana']

//see array items
fruits
//logs: ['apple','banana']

//"push" orange into the list
fruits.push('orange')
fruits
//logs: ['apple','banana', 'orange']
```


#### pop
*used to remove an item from the end of an Array*

```
//"pop" (remove) orange from the list
fruits.pop()

//see array items
fruits
//logs: ['apple','banana']
```


#### shift
*removes an item from the beginning of an array*

```
fruits
//logs: ['apple','banana']

fruits.shift()
fruits
//logs: ['banana']
```


#### unshift
*adds an item to the beginning of an array*

```
fruits
//logs: ['orange']

fruits.unshift('apple')
fruits
//logs: ['apple','orange']
```
