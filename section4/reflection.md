## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

   - My workflow felt a lot more focused and driven. I found that I was very cognizant of the clock...like the knowledge that I only had 25 minutes in which to work really made me feel like I needed press on and get something done. It also felt very doable: 25 minutes is not hard to get through. So, I found that this broke time up better and allowed me to push forward, knowing I'd get a break soon. It made me work a lot faster!

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

   - I thought I would be way more unrealistic in setting goals for that 25 minute time period. I wrote down the things that I thought I could tackle in those 25 minute blocks and at first thought I was biting off more than I could chew. I did find a few times that some of the exercises could not get done in the same time block as the reading/note taking but overall I thought I did a good job at judging what I could get done. Like I said above, I also finished things a lot quicker and was more focused, knowing that I would get a break soon and that the timer was counting down. I think I finished section 4 way more efficiently and quickly (as far as actual time spent on the reading and exercises...because I was getting distracted a lot more in the other sections).

1. What is an Object, and how is it different from an Array in Javascript?

    - An Object stores complex data, much like an Array but instead of storing an ordered list (like you would in an Array) that you can access with the index numbers of specific items, you can use strings to get data from an object. This lets you treat an object like a database for storing and organizing data. We use key-value pairs for properties and their values in objects. A value can hold any data type, such as a string, boolean, integer, float, or array. We access the values in Objects by using dot notation. We can also change the values by using dot notation and simply reassigning the value.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
     - Array- this is because this is simply a list and doesn't need to hold any key-value pairs.
  * List of states and their capitals
     - Array- this is because this is simply a list and doesn't need to hold any key-value pairs.
  * List of things to pack for vacation
     - Array- this is because this is simply a list and doesn't need to hold any key-value pairs.
  * Names of all the Instagram accounts I follow
     - Array- this is because this is simply a list and doesn't need to hold any key-value pairs.
  * List of student names and their cohort
     - Object- this is because this complex data includes names AND their objects. These are key-value pairs.
  * Ingredients and amount of each ingredient to bake a cake
     - Object- this is because this complex data includes ingredients AND their amounts. These are key-value pairs.
  * All my favorite restaurants
     - Array- this is because this is simply a list and doesn't need to hold any key-value pairs.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

   - Our GitHub accounts are a good example of this. When we log in we are greeted with our usernames at the top and have a basic menu of the things contained therein. Some key-value pairs: userName: 'ShaunaMyers', repositories: 8, gists: 6, pullRequests: 1.

1. What questions do you still have about classes and/or Objects?

   - So, object literals can be stored inside of an array? I noticed this in one of our exercises. I know we'll be working with
   this more in Mod-1 (as this was an extension assignment).

   - I have a question not about the classes and objects but about best practices for writing code. When we are asked to call several methods (in our classMethods.js exercise) is is appropriate to do this in one call? I noticed that it did work when I tried it, using node in my terminal. I'll include an example below:

   Should I do this...

   ```
   meat.addTopping(), vegetarian.addTopping();

   console.log(meat, vegetarian);
   ```

   Or this...

   ```
   meat.addTopping();
   vegetarian.addTopping();

   console.log(meat);
   console.log(vegetarian);
   ```
