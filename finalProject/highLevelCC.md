#High Level Notes for Ceasar Cipher

###Scenario
Create a Caesar Cipher which will take any message and shift each letter n spaces in the alphabet. For example, with a left shift 4, G becomes C.

"Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:

```javascript
encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"
```
"

###Collection
Each letter of a message that needs to be encoded.


###For Each
Encode each letter with a given shift value.


###Do This
1. Create a class for CaesarCipher including parameters to input a message and shift value.
1. Pass an argument with a string message to encode and for a number which will state the shift value for the cipher.
1. Assign each letter to a numerical value.
1. Subtract the numerical value of each letter by the shift value except for spaces between words and loop to end of alphabet values if the shift value brings encoded value to less than the value of 'a'.
1. Return the letter assigned to the new numerical value.
1. Return the encoded string.
