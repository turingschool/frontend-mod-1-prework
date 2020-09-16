1. So first I'll need to establish the alphabet that I want to use. I want it to be read as an array so that I can refer to its indeces. I want it all to be the same case (i'll explain in the next step).

2. I need to create a function that takes the message to be encoded/decoded and the cipher key as an argument. The function first needs to change the message to all the same case to match the alphabet that I'm using so that the computer will understand the letters in the message and the letters in the alphabet as equal values (Unicode, amiright?). Then the function needs to read the message as an array so that it can refer to the message by its indeces, just like the alphabet.

3. The function should loop through the indeces of the message array (i'll call this loop1 since we will have some loop-ception going on here) and make sure that each value is a letter to account for spaces and ignore them.

4. Inside of loop1, it should loop through the indeces of each letter of the alphabet (loop2).

5. Inside of loop2, if the message letter matches the alphabet letter, it should increment the index by the shift key amount. This will need to account for wrapping through the alphabet when the new index is higher than the alphabet arrays length, 26.

6. Then it will need to take the letter from the resulting index and add it to a string with the spaces from the original message concatenated into the string also.

7. The function will end with logging the results to the console.

8. Lastly, we should call the function with the message we want encoded and the cipher key as arguments.
