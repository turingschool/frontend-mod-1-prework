
As I was jotting down notes on how to approach this challenge, I was having a hard time conceptualizing everything. Sort of like doing algebra without a chalkboard. So I played around with a few code segments as I was compiling these notes and ultimately crafted a solution.

I knew immediately that a few things would need to happen in this challenge:
* The alphabet would need to be compiled into an array. Furthermore, there would need to be some process for moving the last X elements from the end of this array to the beginning. If the shift number is 3, we need to move XYZ from the end to the beginning. If the shift number is 4, we need to move WXYZ to the beginning.
* The string would need to be broken apart into its constituent individual letters.
* Those individual letters would need to be cross-referenced with the alphabet array to determine their index number. That same index number, applied to the shift modified alphabet array would yield the corresponding letter. It was hard to keep this concept straight in my head.

First thing I did was declare a few variables (later I would eliminate some of these and incorporate them in the framework of a function)

````
var string = "MACKINTOSH"

var shiftNumber = 3

var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
````

After a bit of Googling, I found a fairly simple solution to rearranging the alphabet array. After a bit of mixup using the shift and push methods, I came up with the following:
````
alphabet.unshift(alphabet.pop())
````

The pop method removes and returns the last element in the array. The unshift method then ensures that this element is immediately added to the beginning of the array. The only problem is that it only works for one element. To move more, I would need to build a loop:

````
for (i = 0; i < shiftNumber; i++) {
  alphabet.unshift(alphabet.pop());
````

Now that I was able to modify the alphabet array as needed, I moved on to breaking apart the string. That was simple enough. The method below returns each character in the string as an array.

```
var split = string.split("");
```

I needed the program to move through each element in the split array and find its index in the alphabet array. Again, I knew a loop would be appropriate. With a bit of Googling, I found the `.indexOf` method. I ended up writing something like this:

```
for (j = 0; j < split.length; j++) {
  console.log(alphabet[alphabet.indexOf(split[j])]);
  {
````
That's when I hit my first big roadblock.

I needed to find the letter's index in the alphabet array BEFORE that array was modified. Then use that same index number to find the corresponding letter in the modified alphabet array. I wrestled with it for a while before I reached the obvious conclusion: I needed two alphabet arrays. One would stay unchanged and the other would be shifted around. So I created another variable called originalAlphabet to use as a reference point.

````
for (j = 0; j < split.length; j++) {
  console.log(alphabet[originalAlphabet.indexOf(split[j])]);
````
So in the above loop, the program goes through every letter in the split array one by one. It then finds the letter's index number in unchanged alphabet array. That index number is then fed directly into the modified alphabet array and the encoded letter is printed. Tada!

Once everything was working, I refined the code and made some cosmetic changes. I incorporated everything into a function called encode, which allows you to execute the program by entering the function name followed by the two parameters for string and shiftNumber.

````
function encode(string, shiftNumber) {
  //code goes here
}

encode("CAMERON MACKINTOSH", 3);
````
If the string contained any spaces, those were logged as undefined so I found a way around that. And I found a way to get everything to print on one line in the console. The only shortcoming is that my program only works with capital letters. Lower case doesn't work.
