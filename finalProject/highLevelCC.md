## High Level Caesar Cipher

We need to write a program that will take a string and encode it based on a provided shift value.

`encoded("Hello World", 5); //should log "CZGGJ RJMGY"` as each letter shifts over 5 variables.  I tried to write a code for this but was unsuccessful. I have a few ideas on how it might be implemented.

### First lets take note of what information we have
* Encoded is a function because it contains ()
* The Function has two parameters, one string (the original message) and one number(the shift number)
* The space between words remains unchanged
* The phrase logs as uppercase

### Failed attempts
I was convinced there would be a simple solution to this. My first idea was to make an array of each letter so that we could have a number associated with each letter.  Although this worked in some fashion, being able to shift and log responses seemed too complicated for what I wanted to accomplish.  I set up a loop that would `.shift` the first element and then `.pop` that element back to the end of the array. This looped 26 times to get each combination that I might be working with.
I hit a wall because I could not figure out where to go from there.  At this point I decided to take some of my ideas and try a different approach.

### A new thought process
I remember reading during section 1 of prework that letters have a value assigned to them. A quick google brought up ASCII. Each letter has an assigned value, and capital letters value is different from lowercase.  Now I have an idea of a direction to head.  
* In ASCII A = 65 Z = 90
* Because uppercase and lowercase have different values in ASCII we need to use the .toUpperCase method
* Create a function called encoded
`function encoded(oldPhrase, shiftNumber)`
* When we call encoded we can fill in the arguments accordingly
* `oldPhrase = oldPhrase.toUpperCase` will capitalize all letters in the string to make sure we get consistent ASCII numbers. (because the value of a != A)
* The method to find ASCII number is `.charCodeAt`
* A loop is needed to identify each letter's ASCII. That loop will be set to stop when i >= oldPhrase.
* Next a code is needed to shift the the string based on the ASCII.
* Since the ASCII numbers range from 65-90 we would need to either add or subtract to the original ASCII numbers. For example if the shift number was 2  the code would look perform like this like this:
if ASCII number <= 66 and >= 65 add 24, else if ASCII number is >=67 and <= 90 subtract 2. else do nothing (this will make sure if we have a space it does not change it's ASCII number)
* The final step would be a code that will take the new ASCII numbers and log the concatenated and shifted phrase.
