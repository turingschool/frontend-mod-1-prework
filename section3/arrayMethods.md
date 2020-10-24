Array methods:

* `pop`

Deletes the final element in an array, reducing the length of the array.

````
var letters = ["A", "B", "C", "D"];
letters.pop();
console.log(letters);
// expected output: ["A", "B", "C"];
````

We can also use the pop method to return the deleted element.

````
var letters =
console.log(letters.pop());
// expected output: "D"
````

* `push`

Used to add one or more elements to the end of an array.

````
var letters = ["A", "B", "C", "D"];
letters.push("E", "F");
// expected output: ["A", "B", "C", "D", "E", "F"];
````

* `shift`

Just like pop, but applies to the first element of the array, not the last. Shift deletes the _first_ element in the array.

````
var letters = ["A", "B", "C", "D"];
letters.shift();
// expected output: ["B", "C", "D"];
````

* `unshift`

The opposite of shift. _Adds_ one or more elements to the beginning of the array.

````
var letters = ["A", "B", "C", "D"];
letters.unshift("Z");
// expected output: ["Z", "A", "B", "C", "D"];
````
