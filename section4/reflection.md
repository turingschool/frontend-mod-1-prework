## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

*It felt a little more orderly and focused. I decided to start with 25 minute bits and it was pretty productive, but I always ended up staying and working another few minutes before starting my break. I downloaded a super simple Pomodoro app for my computer so I don't look at my phone. It's only been a couple days, but I think I'll keep it up for a while and see if it can settle into a habit.*

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

*It was useful to write down the focus each time I started a new timer. I was always surprised by how fast time went, but my estimates were relatively accurate. I also make a point of setting a small goal, and then a task to start on if I finish the goal before time. Then I'm not biting off too much but I'm keeping an eye on the road ahead (that was a really good mixed metaphor right there too).*

1. What is an Object, and how is it different from an Array in Javascript?

*An object is another data type, and like an array, it can hold a whole list of values. However, an array is an ordered list, so you use index position to access or manipulate its data. An array literal is constructed using square brackets. An object, however, uses keys to access or manipulate data within. All properties of an object come in a key:value pair. An object literal is constructed using curly braces.*

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class: *Array because each item on the list only needs one value (a name)*
  * List of states and their capitals: *Object because each item has two values (a state and a capital)*
  * List of things to pack for vacation: *Array because each item on the list only needs one value (thing to pack)*
  * Names of all the Instagram accounts I follow: *Array because each item only needs one value (name of account)*
  * List of student names and their cohort: *Object because each item has two values to keep track of (name and cohort)*
  * Ingredients and amount of each ingredient to bake a cake: *Object because each item has two values (ingredient and amount)*
  * All my favorite restaurants: *Array because each item is only one value (name of restaurant)*

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

*I love my Weather app. I use it everyday, and one feature I use a lot is the the Hourly weather. An example hourly weather object might look like...*

```javascript
var hourly = {
  time: '5 PM',
  temp: 29,
  chancePrecip: 50,
  wind: 'NNE 12 MPH',
  feelsLike: 18
}
```
*In this example, the keys are time, temp, chancePrecip, wind, and feelsLike. The values are '5 PM', 29, 50, 'NNE 12 MPH', and 18. It could be created using a Hourly class with the same keys for each hour.*

1. What questions do you still have about classes and/or Objects?

*It's not so much a question, but I am definitely curious about the myriad ways methods can be used with different objects. I feel like I need to practice interacting with the class and constructor features of JS more.*
