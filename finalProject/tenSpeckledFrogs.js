//CODE:

var text = " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there ";

for (i=11; i>1; i--) {
if (i>3) console.log((i-1) + text + "were " + (i-2) + " speckled frogs!");
else if (i===3) console.log(2 + text +  "was 1 speckled frog.");
else console.log(1 + text + "were no more speckled frogs!");
};


//Extension 1
//This allows for the numFrog variable to be changed to allow for any number of frogs to fit the code.
var text= " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there ";

var numFrog= 4;
for (i=numFrog; i>=1; i--) {
  if (i>2) console.log((i) + text + "were " + (i-1) + " speckled frogs!");
  else if (i===2) console.log(2 + text + "was 1 speckled frog.");
  else console.log(1 + text + "were no more speckled frogs!");
};

//Extension 2
//## Extension 2

//Print word versions of each number in the first and fourth lines, for example, the first verse in
//the above example would print 'Three speckled frogs...' and 'were two speckled frogs'.
//There are solutions that don't involve using a library or a huge piece of someone else's code.

var text= " speckled frogs sat on a log eating some most delicious bugs. One jumped in the pool where its nice and cool, then there ";
var numFrog= 10;
var str;
for (i=numFrog; i>=1; i--) {
  if (i>2) str = ((i) + text + "were " + (i-1) + " speckled frogs!");
  else if (i===2) str = (i + text + "was 1 speckled frog.");
  else str = (1 + text + "were no more speckled frogs!");
  regex = /2/g;
  str = (str.replace(regex, "Two"));
  regex = /4/g;
  str = (str.replace(regex, "Four"));
  str = str.toLowerCase();
  str = str[0].toUpperCase() + str.substr(1);
console.log(str);
};
//I am confused which lines you mean if the line starts with 10 speckled frogs....regardless
//this code will only work if it's under 12 since it will register as 1two instead of 12.
