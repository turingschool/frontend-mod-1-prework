**CRACKING CAESAR CIPHER**
---------------------------


**The Underbelly of a javaScript Cipher**

* First notice that the message and the cipher correlate to the English alphabet.

* In JavaScript, the letters are effectively measured by the computer program to determine their equality in reference to each other by an algorithm that returns a boolean value.

* Simply comparing letter by letter, line by line, array element by array element is done within a `unicode order`

* In javaScript a deeper thread of this unicode order that makes it possible to determine the hierarchical value of letters and characters across alphabets is referred to as `UTF-8`referring to the code being coded into an object, and `UTF-16`referring to the code source being converted into `UTF-8`instance and sequence.

* In javaScript this is a specific and internal representation for each letter to coorespond to a specific numeric code keeping letters in a lexigraphical or dictionary-like order.

* There are methods in place to allow access to each character in its coded numeric value and afford it to be manipulated to return a new numeric code to return a new numeric value

* We are able to return the value of a character by this very detail and complex numerical and hexidecimal system.

* There are some special characters and letters with a diacritical that follow a different algorithm but `ECMA-402` is a method standard for comparing strings across languages.
  * Most basically all lower case letters go after all upper case letters or
  * `a != A`
  * lower case has a greater value than upper case

* This is the perpetual undercurrent happening when we run functions and loops to reassign variable values and argue for our parameters in a cipher.

* There is an algorithm holding a steady true/false return value for each alphabetical letter and its placement.  It is more constant than a musicians metronome.


**Applications To The Cipher**

* On a piece of paper I wrote out `Hello World` above `CZGGJ RJMGY`.

* I noticed that the characters "Z" and "e" were in correspondence.  

* Given that there are in fact 26 characters in the English language, I deduced that the offset of this cipher was by 21 characters.

* To test my deduction, I wrote out the alphabet below this note and placed a numerical value of 26 at the letter "e".

* Then I placed the numerical value of 5 on the letter "Z".

* So, the alphabet begins at the letter "d" and wraps backwards across the letter "Z " and ends at "e".

* Here I see the code prompt from the ceasar_cipher.md file indicating the numerical value of 5 as the new starting point of the alphabet below:

```
encode("Hello World", 5); //should log "CZGGJ RJMGY"

```
* I am starting the Cipher by separating the letters in the string from each other to index their numerical value.

* As well I've written out a basic for loop code to give myself a mental reminder of its functional presentation.

* I think the ceasarCipher could be deciphered by taking my alphabet string and turning it into a set of key value pairs of the object ceasarCipher of the class Ciphers.



**Path to Solution:**


* The way I see the solution to the ceaserCipher is this:

    * There are parameters of the alphabet set up for the 21 or -5 letter shift or alphabet offsetting.  

    * There will be an encoding function encasing those parameters and key value pairs.

    * There will be an encoding function that attends to the letter switch by places in the alphabet

    * There will be variables that name the results of the functions

    * Moving between upper case and lower cases of the alphabet will need conditional statements whose return will determine the result of upper or lower case.

    * The arguments that call up to those parameters jump start the iteration of the for loop that moves the caesarCipher to solution.



  * Below I've left snippets to help *myself* with mental place-holders as I move forward and attempt to write this code. (They are not run-ready pieces of code.)


  **javaScript Snippet Notes for Cipher Solution:**

```
for (var i =  0; i < alphabet.length; i++){

```

```

funciton ceasarCipher(n) {
  var encode = "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z";

```

```
el.textContent()
  var startNote = ["H","e", "l", "l", "o" + " " + "W", "o", "r", "l", "d"]
    console.log(startNote)

```

```
for (var i = n; i = startNote.length; i++)
    if (i < 5)
```

```
function encode(n) {
    return n;
    for (var i = n; i > 0; i++) {
    if (i < 5)
     console.log(n);
 }
```

```
function codeBreak(n){
    for (var i = n; i > alphabet.length; i++){
  }
 }
var encode = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z"];

  codeBreak(i);
    console.log(ceasarCipher);

```

```
class CodeBreak {

constructor(alphabet, offset) {
  this.alphabet = alphabet
  this.offset = 26
}
  if (offset < 0) {
    console.log(alphabet, offset - 5);
  }
var encode = " ";
for (var i = 0; i < alphabet.length; i++) {
}
var n = alphabet[i];

if (n.match(/[A-Z]/i)){
  var newCode = alphabet.charCodeAt(i);
  console.log(+-n)
}
var decode = " "
console.log(decode);


}

```

*latest code snipet rabbit hole:*

```
function encode(alphabet, offset) {
  letterSpread = "A B C D E F G H I J K L M N O P Q R S T U V X Y Z".split("")
    for (i = 0; i < alphabet.length; i++) {
      sizeLetter[i] = alphabet.indexOf(sizeLetter[i], 26)
      sizeLetter.push(alphabet[(sizeLetter[i] + offset)])
  }
      if (n.match(/[A-Z]/i)){
        var newCode = alphabet.charCodeAt(i);
          console.log(+-n)
}

    if (offset === -5) {
      sizeLetter.splice(i, sizeLetter[i]);
}
}
console.log(letterSpread);
 var decode = "";
sizeLetter = alphabet.toLowerCase().el.text.content("")



//for (var i = 0; i < alphabet.length; i++) {//


//var decode = " "
//console.log(decode);


//var ceaserCipher = new CodeBreak([ "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, Z"], 26)

//var decipher =
//var alphabet = decipher
//var n = alphabet[i];


console.log(i, ("Hello World"), 0);

```
