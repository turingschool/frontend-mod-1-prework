## Section 1 Reflection

1. How did the SuperLearner Article resonate with you? What from this list do you already do? Want to start doing or do more of? Is there anything not on this list, that you would add to it?
  - The 6th habit, which states to take breaks early and often really          resonated with me. For the last 4 years I've gotten into the bad habit of grinding through work, thinking if I can just finish this task then I'll take a break. This resulted in my often working through lunch and skipping the meal altogether. In the end, I'm sure this just slowed my efficiency--I am going to make a HUGE effort to never go back to these unhealthy habits and implement short breaks (without guilt) often!

  - I already read a lot. I always find myself on a google saga when I start learning about one subject and something is mentioned that I am unfamiliar with...I love to learn!

  - I want to start fostering more on teaching others what I know (it's not much right now). While a civil engineer, I loved working with younger engineers and teaching folks tricks in software packages they were new to. It is so rewarding to see their faces light up when they figure something new out. I am excited to be able to do this in the realm of computer programming! I will start to try and do more of this in our Slack channel and on projects.

  - I am loving this well broken down calendar and believe that budgeting time has got to add to one's super learning abilities. I'm adding it to the list (well, my list).

2. What are the data types you learned about in this section? In your own words, define each.

    This section introduced us to:
      * Boolean - these data types are equal to either true or false. These data types are often returned as a logged result of running a comparison. For example, if you asked the computer if 3 > 2 then you would be returned with the answer (or boolean) "true". You can use boolean examples inside while loops to check if the while loop should continue to be executed or not. Booleans are very valuable and their usage seems to be pretty broad.

      * String - strings are a data type that consist of letters, numbers, emojis, and/or special characters wrapped in single or double quotes. I think of these as being used as returning sentences, prompts, or thoughts. I suspect these are not operated on much other than through concatenation. One thing to note is that if a number is added to a sentence, it will not take the form of a number data type --it will be coerced into a string data type.

      * Number - numbers are, well, numbers...digits used in mathematic calculations. Numbers can be positive, negative, and include decimal places (floating point numbers). Numbers should be represented without commas.

3. How would you log the string `"Hello World!"` to the console?

      Type: `console.log('Hello World!');` or `console.log("Hello World!");`

4. What is/are the character(s) you would use to indicate comments in a JavaScript file? What is the purpose of a code comment?

    To type out a single line comment you would type two forward slashes before typing out the comment you'd like to add to a JavaScript file. To type out a multi-line comment, you would type an forward slash followed by an asterisk at the beginning of your comment and then close your comment text with an asterisk followed by a forward slash. Comments are useful for:

      - deactivating parts of your code, perhaps to help troubleshoot
      - leaving notes that help explain why you've added a certain portion of code (intentions or reasoning)
      - pseudocdoing is done via comments. I think you'd generally go back and delete this pseudocode before pushing, but it helps to have your skeleton right there in front of you in your JavaScript file while working on a problem.


5. In your own words, what is a variable? How would you explain it to a 5 year old?

    A variable is a container that holds some meaning or definition. This meaning or definition can be changed later on if you want to. For instance, if your shirt is blue, maybe you don't want to have to repeat that all the time so you create a variable called shirtColor and you assign to it a definition of blue.


6. Think of a site or app you use frequently. What are three variables that are probably used? Which data type would each of those variables probably hold?

    I use the financial application Mint a lot. It probably uses the following variables:

    - startingAssets: this variable would be a number data type and represent how many assets I had after linking any financial accounts to the application. I know it has to have a variable similiar to this, because it shows you your "wealth" accumulation since signing up with the application.

    - creditScore: this variable is also likely a number. I suspect that the application is pulling a users score from a couple of the federally recognized credit reporting agencies and performing an average before showing this measure to the user.

    - spendingCategory: this variable is a string and represents one of many categories of spending, i.e. entertainment, gas & fuel, utilities, groceries, home.

7. In your own words, explain what concatenation is.

    Concatenation is linking together multiple variables and strings into one result string.

8. Think of a site or app you use frequently. Where do you think the developers used concatention?

    Anytime I open up that same application mentioned above, Mint, the application greets me with a standard message "Welcome back Nadia, last time you logged in was xx/xx/xxxx". I think the application is using concatenation to pull my name (the user) and the last date I logged in from a database to concatenate a standard greeting message used for all users and customize it with my data.

9. What questions do you still have about the work we've done so far? (not having a question is not an option)

    Is there an instance where concatenation MUST be used instead of interpolation? It seems like interpolation would be best to use always because of readability?
