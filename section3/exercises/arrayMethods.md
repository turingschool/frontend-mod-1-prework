# Array Methods

example array:
`colors["red", "orange", "yellow", "green", "blue", "purple"];`

### Pop  

`console.log(colors.pop);`

removes the last item in the array
Changes the array to:

`colors["red", "orange", "yellow", "green", "blue"];`

without returning a result

`console.log(colors.pop());`

changes the array to:

`colors["red", "orange", "yellow", "green", "blue"];`

and returns the removed item from the array:

"purple"


### Push

`colors.push("indigo");`

adds an item to the end of the array, then

`colors.push("indigo")`

returns the position of the added item

5


### Shift

`colors.shift()`

removes an item from the beginning of the array, then

`colors.shift()`

returns the removed item from the array:

"red"


### Unshift

`colors.unshift("maroon")`

adds an item to the beginning of the array, then

`colors.shift()`

returns the new length of the array

5
