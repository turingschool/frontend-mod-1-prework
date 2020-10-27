
for (var i = 10; i > 0; i--) {
  if (i > 2) {
    console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where its nice and cool, \n then there were " + (i - 1) + " speckled frogs!");
  } else if (i === 2) {
    console.log(i + " speckled frogs sat on a log \n eating some most delicious bugs. \n One jumped in the pool where its nice and cool, \n then there were " + (i - 1) + " speckled frog!");
  } else {
    console.log (i + " speckled frog sat on a log \n eating some most delicious bugs. \n One jumped in the pool where its nice and cool, \n then there were no more speckled frogs!");
  }
}
