//CeaserCipher Project.

/*
part1- Matching "string" letters to their "key array" position. This is done by looping
each letter of the "string" thought the Key array.
part2- Save "converted" array position to a new varable.
part3- Create a new var in the function "modifier"
part4- Log "converted" variable and use new position to log on "key array"
then print the new value.
*/
function cipher(string, key) {

  var alphabetKey = [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < alphabetKey.length; j++) {
      if (string[i] === alphabetKey[j]) {
        var converted = j;
      }
    }
  }
  var modifiedS = alphabetKey[converted + key];
  console.log(modifiedS);
}

cipher("cat CAT", 1);
