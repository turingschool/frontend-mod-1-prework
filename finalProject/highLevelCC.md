
# Ceasar Cipher  

## Overview  
_The ceaser cipher uses arrays to create an alphabet and shifted alphabet, which arranges the letters based on the parameter of encode. The same index value is used to reference the original character and the shifted characters._

## Creating the both arrays  

Assuming the program uses the following syntax:  

'encode(inputString, shiftNum);'  

shiftNum is used to create the shifted array. Since there is no way to specify whether the shift is left or right, I'm going to assume that a negative value of shiftNum indicates a left shift, a positive value indicates a right shift and O indicates no shift.  

First, initialize an array containing the 26 characters of the alphabet.  

'alphaArray = ['A','B','C'...'Z']; //Use capital letters only. The inputString will be converted to upper case later.'

To create the shifted array, first initialize a new array, then check if shiftNum is positive, negative or 0. Next, use shiftNum as the condition of a for loop that removes either the first or last item in the array and moves it to either the front or back, depending on the value of shiftNum.  


'var shiftArray = alphaArray; //I'll need alphaArray later so it needs to remain unchanged.

if (shiftNum === 0) { //a value of 0 for shiftNum causes the program to return inputString without applying the cipher
  console.log(inputString);
}

else if (shiftNum > 0) {  
  for (var i = 0; i < shiftNum; i++) {  //for loop counts up towards the positive value of shiftNum
    shiftLetter = shiftArray.shift();   //remove the first element
    shiftArray.push(shiftLetter);       //push the removed element to the end of the array
  }

else
  for (var y = 0; y > shiftNum; y--) {  //for loop counts down towards the negative value of shiftNum
    shiftLetter = shiftArray.pop();     //remove the last element
    shiftArray.unshift(shiftLetter);    //add the removed element to the beginning of the array
  }
}'

## Prepping inputString  

While the input statement may benefit from having upper and lower case, the coded message doesn't. To that end, I would create a new string and assign it the uppercase value of inputString to make it easier to process and compare against the arrays.

'upperString = inputString.toUpperCase();'  

## Creating the output array  

To create the output, the program will use a new array called outputArray that contains the shifted values of the inputString. Filling this array will require nested for loops. The outer loop steps through each character of the upperString and the inner loop compares that character to each value within alphaArray. If the values are equal, the inner loop will add the shifted character value the matching index of shiftArray to outputArray, then stop the loop by changing the value of the counter. If the inner loop does not detect a match between upperString and any values of alphaArray, then the character in question must be not a letter and instead is punctuation, a symbol or a number. In this case the inner loop will add that character to outputArray without making any changes using an else statement.

'
var outputArray;

for (var outerX = 0; outerX <= upperString.length; outerX++) { //

  for (var innerX = 0; innerX < 26; innerX++) {
    if (upperString.charAt(outerX) === alphaArray[innerX]) {
      outputArray[outerX] = shiftArray[innerX];
      innerX = 26;
    }
    else {
        outputArray[outerX] = upperString.charAt(outerX);
    }
  }
}'

## Logging outputArray

At this point, outputArray should contain each individual character of the encoded message, including any spaces, punctuation etc. This means a simple for loop can be used to log the entire statement without any concatenation.

'
for (var outputI = 0; outputI <= outputArray.length; outputI++) {
  console.log(outputArray[outputI]);
}'


## Link to repl

_Here's a link to a repl where I built a version of the above program. The output isn't correctly formatted but I've hit a wall trying to find a way to export a single line of text from an array of characters.'_

https://repl.it/@MUmland/CeasarSaladCypher#index.js
