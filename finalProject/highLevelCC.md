## Create function `encodeCeasar(string, number, direction)` that takes a string and number as arguments

1. define lowercase and uppercase alphabet array

    - `var alphabet = ["A", "B", "C", "D", "E", "F, "G", "H", "I", "J", "K", "L", "M", "N", "O", "P, "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f, "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]`

2. convert the string argument to an array of characters

    - use `split()` method with `""` parameter so that characters are split up individually

3. define empty array for ciphered characters of string:

    - `var cipheredArray = [""]`

2. create loop based on length of array resulting from `string.split()`

    - for each item in array, loop needs to:
        1. identify identical item in alphabet array and assign number of place in `alphabet` to variable `arrayPlace`
            * will identify with an additional loop, which checks for equality with each item in `alphabet` and assigns the order value* of any item that is strictly equal to `arrayPlace`
        2. add item from the alphabet array that is `number` steps *before* or *after* (arguments for `direction` parameter) the identical item to cipherArray using `unshift()` method
            * will have to build in cycle so that if `number` takes us past beginning of array we get kicked back to the end and vice versa -- solve with if statement (one for capital letters, one for lowercase). Capital would look like this:
            ```
            if (arrayPlace - number < 1) {
              cipheredArray.unshift(alphabet[26 - (number - arrayPlace)])
            };
            ```
3. convert `cipheredArray` to string* and log that string

    - could log concatenation of each item of `cipheredArray`, but it seems like a headache to code that dynamically to work with any length of array


##### To look up before implementing solution:

*method that picks out/logs order value of item in array
*method that converts array to string without commas in between items
