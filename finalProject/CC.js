var caesarShift = function (str,amt) {
  if (amt < 0) {
    return caesarShift(str, amt + 26);
  }


  var output = "";


  for (var i = 0; i < str.length; i++) {

    var c = str[i];


    if (c.match(/[a-z]/i)) {

      var code = str.charCodeAt(i);


      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amt) % 26) + 65);
      }


      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amt) % 26) + 97);
      }
    }

    output += c;
  }

  return output;
};


console.log(caesarShift("Sarah Fitz", 6));
console.log(caesarShift("Sarah Fitz", -20));
