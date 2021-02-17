### Ceasar Cipher Notes

1. Write a globally available alphabet array, or an alphabet string split and saved into an array;
  - ensure every letter is capitalized, or use .toUpperCase() on alphabet array variable to capitalize each letter/element.
    - making this alphabet an array gives each element (in this case, letter) an ordered position and index number, which will be manipulated later in the program to form the cipher
2. Write a function expression that takes two parameters: *word* (the word to be encoded) and *shift* (the number of places the alphabet will be shifted).
  1. capitalize *word* and save in variable (ex: word = word.toUpperCase())
  2. .split("") *word* into an array, save in a same variable.
  3. Declare a variable that is an empty array that will contain the results of the iteration over the alphabet array.
  4. Declare an empty variable that will contain the original alphabet index position later in the program.
  5. Declare another empty variable that will contain the post-shift index position later in the program.
  6. Iterate through each element in word array to determine each character's position in the original alphabet array (this is based on their indexes).
    1. Use if statement to determine if each character is present in the alphabet array (using .includes() or .filter())
      1. If the character is present, reassign index variable to contain the filtered character's initial numerical position in the original alphabet array using .indexOf()
      2. Reassign the nextIndex variable to contain first index variable value plus the value of the *shift* argument
        1. Add *shift* argument to the value of the first index variable and use % 26, to assure that if the *shift* value plus the alphabet letter index is greater than 26, the remainder will be applied at the 0 index.
        2. Add alphabet array character at the index provided by the second index variable and push it to the empty array declared earlier in the function.
    4. Write an else statement that pushes the character to the empty array declared earlier in the function if it is not present in the alphabet array.
    5. use .join() to return the array to string form
    6. log encoded word to console with .toUpperCase() to print in capital letters.

    ````
    function cipher(word, shift) {
    word = word.toUpperCase();
    wordArr = word.split("");
    var cipherArr = [];
    var index = "";
    var nextIndex = "";
    for (var i = 0; i < wordArr.length; i++) {
        if (alphaArr.includes(wordArr[i])) {
          index = alphaArr.indexOf(wordArr[i]);
          nextIndex = (index + shift) % 26;
          cipherArr.push(alphabet[nextIndex])
        } else {
          cipherArr.push(wordArr[i])
        }
    }
    console.log(cipherArr.join("").toUpperCase())
    }

    cipher("secret message!!!", 14);
    //prints GSQFSH ASGGOUS!!!
    ````
