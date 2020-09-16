Ten Speckled Frogs

//Required
var firstFrogAmount = ["10", "9", "8", "7", "6", "5", "4", "3", "2",];
var secondFrogAmount = ["9", "8", "7", "6", "5", "4", "3", "2", "1",]

for (var i = 0; i < firstFrogAmount.length; i++) {
  console.log(firstFrogAmount[i] + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + secondFrogAmount[i] + " speckled frogs.", i);
}

console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")

//Extension 1
var beginningFrogs = new Array()

for (var i = 76; i > 1; i--) {
  console.log((beginningFrogs[i] = i - 1) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (beginningFrogs[i] = i - 2) + " speckled frogs.", i);
}

console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")

//Extension 2
