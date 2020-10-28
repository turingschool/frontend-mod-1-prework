1. Create a function that will take in a string and a number
```javascript
function caesarCipher(string,number){
}
```

1. set up an alphabet variable within the function's curly brackets and split it so that each letter in the alphabet is its owne element
``` javascript
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
```

1. figure out current index of each letter in the variable alphabet string.
``` javascript
var currentIndex = alaphabet.indexOf(currentLetter)
```

1. create a new index that can pass through the current index to adjust the letter's standing within that string
``` javascript
var newIndex = currentIndex + number;  
```
1. if statements are needed to loop through the alphabet, if the user was z added 2 we would want it to start again at the beginning at a
``` javascript
if(newIndex > 25) newIndex = newIndex - 26
```
1. return new string
``` javascript
console.log("CZGGJ RJMGY",5);
```
