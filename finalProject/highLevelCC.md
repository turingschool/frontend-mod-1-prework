# Pseudocode for Cipher

Set a class Letter;

Create a new object instance for each letter of the alphabet;

for each letter instance assign a positive value and negative value property that is based on:

  positive: a = 0, b = 1, c = 2 .... z = 25

  negative: a = -26, b = -25, c = -24 .... x = -3, y = -2, z = -1;

Set a function to encode with parameters of input (word to encode) and shift value (in spaces "left" imagining a left to right alphabet);

Separate each character in the input into its own string in an array and set as new variable inputLetters;

Create a loop on the array inputLetters with steps;

  If the string is " ", (i.e. a space);

    output " ";
  else match the string value with the object instance of the same value;

    Evaluate (the positiveValue of the matched instance - the shift value) and set as variable newValue[i];
    
    Find the instance that has newValue[i] as a property;

    log the value of that instance;

Repeat for each element in the inputLetters array;

Concatenate outputs to create one string and set as new variable "output";

log "output" to the console;


Call the encode function with your input and shift value;
