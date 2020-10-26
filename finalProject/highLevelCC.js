function ceasarCipher(str, num) {
  var lowerCaseStr = str.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var output = "";

  for(var i = 0; i < lowerCaseStr.length; i ++) {
    var currentLetter = lowerCaseStr[i];

    //At this point I'm really just following someone else's code
    //from Youtube
    //maybe I'll come back later and try again 
