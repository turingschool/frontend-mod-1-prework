Ceasar Cipher

 - Decide what the cipher should be. I'm going to use rot 2 so I'm able to easily visually check and confirm that my code is working without having to think and count too hard. This will mean that A = C, Q = S, etc.

      `rot2`

I'm just going to park that there and come back to it when it's time for the actual function.

 - Create an variable that holds all 52 letters as a string - there will be 1 string for upper case and 1 string for lower case:

      `var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"`
      `var lowerCase = "abcdefghijklmnopqrstuvwxyz"`

This is important because the computer recognizes "A" as being different from "a". I want to make sure that it's able to interpret all 52 letters and return the values appropriately. Originally, I was going to make all of the letters lower cased by using .toLowerCase but that seemed kind of lazy and incomplete.


- Use `.split("")` to give the computer the ability to select a single letter from the string and convert it individually. This will look like:

      `var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")`
      `var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("")`

This is important because I don't want to have to create a table that says "A = C, a = c, B = D, b = d", etc. That takes too much time and if I want the cipher to be a different number, I would have to hard code the table all over again and that's a gross waste of time.

And actually, now that I've written this, I've decided that what I should really have is:

      `var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")`

I want this instead of the above because I get the feeling that having two variables means that I'll need two separate functions to interpret two different types of letters and that feels like a lot of extra work. Let's work smarter, not harder.


- Write a function that takes in a string (the `letter` string above) and then loop through it. This is where the `rot2` becomes important. At the moment, I just want it to print all 52 of the letters because I want to make sure it will work. I'm simply calling the function `rot2` because the letters will ultimately pass through this.

      `function rot2(letter){
        for (var i - 0; i <= letter.length; i++) {
          console.log(letter[i]);
        }
      }

      rot2("e")`

  This should print the letter "e" right now. So my next step is to make it to solve for +2. In order to do this, I'm going to use the "ASCII method". I've watched a lot of people build ciphers different ways online but this seems the most efficient and I'm familiar with the table from my other IT certifications.


  - Expand on the loop above. What I mean by that is add .charCodeAt() so that the computer will return a numerical value for the letter it inputs. This is going to evolve my function to:

      `function rot2(letter){
          for (var i - 0; i <= letter.length; i++) {
            console.log(letter[i].charCodeAt());
          }
        }`

  It just occurred to me that I'm going to need more variables, because I just asked myself what is going to happen when it console.logs the ASCII value of a letter. Where is that going to go? And furthermore, how am I tthen going to take that output and have it be the input so that it can add two to the value that the ASCII letter has (i.e. 78 + 2 = 80) in order to get a new number to then return the new letter. Crap. I know I need an "answer" variable. I get the sense that I need one that's like going to help "decipher", but I think I'll unpack that later. That might be outside of the scope of what we're going to do. I feel like the .charCodeAt() needs to be it's own variable because it's something else's input. It'll be the input to the var answer? Or am I going to need two answers?! I'm rambling, so back to research.

  ASCII Numbers:
  65 = A
  90 = Z
  97 = a
  122 = z

  I'm parking these here because I need to be able to visually reference them so I can build my if/else statement to evaluate the letters. Its going to be a more complicate loop that I'm accustomed to because it has two ranges of letters, not just 1.

- Build an if/else statement to decipher whether or not the letter is an upper case or a lower case letter and then decipher.

HOWEVER! Now that I've read even more, part of me is regretting putting both sets of letters in the same string because of how the ASCII table works. If it was all one set of numbers, I would just use the base minus 65 which is the first relevant value on the table, but now I don't know how to tell it either 65 - 90 OR 97 - 122. Truthfully, in the hours I'd been researching, I hadn't understood why so many developers were either making all of the letters uppercase or all of the letters lowercase and now I understand why. I thought they were just being lazy - turns out there was actually a real reason.

In a pretty synopsis, I would say the most important components are
1. a function that assess the ASCII values of the letters
2. an if/else statement to decide whether the letter is upper or lower case (somehow)
3. a method that takes the ASCII value and either adds or subtracts X based on the cipher
4. a function that takes the new value and converts it into a human readable letter
5. a new variable that is the message decoded.

Now that I've written that, I'm trying to decide if I should be using methods or functions. My research tells me that the basic difference is that methods have receivers and functions don't. So methods are functions, but they're the property of an object. Which makes me feel like maybe I needed a whole object instead of a simple function.

I'm going to leave this here now, because this was probably more micro level than "highlevel" overview. Over the next couple of weeks, I'm definitely going to build my very own from scratch. I just don't feel like I have enough working knowledge to make that happen at the moment.


I'm parking this down here because I played with it in repl and I don't want to type it again.
function rot13(str) {// LBH QVQ VG!
  var solved = "";
  for (var i = 0; i<str.length; i++) {
    var asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      solved += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      solved += str[i];
    }
  }
  return solved;
  }

  rot13("D")
