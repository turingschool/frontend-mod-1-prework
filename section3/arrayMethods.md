## Array Methods


###Array `pop()` method

The array `pop()` method removes the last item(element) from an array and
prints or returns that item that you removed. This method will change the
length of your array to (`i - 1` if your array has initial length `i`).

The *syntax* for `pop()` is `arrayName.pop()`.

An example would be:
```JavaScript
var numbList = [10, 20, 30];
console.log(numbList.pop());
//expected return: 30
```

###Array `push()` method

The array `push()` method adds one or more item(s)/elements to the end of an array and
prints the new length of the array.

The *syntax* for `push()` is `arrayName.push()`.

An example would be:
```JavaScript
var numbList = [10, 20, 30];
var newNumbList = numbList.push(40);
console.log(newNumbList);
//expected return: 4
console.log(numbList);
//expected return: [10, 20, 30, 40]
```

###Array `shift()` method

The array `shift()` method removes the first item(element) from an array and
prints or returns that item that you removed. This method will change the
length of your array to (`i - 1` if your array has initial length `i`).

The *syntax* for `shift()` is `arrayName.shift()`.

An example would be:
```JavaScript
var numbList = [10, 20, 30];
console.log(numbList.shift());
//expected return: 10
```

###Array `unshift()` method

The array `unshift()` method adds one or more item(s)/elements to the beginning of an array and
prints the new length of the array.

The *syntax* for `unshift()` is `arrayName.unshift()`.

An example would be:
```JavaScript
var numbList = [10, 20, 30];
var newNumbList = numbList.unshift(5);
console.log(newNumbList);
//expected return: 4
console.log(numbList);
//expected return: [5, 10, 20, 30]
```
