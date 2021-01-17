# Ceasar Cipher

### encode("Hello World", 5); //should log "CZGGJ RJMGY"

- Starting at the first character of the string, we shift 21 positions in the alphabet.
- If this makes us fall off the end of the alphabet, then shift back 5 positions.
- We loop through the entire string, completing the shift for each letter.
- Add each new letter to a new string and return shifted string.


### encode("Hi", 2); //should log "FG"
- Starting at the first character of the string, we shift 24 positions in the alphabet
- If this makes us fall off the end of the alphabet, then shift back 2 positions.
- We loop through the entire string, completing the shift for each letter.
- Add each new letter to a new string and return shifted string.
