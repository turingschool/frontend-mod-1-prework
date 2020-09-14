var frogNum = 5; //this is the number of stanzas

for(var frogs = frogNum; frogNum >= 1; frogNum--) { //iterating through from frogNum to 1,

  if(frogNum > 2) {
    console.log("\n" + frogNum + " speckled frogs sat on a log" +
      "\n" + "eating some most delicious bugs." +
      "\n" + "One jumped in the pool where it's nice and cool," +
      "\n" + "then there were " + (frogNum - 1) + " speckled frogs!") //if frogNum is more than 2, output this
  } else if(frogNum == 2) {
    console.log("\n" + frogNum + " speckled frogs sat on a log" +
      "\n" + "eating some most delicious bugs." +
      "\n" + "One jumped in the pool where it's nice and cool," +
      "\n" + "then there was 1 speckled frog!") //if frogNum is 2, output this
  } else if(frogNum == 1) {
    console.log("\n" + frogNum + " speckled frogs sat on a log" +
      "\n" + "eating some most delicious bugs." +
      "\n" + "One jumped in the pool where it's nice and cool," +
      "\n" + "then there were no more speckled frogs!") //if frogNum is 1, output this
  }
}


// extension code, changing numbers (1) to number words (one)
// lines 29-75 from https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript

var th = ['', 'thousand', 'million', 'billion', 'trillion'];
var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toWords(s) {
  s = s.toString();
  s = s.replace(/[\, ]/g, '');
  if(s != parseFloat(s)) return 'not a number';
  var x = s.indexOf('.');
  if(x == -1)
    x = s.length;
  if(x > 15)
    return 'too big';
  var n = s.split('');
  var str = '';
  var sk = 0;
  for(var i = 0; i < x; i++) {
    if((x - i) % 3 == 2) {
      if(n[i] == '1') {
        str += tn[Number(n[i + 1])] + ' ';
        i++;
        sk = 1;
      } else if(n[i] != 0) {
        str += tw[n[i] - 2] + ' ';
        sk = 1;
      }
    } else if(n[i] != 0) { // 0235
      str += dg[n[i]] + ' ';
      if((x - i) % 3 == 0) str += 'hundred ';
      sk = 1;
    }
    if((x - i) % 3 == 1) {
      if(sk)
        str += th[(x - i - 1) / 3] + ' ';
      sk = 0;
    }
  }

  if(x != s.length) {
    var y = s.length;
    str += 'point ';
    for(var i = x + 1; i < y; i++)
      str += dg[n[i]] + ' ';
  }
  return str.replace(/\s+/g, ' ');
}

var frogNum = 10; //sets frogNum to Number of frogs to start with
var frogNumStr = toWords(frogNum); //changes frogNum to a string, saves it as frogNumStr

for(var frogs = frogNum; frogNum >= 1; frogNum--) { //iterating through from frogNum to 1, 

  if(frogNum > 2) {
    console.log("\n" + toWords(frogNum) + "speckled frogs sat on a log" +
      "\n" + "eating some most delicious bugs." +
      "\n" + "one jumped in the pool where it's nice and cool," +
      "\n" + "then there were " + toWords(frogNum - 1) + "speckled frogs!") //if frogNum is more than 2, output this
  } else if(frogNum == 2) {
    console.log("\n" + toWords(frogNum) + "speckled frogs sat on a log" +
      "\n" + "eating some most delicious bugs." +
      "\n" + "one jumped in the pool where it's nice and cool," +
      "\n" + "then there was one speckled frog!") //if frogNum is 2, output this
  } else if(frogNum == 1) {
    console.log("\n" + toWords(frogNum) + "speckled frog sat on a log" +
      "\n" + "eating some most delicious bugs." +
      "\n" + "it jumped in the pool where it's nice and cool," +
      "\n" + "then there were no more speckled frogs!") //if frogNum is 1, output this
  }
}