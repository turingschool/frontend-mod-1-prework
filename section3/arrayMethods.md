# Array Methods

## This are two methods to delete and add at the end of a array

1. `pop` : This method takes away the last element on the array.

___Example___ : ```javascript

    var fruits = ["apple", "orange", "grape" ];
      alert(fruits.pop()); //this will remove element grape because its the last element on the Array
      alert(fruits); // the output will be : apple,orange
```

2. `push` : This method will add a element at the at the end of the array.

___Example___ : ```javascript

    var fruits = ["apple", "orange"];
      fruits.push("grape"); // this will add element grape to the fruits array!
      alert(fruits); //out put will be : apple,orange,grape

```

### This are two methods to delete and add elements at the beginning of a array

3. `shift` : This method will delete a element at the beginning of a array.

___Example___ : ```javascript

    var fruits = ["orange", "pear", "peach"];
      alert(fruits.shift()); // This will delete the first element on the array which will be orange
      alert(fruits); // this will output : pear,peach

```

4. `unshift` : This will add a element at the beginning of your array

___Example___ : ```javascript

    var fruits = ["watermelon", "melon", "banana"];
      fruits.unshift("pear"); // this will add the pear element at the beginning of your Array
      alert(fruits); // this will output : pear,watermelon,melon,banana

```

___Bonus___ :

this method is by using push and unshift this will add multiple elements to your Array

using `push` and `unshift` together.

___Example___ : ```javascript

    var fruits = ["apple"]
      fruits.push("orange","pear");// this elements will come last in the array
      fruits.unshift("watermelon","melon"); this element will come fist in the array
      alert(fruits); // output should come like this : watermelon,melon,apple,orange,pear
```
