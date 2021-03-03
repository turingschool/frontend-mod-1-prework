## Section 4 Reflection

**1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?**

I started the Pomodoro workflow right round the start of Module 0, and it's been very effective for me.  I found that I maintained much better focus and energy using Pomodoro, even on days that included long hours of study/exercises.  For me at least, once I start a Pomodoro cycle I immediately forget about it, and only rarely find myself checking in on the timer before the queue for a break.  It seems like this is part of the usefulness, as it takes away the worry of checking the time and feeling the vague, nagging sensation of wanting to check in on your progress against a clock.  I've been very happy with it so far!

**2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?**

Prior to Turing, I'd tried the Pomodoro method but hadn't really dived into it fully.  I've found it very effective so far in my Turing experience, and I definitely see an increase in my focus throughout a long day when I use the Pomodoro technique. I had an app on my phone that I've started using to a degree, but mostly I rely on the Marinara extension in Chrome.  I've tried to do the long-form, hand-written version, but frankly I think I like the Marinara version better.  I'm already keeping a log of completed work each day, so I didn't find hand-written checkmarks to be particularly useful.  I'll absolutely keep using the Pomodoro method as I go forward in Turing, though.

**3. What is an Object, and how is it different from an Array in Javascript?**

It seem that, technically, arrays are a type of object in JavaScript.  To be more exact, though, while both can be used to store a collection of data, there are some important differences.  An object is a representation of a thing, or Class in the code.  Objects contain a number of properties, which are further made up of `key-value pairs`.  For example, you might have `var nebraskaStateCapital = {location: 'Lincoln', style: 'Art Deco', completedDate: '1932'};`.  The keys are listed before each colon, and the value after each colon.  You can modify objects using dot notation.

An array, on the other hand, is a list of collected items under a single variable, such as `var states = ['Colorado', 'Nebraska', 'Wyoming'];`.  The items in an array are accessed by the index (zero being the first, left-most item) and have a number of methods that can access and modify them (*e.g.* `array.push()` or `array.pop()`).

**4. For each set of data, would an array or object be better to store it? Explain your choice.**

  * List of all of the students in class
      If it was just a list of names, an array would work well for storage.  If it's only a list of names, there isn't anything added by tying them to key-value pairs in an object.  The simplest would be to simply list them in an array.
  * List of states and their capitals
      An object would be better, since you're creating a list of key-value pairs.  For this example, each state could be paired with its capital (*e.g.* AL: "Montgomery", AK: "Juneau", etc.).  You'd want to store the state name with the capital, which makes an object the better choice.
  * List of things to pack for vacation
      An array would be better, as this is just a list of items to pack, and doesn't need any key-value pairing.
  * Names of all the Instagram accounts I follow
      An array would be better, as this is just a list of items to pack, and doesn't need any key-value pairing.
  * List of student names and their cohort
      An object would be better to store these, since you have a pairing of student names and their cohort.  Depending on how you intend to use the data, you could also set up an array for each cohort, where each on listed the names of the students in that specific cohort.
  * Ingredients and amount of each ingredient to bake a cake
      As this is another collection of data where one piece is paired to another, an object would be better.  You could list each ingredient paired with the amount needed.
  * All my favorite restaurants
      If it's just a list of restaurant names, an array would be better since there's no need to pair these restaurant names with anything else.

**5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?**

I've been using Google Music recently, and it seems like some of that data could be stored as objects.  For example, each song has a number of potential properties and values, storing information about the music as well as user interactions with the music.  There could be key value pairs such as this: `var currentlyPlaying = {songTitle: "Expensive Dog", band: "Total Control", album: "Typical System", songLiked: true}`.  There are also a number of other links involved, making the buttons interactive, going to further information, playing next song, etc.  

**6. What questions do you still have about classes and/or Objects?**

I'm interested in learning how multiple object and/or arrays can be used to interact with each other.  For example, in looking at Google Music in the prior question, it's clear to me that there's a lot of complicated (but understandable) design going on in a music player.  How is that information being stored and how are user interactions with the application stored?  I'm looking forward to learning more and building more layered coding.
