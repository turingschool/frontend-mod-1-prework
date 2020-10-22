## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

Firstly I will say that some of the advice in the blog posts were particularly original, the rubber ducky theory for example. But my general opinion on asking questions is rather conservative I have to say and I also know for a fact that it bites me more often than it should. Because I've always been the type of student to muscle things through on my own and was consistently praised for achievements that didn't depend on anyone else's input I believe I developed the habit (and stubborness) of simply not asking questions to the right people at the right time. This has improved in my professional life but I still feel the remnants and difficulty of breaking this habit as I become more confident in the skill I am utilizing and at times get lazy to bother asking my boss or my team 'stupid questions' and see the direct consequences later.

2. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

Because we had spoken about the importance of outside resources in Mod 0, turning to google searches and online forums was not uncomfortable or unfamiliar in any way. Because we need to come to an eventual point of accepting that more often or not we will not be able to complete a task or project without the aid of outside resources, it was a good opportunity to practice at least. This process will continue to support my learning in that we can become more comfortable with the process and workflow before more serious and stressful deadlines begin to approach.

3. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.

A conditional statement is simply a question or event that will return different results according to boolean results of a set comparison or logical operator. In daily life this might look like, if you have an amount of chocolate chips but can only bake chocolate chip cookies if you have more than 250 grams, you have two potential outcomes (either can bake or cannot bake) dependent on the amount of chocolate chips you have (more or less than 250g). When interacting with your web browser, a straightforward one might be *active* or *inactive* depending on if you've interacted with the page in the past 30 seconds.

4. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.

Instead of the simple if statement, one can extend from 2 possible outcomes to as many or as specific as necessary with the else if{} modification of the if statement. In the basic if statement, the program will run the code if the initial conditional returns true or false. In the case of adding else if{}, the program will run through each conditional in the order written and either return the first conditional that returns true or the final else {} conditional at the end of the statement.

'''
if (portions >= attendees) {
  console.log('enough food')
} else {
  console.log('not enough food')
}
'''
vs.
'''
if (portions > attendees) {
  console.log('enough food')
} else if (portions === attendees){
  console.log('break even')
} else {
  console.log('not enough food')
}
'''

5. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?

The addition of logical operators can create a more sophisticated conditional statements and functions by using '''&&''' to check if *both* conditions are met and '''||''' to check if *either or* each of the 2 conditions are met.

6. What questions do you still have about `if` statements and/or functions?

In my limited experience with if statements, when first learning they can be easily picked up however as the complexity increases and they are combined with original functions it can get very confusing trying to understand and furthermore debug them. In terms of learning for this section, I think I am comfortable. in terms of professionalism, I have some concerns of how they can be broken down simply while still remaining effective.
