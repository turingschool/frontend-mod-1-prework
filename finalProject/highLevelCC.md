Caesar Cipher

Put the uppercase `alphabet` in an array, so I can refer back to it later.
Set variables for the `shift` (integer), the `inputWord` (string), the `outputWord` (string), and get the length of the `inputWord`.

Change the `inputWord` to uppercase, because our `outputWord` will be uppercase.

Iterate through the letters in the `inputWord` one at a time, and set each letter to a number related to its character code. This is so that we can do math to each letter when we `shift` it.

If that character is not an uppercase letter, pass through the character from `inputWord`. This will make sure that punctuation and spaces are preserved.

Otherwise, subtract the `shift` number from the character number, then make sure that number falls within the `alphabet` array. Add 26 if necessary so that it does fall in the array.

Then get the character at that number in the `alphabet` array and concatenate it to the `outputWord` string.
