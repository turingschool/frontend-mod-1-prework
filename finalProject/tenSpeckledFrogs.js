var text = 'sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then '





for (var i = 10; i > 0; i--) {
    if (i > 2){
    console.log(i + ' speckled frogs ' + text + 'there were ' + (i - 1) + ' speckled frogs.');
  } else if (i === 2) {
    console.log(i + ' speckled frogs ' + text + 'there was ' + (i - 1) + ' speckled frog.');
  } else if (i === 1) {
    console.log(i + ' speckled frog ' + text + 'there were no more speckled frogs.');
  }
};
