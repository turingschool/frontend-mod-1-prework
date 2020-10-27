
var num = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]

for (i = twenty; i > zero; i--) {
  if (i > 2) {
    console.log((num[i - 1]) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where it was nice and cool, then there were " + (num[i-2]) + " speckled frogs.")
  } else if (i === 2) {
    console.log("Two speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was one speckled frog.")
  } else {
    console.log("One speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")
  }
}
