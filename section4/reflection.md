## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

* It was noticeably more structured, and I felt more focused. I also ate more!

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

* I felt way more focused. I had a timer set so I didn't have to check the time to see how long I had been working so I could kinda just zone into the assignment. I think the estimated times were pretty close. I've been working late at night though, so I haven't been able to access people on slack in a timely manner, so I spend a decent amount of time googling through stuff until very late. Thankfully I was able to reach out to a friend who doesn't sleep much and knows his stuff who could help me. But aside from the extra 2-3 hours I spent googling stuff, the time wasn't far off. I got really frustrated when I was doing the extra googling and gave up on the pomodoro stuff, but once I got past where I was stuck, I had an idea of how long of a break to take, and pick back up on the other stuff.

1. What is an Object, and how is it different from an Array in Javascript?

* An object is a lot like an array in that it is a variable that contains a list of data, but an object is better suited for storing more complex data. An object is also a bit more modular in that you can access those more complex data types a little easier.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class: **array**
  * List of states and their capitals: **object**
  * List of things to pack for vacation: **array**
  * Names of all the Instagram accounts I follow: **array**
  * List of student names and their cohort: **object**
  * Ingredients and amount of each ingredient to bake a cake: **object**
  * All my favorite restaurants: **array**

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

* I use reddit a lot, and I think a user would be a decent example of an object. I'll code something out and answer all of the other parts with the values I put in.

```
var redditUser = {
  userName = 'anonymous';
  email: 'richardtyler2011@gmail.com';
  dateCreated: 'July 1, 2020';
  amountOfPosts: 27;
  karma: -30;
};
```

1. What questions do you still have about classes and/or Objects?

* I'm very confused as to how methods recognize properties in object literals. What part of the property acts like a variable (I hope i'm explaining this right)? I never know when to use the parameter name from the constructor list and when to use `this.parameter` when I'm making functions. I spent hours trying to understand this. My brain is telling me that functions need variables or values for parameters, but in the properties, we don't define any hard variables. We just list the names of stuff. So, I don't get how those functions read those names without variables. Sorry this is jumbled. My brain is broken from trying to understand it hahaha
