// var input="Hello World"
// console.log(input.split(""))

// var alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var letters= alphabet.split("")
// var len= letters.length
//
// for (i=0; i < len; i++) {
//   letters[i]
// }

// var alphabet= { A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8, I:9, J:10, K:11, L:12, M:13, N:14, O:15, P:16, Q:17, R:18, S:19, T:20, U:21, V:22, W:23, X:24,Y:25, Z:26};

function encode(str, num){
  num = num % 26;
  var strUpper = str.toUpperCase();
  var alphabet= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var letters= alphabet.split("");
  var strOutput= "";
  for (let i = 0; i < strUpper.length; i++){
    var currentLetter= strUpper[i];
    var currentIndex = letters.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (currentLetter === " ") {
      strOutput += currentLetter;
      continue;
    } else { strOutput += letters[newIndex];
    }
  }
console.log(strOutput)
}

// console.log(alphabet)
console.log(150 % 26)
encode("these are just words that are being strung together to test the system", 27)
