* First I would declare a new variable named 'alphabet' and list each of the letters of the alphabet into an array (just upper cased letters).    
`var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; `

* Declare a new function named 'encode' that would take two parameter values, one being a string and the other would be an number.  
`function encode(string, number) {`

* Create a new variable named 'ciphered' and assign it to an empty array; inside our 'encode' function.
`var ciphered = []; `

* Seeing as our ciphered solution is all upper cased characters, we will need to make our string argument upper case as well. So we could use the Javascript function .toUpperCase on our string parameter so that all the letters in our string are capitalized.
`string = string.toUpperCase();`

* Next, we are going to split our string argument into individual letters using Javascript function split.
`var splitString = string.split(''); `

* In order to adjust our 'ciphered' variable we are going to want slice the 'alphabet' from the end of the alphabet minus our number argument.  Create a new variable 'slicedAlphabet' and set equal to `alphabet.slice(alphabet.length - number)`.  

* We need to bring our new 'slicedAlphabet' to the front of the alphabet in order to get our 'ciphered' alphabet using the Javascript function concat.  
`ciphered = slicedAlphabet.concat(alphabet); `

* We don't want repeating letters in our 'ciphered' variable, so we are going to need to use the Javascript function slice to get rid of the repeating letters.  Seeing as there are 26 letters in the alphabet we could slice from index 0 to 26.  
`ciphered = ciphered.slice(0, 26); `
Our variable 'ciphered' now contains a dynamic alphabet based on the number argument in our 'encode' function!

* We need to find the index value for each letter in our string argument and use the same index values on our 'ciphered' alphabet.  To do this, we need to create a for loop that iterates over our 'alphabet' array and returns the index value of each of the values from our variable 'splitString'.  It will need to have a condition inside our for loop that takes into account spaces as well.  

* Once we have the index value for each letter in our string argument, we would pull the letters from our 'ciphered' array at the same indexes to make a new array of the ciphered string.  

* Since we will have an array of the ciphered string we will want to use the Javascript function .toJoin on our result array in order to have a new string with our ciphered values.  

* Lastly, we would want to return the string to end our function 'encode'.  


This is as far as I can get in my code...tried to figure out a way to make this work, but am stuck...
```Javascript
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  

function encode(string, number) {
  var ciphered = [];
  string = string.toUpperCase();
  var splitString = string.split('');
  var slicedAlphabet = alphabet.slice(alphabet.length - number);
  ciphered = slicedAlphabet.concat(alphabet);
  ciphered = ciphered.slice(0, 26);
}

 encode("Hello World", 9); 
```
