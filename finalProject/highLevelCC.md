## Ceasar Cipher
----
In an array of string values in which I will need to include all characters, uppercase and lowercase, it's index will be scanned by a function for matching each letter of a split string to a letter within this array. At this point, the letter returned will be x number of spaces behind in the array where x is the second parameter and the number of letters to move backward.

**Loop:**
Once this is acheived for the letter, inside the function we will push(append) the new letter to a new String array to be returned, until the original array length has been met. To accomplish this for every possible letter I wiil create an array with more than 52 letters, as an 'A' needs to turn into a letter preceding it, 'Z'.  

_Call variables:_ `oldString` - the 1st argument / `shiftLeft` - the 2nd argument

1. Declare a function encode(oldString,shiftLeft)
  * splits old String
2. loop through provided string until str.length is met
   1. inside this loop: loop through alphabet until letter matches
      * if letter is the same, encrypt it to new letter by calling the function that returns the new letter
  (-again until str.length)
3. log the output of the main loop function by calling it now.



### Main idea:


 Call a function on each letter of the first array to convert it x number back in the alphabet.
After referring to an alphabet array with an index somewhere in the middle of two sets of case specific alphabets I ~~should be~~ will be able to make something work.

```
var alphabet = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var shiftLeft;
var newString = [];
var oldSring = [];
var newLetter;

function cipher(i) {
  newLetter = alphabet[i-shiftLeft];     //return the new letter
}

function encode(str, shiftLeft) {
  oldString = str.split("");
  for (var x=0; x<str.length; x++) {  //loop through provided string until str.length
    for (var i=26; i<78; i++) {         //loop through alphabet until letter matches
      if (oldString[x] == alphabet[i]) {  //if letter is the same, encrypt it to new letter
        cipher(i);
        newString.push(newLetter);
      }
    }
  }
}
console.log(encode("Hi", 2));

```

#### I am concerned that some lines were created with some possibly *limited forethought.*


This all completed, I have **no output** on the array function yet. This is where I am at and would love some help debugging. I am getting undefined returns from the cipher function and pretty stumped though I know I'm on the right track.
This code, though it logically makes sense to me, has not been successful in returning a correct value. I would like to revisit this with a mentor if possible.
