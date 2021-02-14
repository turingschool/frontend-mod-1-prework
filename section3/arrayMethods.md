_.at()_
- takes an integer value and return the item at that index, allowing for positive and negative integers. Negative integers count back from last item in the array.
- Can be utilized for latter items in an array. Instead of accessing the last item in the index with arr[arr.length - 1], you can call .at(-1)
_.concat()_
- Used to merge two or more arrays into a new array, then returns the new array.
_.copyWithin()_
- “Shallow copies” part of an array to another spot in the same array, then returns the array without modifying its length.
- Parameters:
    - Target: zero-based index at which to copy sequence to
    - Start - index at which to copy from
    - End - index at which to end copying
_.entries()_
- Returns a new Array Iterator object which contains key:value pairs for each index in the array. In an array of [‘a’, ‘b’, ‘c’], entries() would return [0, ‘a’], [1, ‘b’], [2, ‘c’]
_.every()_
- Checks whether all items in an array pass the test performed by the given callback function.
    - Callback: a function passed as an argument to another function, takes three arguments:
        - element: current element being processed in array
        - Index: index of current element being processed
        - Array - the array .every() was called upon
- Executes a provided callback function once for each element present in the array until it finds one where the callback returns a false (false-y) value. If such an element is found, .every() immediately returns false. Otherwise, if all elements return a true (truth-y) value, .every() returns true.
- Calling .every() on an empty array returns true for any condition.
- Acts like the “for all” qualifier in math.
_.fill()_
- Changes all elements in an array to a static value, from a start index (default is zero) to an end index (default is array.length). It then returns the modified array.
- array.fill(value [, start [, end]]) is the syntax for this method
_.filter()_
- Creates a new array with all elements that pass the test implemented by the provided callback function
- Calls a provided callback function once for each element in the array and constructs a new array of all values for which the callback function returns a value that coerces as true.
- Array elements which do not pass the callback function test are skipped and omitted from the new array.
_.find()_
- Returns the value of the first element in a provided array that satisfies the provided callback function. If no value satisfies the callback function, undefined is returned.
- Executes callback function once for each index of the array until the callback returns a truth-y value. If so, .find() immediately returns the value of that element.
- Can be utilized to find an object in an array by one of its properties.
_.findIndex()_
- Returns index of first array that satisfied the provided callback function. Otherwise returns -1, indicating that no element has passed the callback function test.
_.flat()_
- Creates a new array with all sub-array elements concatenated into it in iteratively, up to a specified depth.
- Reminds me of the “Merge Layers” function in Photoshop.
_.flatMap()_
- Returns a new array function formed by applying a given callback function to each element of the array, then flattening the result by one level.
- Identical to calling .map() followed by .flat() with a depth of 1, but a little more efficient.
_.forEach()_
- Executes a given callback function once for each element in an array.
- “Typical use case is to execute side effects at the end of a chain.”
_Array.from()_
- Static method which creates a new, shallow-copied Array instance from an array-like or iterable object.
- `Array.from(‘abc’);` // Creates array [‘a’, ‘b’, ‘c’]
_.includes()_
- Determines if an array includes a certain value among its entries, returning true or false as appropriate.
_.indexOf()_
- Returns first index at which a given element can be found in an array, or -1 if not present.
- Utilizes strict equality
_Array.isArray()_
- Determines whether a passed value is an array
_.join()_
- Creates and returns a new string by concatenating all elements in an array or array-like object, separated by a comma or a specified separator string.
_.keys()_
- Returns a new Array Iterator object that contains keys for each index of an array.
_.lastIndexOf()_
- Returns the last index at which a given element can be found in the array, or -1 if not present.
_.map()_
- Creates a new array populated with the results of calling a provided function once for each element in an array, in order.
- .forEach() or for…of should be utilized instead if:
    - Not using the array .map() would return, or
    - Not returning a value from a callback
_Array.of()_
- Creates a new array from a variable number of arguments.
- Array.of(3) /. Creates an array with the entry 3 [3]
- Array(3) creates an array of 3 empty slots
_.pop()_
- Removes the last element from an array and returns it. The length of the array is changed as well.
_.push()_
- Appends one or more elements to the end of an array and returns the new length of the array.
- Can be used to merge arrays
_.reduce()_
- Executes a provided reducer function on each element of an array, results in a single output value.
- Takes 4 arguments:
    - accumulator: accumulates the callback functions return values; values previously returned in last invocation of callback function
    - currentValue: current element being processed in array
    - Index - index of current element being processed. Start at 0 if initialValue is provided, otherwise starts from index 1.
    - Array (optional) array which reduce() was called on
- If initialValue is provided in call to reduce(), then accumulator is equal to initialValue, and currentValue will be equal to the first value in the array.
- If no initialValue is provided, then accumulator will be equal to first value in the array, and currentValue will be equal to the second value in the array.
- It’s “almost always” safer to provide an initialValue, because there can be up to four possible output types without it.
- Can sum all values in an array
- You can replace .filter().map() with .reduce()
_.reduceRight()_
- Does the same thing as .reduce(), but iterates through the array from right-to-left (in reverse)
_.reverse()_
- Reverses an array in place - this is a destructive process, as it mutates, or changes, the original array.
_.shift()_
- Works like .pop(), but applies to the first element of an array. It removes it then returns the value.
- If the length of the array is zero, undefined is returned.
_.slice()_
- Returns a shallow copy of a portion of an array into a new array object.
- Syntax: array.slice(start, end)
- Does not alter the original array.
_.some()_
- Tests whether at least one element in an array passes a test implement by a given callback function.
- Returns a boolean value.
_.sort()_
- Sorts elements of an array in place, and returns the sorted array.
- If a compareFunction is not provided, all array elements are sorted by converting them to strings and comparing them. Default sort order is ascending.
- A string sort will cause ’80’ to come before ‘9’. By providing a compareFunction, a numerical sort can be achieved, correcting this.
_.split()_
- Changes contents of an array by removing or replacing existing elements and/or adding new elements in place.
_.toLocaleString()_
- Returns a string that applies a conversion for various number, date/time, and language formats.
_.toSource()_
- For a built-in array object, returns a string indicating that the source code is unavailable. For instances of an array, returns a string representing the source code of an array.
- This method is usually called internally by JavaScript and mostly used for debugging.
_.toString()_
- Returns a string representing the specified array and its elements.
- JavaScript automatically calls this method when an array is to be represented as a text value, or when an array is referred to in a string concatenation.
_.unshift()_
- Adds one or more elements to the beginning of an array and returns new length of the array. If multiple elements are passed as parameters, they’re inserted at the beginning of the object in exact order they were passed as parameters.
_.values()_
- Returns a new Array Iterator object that contains values for each index in the array.
_@@iterator_
- Used to redefine default iteration behavior.
_Array[@@species]_
- Accessor property that returns default Array construct.
