# Solution outline/notes for the Caesar Cipher:

1. Collect plain text message in variable `userInput` (string). Collect desired shift value in variable `userShiftValue` (integer).

1. Convert `userInput` to all uppercase using the `toUpperCase` method and store the result in a new variable `userPlainText`.

1. Split `userPlainText` into an array of separate character strings using the `split()` method and call it `plainTextLetters`.

1. Create array with all 26 letters of the English alphabet (in uppercase) called `alphabetLetters`. Remember that arrays are indexed starting with `0`, so letter `A` will appear at `alphabetLetters[0]`.

1. Define a function `shiftLetter` with parameter `inputLetter` that (1) looks inside the `alphabetLetters` array to find the index associated with `inputLetter` using the `indexOf()` method, (2) calculates a `cipherLetter` by grabbing the letter in the `alphabetLetters` array associated with that index minus the `userShiftValue` (but need to make adjustment for possible negative values), (3) returns the `cipherLetter`.

1. For each element in the `plainTextLetters` array: (1) if that element is a letter, run it through the `shiftLetter` function. Put the output in the corresponding spot in an array called `cipherLetters`. (2) If that element is not a letter, copy that character into the corresponding location in the `cipherLetters` array.

1. Join the letters in the `cipherLetters` array together using the `join()` method into a new string called `cipherText`.

1. Wrap this whole thing in a function called `encode` with parameters corresponding to `userPlainText` and `userShiftValue`. Log the output in the console.

1. (ETA: This is now implemented in caesarCipher.js)
