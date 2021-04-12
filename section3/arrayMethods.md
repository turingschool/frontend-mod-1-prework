## Pop Method -
This will remove the last element from an array's item list. So for the array
  ```js
  var popsicles = ['cherry','orange','grape','banana'];

  ```
  popsicles.pop would take off the 'banana'.

## Push Method -
  This will add a new element to the end of the existing array.
  ```js
  var clothing = ['socks','hat','shoes','pajamas'];
  ```
  clothing.push('belt') would add 'belt' to the array after 'pajamas'.

## Shift
  This will remove the first element in an array and return that removed element.
  This does alter the array length.
  ```js
  var penColors = ['purple','pink','white','yellow'];

  var penShift = penColor.shift();

```
  Now penColor will only include 'pink','white', and 'yellow' when called.

## Unshift
  This will add a new element to an array at the beginning and that will cause the other elements to be "unshifted" from their previous space in the index.

  ```js
  var chores = ['dishes','laundry','vacuum'];

  chores.unshift('pay bills');
```

## forEach
This will execute a provdided function one time on each of the array elements.

## indexOf()
  This will return the first index at which a specified item can be found in an array. Or if an element is does not exist in the array, it will return a -1.

## concat()
  This method is used to merge 2+ arrays and creates a new array. It will not change the existing arrays.
