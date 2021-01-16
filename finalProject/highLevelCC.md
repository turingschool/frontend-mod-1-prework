<!-- Add a `highLevelCC.md` file to your `finalProject` directory.
In that file, write up high level notes about how you would solve this problem.
When you're finished writing your detailed notes, it is optional to implement a solution in code. -->


## Caesar Cipher Pseudocode


- Declare a function, "encode", that will do all of our computing.

- Declare an array, "plain", and fill with the entire alphabet as elements, but rather than 0-25, we'll index these values with their corresponding *character codes*, "A" being index 97 and "Z" being index 122.

- Declare a function within "encode" that will receive two arguments from the user - the text to be converted (string) and the number we should start our shift at (integer).

- Create a *for loop* that will cycle through this string variable (with its length as the maximum), check to see that each character is a letter, and if its a letter employ a method that will get its character code and concatenate the code into a new array, we'll call "initialArray".

- Next we need to take this collection of character code values in "initialArray" and complete the shift. To do so, construct a loop function that will iterate through our array, subtract the shift number from each array element, and transpose each of these shifted numbers into a new array called "caesarArray".  We'll have to set specific conditions in this loop so that if the character code value minus the shift number is less than 97 (the first value in our array), we'll take the difference and subtract it from the value of our last character code value, 122, essentially backtracking from "Z".

- Once we've shifted all our character code values into a new array, we just have to convert them
back into letters.  So create another loop - this time iterating straight through our array and using a method to convert the character code values back into alphabetic symbols, and storing these converted letters in our final string variable, "caesarString".

- Declare a function to print/return variables, pass in "caesarString" as the argument, and we're done.
