## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?
 - First, I appreciated the insight on the blog posts. I think what I am going to have the hardest time with is explaining the process I took when I couldn't figure out a solution to a problem. It seems daunting to have taken all the 20-30 minutes trying to figure out the problem and then spending another 15-20 minutes explaining the process I took. Also, I likely am spending longer than 20-30 minutes on some problems, so it may help if I time block and notate my process on a text editor while I am solving the process. This will eliminate the need to go back especially if it seems like something that I am very unfamiliar with. Now to the actual question. I can empathize with the writer of the last blog. It can be a tough pill to swallow when you realize that a simple google search with the proper parameters could have turned up a solution to what you spent an hour doing. In regards to slack, I feel more comfortable asking people for help in a private DM.

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?
- First off, not skipping those links is essential. Sometimes I want to rush in and get to the problems assuming that we have already covered it in class. I will keep this in mind as I go through Turing. Also, I love supplementing the work with videos. It's clear and concise and for those that respond better to video/audio than text, this can be integral to the learning process.

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
- A conditional statement determines whether a piece of code will run. For example, `if` this happens (or is structures) 'then' then do this. Often times, if a condition evaluates to true that code block will run. Conditions use comparison operators to determine if the code will run.

- An example in real life, is `if` you work out 'then' you will get in better shape.

- A conditional that may be used in a web application is when you are entering a password to gain access to a site.
    - ```
    var password = false;

    if (password === true) {
      greeting = 'Hello!';
    } else {
      deny = 'You are denied access. Try again.'
    }
    ```

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
 - You can add multiple conditions after the initial `if` by using `else`. This means 'otherwise do this.' You can continue to add conditions to your script, by adding more `else if`. You can have as many `else if` conditions as you desire. The last condition uses `else` drop the if.  
 - A program reads these conditions in order. If the initial `if` condition evaluates to true, then the code held within the curly brackets will run, if it evaluates to false then the program will check the next condition `else if`. And the program will run though all of the conditions in this same way until it evaluates to true. If it does not evaluate to true, commonly, the last statement will run by using `else`.

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  - The logical AND operator `&&` allows you to check if 2 conditions are met.
  - The logical OR operator `||` allows you to check if 1 of 2 conditions are met.

1. What questions do you still have about `if` statements and/or functions?
  - I think I understand them fairly well. I think where I got a little confused was with the book examples where they were using `document.write` and other unfamiliar code, but I know this will get addressed later on in the program. Now I just need to go back and continue to practice `function` and `if` statements so I am certain about the proper syntax and it flows easily both in and out. 
