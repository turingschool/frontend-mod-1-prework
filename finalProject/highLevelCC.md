High level overview:

My first inclination for solving this was to set an array with all the letters of the alphabet. Would then create a function that took an input, a string, break it up into each letter of the sting and look at the array and have it shift left on the index by any number if elements based on the input.

More detailed breakdown:

1. Put Alphabet in an array
2. Use the function that takes a string and breaks it up into each individual letter.
3. For each letter in the string use a function (indexOf) that returns the index number of each element of the string.
4. Set a variable equal to the number you want to shift over to the left
5. For each element's index number subtract a number based on the input.
6. If the number is positive then return the new number, if the value is negative add alphabet.length -1 (since length is one longer than an index) to the value - the number you would want to shift
6. Then for the new chain of index numbers, use a function that returns their values based on the array.


alphabet.indexOf('a')
