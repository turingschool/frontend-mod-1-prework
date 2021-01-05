## Ceasar Cipher

My initial thoughts for solving this problem were:
- I would need an array of the alphabet.
- I would need a function called encode.
- I have no idea what else to do and I should google this problem.

I found a ton of different solutions, but a lot of them were using libraries, which I'm not at all familiar with using. The most basic solution I could find was solved something like this. _You can find this in finalProject/CC.js_

- Create a function called caeserShift that takes a string and an amount.

  ```js
  var caesarShift = function (str, amount) {

  }
```


 - You need to ensure that your numbers are not negative by adding 26 if the amount argument is a negative number. This allows us to have shifts that go right or left in the alphabet.

  ```
      if (amount < 0) {
      return caesarShift(str, amount + 26);
    }
  ```


  - Create a variable to store the answer to the cipher. This is stored as an empty string but will return the result of the cipher at the end.

   ```
   var cipherResult = "";

   ```


   - Create a loop that will cycle through each character in the cipher. This loop uses the length() method on a string, the same way it is used on an array. The loop goes through the string that we input and returns each individual letter as it's own string, which is then stored as the variable "c."

    ```
    for (var i = 0; i < str.length; i++) {

    var c = str[i];

    ```

- Use an if statement to change each letter to a code (not really clear what exactly is happening here to be honest). We will use two new (to me) methods here - the match() method and the charCodeAt() method. The match() method checks if the value is a letter, and if that is true it continues to the charCodeAt() method. The charCodeAt() method returns an integer between 0 and 65535, and in this case it returns the character code for the first letter of the string argument.

  ```
  if (c.match(/[a-z]/i)) {
      var code = str.charCodeAt(i);
```

- Use an if statement with a logical operator to perform the shift on the uppercase letters and store in our variable "c."

  ```
if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
```

- Use an else if statement and logical operator to handle the lowercase letters and store in our variable "c."

  ```
else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    ```

- Append our results from our variable of "c" to our variable of "cipherResult" and log those results to get your finished decoding result. This closes our loop.

  ```
cipherResult += c;
}
```

- Finally, we return the cipherResult string that we have built up.

  ```
  return cipherResult;
  };
```
