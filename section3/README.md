# Section 3 - GROWTH MINDSET, Arrays and Loops

Section 3 is estimated to take a total of 6-10 hours to complete. Similar to the previous sections, this section of pre-work involves reading (both from this document as well as the 📒John Duckett book), 👩🏻‍💻exercises, and 📝reflection questions. Make sure to manage your time well so that should you get stuck and need help, you have plenty of time to do so and meet the deadline.

Since Arrays are a bigger topic, it is the main focus of this section. Some review work from the first two sections has been woven in so you get opportunities to continue seeing and applying those concepts, as well.

- [Vocabulary](#Vocabulary)
- [Part A: Growth Mindset](#Part-A-Growth-Mindset)
- [Part B: Arrays](#Part-B-Arrays)
- [Part C: Loops](#Part-C-Loops)

## Vocabulary

### Vocabulary Terms

- Array - *list-like object with associated methods*
- element - *item within an array; each element has its own index*
- index - *ordered position of an element within its array; integer, can be manipulated by array methods*
- array method - *predefined actions that can be called to manipulate an array*
*ex. `arr.push(items)` and `arr.pop()` and and remove, respectively, items from the end of an array. `arr.unshift(items)` and `arr.shift()` add and remove, respectively, items from the beginning. `arr.sort()` `arr.length`*
- loop - *checks a condition and runs while true/until false; performs an action a specific number of times*
  *[using `i` is a conventionally used variable - short for "index"]*


### JavaScript Reserved Keywords

- `for` - *uses a counter as a condition; creates a loop consisting of three (optional) expressions and a code block to be executed in the loop*
`for (let var = [something]; var [comparison operator]; var[increment])`
*initialization (create variable) - condition (specify endpoint) - update (change counter)*
- `break` - *terminates the loop, tells the interpreter to proceed to the next line of code outside the loop*
- `continue` - *tells the interpreter to continue with the current iteration, and then check the condition again*

## Open your local copy of frontend-mod-1-prework

Using your terminal, open the local copy of the repository that you created during setup.  To do this, you will need to use the terminal command `cd` to change into the directory that holds the repository. Once you are in the correct directory, use the terminal command `atom .` to open the prework repository. If you are having trouble with this, see the `section1` README.

## Part A Growth Mindset

Read/watch one or both of the following:
- This [2-part blog post series](https://blog.mindsetworks.com/entry/how-having-a-growth-mindset-can-help-you-learn-to-code) discusses how having a growth mindset is helpful when learning to code, and how coding promotes a growth mindset!
- This [video interview](https://dev.to/hackflix_dev/how-to-hack-a-growth-mindset-b1g) where an experienced Front-End engineer discusses learning about the concept of Growth Mindset and how that's changed how she sees her work and career. (The first 7 minutes are intros and a discussion on Developer Relations. After that, the conversation about Growth Midnset begins.)

Then, consider on the following questions. We will ask you to share some of these responses at the end of this section.
- What are two points from the article or video that either resonated with you, or were brand new to you?
*Staying in the Zone of Proximal Development is not a new concept to me, yet I still find it challenging to stay in that sweet spot without overreaching or playing it too safe.*
*Focusing on the process also resonates with me as I almost always find that more translatable to results than focusing on goals.*
- In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?
*I think I tend to fall out of growth mindset when I lack a practical application or purpose for whatever I'm involved in learning. Possibility seems more abstract and out-of-reach when I don't have a project. Conversely, when I'm in the moment working spontaneously and creatively on something concrete I experience much more sense of purpose.*
- What is something you are good at or knowledgeable at now, that you once weren't? How did you get those skills/knowledge? Was it hard at some point?
*Music theory and audio engineering. In these cases I was driven by intense interest and immersed myself in learning and trying things hands-on.*

## Part B Arrays

📒 Read pages 70 and 72 in the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

🎬 Watch [this video to hear an explanation](https://www.youtube.com/watch?v=EUnV-fCY0Pc) and watch someone apply some of the concepts you read about in the book. The person who recorded this video is writing JavaScript in the browser Develeper Tools. Open them with in Chrome with the keyboard shortcut `cmd + opt + i`, and click Console.

Research the array methods below on the MDN documentation provided. This documentation might seem intimidating at first, but you will need to get comfortable looking at it.

👩🏻‍💻 Create a file in your `section3` directory called `arrayMethods.md` and describe, in your own words, what each method does.
* Methods to research: `pop`, `push`, `shift`, `unshift`. Take a look at the [MDN documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Hint: the methods are listed in a column on the left hand side of the website.
* _Note: The MDN documentation makes use of the variable declarations `const` and `let`. For now, just read them as `var` instead._

> X 👩🏻‍💻 PAUSE here, and complete the exercises in `arrays.js`

## Part C Loops

Sometimes, we want our program to perform an action a specific number of times. A loop is a way to only write the code for that action 1 time, but instruct our program to carry it out `n` times. (`n` being a placeholder for theoretically any positive whole number. [Read more about that here](https://www.quora.com/What-is-the-meaning-of-the-n-symbol-in-math) if you are interested and/or not familiar with that!)

Sometimes, we have a collection of data (like an array) and we want to perform an action on each item in that collection. In these instances, we need to iterate through each piece of data in our collection.

Work through this section to build your understanding of how `for` loops can be used both with and without Arrays.

### For Loops

📒 Read pages 170-174 of the `JAVASCRIPT & JQUERY: Interactive Front-End Web Development` book.

🎬 Watch [this video](https://www.youtube.com/watch?v=s9wW2PpJsmQ) to hear an explanation and see someone write a `for` loop! Remember, when you see `let`, pretend it is `var`. You will learn the differences between those, at a very deep level, in Mod 2.

> X 👩🏻‍💻 PAUSE here, and complete the exercises in `loops.js`

### For Loop and Arrays

🎬 Watch [this video](https://www.youtube.com/watch?v=BxFi7vVZx4s) to learn about using `for` loops with Arrays. The first 18 minutes cover for loops and at around 18 minutes in, the video gets into using them with Arrays. Watch what feels helpful to you! (At 23 minutes, the video covers looping over Objects which is _not_ aligned to the learning goals of this section, so we advise stopping there.)

> 👩🏻‍💻 PAUSE here, and complete the exercises in `loops-arrays.js`

## Exercises

At this point, you should have worked through all files in the `exercises` directory. Confirm that you have before moving on.

## Reflection

📝 Answer the questions in the `reflection.md` file in the `section3` directory.

## Save your work in Git

When you are finished with all of the `section3` activities, use the Git workflow and commands you've learned to add and commit your work. Write a commit message that concisely summarizes what work this commit contains. If you need a refresher on that workflow, look at the Mod 0 lesson where this was covered, of the directions in Sections 1 or 2.

## Push to GitHub

You've save your work to Git on your local machine, but it is not yet accessible through your remote Github repository. Push your code to your remote repository. If you don't remember the command, look back at the directions in Sections 1 or 2.

Visit your GitHub repository to verify the work you did for this section was pushed successfully!


## Index Links

- [Vocabulary](#Vocabulary)
- [Part A: Section 3 Focus TBD](#Part-A-Section-3-Focus)
- [Part B: Arrays](#Part-B-Arrays)
- [Part C: Loops](#Part-C-Loops)

🚀 [Go to Section 4](../section4)
