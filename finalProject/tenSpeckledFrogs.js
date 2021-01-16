var rhyme = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var midSentence = "One jumped in the pool where its nice and cool, \n";

for (var i = 0; i < rhyme.length; i++) {
  if(rhyme[i] <= 1) {
    console.log("1 speckled frog sat on a log eating some most delicious bugs \n"
    + midSentence
    + "Then there were no more speckled frogs!");
    }

  else if(rhyme[i] === 2) {
    console.log("2 speckled frogs sat on a log eating some most delicious bugs \n"
    + midSentence
    + "then there was 1 speckled frog.");
    }

  else {
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs \n"
    + midSentence
    + "then there were " + [i-1] + " speckled frogs.");
    }

}
// need to figure out how to reverse the order of logs
