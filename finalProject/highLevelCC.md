The Prompt
Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:

encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"

Your Task
Add a highLevelCC.md file to your finalProject directory. In that file, write up high level notes about how you would solve this problem. When you're finished writing your detailed notes, it is optional to implement a solution in code.

First:
- write a globally available alphabet array, or an alphabet string split into an array; make sure it is all caps
  - this is to assign numerical and ordered values to each letter, which will be altered later in the program


write a function expression (encode) that takes two parameters: *word* (the word to be encoded) and *shift* (the number of places)
  - .split() *word* into an array, save in a new variable
  - make this new word variable .toUpperCase()
  - iterate through each element in word array (maybe a for loop or for...of)
   - use if statement to determine if each character is present in the alphabet array (maybe using .includes())
    - if the character is present, create a variable to assign it an initial numerical value by comparing it to the alphabet array using .indexOf()
      - Then, declare a second variable that contains this position plus the new, ciphered position
        - add *shift* parameter to the first numerical variable and use % 26, to assure that if the *shift* value plus the alphabet letter index is greater than 26, the remainder will be applied at the 0 index
      - return the alphabet array character at the index provided by the second position variable
    - if the character is not present, write an else statement that returns the character
  - use .join() to return the array to string form
  - log encoded word to console
