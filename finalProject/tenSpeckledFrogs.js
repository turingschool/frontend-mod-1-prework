var wordedNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
for (i = 10; i > 0; i--) {
  newFrogs = i - 1;
  newFrogWorded = wordedNums[newFrogs]; //only works for line 4
  frogWorded = wordedNums[i]; //only works for line 1 as it does not decrement until loop starts again
  if(newFrogs === 0){
    console.log(frogWorded + ' speckled frogs sat on a log');
    console.log('eating some of the most delicous bugs.');
    console.log('One jumped in the pool where its nice and cool,');
    console.log('then there were no more speckled frogs!');
  } else if(newFrogs === 1) {
    console.log(frogWorded + ' speckled frogs sat on a log');
    console.log('eating some of the most delicous bugs.');
    console.log('One jumped in the pool where its nice and cool,');
    console.log('then there was ' + newFrogWorded + ' speckled frog');
    console.log(' ');
} else {
  console.log(frogWorded + ' speckled frogs sat on a log');
  console.log('eating some of the most delicous bugs.');
  console.log('One jumped in the pool where its nice and cool,');
  console.log('then there were ' + newFrogWorded + ' speckled frogs.');
  console.log(' ');
}
};
