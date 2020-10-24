/*
Required
Make your program print the rhyme above for 10 frogs, with attention to where language changes.
Notice the very small differences between what should be printed out when 3, 2 or 1 frog is sitting on a log.

- [X] DONE

Extension 1
Make your program work for any number of frogs.

- [X] DONE BUT CODE COMMENTED OUT BELOW B/C  DIDN'T TAKE THE TIME TO MAKE IT WORK WITH EXTENSTION 2 BELOW

Extension 2
Print word versions of each number in the first and fourth lines, for example, the first verse in the above
example would print 'Three speckled frogs...' and 'were two speckled frogs'. There are solutions that don't
involve using a library or a huge piece of someone else's code.

- [X] DONE AS FINAL OUTPUT BELOW BUT ONLY WITH WORD VERSIONS ONE TO TEN
*/

///*
// THIS CODE SATISFIES THE REQUIRED (A) PRINT THE RHYME FOR 10 FROGS and (B) EXTENSION 2 WITH WORD VERSIONS ONE TO TEN
var totalFrogs = 10;
var stringArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

for (var i = totalFrogs; i > 0 && i <= totalFrogs; i--) {
  if (i === 1 || i >= 3) {
    if (i >= 3) {
      var stringLength = stringArray[i].length;
      //determine length of selected element of stringArray
      var stringCap = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substr(1,stringLength - 1);
      //var above caps the first char using charAt then combines with the rest of the string less first char
      //might have been able to create a function to do this as well thus eliminating redundant code; went with mvp
      console.log(stringCap + " speckled frogs sat on a log");
      console.log("eating some most delicious bugs.");
      console.log("One jumped in the pool where its nice and cool,");
      console.log("then there were", stringArray[i - 1] + " speckled frogs.");
      console.log("");
    } else {
      var stringLength = stringArray[i].length; //see note in line 30
      var stringCap = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substr(1,stringLength - 1); // see note line 32 & 33
      console.log(stringCap + " speckled frog sat on a log");
      console.log("eating some most delicious bugs.");
      console.log("eating some most delicious bugs.");
      console.log("then there were no more speckled frogs!");
      console.log("");
    }
  } else if (i === 2) {
    var stringLength = stringArray[i].length; //see note in line 30
    var stringCap = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substr(1,stringLength - 1); // see note in line 32 & 33
    console.log(stringCap + " speckled frogs sat on a log");
    console.log("eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there was", stringArray[i - 1] + " speckled frog.");
    console.log("");
  }
}
//*/

/*
// THIS CODE SATISFIES REQUIRED (A) PRINT THE RHYME FOR 10 FROGS and (B) EXTENSION 1 FOR ANY NUMBER OF FROGS BY CHANGING totalFrogs
var totalFrogs = 100;
//var stringArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

for (var i = totalFrogs; i > 0 && i <= totalFrogs; i--) {
  if (i === 1 || i >= 3) {
    if (i >= 3) {
      console.log(i + " speckled frogs sat on a log");
      console.log("eating some most delicious bugs.");
      console.log("One jumped in the pool where its nice and cool,");
      console.log("then there were", i - 1 + " speckled frogs.");
      console.log("");
    } else {
      console.log(i + " speckled frog sat on a log");
      console.log("eating some most delicious bugs.");
      console.log("eating some most delicious bugs.");
      console.log("then there were no more speckled frogs!");
      console.log("");
    }
  } else if (i === 2) {
    console.log(i + " speckled frogs sat on a log");
    console.log("eating some most delicious bugs.");
    console.log("One jumped in the pool where its nice and cool,");
    console.log("then there was", i - 1 + " speckled frog.");
    console.log("");
  }
}
*/

/*
REQUIRED OUTPUT PATTERN
10 Speckled Frogs
Create a file named tenSpeckledFrogs.js and within that file, write several a program that will print the following nursery rhyme:

3 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool, then there were 2 speckled frogs.

2 speckled frogs sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there was 1 speckled frog.

1 speckled frog sat on a log eating some most delicious bugs.
One jumped in the pool where its nice and cool,
then there were no more speckled frogs!
*/

/*
REFERENCES
charAt - returns the first char of a stringCap https://www.w3schools.com/jsref/jsref_charat.asp
toUpperCase - converts string to upper case
substr = https://www.w3schools.com/jsref/jsref_substr.asp
string length = https://www.w3schools.com/jsref/jsref_length_array.asp
google search: create word version of numbers in an array
- some interesting results which I could possibly use but stopped short given time commitment
- google search: https://www.google.com/search?q=create+word+version+of+numbers+in+an+array&oq=create+word+version+of+numbers+in+an+array&aqs=chrome..69i57j33i160.8565j0j7&sourceid=chrome&ie=UTF-8
- stackoverflow: https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
*/

/*
INTERESTING CODE THAT COULD USE AN ARRAY TO PERFORM IN MORE ELEGANT
FASHION BUT STOPPED SHORT OF BUIDLING OUT AN ARRAY LOOP THAT COULD REDUCE THE CODING

var myNumber = 10
var arr = [];
for(var i=1; i<=myNumber; i++) {
   arr.push(i.toString());
}
console.log(arr) // DYNAMICALLY GENERATES ARRAY 1 TO 10 AS STRING ELEMENTS

var arr2 = [];
for(var i=1; i<=myNumber; i++) {
   arr2.push(i);
}
console.log(arr2) // DYNAMICALLY GENERATES ARRAY 1 TO 10 AS INTEGER ELEMENTS
*/
