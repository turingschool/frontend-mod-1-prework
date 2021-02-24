**High Level Notes...ish**

1. First thing I would do when executing this project would be to layout the steps I want to follow. What is the prompt asking me to do here? The answer: write a program that will take a string, separate the characters of that string, and shift each individual character of that string by a set numerical amount (either to the right or the left) and run it to return a new string, either encrypted or decrypted based off the input. Given the expected return examples in the prompt, it looks as if the shift will be to the left, rather than to the right. We also have to take into account spaces (not a letter) so that will need to be added into the function. And will likely be using a % modulo mathematical expression to have the loop wrap around the alphabet.

1. Create function to run through string and shift (number)
1. Define variable _alphabet_ to array of letters of alphabet (and will call index values from array later) or an object with each letter as a key and value as integer (a: 0, b: 1, etc)
1. Define variable to change all characters to lower case to run through function
1. Set variable _result_ to empty string to allow for new characters to be placed and returned at the end
1. Initiate a for statement to loop through alphabet variable by initial, condition, and increment expressions
1. Retrieve index value of each alphabet character by using indexOf() method
1. Set parameters to if/else statements to add or subtracting shift amount to the indexValue of alphabet characters
1. Use an else statement to set parameter for any non-letter character
1. Return _result_ and have it be changed to all caps using toUpperCase(); method
1. Declare num to equal to mod 26 so any shift input over 25 or under 0 will just wrap around alphabet.
1. console.log() the function with string and shift input


// I struggled with this! I'm not even sure if what I'm doing is correct or close! I'm not confident I could actually write this program without many many google and youtube videos. I believe the code belong works though! However, I spent hours watching youtube videos to try and understand this.


function caesarCipher(str, num) {
  num = num % 26;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = '';
  var lowerCaseStr = str.toLowerCase();

  for (var i = 0; i < lowerCaseStr.length; i++) {
    var currentChar = lowerCaseStr[i];
    if(currentChar === ' ') {
      result += currentChar;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentChar);
    var newIndex = currentIndex + (num * -1);
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if(str[i] = str.toUpperCase()) {
      result += alphabet[newIndex].toUpperCase();
    }
    else result += alphabet[newIndex];
  }
  return result;
}
