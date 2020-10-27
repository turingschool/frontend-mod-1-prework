```
Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:
```

```javascript
encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"
```

#### How I would solve this:

1. First, I would make sure I understand the problem, and what it is looking to accomplish. In this case, we take the inputs of a string and the shift value, and then log the shifted value.

2. Create a diagram of tasks the code needs to perform in order to complete the challenge, and how data will flow between them. This took a lot of thought on how this could be accomplished without writing duplicative code.

3. Break each task down into smaller challenges that I can code separately:

* Prompt the user for a string and the shift value
* Store these values in variables
* Declare variables needed in later blocks of code (full alphabet in array and multiple empty arrays)
* Get index values of where each string input letter exists in the alphabet array and put in new array
* Shift alphabet array to the left based on prompted shift value using a for loop
* Use a for loop to iterate through index value array and replace indexes with the equivalent value from the shifted alphabet array
* Combine the new array with shifted values together and console log for the desired output
* Wrap everything in encode function that passes in the original prompted values

4. Research JavaScript methods that manipulate data in the ways I need them to.

5. Code each bullet above, making sure to console log each loop/function along the way to ensure they are doing what I expect.

6. Once I feel that the program is performing as expected, I will run a variety of use cases as tests. As needed, I will adjust the code and refactor.
