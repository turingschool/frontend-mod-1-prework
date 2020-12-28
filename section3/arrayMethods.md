## 'pop'

1. The pop() method removes the last element from the array and returns that removed element, and it changes the length of the array.
If you try to use pop ()in an empty array it will return undefined.

#### Example:
***
var flowers = ["daisy", "rose", "tulip", "gladioli"];

console.log(flowers.pop());

//expected output: "gladioli"

console.log(flowers);

//expected output: array ["daisy", "rose", "tulip"]
***

## 'push'

1. The push() method adds one or more element to the array and returns a new value to array. If you try to use push() with empty array it will return undefined.

### Example:
***
var flowers = ["daisy", "rose", "tulip", "gladioli"]

flowers.push("irises", "aster");

console.log(flowers);

//expected output: ["daisy", "rose", "tulip", "gladioli", "irises", "aster"]
***

## 'shift'

1. shift() has similar work as a pop() just it removes first element from beginning the array element, and returns new value of array, and changes the length of array.
shift() will not work with empty array, and will return undefined.

### Example:
***
var flowers = ["daisy", "rose", "tulip", "gladioli"];

console.log(flowers.shift());

// expected output: "daisy"

console.log(flowers);

//expected output: ["rose", "tulip", "gladioli"]
***

## 'unshift'

1. unshift() method as a push() adds one or more element to the beginning of array and returns new value of array and changes length of array. As examples above unshift() doe not has a response to an empty array, which return undefined.

### Example:
***
var flowers = ["daisy", "rose", "tulip", "gladioli"];

console.log(flowers.unshift("aster", "irises"));

// expected output: "6"

console.log(flowers);

//expected output:["aster", "irises", "daisy", "rose", "tulip", "gladioli"]
***
