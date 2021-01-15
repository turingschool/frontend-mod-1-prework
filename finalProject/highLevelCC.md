  The first step is to declare a function that will take in a string and a number, then declare the variables that will be needed for the function: the original string applying the `toLowerCase()` method, the full alphabet applying the `split()` method, and a variable for the new encoded string.

  Next set up a loop that will iterate over the string where the index `[i]` is set to zero, then conditioned less than `string.length`, and the increment or decrement instruction.

  Finally declare variables for the `currentIndex` position and the `newIndex` position. Use if-statements to make the program wrap through the index `[i]` if greater than 25 or less than 0 to keep rotating through the alphabet.

  The Caesar Cipher is the last part of the finalProject that I'm completing. I used Google to read about creating a Caesar Cipher function in JavaScript, and have now viewed around 5 demos - all of them coding a little differently. Ultimately, it was a Youtube video that walked me through it, and got my code to work. However, I don't feel confident in my understanding of this code at all. In fact, I still can't successfully make it shift left through the index - or decrement with `i--`. All of my output is from an increment shift, making my output for `('Hi', 2)` JK instead of FG. I'm working to figure out what minor detail/s that I've overlooked changing to get it to decrement without an error.

  I plan to spend the next week and a half working on building up coding muscle memory, while working through the details of this code. My goal is to have a working `encode()` function that I completely understand and that shifts right OR left by the time classes begin.

```js
  // declare the function and name it - encode - and add the parameters for the function to take a string and a number
  function encode(str, num) {
  // declare variable for string, adding method to turing the string to lowercase letters
  var lowerCaseStr = str.toLowerCase();
  // delcare variable for all letters in the alphabet and use the split method to split the alphabet up into individual letters
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  // declare variable for the output string
  var newStr = '';
  // create loop counter index zero and iterate through the lowerCaseString.length, set increment or decrement
  for(var i = 0; i < lowerCaseStr.length; i++) {
    // declare variable for current letter and set it equal to the lowerCaseStr index position
    var currentLetter = lowerCaseStr[i];
    // use if-statement to tell the program to continue to iterate if the current letter is an empty space
    if(currentLetter === '') {
      newStr += currentLetter;
      continue;
    }
    // This is where I get a little lost. Declare variable for the current index and set it equal to the alphabet index of the current letter
    var currentIndex = alphabet.indexOf(currentLetter);
    // Declare new index variable and set it equal to the current index plus a number which will be an argument passed in
    var newIndex = currentIndex + num;
    // Create if-statements that tell the program to wrap around to 0 index position or 26 index position when the newIndex is greater than 25 or less than 0.
    if(newIndex > 25) newIndex = newIndex - 26;
    if(newIndex < 0) newIndex = newIndex + 26;
    // use an if-statement to tell the program to put the changed to lowercase letters back to uppercase letters.
    if(str[i] === str[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    // otherwise just return the new index letter in lowercase
    else newStr += alphabet[newIndex];
  }
  // return the new string of encoded letters
  return newStr;
}
// Expected output Jk using i++
console.log(encode('Hi', 2));
```
