### pop
Syntax = `pop()`
- Removes the **last** element from an array and returns the removed element.
- This changes the array's length.  
```
var bookGenre = ["horror","fantasy","romance"];
console.log(bookGenre.pop());
// output: "romance"

```
### push
Syntax = `push()`
- This method adds elements to the **end** of an array.
- The new length of the array is returned in an integer.
```
var bookGenre = ["horror","fantasy","romance"];
var newBook = bookGenre.push("mystery");
console.log(newBook);
// output: 4
console.log(bookGenre);
// output: ["horror","fantasy","romance","mystery"]

```
### shift
Syntax = `shift()`
- Removes the **first** element in an array and returns the removed element.
- This changes the array's length.
```
var bookGenre = ["horror","fantasy","romance"];
var firstElement = bookGenre.shift();
console.log(bookGenre);
// output: Array ["fantasy","romance"];
console.log(firstElement);
// output: "horror"
```
### unshift
Syntax = `unshift()`
- This method adds more elements to the **beginning** of an array.
- The new length of the array is returned in an integer.
```
var bookGenre = ["horror","fantasy","romance"];
console.log(bookGenre.unshift("mystery","scifi"));
// output: 5
console.log(bookGenre);
// output": ["mystery","scifi","horror","fantasy","romance"]
```
