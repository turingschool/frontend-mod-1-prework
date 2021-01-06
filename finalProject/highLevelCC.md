# Ceasar Cipher

### Acceptance Criteria:
Program can take any string and encode it based on a provided shift value.

### Parameters Required:
* String value (String)
* Shift value (Number)

1. Declare a function that will handle the string manipulation; this function should take in 2 parameters, `str` and `shiftAmount`.
1. Within the function use a string method to convert the `str` argument to all upper case and store this in a new variable.
1. Declare the alphabet in a variable; an array will be good for this list of letters.
1. Also inside the function; declare an `encode` variable where we will build/store the new string letter by letter.
1. Use a for loop to iterate over each character in the (upper case) string (using the length method), stopping when you have looped through each letter in the string.
1. Have a variable for the current letter in the iteration.
1. In an if statement, set up the condition that accounts for a space (no letter), and adds that "currentLetter" (value of space) to the new `encode` variable (using +=); make sure you continue from here if you're not done.
1. Set up a variable that stores the current letter's index according to our alphabet array.
1. Set up a newIndex variable that stores the current letter's index with the `shiftAmount` added to the value.
1. Set up some if statements that prevent the index from going outside the extremes of our arraw index (A=0, Z=25).
1. Make sure you are accounting for for lower case letters.
1. Return the `encode` value.
1. When the function is put to use, you must pass in the `str` and `shiftAmount` arguments.
