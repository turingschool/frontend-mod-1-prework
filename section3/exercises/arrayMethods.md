Describe, in your own words, what each method does.
* Methods to research: `pop`, `push`, `shift`, `unshift`

```javascript
var turingClubs = ["I Love Coding!", "Does Coding love me?", "Coding is making me Crazy!"];

turingClubs.pop("Coding is making me Crazy!") //pop method removes the last item from an array list
console.log(turingClubs);
//would log ["I Love Coding!","Does Coding love me?"]

turingClubs.push("Take a breather from Code.")// push method adds an item to the end of an array
console.log(turingClubs);
//would log ["I Love Coding!""Does Coding love me?", "Coding is making me Crazy!","Take a breather from Code."]

turingClubs.shift("I Love Coding!") // shift method removes first item from arrays list
console.log(turingClubs);
// would log ["Does Coding love me?", "Coding is making me Crazy!","Take a breather from Code."]

turingClubs.unshift("I'm new to Code!")// unshift method adds an item or items to the front/beginning of an array list
console.log(turingClubs);
//would log ["I'm new to Code!","I Love Coding!", "Does Coding love me?", "Coding is making me Crazy!","Take a breather from Code."]
```
