## Section 2 Reflection

1. Regarding the blog posts in Part A, how do you feel about asking questions? Do you tend to ask them too soon, or wait too long, or somewhere in between?

  - I enjoyed these readings quite a bit as I tend to not ask enough questions when I find myself in a pickle.  Of course I love the self-satisfaction of solving problems that arise on my own, but sometimes it wrecks my productivity as sometimes it leads into the Google 'rabbit hole'.  I need to swallow my pride a bit more often and get more comfortable seeking help when after spending ~20mins on a certain task.  One of my favorite quotes from the articles was "spending hours searching for a solution is more often 'dumber' than asking a question." Ask dumb questions, "they are your dumb children."  Need to take that to heart more often!
  Another thing I really enjoyed about the articles was the idea of 'rubber ducking'.  Talking through the problem and explicitly stating what I need to accomplish and the steps on how to get there is a skill that I will continue to utilize in life.  For me, breaking a problem into steps often outlines what needs to be done, and talking through a problem out loud can highlight different issues or missing steps to finding that solution.  Wonderful advice!  

1. In this section, we removed some of the supports that you had in Section 1. We didn't give the directions for how to run a file in node, and really sent you off to learn about functions by exploring several outside resources. How did that feel? What was uncomfortable about it? How did it support your learning?

  - I wouldn't say that it was uncomfortable because it is something that we've all become accustomed to doing when seeking new information about anything on the internet.  The world is so digital these days, so being able to properly navigate good information on the web is a skill that will continually need sharpening.  The only uncomfortable aspect of this section was trying to figure out how to run a file in node.  The directions were stated to run each of the different exercises in your terminal using node, but it was just the moment of realizing 'I don't know how to do that!'  Knowing there are going to be plenty of those times ahead as I progress through this program, it is always reassuring that all developers come to that realization regularly and there are plenty of different tools at our disposal to find solutions.  In my case of not know how to use node in the terminal, I searched 'execute code in terminal node', and the answer was found without even having to click on any links.  

1. What is a conditional statement? Give one example of a daily life conditional. Give one example of where a conditional is probably used in a web application you use.
  - A conditional statement tells the computer to either execute on set of code or another based on certain criteria that we pass into the statement.  It basically tells the computer 'if' a condition is met, 'then' do this, 'else' look to the next criteria to see if the condition is met.  If no condition is met, the conditional statement will not execute.
  A real life example is 'if' I am hungry, then I am going to get something to eat.  Otherwise, if I am not hungry, I am not going to gorge myself.
  I like to trade stock and every time I log in to my account, the browser gives me a greeting depending on what time of day it is. It is most likely using a conditional statement to achieve this.  Something along the lines of, 'if' logged on before 12p, 'then' show greeting good morning.  'Else if' logged on between 12p and 5p, 'then' show greeting good afternoon.  'Else' show greeting good evening.  

1. How do you add multiple conditions to an `if` statement? In your own words, explain how to program reads them and determines what to do.
  - If you want to add multiple 'if' statements to a conditional statement, you would use 'else if' to cover as many different conditions as necessary.  The program will read the conditional statement from top to bottom checking each condition to see if it evaluates to true.  Once a specific condition ('if', 'else if', or lastly 'else') returns true, the program will execute the code block associated with that condition.  See my previous explanation in the question before!  If no conditions are met in the entire conditional statement, no code will be executed and the program will continue to read whatever code follows the statement.  

1. What tools are available to you, as a developer, if you want to check that TWO conditions are met? Or, if you want to check that 1 of 2 conditions are met, before running a block of code?
  - When we want to check if two conditions are met in one statement, we could utilize logical operators.  The two logical operators that we learned about in this section are the AND (&&) and OR (||) operators.  These allow us to check if one of two conditions are met by using the OR operator, as well as we could check if both conditions are met by using the AND operator.  For example, say we wanted to check if we have enough sandwich makings for lunch today, we could use the following code to display our options.  
  `
  var hasLunchMeat = false;
  var hasBread = true;
  var hasPBAndJ = true;

  if (hasLunchMeat && hasBread || hasBread && hasPBAndJ) {
    console.log("Sandwich for lunch today");
    } else {
      console.log("Looks like soup is our best option for lunch!");
    }
  `

1. What questions do you still have about `if` statements and/or functions?
  - Seeing as it is not the first time I have worked with `if` statements, I found this section of work to be relativity straight-forward.  No questions with `if` statements or what we have gone over with functions to this point!  
