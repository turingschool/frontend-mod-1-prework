# Array Methods

There are many different array methods!  

To be able to apply an array method, first you must create a array.  
You can put whatever you want in an array, including integers, floats, strings, and Booleans.  
Putting elements inside brackets indicate it's an array.  

```
var array = ['a', 'b', 'c', 'd'];  
console.log(array);   
```
returns ['a', 'b', 'c', 'd']  


Then you can ask a method to return how many elements are in that array.   
```
console.log(array.length);  
```
returns 4  


You can ask a method to return a certain element inside the array based on its index position.  
```
console.log(array[2]);  
```
returns c  


You can add an element to the end of an array.  
```newLength = array.push('e');  
console.log(array);
```
returns ['a', 'b', 'c', 'd', 'e']  


You can remove an element from the end of an array.  
```
last = array.pop();  
console.log(array);
```
returns ['a', 'b', 'c', 'd']  


You can add an element to the beginning of an array.  
```
newLength = array.unshift(1);  
```
(write the element you want added in the parentheses)  
```
console.log(array);
```
returns [1, 'a', 'b', 'c', 'd']   


You can remove an element from the beginning of an array.  
```
first = array.shift();  
```
also works with newLength = array.shift();  
```
console.log(array);
```
returns ['a', 'b', 'c', 'd']  


You can ask for the index of an element.  
```
array.indexOf('d');  
```
returns 3  


You can remove and add an element or elements in the middle of an array.  
```
array.splice(1,2,3,4);  
```
This will remove 2 elements starting with the index 1 element, and add 1 and 2 in their places.  
```
console.log(array);
```
returns ['a', 3, 4, 'd']  
You could also just delete the items without giving substitutions in their place. array.splice(1,2);  


By simply reassigning the length of the array, you can delete any element after the specified amount.  
```
array = ['a','b','c','d']  
array.length = 2  
console.log(array);
```
returns 'a','b' only  


We can ask for a method which will produce information about each item in the array.  
```
array.forEach(function(item,index,array){
  console.log(item,index)
  });
```
