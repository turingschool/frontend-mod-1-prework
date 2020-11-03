//CeaserCipher Project.

/*
part1- Matching "string" letters to their "alphabet array" position. This is done by looping
  each letter of the "string" thought the Key array.

part2- Save the string "converted" array position to a new varable.

part3- Create a new var in the function "modifiedStr". This takes the "converted" and
  adds the "key value" then returns the new position on the "alphabet" array.

* At this point I had to create a loop from the end of "alphabet" back to the beginning.
  So it would not throw an error when key numbers are to large. This was done by using the % modulus operator.

* At this point code only logging the last bit of data in the array string. Or last part of all
  the loops. After some research and time. I moved the "var modifiedStr" to before the loops
  and set it to a empty array. Then added the ".push" inside the loop. This fixed the issue.

* It also took some though/time on where everything needed to be in the multiple loops. This
  was my first time trying to code with multiple "for" loops inside each other.

part4- log the output of the new string "modifiedStr".

* Then added the ".join("") and the space to the "alphabet" array. To make it log and convert back correctly.

part5- To return to the original "string" I would reverse the "modifiedS.push" step. By
  modifiedS.push(alphabet[converted - key % 53]); All other code would be the same.

*/

function cipher(string, key) {

  var alphabet = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var modifiedStr = [];

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < alphabet.length; j++) {
      if (string[i] === alphabet[j]) {
        var converted = j;
        modifiedStr.push(alphabet[converted + key % 53]);
      }
    }
  }
  console.log(modifiedStr.join(""));
}

cipher("This is test string", 8);
