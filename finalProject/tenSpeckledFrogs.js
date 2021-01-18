// Begin with any number of frogs by assigning any positive integer to i
var i = 10;

for (var i; i > 0; i--) {
   if (i >= 3 ) {
     console.log(i + " speckled frogs sat on a log \neating some most delicious bugs. \nOne jumped in the pool where its nice and cool, \nthen there were " + [i-1]
  + " speckled frogs.")
   } else if (i >= 2) {
         console.log(i + " speckled frogs sat on a log \neating some most delicious bugs. \nOne jumped in the pool where its nice and cool, \nthen there was " + [i-1]
    + " speckled frog.")
   } else {
        console.log("1 speckled frog sat on a log \neating some most delicious bugs. \nOne jumped in the pool where its nice and cool, \nthen there were no more speckled frogs!")
   }
};
