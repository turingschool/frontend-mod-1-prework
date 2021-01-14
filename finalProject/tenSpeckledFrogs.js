console.log("3 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were 2 speckled frogs. 2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice cool, then there was 1 speckled frog. 1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");


for (var i=10; i > 0; i--) {
if(i == 1) {
console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")
}
else{
console.log((i) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i-1) + (" speckled frogs"))
}
}

var i = 20

while(i > 0){
  if(i == 1) {
  console.log("1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")
  }
  else {
  console.log((i) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i-1) + (" speckled frogs"))
  }
  i--
  }
