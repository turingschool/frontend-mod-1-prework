// have to say this one was a doozy. took me a long time to figure out: LOTS of
// googling and going through previous exercises...did eventually have to ask
// for help and find other code that was similar.

var speckledFrogs = 10;

var wordNumbers = ["zero", "one", "two", "three", "four", "five",
"six", "seven", "eight", "nine", "ten"];

for (var i = speckledFrogs; i > 0; i--) {
  console.log(`${speckledFrogsWords[i]} speckled frogs sat on a log
  eating some most delicious bugs. One jumped in the pool where it
  was nice and cool, then there were ${wordNumbers[i - 1]} speckled frogs`)
}
