`var numbers = [0, 1, 2, 3];`

**Pop**
* `.pop` removes/isolates the last element of the array
* proper syntax looks like this:
`numbers.pop();`
* when you pop an array, the output is the last element of that array. In the following example, `x` is equal to `3`.
`var x = numbers.pop();`

**Push**
* `.push` adds a new element onto the end of an array
* In the following example, I will add `4` to the end of the array. Proper syntax looks like this:
`numbers.push(4);`
* now `var numbers = [0, 1, 2, 3, 4];` and the array length has increased to 5

**Shift**
* `.shift` removes/isolates the first element from the array and pushes the remaining elements down one index
* proper syntax looks like this:
`numbers.shift();`
* now `var numbers = [1, 2, 3, 4];` and the array length has decreased to 4


**Unshift**
* `.unshift` adds a new element at the beginning of the array and shifts the other elements up one index
* proper syntax looks like this
`numbers.unshift(0); `
* now `var numbers = [0, 1, 2, 3, 4];`
