
## Caesar Cipher

* The Caesar Cipher technique is a one of the oldest and simples method of encryption.It was named after Julius Caesar, because it was the way him to communicate with his officials.
It is type of substitution in which each letter in a test can be shifted to a certain number of places in alphabet.


### ROT13

* Widely known and last released ROT13 'encryption' its a simply Caesar cipher, but with offset of 13.
You can move letters down to 13 numbers by alphabetical order or 13 up.
 ***
 Example:

if you want your first letter "A" in a text to be shifted to 13, then it will be "N".

Or another example:

Plain text : "Good Morning"  (encode)

ROT13 Cipher: "Tbbq Zbeavat " (decode)
***

### How it works?

Write a function that takes a string and decodes it. function for a ROT13 is

function rot13(str){

}

To solve it. we have to apply a method.

##### charCodeAt

- gives you a value of ASCII letter.

##### ASCII

(American Standard Code for Information).

* Computers only understand numbers, so ascii table is a numerical representation of our keyboard and alphabet.
That being said, this is the one of the ways encode and decode by applying ROT13 with method.

#### Coding in javaScript

* In a given example i am working only with capital letters of ASCII code number table, but theres a also lower case letters, on that case you will be running different number in your loop.

1. Setting up a function.

function rot13(str) {

  2. give a variable with a value

  var solved = "";

  3. Set a for loop with a method we are going to use to move a string of letter 13 places to the right or left.

  for(var i = 0; i<str.length; i++){

  * and another variable for 'acciNum' where we are getting a alphabetical number order to run a loop

     var asciiNum = str[i].charCodeAt();

  4. use if statement to run loop and add result to an empty string variable

   if (asciiNum >= 65 && asciiNum <= 90) {

     solved += String.fromCharCode(asciiNum +13);

  }

   }

  return solved;

* it should return value/ letter of "N"
 }

rot13("A");

#### Copy Code and check it Repl.it
***
function rot13(str) {

  var solved = "";

  for(var i = 0; i<str.length; i++){

    var asciiNum = str[i].charCodeAt();

  if (asciiNum >= 65 && asciiNum <= 90) {

    solved += String.fromCharCode(asciiNum +13);

  }

  }

  return solved;

}

rot13("ACEG");
***

* I did really have a lot of question about Caesar cipher, it seems has different variation of encoding and decoding, my research showed multiple results with different methods, and it feels like i am missing still a lot. Hope this is somehow close to understanding of Caesar cipher.
