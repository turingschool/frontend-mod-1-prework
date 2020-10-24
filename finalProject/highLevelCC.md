# Ceasar Cipher
## Your Task

Add a `highLevelCC.md` file to your `finalProject` directory. In that file, write up high level notes about how you would solve this problem. When you're finished writing your detailed notes, it is optional to implement a solution in code.

## SOLUTION
- [x] Step #1 Build alphabet variable/string
- [x] Step #2 Build cipher string
- [x] Step #2a Establish shift level variable
- [x] Step #2b Determine left side of the cipher using for statement
- [x] Step #2c Build final cipher string concat left and right side
- [x] Step #3 Establish phrase to code/cipher
- [x] Step #4 Build cipher word/phrase using for/if statements; manage blanks with # replacement
- [x] Step #5 Build final cipher word/phrase replacing # with blanks
- [x] Step #6 Summarize results
- [x] Step #7 Check a few other results (see line 37 & 38 for phrase test)
- [x] Step #8 Check results with different left shift figures (note right shift does not work; fix or build in constraint; enter shift >= 0)

[cipherCeasarShiftAlpha.js](https://github.com/stevecalla/frontend-mod-1-prework/blob/master/finalProject/cipherCeasarShiftAlpha.js)

## EXTENSION
- [x] Step #9 I built a second program that reveres the alphabet then accounts of a shift 2 characters to the right.
- [x] STEP #10 I did not clean up the code for this second version. The final results are on the last row of the output.

[cipherCeasarReverseAlphaShift2.js](https://github.com/stevecalla/frontend-mod-1-prework/blob/master/finalProject/cipherCeasarReverseAlphaShift2.js)

## Additional Information
> Read the entire file before starting.

Also known as a shift cipher, the Ceasar Cipher is one of the oldest and simplest encoding techniques.  A Ceasar Cipher works by shifting the alphabet by a set number of letters down the alphabet. For example, with a left shift of 3, 'D' would be replaced by 'A', 'E' would be replaced by 'B', and so on. See below for a full alphabet example with a left shift of 3:

```
plain:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
cipher: XYZABCDEFGHIJKLMNOPQRSTUVW
```

## The Prompt

Write a program that will take any String, and encode it based on a provided shift value. The interaction pattern for this program might look something like this:

```javascript
encode("Hello World", 5); //should log "CZGGJ RJMGY"

encode("Hi", 2); //should log "FG"
```

## Your Task

Add a `highLevelCC.md` file to your `finalProject` directory. In that file, write up high level notes about how you would solve this problem. When you're finished writing your detailed notes, it is optional to implement a solution in code.
