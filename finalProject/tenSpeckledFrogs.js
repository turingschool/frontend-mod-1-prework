for(var i = 10; i > 0; i--){
  if(i - 1 > 0){
    console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) +" speckled frogs.")
  } else {
    console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")
  }
}

// this code should work for any number of frogs you would like to plug into variable numberOfFrogs below the function
function speckledFrogs(frogs){
  for(var i = frogs; i > 0; i--){
    if(i - 1 > 0){
      console.log(i + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) +" speckled frogs.")
    } else {
      console.log(i + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!")
    }
  }
};

var numberOfFrogs = 203;
speckledFrogs(numberOfFrogs)
