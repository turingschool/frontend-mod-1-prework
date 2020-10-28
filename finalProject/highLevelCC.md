High level overview:

My first inclination for solving this was to set up an array with all the letters of the alphabet in it in order. Would then create a function that took an input, a string, iterate through each letter and find the corresponding index number. I would then subtract the amount we want to shift by (based on input) to shift left. I would then do the reverse and based on the new index numbers would print a new string.

More detailed breakdown:

1. Put Alphabet in an array
2. Use the function that takes a string and breaks it up into each individual letter.
3. Build an iteration that goes through each letter of the string and uses the function (indexOf) that returns the index number of each element of the string.
4. In the iteration I would build a function that subtracts the number we would like to shift left by, based on the input.
5. If the answers is positive it would just return the new number. If it is negative, I would have the function add the lengths of the array + 1 to the negative index number as a way to loop back through the alphabet array.
6. Then for the new chain of index numbers, use a function that returns their values based on the array.
