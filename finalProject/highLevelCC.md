<!-- Notes :
My first step to solve this problem would be to write down the prompt, task, and the examples in my notebook which I have already done. After reading the file,
I figure I need to create a variable alphabet that contains a string of the alphabet.
Then create a function that will take in a given string and a number value of how much to shift it by for each letter that is being encoded.
I would declare at the beginning of the function an assigned variable called output to have a value of an empty string.
Then I would take the input string letter by letter with a for loop to find the index of each letter from the input string in the alphabet.
 I would then need to find the letter that the shift value is trying bring it to ex, h -4 I would need to find a way to subtract 4 index values before the given index of h which goes back 4 to d. When I had found the encoded version of h being d I would add that to the output string and that would be the end of the loop. Then the loop would move on to the next letter in the input string and so on.
 I would then need to create an if statement in the same function when determining the shift letter
 which found if the shift value was trying to move one of the letters past the index value of 0, a that it would not panic but start at the back of the alphabet and complete the remaining shift ex, b-5 would go over a, z, y, x, and land on w.
finally I would call the function and see if it worked. -->





```javascript
var alphabet = ('abcdefghijklmnopqrstuvwxyz');
function encode(encodeStr, shiftNum){
var output = '';
for(var i = 0;i < encodeStr.length; i++){
var letterToCheck = encodeStr[i];
alphabetIndex = alphabet.indexOf(letterToCheck);
if(alphabetIndex < 0){
output += letterToCheck;
} else {
alphabetIndex = alphabetIndex - shiftNum
if(alphabetIndex < 0){
  alphabetIndex = (alphabet.length - 1) + alphabetIndex;
}
var convert = alphabet.charAt(alphabetIndex);
output += convert
}
}
console.log(output.toUpperCase());
}
encode('hey hello', 5);
```
