## Section 4 Reflection

*1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?*  

A. The workflow felt a little heavier this week. The concepts are quickly becoming more convoluted so
it is taking me longer to complete the exercises. The total completion time for Section 4 was around 18 - 20
hours which was considerable more than the estimated time. The longer completion time
may have been because I discussed some of the exercises with classmates to better understand the work.
Since the concepts were harder I was tempted to work beyond the recommended Pomodoro break time
more often to finish a task now rather than having to come back to the task later and
spend time reorienting myself to the problem. The breaks have been great at pacing myself. I just need
to remember to take them so I don't burn myself out.

*2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?*   

A. I was surprised to find that when I used the Pomodoro technique I was getting more done in less time. It seems like taking 2 breaks an hour is wasting valuable time you could be working. However allowing my brain to rest with planned breaks made it easier to work by having a break to look forward to. Like I said above, when the material was harder to comprehend, I was
tempted to work past the break time so I didn't have to come back to the problem. Overall, I was very impressed with
how much taking small breaks helped my productivity.

*3. What is an Object, and how is it different from an Array in Javascript?*


A. An object is a method to store data similar to an array but with some key differences.
An array stores data in an ordered list than can only be accessed by a number, called it's index number.
An object can store data by using strings. By organizing data by strings, you can create a database for storing
and organizing data. You can give objects attributes that are stored in key-value pairs. We can give objects
multiple attributes and references those attributes by calling the key. Utilizing these key value pairs
makes objects more dynamic and flexible than arrays.

*4. For each set of data, would an array or object be better to store it? Explain your choice.*

  * List of all of the students in class
  A. An array would be best. This is because student names are the only attribute we need to store. Since we only need
  this one data point per student an array makes most sense.
  * List of states and their capitals
  A. An object would be best. Since we need to two data points, the state and each state's capital, an object would be better
  suited for storing those two data points.
  * List of things to pack for vacation
  A. An array would be better here. This is because it is a simple list with only one attribute, in this case the name of
  the thing to back for vacation.
  * Names of all the Instagram accounts I follow
  A. An array would be best. This is because only one attribute needs to be recalled, in this case, the name of the Instagram
  accounts I fill.
  * List of student names and their cohort
  A. An object would be better here. Since we need to remember both the name of the student and their cohort, we need to store
  both of these attributes in the object. This will be helpful when calling all students from the same cohort.
  * Ingredients and amount of each ingredient to bake a cake
  A. An object would be best. An object would be able to remember each ingredient and how much of each ingredient we need.
  * All my favorite restaurants
  A. An array would be best here. Since all we need to store is a list of restaurant names, an array would be an optimal
  choice here.

*5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?*

A. Email is an object I interact with almost on a daily basis.
examples:
```
this.from = from; // abc@gmail.com
this.to = to; // xyz@gmail.com
this.dateTime = dateTime; // "2021-12-31T12:00:00Z"
this.inboxType = inboxType; // "Updates"
this.subject = subject; // "Your statement is ready"
```

*6. What questions do you still have about classes and/or Objects?*

A. On the exercise classProperties.js, we were asked to declare class types (dog, snack, shirt) multiple times. On the
homework, it says to name classes exactly what they are. However I received an error saying I can't call the same class
twice since it is already defined. I got around this by using Dog2, Dog3, Shirt2, Shirt3, etc but I am not sure if this
is a proper way to name classes. What do you do when you need to call the same class multiple times in the same exercise?
