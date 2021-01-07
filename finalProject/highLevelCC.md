# How to Write a Caesar Cipher

### Step 1: Create an Object Literal Containing a Function with Dynamic Parameters

Declare a variable and name it. This object will hold the function to make a Caesar Cipher. I named my object `cipher`. Assign a `function()` value to this object with two parameters: the first parameter will be the message you want to shift with the Caesar Cipher, and the second parameter will be the amount of characters you want the message to be shifted by. It should look something like this:
```
var cipher = function(msg, amount) {
```

### Step 2: Wrap the `amount` Value for a 26 Character Alphabet

Because we want to be able to shift the characters of our `msg` either forwards or backwards in the alphabet, we can set up a condition that will compensate for negative values in the `amount` parameter. We'll use an `if` statement to set up a condition analyzing whether the argument passed into `amount` is a negative integer.
```
if (amount < 0) {
```
Inside this `if` statement, we'll set up a `return` statement. A return tells JavaScript to produce a specified value/result once a section of code has finished running. In this case, the `return` will end up modifying the second parameter of our `function(msg, amount)` from the first step, depending on whether the condition set in the `if` statement is true.

Because we're writing our `msg` with an alphabet that contains 26 characters, we want to add 26 to any negative `amount` value. The idea behind this is that because the alphabet only goes from A to Z, or 1-26, we have to compensate for negative integer values within that 26 letter range if there's going to be any negative `amount` shifting.
```
return cipher(msg, amount + 26);
```

For example, to get from "a" to "v" (1 to 22), we want to get there by plugging in `-5`, but that would assume the range of our alphabet can increase from 26 to 31 letters, which it can't. If we add the fixed range of our alphabet `amount + 26` to any negative `amount` value (in this case `-5`), the negative `amount` we shift by will now be compensated for. The letter "a" would be shifted forward 21 letters, rather than backwards by 5, achieving the same desired result of "v". By wrapping the `amount` values, we can keep this parameter relative to the fixed range of the alphabet we're using. Once again, this enables our `cipher` object to successfully shift using both positive or negative amounts. The final wrap looks like this:
```
if (amount < 0) {
  return cipher(msg, amount + 26);
}
```

### Step 3: Declare an `output` Variable

Because we want our `cipher` object to eventually give us a string for our modified `msg` parameter, we can set up a variable called `output` that holds an empty string value. We will return to the `output` variable and append it with another variable once we finish writing the rest of our `function(msg, amount)`. String data types are stored within quotation marks `""`, so to create an empty string we can set up a pair of empty quotation marks.
```
var output = "";
```

### Step 4: Go Through Each Character Index in `msg` One by One

This step is where the heavy lifting of the `cipher` object starts to happen. What we need to do is figure out a way to go through each letter in our `msg` parameter's string, change it to an integer value that can be modified with our `amount` value, and then change these values back into a string. A dynamic `for` statement is perfect to start going through each character one by one.
```
for (var i = 0; i < msg.length; i++) {
```
In the code above, we've set the condition expression of the `for` loop to end at whatever the value the `.length` of our `msg` parameter is. The `.length` method returns an integer value relative to the number of characters in a string. The `i` variable will represent each iteration of the `for` loop starting at `0`. By setting a conditional using the less-than `<` comparison operator, we can ensure that this `for` loop only iterates until the condition `i < msg.length` returns a `false` value. This also avoids an infinite loop, which would cause the code to break.

Because JavaScript can measure the index value of strings, we will now declare a variable `c` within the `for` loop that holds the value of which index character `i` of `msg` the loop's current iteration is on. This will be crucial in the process of converting each character of the `msg` parameter's string to an integer that can be modified later on. Using square brackets `[]`, we can tell JavaScript to return a specific index value of the `msg` parameter. By placing `i` within these square brackets, the index value will now change with each iteration of the `for` loop starting from `i = 0`. JavaScript indexes start at `0`, so the `c` variable's value will start with the first letter in our `msg` string and progress through each character until `i < msg.length` returns `false`.
```
var c = msg[i];
```

### Step 5: Determine if the Index Character of `msg` is Part of the Alphabet

Now, while the `for` loop from Step 4 is iterating, we need to determine whether the current iteration value of `c` (which, once again, represents a specific string character from `msg`) is a valid member of the alphabet. To determine this, we will set up an `if` statement inside the loop, passing a "Regular Expression" or "Regex" into the `.match()` method.

Regular Expressions are a type of object within JavaScript that can be used to match character combinations in strings. They return boolean values, and can be used with methods. The syntax for regular expressions uses a variety of symbols and character groups, but for now the regular expression we need to use is `/[a-z]/i`. The forward slashes `//` surrounding our regex tells JavaScript that this is a regular expression, while `[a-z]` tells JavaScript we are using this regex to match a character set from a to z. Finally, the `i` works as a flag that tells the regex that cAsE sEnSiTiViTy isn't necessary for a `true` match.

Next, pass the regex `/[a-z]/i` into the argument of a `.match()` method to modify the `c` variable we set up earlier.
```
c.match(/[a-z]/i);
```
The `.match()` method in the above statement is working to compare whether the value of `c` is any letter character from a-z, regardless of lower or uppercase capitalization. The way we will be modifying characters from `msg` uses UTF-16 table values, so shifting the value of an empty space or punctuation would unnecessarily change those characters. The whole purpose of this line of code is to avoid modifying anything other than letters of the alphabet within the `msg` parameter. Finally, put it all into an `if` statement to determine whether the index of the `msg` parameter is indeed a letter like this:
```
if (c.match(/[a-z]/i)) {
```

### Step 6: Converting String Characters to a UTF-16 Value

Now that there's a trigger in place to determine whether the value of `c` is a letter from a-z, we can start to convert the letters from the `msg` parameter into integer values. This can be achieved through the `.charCodeAt()` method, which returns an integer relative to a character's UTF-16 table unit at a specified index value.

UTF-16 is a table that holds characters and assigns them specific number values. UTF-16 the system JavaScript uses to break down characters into numerical values (easier for the computer to process), and each letter in the alphabet has a unique value attributed to it within the UTF-16 table. Uppercase letters "A-Z" are assigned to positions 65-90 within the UTF-16 table. Lowercase letters "a-z" are assigned to positions 97-122. The `.charCodeAt()` method converts any character index position to its relative UTF-16 value. For example, if the value of `msg` is `"attack"`, then the first letter `"a"` is in index position `0`. For this example, the `msg.charCodeAt(0)` method would return the assigned UTF-16 table value of `"a"`, which is `97`.

Here's a reference to the UTF-16 table:
[UTF-16 Table](https://asecuritysite.com/coding/asc2?val=0%2C255)

Because we are in the middle of a loop, and we've set a condition to determine if the index value of each iteration's cycle through the characters of the `msg` parameter is a letter from a-z (using the `/[a-z/i`] regex), we can declare a variable called `code` to hold the UTF-16 value of each letter with the method `.charCodeAt()`:
```
var code = msg.charCodeAt(i);
```

### Step 7: Caesar Shift the UTF-16 Value Stored in the `code` Variable, and Convert This New Value Into a String

Because the `code` variable is storing the current iteration's UTF-16 value from the `msg` parameter, we can use value this to apply the `amount` we want to Caesar Cipher to shift the `msg` by. Through re-assigning this new value to the `c` variable, we can also convert each shifted letter back into a string in the same step by utilizing the `String.fromCharCode()` method.

Because uppercase and lowercase letters have separate UTF-16 values, we can set up an `if/else if` statement to account for whether the current iteration of `code` represents an uppercase or lowercase letter. Using the logical AND `&&` operator with less/greater than or equal to comparison operators `>= <=` should do the trick. The UTF-16 table stores uppercase letters in table values `65 - 90`, while lowercase values are stored in table values `97 - 122`
```
//Uppercase:
if (code >= 65 && code <= 90) {}
//lowercase:
else if (code >= 97 && code <= 122){}
```

Inside the curly brackets of both of the `if` statements above, we can now utilize a mathematical equation to change the value of `code`, pass this re-assigned value into the `String.fromCharCode()` method, and ultimately modify the value of `c` into a new string value.

The equation will use the variable `code`, the value of the `amount` parameter, and a modulo `%`. A modulo's purpose is to find the value of the remainder between a dividend and divisor. For example, the value of `6 % 3` would be `0`, because `3` (the divisor) can divide into `6` (the dividend) evenly without a remainder. On the other hand, `5 % 3` would return a value of `2`, because after `3` goes into `5` once, we are left with `2` as the remainder. If a divisor is greater than the value of the dividend, a modulo will simply return the value of the dividend. The equation `3 % 5` would return a value of `3`, because the divisor `5` is greater than the dividend `3`.

The equation to change the value of `code` for uppercase letters looks like this:
```
((code - 65 + amount) % 26) + 65)
```
In this equation, `65` (the initial UTF-16 value for uppercase letters) is being subtracted from the value of `code`, then the value of `amount` is added. After the math within the first set of parentheses is finished, we use a modulo `%` to find the remainder of when `26` (the number of letters in the alphabet) is divided into the value of the first set of parentheses. `65` is then added back on to this remainder value to return our equation back into the UTF-16 table range for uppercase letters.

For example, let's say we're converting the letter `"B"` on the current iteration of `i`. We want to shift `"B"` by an `amount` of `4`, which would be `"F"`. The UTF-16 value for `"B"` is `66`, while `"F"` is `70`. Let's test it out with the equation above, to see if we can get `70`.
```
(66 - 65 + 4) = 5, 5 % 26 = 5, 5 + 65 = 70, 70 = "F"
```
So, yes this equation works when shifting by `4`. However, the using the modulo, along with the wrap from Step 2 above allows us to shift `msg` by any positive or negative value and achieve a successful result. Let's try shifting `"B"` by an `amount` of `-48`. Remember that we set up an `if` statement to add `26` to any negative `amount` value in Step 2.
```
(66 - 65 + (-48 + 26)) = -21, -21 % 26 = 5, 5 + 65 = 70, 70 = "F"
```
As you can see, we've achieved the same result through shifting by `-47` as we did by `4`. This wouldn't have worked successfully without utilizing the modulo and wrapping the `amount` value in Step 2.

Now that we have an equation to successfully convert the UTF-16 value of `code`, we can pass this equation into the `String.fromCharCodeAt()` method in order to re-assign the value of the `c` variable into a new string value. The `String.fromCharCodeAt()` method is essentially the inverse of the `.charCodeAt()` method. This method takes an integer value and returns a string value relative to the argument's UTF-16 table value.
```
c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
```
We will put this statement within the `if` statement for capital letters. We can then adjust the equation for lowercase letters by changing `65` to `97`, and put that into the `else if` statement for lowercase letters. The final result looks like this:
```
if (code >= 65 && code <= 90) {
  c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
}
else if (code >= 97 && code <= 122) {
  c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
}
```

### Step 8: Append `c` with `output`, and Print the Final Result to the Console

Now that we've converted each letter from `msg` into UTF-16, modified it with `amount`, and converted it back into a string value, all we have left to do is append `c` with the empty string variable `output` (remember Step 3?). Appending is the process of inserting content from one element into another element. In this case, we have the empty string `output`, and will be inserting each value of `c` into it using the addition assignment operator `+=`.

The addition assignment operator takes the value of the first variable, and changes it to the value of the first variable plus `+` the second variable. Think of it like `x = x + y` is same as `x += y` in JavaScript.

We can append `output` with `c` by writing `output += c`. Now, the value of `output` is no longer an empty string. Instead, it is a string containing each modified character from the `msg` parameter. Essentially, `output` is now the final encrypted message.

Our goal from the beginning was to have an encrypted message that we could see, so in order to make our newly encrypted message visible we can finish the `cipher` object by telling JavaScript to write `output` to the console using the `console.log()` method. Don't forget to finish it off with a final closing curly bracket and a semicolon! The final lines of the `cipher` object will look like this:
```
output += c;
  }
  console.log(output);
};
```

### Step 9: Use the `cipher` Object to Encrypt a New Message!

The function within our `cipher` object is finally complete, along with the command to `console.log()` the encrypted message. We can now pass any string into the `msg` parameter with an `amount` integer to shift it by, and test the results. Here's an example using the message `"All Done"` with a Caesar Cipher of `15`:
```
cipher("All Done", 15);
//expected output: Paa Sdct
```

## The Final Code:

Here's what everything from Steps 1-9 should look like once it's put together:
```
var cipher = function (msg, amount) {
  if (amount < 0) {
    return cipher(msg, amount + 26);
  }

  var output = "";

  for (var i = 0; i < msg.length; i++) {

    var c = msg[i];

    if (c.match(/[a-z]/i)) {

      var code = msg.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += c;
  }
  console.log(output);
};

cipher("All Done", 15);
//expected output: Paa Sdct
```

#### Final Notes:

Although I was able to come up with the basic idea/structure for creating a Caesar Cipher object on my own, I was previously unaware of certain concepts, especially regular expressions and the UTF-16 table. I ended up seeking out other solutions online for Caesar Ciphers in JavaScript to try and bridge the gap in where I was unable to successfully write one on my own. Through this research, I utilized code and ideas for this Caesar Cipher exercise from GitHub user EvanHahn's gist: https://gist.github.com/EvanHahn/2587465. User EvanHahn states within this gist that the code is public domain. I modified some of it, mainly renaming variables that made more sense to me and putting a `console.log()` at the end of the object. I still had to spend hours going through each line of code where I didn't understand it, looking up what each foreign line was used for and trying to figure out how it all worked together. While I definitely used all of the concepts from the Mod 1 pre-work here, the most important skill I used in this exercise was knowing how to research on Google.
