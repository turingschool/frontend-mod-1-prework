# Caesar Cipher

### Mission

The Caesar Cipher is one of the oldest encryption methods. The mission is to
explain how to create a program that would replicate the techniques of the
Caesar Cipher in Javascript.

***

### Set up

1. Declare a variable called message that contains a string of the message.
2. Declare a variable called shiftBy that contains a integer value that tells us
how many spaces to move up and down the array to encrypt or decrypt the message.

### Creating arrays

3. To start, we will need two arrays to complete this mission. Declare a
variable with an array that consists of all 26 letters in separate elements.
This will be our referenceArray.  
4. Declare a variable with an array that is identical to our referenceArray.
We will use this array to encrypt or decrypt our message. This will be our
encryptionArray.  

### Shifting the encryptionArray

5. To create an encryptionArray we will need to use the shiftBy variable.
Using a if statement, we check to see if the value of shiftBy is positive
or negative and move the array to the right if positive or to the left if
negative.  
6. Using a for loop, we remove either the first or last letter in the array
and move it to the front or back, depending if the value of shiftBy is
positive or negative. This should shift the entire array left or right
and start the encryptionArray at the letter we removed.  

### Creating our new message
7. To avoid complications of lowercase versus uppercase, we need to make sure
our message is converted to uppercase to avoid problems. To do this we can
attach the toUpperCase() function to our original message like this
message.toUpperCase();
8. Declare a new variable with a blank array called newMessage. We will use this
new array to hold our newMessage.  
9. Creating the newMessage array will require nested for loops. The outer for
loop will check each index value for each string in the message string and and
the inner for loop will compare that character to each index value within
referenceArray. If those two index values are the same, the program will add the
corresponding letter in the reference Array into the newMessage array. If
these two index values are not equal, then the program should not make any
changes to that value in the array and send that value to the newMessage array.
We do this because if these two values are not equal this most likely means that
value is a symbol or number that can not be changed.  

### Displaying the new message
10. At this point, we should have a newMessage array with the new message.
However, the message will be stored in an array format with spaces and
quotations between each letter. We need to create a for loop that goes through
the newMessage array and console logs each element in the newMessage array into
a message that can be read on one line.  
11. Ta-Da! Our message should be encrypted or decrypted!
