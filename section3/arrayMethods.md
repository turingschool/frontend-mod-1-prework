pop - Removes the last item from the end of the array.  
```
//Create the array
var candy = ["candy cane", "sucker", "lollipop"]
//creates a new array that removes the last element from the candy array.
var newCandy = candy.pop()
console.log(newCandy);
//should log ["candy cane", "sucker"]
```

push - Adds the new object to the end of the array.
```
//Using the array above as an example, adding chocolate
candy.push("chocolate")
//Call the array again
console.log(candy);
//should log ["candy cane", "sucker", "lollipop", "chocolate"].
```

shift - Removes the first item from the beginning of an array
```
//using the shift function
candy.shift()
//log the function to the console
console.log(candy);
//should now log ["sucker", "lollipop", "chocolate"]
```

unshift - Adds the specific value to the front of the array.
```
//using the unshift function
candy.unshift("toffee")
//log the function to the console
console.log(candy);
//should now log ["toffee", "sucker", "lollipop", "chocolate"]
```
