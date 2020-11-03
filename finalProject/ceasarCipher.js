function ceasarCipher(string, string2, num){
  var coderString = "";
  var finalString = "";
  for (var i = 0; i < string2.length; i++){
    if(i - num < 0){
      coderString += string2[i + 26 - num];
    } else {
      coderString += string2[i - num]
    }
  };

  var upperCase = string.toUpperCase()
  for (var i = 0; i < upperCase.length; i++){
    finalString += coderString[string2.indexOf(upperCase[i])]
  }
  console.log(finalString)
}

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
ceasarCipher("Hello", alphabet, 5)
