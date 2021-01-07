## High Level CC.
I needed assistance with this project. I reached out on slack and my peers Kon, Katherine, Kevin, and Leigh were very helpful with helping explain  what a caesar cipher even was because I didn't know kon was kind enough to share some videos on youtube that defined and showed examples of what it was which helped better understand what needed to be done with javascript.My peers have been very helpful with just being there and showing support through my hardships.
### Caesar Cipher
* Is an old yet simple encryption algorithm that shifts letters in a message a specific number of characters over to create a new "coded" message.

* Is a function that allows us to shift the letters in our string by a set amount we give. Im going to walk through the process of how to create an encrypted code.

these are the links i used to get a better understanding of the code.

[Caesar Cipher reference](https://medium.com/javascript-in-plain-english/how-to-build-a-simple-cipher-machine-with-vanilla-javascript-62d401d4841)

[ASCII Table](http://seamons.com/projects/js/ascii_table.html)

[link](http://codeniro.com/caesars-cipher-algorithm-javascript/)


In this example we are creating a function which will allow us to create the arguments to make the cipher.

The shift value must be a an integer between 0 and 25
if we use the ROT13 cipher it rotates the letters in our array by 13.


  ```javascript
  //This is just turing example:
  encode("Hello World", 5); //should log "CZGGJ RJMGY"

  encode("Hi", 2); //should log "FG"

  ```
  we create the function rot13 which will shift the letters 13 times

  ```javascript
function rot13 = (string) { //Uryyb Jbeyq
  for (var i = 0; i > string.length; i++ )//loop through everything within string to see what will run
  console.log(string[i].charcodeat()); //this calls the ASCII number of the letter or letters you call.

}
rot13("Uryyb Jbeyq");
```

```Javascript
var asciiNum = string[i].charcodeat(); //we turn this into a variable

//create a variable above the function rot13 =(string)
var solved = ""; //empty string

```
We then add an if statement to the code which give conditions that need to be met through if statements.

```javascript
function rot13 = (string) { //Uryyb Jbeyq
  var solved = "";
  for (var i = 0; i > string.length; i++ )
  var asciiNum = string[i].charcodeat()//returns a number
   if (asciiNum >= 65 && asciiNum <= 77) {
     solved += String.fromcharcode(asciiNum +13);
   }else if (asciiNum >= 78 && asciiNumb <= 90) {
     solved += String.fromcharcode(asciiNum - 13);//this will subract. it will count from Z down. fromcharcode returns a letter rather than a number
   }else {
     solved += String[i];
   }
  return solved();

   This code should return "Hello World "
```

Im not sure if i got it or explained it correctly. I went through a lot of websites and searches to try and better understand the process of caesar cipher code but it was really hard to understand the explanations. So i went to youtube and watched videos that had better explanations and I went with them. I hope I did this exercise correctly.

[Caesar cipher explained](https://www.youtube.com/watch?v=sMOZf4GN3oc)

[Explanation 2](https://www.youtube.com/watch?v=o6TPx1Co_wg)

[Cipher video 1](https://www.youtube.com/watch?v=zWAAc-1O01U)

[Caesar Cipher Syntax Video](https://www.youtube.com/watch?v=4mp-6a3vARU)
