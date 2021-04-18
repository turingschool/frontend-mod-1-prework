## Array Methods Research

1. `pop`: Removes the _last_ element from an array and returns that element. This method will change the length of the array.

Example:
``` JAVASCRIPT
var myRecords = [ "jazz", "funk", "hip-hop", "world" ];
var poppedTest = myRecords.pop();
console.log(myRecords); // [ "jazz", "funk", "hip-hop" ]
console.log(poppedTest); // "world"
```

2. `push`: Adds one or more elements to the end of an array and returns the new length of the array.

Example:
```JAVASCRIPT
var myTapes = [ 'jazz', 'dub', 'electronic' ];
var count = myTapes.push('rock');
console.log(count); // output would be 4, since I added one more genre/value to the length
// of the array
console.log(myTapes); // output would be [ 'jazz', 'dub', 'electronic', 'rock' ].
// It is showing the values in the new array including the new genre of 'rock'.
```

3. `shift`: Removes the first element from an array and returns that removed element. This method changes the length of the array.

Example:
```JAVASCRIPT
var array = [1, 2, 3];
var firstElement = array.shift();
console.log(array);
// Output: [2, 3]
console.log(firstElement);
// Output: 1
```

4. `unshift`: Adds one or more elements to the beginning of an array and reruns the new length of the array.

Example:
```JAVASCRIPT
var array = [1, 2, 3];
console.log(array.unshift(4, 5));
// Output: 5
console.log(array);
// Output: [4, 5, 1, 2, 3]
```
