##Array Methods

**.pop()**: removes the last element of an array. .pop() doesn't take arguments and mutates the original array
*example:*
```
var writingUtensils = ["pen", "pencil", "quill"];
writingUtensils.pop();
console.log(writingUtensils);
//prints ["pen", "pencil"]
```

**.push()**: adds an element to the end of an array. .push() can take one or multiple arguments (separated by commas) and inserts them at the end of the original array. .push() mutates the original array.
*example:*
```
writingUtensils.push("marker");
console.log(writingUtensils);
//prints ["pen", "pencil", "marker"]
```

**.shift()**: removes the first element at the beginning of an array, thus reassigning the 0 index and all subsequent indexes. This mutates the length of the original array.
*example:*
```
writingUtensils.shift();
console.log(writingUtensils);
//prints ["pencil", "marker"]
```
**.unshift()**: adds an element to the beginning of an array, thus reassigning the indexes of all elements in the array. This mutates the lenght of the array. 
*example:*
```
writingUtensils.unshift("chalk");
console.log(writingUtensils);
//prints ["chalk", "pencil", "marker"]
```
