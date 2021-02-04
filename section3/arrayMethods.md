#Array Methods

1. **push**- this method adds an item to the end of an array:  

```
   var ourArray = ['confiture', 'brioche', 'pain', 'croissants'];  

   var newItem = ourArray.push('cafe');  
   //The updated array: ['confiture', 'brioche', 'pain', 'croissants', 'cafe']  
```

1. **pop**- this method removes an item from the end of an array:  

```
   var removeItem = ourArray.pop();  
   //The updated array: ['confiture', 'brioche', 'pain', 'croissants']  
```

1. **shift**- this method removes an item from the beginning of an array:  

```
   var firstItemRemove = ourArray.shift();  
   //The updated array: ['brioche','pain', 'croissants']  
```

1. **unshift**- this method adds an item to the beginning of an array:  

```
   var firstItemAdd = ourArray.unshift(the);  
   //The updated array: ['the', 'brioche', 'pain', 'croissants']  
```
