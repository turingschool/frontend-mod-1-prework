# Array Methods
*push   //   pop    //   shift   //   unshift*

---
##### *first, let's create an array to be accessed in our methods*:

```
var spices = ["Cardamom", "Paprika"]
console.log(spices.length)
// 2
```


### 1. `pop`
- removes last item in array
- *doesn't take argument*
- **syntax**: `arrayName.pop()`

e.g.
```
let last = spices.pop() // remove "Paprika" from the end
// ["Cardamom"]
```


### 2. `push`
- adds to the end (next available index) of an array
- *takes argument*
- **syntax**: `arrayName.push("string")`
- will return index of new entry in array

e.g.
```
let newLength = spices.push("Sassafras") // add "Sassafras" to the end
// ["Cardamom", "Sassafras"]
```


### 3.  `shift`
- removes the first item of an array (shift to left)
- *doesn't take argument*
- **syntax**: `arrayName.shift()`

e.g.
```
let first = spices.shift() // remove "Cardamom" from the front
// ["Sassafras"]
```


### 4.  `unshift`
- adds to the front of an array (into index 0)
- *takes argument*
- **syntax**: `arrayName.unshift("string")`

e.g.
```
let newLength = spices.unshift("Fenugreek") // add "Fenugreek" to the front
// ["Fenugreek", "Sassafras"]
