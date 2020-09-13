
/*
nursery rhyme example:

> 3 speckled frogs sat on a log
> eating some most delicious bugs.
> One jumped in the pool where its nice and cool,
> then there were 2 speckled frogs.

instructions:
## Required

Make your program print the rhyme above for *10* frogs, with attention to where
language changes. Notice the very small differences between what should be printed
out when 3, 2 or 1 frog is sitting on a log.
*/

for (var i = 10; i > 0; i--) {
  if (i > 2) {
    console.log(i + ' speckled frogs sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there were " + (i-1) + " speckled frogs.\n");
  } else if (i === 2) {
    console.log(i + ' speckled frogs sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there was " + (i-1) + " speckled frog.\n");
  } else if (i === 1) {
    console.log(i + ' speckled frog sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there were no more speckled frogs!\n");
  }
}


/*
## Extension 1

Make your program work for _any_ number of frogs.
*/

var start = 4;

for (var i = start; i > 0; i--) {
  if (i > 2) {
    console.log(i + ' speckled frogs sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there were " + (i-1) + " speckled frogs.\n");
  } else if (i === 2) {
    console.log(i + ' speckled frogs sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there was " + (i-1) + " speckled frog.\n");
  } else if (i === 1) {
    console.log(i + ' speckled frog sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there were no more speckled frogs!");
  }
}

/*
## Extension 2

Print word versions of each number in the first and fourth lines, for example,
the first verse in the above example would print 'Three speckled frogs...' and
'were two speckled frogs'. There are solutions that don't involve using a library
or a huge piece of someone else's code.
*/


var start = 26;
var numberArrayLessTwenty = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen', 'Twenty']
var tensArray = ['Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninty','One Hundred']


for (var i = start; i > 0; i--) {
  if (i > 100) {
    console.log("That's too many frogs!");
    break
  }
  if (i > 2) {
    console.log(numberToWords(i) + ' speckled frogs sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there were " + numberToWords(i-1) + " speckled frogs.\n");
  } else if (i === 2) {
    console.log(numberToWords(i) + ' speckled frogs sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there was " + numberToWords(i-1) + " speckled frog.\n");
  } else if (i === 1) {
    console.log(numberToWords(i) + ' speckled frog sat on a log \n eating some most delicious bugs.');
    console.log("One jumped in the pool where it's nice and cool, \n then there were no more speckled frogs!");
  }
}


function numberToWords(number) {
  var words = ''

  if (number < 20) {
    words = numberArrayLessTwenty[number]
  } else if (number > 19 && number < 100) {
    var remainder = number % 10
    var leadingNumber = (number - remainder) / 10
    words = tensArray[leadingNumber-2]

    if (remainder > 0) {
      words = words + '-' + numberArrayLessTwenty[remainder].toLowerCase();
    }
  } else if (number === 100) {
    words = tensArray[8]
  }
  return words
}

// whew!
