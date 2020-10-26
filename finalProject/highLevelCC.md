# The Prompt

*Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:*

```javascript
encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"
```

## How I would solve this:

First, I wrote down how I would solve this on a piece of paper. Initially I though of creating a `Class` with
each object instance being a different shift value, and properties that matched each letter with it's
respective shift, but then realized that might work for one specific shift, otherwise there'd be a TON of
object instances. That led me to the conclusion that creating a function would be the best path.


Caesar Ciphers are used to shift the alphabet into a secret code or used to resolve a secret code
back into it's original message so it's legible. To solve this I would;


1. Create a function with two parameters, the first would accept a `string`, and the second would accept a
number that will tell the function how many shifts over the alphabet to move.


2. Next I would create a few variables, the first one might be a variable that takes the `string` parameter
in the function input, and convert the inputed `string` to all lowercase. This is because upper and lowercase
letters have different values, and we want the inputs to be uniform. Another variable that we could create,
would be an output variable that is equal to an empty `string`, this variable will be returned at the end of
the function and will hold are new shifted `string`. Lastly, I would create a variable that is equal to all
the characters in the lowercase alphabet, and then use the `.split()` method on that `string` so that the `string`
is split into an array of substrings, and returns the new array. This will allow use to the alphabet variable
as an index with index values from 0 to 25. So I know would have something that looks like this:
```JavaScript

var lowerCaseStr = str.toLowerCase();
var alpha = "abcdefghijklmnopqrstuvwzyz".split("");
var output = ""; //Where we will put coded/decoded string
```

3. Next I would create a `for loop` to iterate over the lowercase `string` variable, which would be the `string`
argument the user puts into the function. The `loop` should start from the first character of the lowercase `string` and
end with last character of the lowercase `string`.


4. Next I would create `if statements` to address any spaces in the input string, and that those spaces remain a space.


5. Next, I would define a variable inside the loop that assigns each specific character in the `string` to a
numerical value (`number`) so we can find its index value. For example "a" would become 0 and b would become
"1", and "z" would become 25. So we want the `string` split into individual characters or letters and find there 
index position as it relates to our alphabet `string`. Once we know the index position of the specific character
or letter then we can create a variable that will shift this original index by the number that was inputed into the
function by the user (passed into the number parameter).


6. Then I would use more `if statements` to create conditions to wrap around the alphabet. So if you had a letter with
index 25 and you need to shift it 12 over, you need to create a condition that would wrap the index back to 0 and then
begin shifting again.  

7. Then I would create a `return statement` that equals the output to the empty `string` varaible.

8. Now you should be able to call the function and input two arguments, the first being your `string` you want
to code or decode and the second being the `number` of shifts in the alphabet you want.
