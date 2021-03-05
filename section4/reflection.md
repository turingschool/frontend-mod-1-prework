## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
My workflow felt a lot more efficient this week. I had started using the Pomodoro method a couple months ago (I didn't know that I was using it though!) and I think having the steps to go a long with it really helped. I started using the Pom method because I was having a hard time re-acustomating myself to sitting down at a computer and doing work (I've been unemployed since May) and it was a good amount way for me to learn how to focus on a singular thing for 25 mins. Very intentionally using the Pom method during section 4, specifically using the check marks, really helped me see how long I was stuck on a problem and I can see how this will help me better estimate how long tasks will take me.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I used each part as a step to focus on during my Poms. I didn't estimate how long each will take me since I'm finding that I don't know enough to properly estimate the times. I did keep a check mark for each parts that I worked on so I could see where estimating how long it took to finish each one. I also recorded when I took longer breaks and noted how many pom sessions can I do until I start feeling distracted and need a longer break. I like using the Poms because I feel very intentional on understanding when I'm distracted and when am I feeling in the zone. This will help me map out the ideal flow structure of when its best I work in large chunks of times vs when its best for me to work in smaller chunks of time.

1. What is an Object, and how is it different from an Array in Javascript?

An Object and Array are both ways to store complex data in a variable. The difference is that an array is ordered, so instead of the items in the array being called by its name (or value) it is called by its placement in the array starting at 0. An object can use strings to organize the data and you can call the data you need using the string its been assigned.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
  _Array would be the best way since
  * List of states and their capitals
  _Object would be better to store the data because it has a data set: the state's name and the state's capitol. When it is an array you can use strings (this case would be the States' name) to get the data (which would be the capitol)_
  * List of things to pack for vacation
  _Array would be the best for packing things to go on a vacation because it is an ordered list of data for just one vacation_
  * Names of all the Instagram accounts I follow
  _Array would be the best because it is just a list for one account that follows many accounts_
  * List of student names and their cohort
  _Object would be best because there are many different cohorts and each cohort has many different students. If you want to call just one cohort and see who is in that cohort or add a name to that cohort you would use an object literal_
  * Ingredients and amount of each ingredient to bake a cake
  _It would be best to use an object so you can call an ingredient by name and see how much of each ingredient you need_
  * All my favorite restaurants
  _An array would be the best because it is a list of singular items_

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

A web application that I use frequently that would have an Object would be the website I use to reserve my days skiings. The keys it uses are: userName, mountain, date, available

The example values would be userName = Hayley; mountain = Keystone, date = 3/5/2021, available = true



1. What questions do you still have about classes and/or Objects?
Yes! I was having issues figuring out how to input different strings for a method. For example, in the tweet.js exercise to add a comment into the array the comment needed to be inputted in the method:
``addComment() {
  this.comments.push("Your so funny");
  }``

  Where as I would have liked to have been able to input the string when the method had been called here: ``artPost.addComment();``. I tried something like this: ``artPost.addComment("great job");`` but it would not register. 
