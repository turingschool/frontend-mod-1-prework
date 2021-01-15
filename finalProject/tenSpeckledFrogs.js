var i = 10
// var i speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were var i (-1) speckled frogs.
// var i (-1) speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice cool, then there was var i (-2) speckled frog.
// var i (-2) speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!

for (var i=10; i > 0; i--){
  if(i === 1){
      console.log((i) + " speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!");
  }else if (i <= 9){
    console.log((i) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice cool, then there was " + (i - 1) + " speckled frogs. ");
  }else{
    console.log((i) + " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were " + (i - 1) + " speckled frogs.");
  }

}
