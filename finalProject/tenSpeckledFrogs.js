for( let i = 10; i > 0; i--){
  if(i == 1){
    console.log('1 speckled frog sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were no more speckled frogs!');
  } else if(i == 2){
    console.log('2 speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there was 1 speckled frog.');
  } else {
    console.log(i + ' speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there were ' + (i - 1) + ' speckled frogs.');
  }
}
