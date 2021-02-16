## .pop()

The `pop` method removes an item from the end of an array. To use it, specify which array you want to remove the last item of, like so `colors.pop();`.

## .push()

The `push` method adds an item to the end of an array. To use it, specify which array you want to push to and the thing you want to push to the array as the parameter in the parentheses, like so: `colors.push("blue");`.

## .shift()

The `shift` method removes an item from the beginning of an array. To use it, specify the array you want to affect, like so: `colors.shift();.`

## .unshift()

The `unshift` method adds an item to the beginning of an array. To use it, specify the array you want to affect, and the thing that you want to put at the beginning of the array like so: `colors.unshift("green");`.

## .indexOf()

`indexOf` finds the index of an item in the array. To use it, specify the array you want to look within, and the value you're looking for in the parameters, like so: `colors.indexOf("yellow");`.

## .splice()

`splice` removes an item by its index position. To use it, specify the array you're removing an item from, and the index of the item you want to remove in the parameters, as well as how many items you want to remove, like so: `colors.splice(2, 1);`. This also returns the value of the item you've removed.

## .slice()

The `slice` method makes a copy of an array. To use it, create a new array and set its value to the array you're copying, like so: `var newColors = colors.slice();`.
