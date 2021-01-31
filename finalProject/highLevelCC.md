
Create a function caesarCipher and give it some parameters
Define a variable named alphabet and give it a value (a-z) then use the split method so you can access each individual letter
Define a variable named encodedText and leave it no value

Begin a for statement that will loop through the alphabet variable and initialize it, give it a condition and an expression
Declare a character variable and give it a value
Declare an index variable and give it a value of a character index of alphabet
Include an if statement incorporating the index variable, assign the encodedText variable to the character variable to continue

Define a variable encodedText and set the value to index plus shift then divide

Then return encodedText

When console.logging add .toUpperCase method to change from lower case to upper



```javaScript
function caesarCipher(string, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let encodedText = '';

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    var index = alphabet.indexOf(char);
    if (index === -1) {
      encodedText += char;
      continue;
    }
    const encodedIndex = (index + shift) % 26;
    encodedText += alphabet[encodedIndex];
  }
  return encodedText;
}

console.log(caesarCipher('cats are cool'.toUpperCase(''), 4));
```
