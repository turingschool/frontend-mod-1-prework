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
