var userNum = 10;  //.prompt("How many frogs can fit on a log?");
  for (var i=userNum; i>0; i--) {
    if (i==1) {
      console.log("1 speckled frog ");
    } else {
      console.log(i + " speckled frogs ");
    };
    console.log(" sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there ");

    if (i>2) {
      console.log("were " + (i-1) + " speckled frogs.");
    } else if (i==2) {
      console.log("was " + (i-1) + " speckled frog.");
    } else {
      console.log("were no more speckled frogs!");
    }
  };
