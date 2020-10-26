## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

Answer: I have been using the Pomodoro technique for a while now, so my workflow didn't change much. I did experiment with changing my work times (alternating between 30, 35, 40, and 45 minute work times). I found that around 35 minutes seemed to be the sweet spot between feeling like I should work a little longer vs getting distracted and wondering when the timer would go off.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

Answer: I had trouble coming up with the set intentions for each individual work block, so I set a general intention for the work day and recorded my progress on each check. I quickly realized that there are more data points that I want to collect at each check so I will eventually be able to make more precise estimations. I think a progress checklist will be a good tool for me to use so I can get better at setting goals (I think my current goal setting skills are rather bad/weak).


1. What is an Object, and how is it different from an Array in Javascript?

Answer: An object is essentially a list of key-value pairs listed inside curly braces. An object can use strings to index values unlike an array, which indexes each value by counting up from 0.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    array - Each student can be recorded as one value, and indexing by number should work for retrieving the data

  * List of states and their capitals
    object - A key-value pairs could work well. Calling either the state or the capital could return both data points together

  * List of things to pack for vacation
    array - Each item probably wouldn't need a string to retrieve. A number index should work

  * Names of all the Instagram accounts I follow
    array - A simple list of strings shouldn't need multiple key-value pairs

  * List of student names and their cohort
    object - Multiple key-value pairs would be good to retrieve both values

  * Ingredients and amount of each ingredient to bake a cake
    object - Key-value pair work well here since we need not only each ingredient (string), but also a number value returned with the corresponding string.

  * All my favorite restaurants
    array - A simple list of restaurants can be accessed by number indexing. An array would also automatically set a number index to each restaurant, so it could also be automatically be ranking the restaurants

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

Answer: An Object in a workout app could create a new object instance for each workout.
Some of the keys might include: workoutDuration = 40, typeOfActivity = bikeRide, maxHeartRate = 160, averageHeartRate = 125, caloriesBurned = 400

1. What questions do you still have about classes and/or Objects?

Answer: My `addTopping` method in my Burrito class used a `.push` method. When logged to the console I would see `push: "cabbage"` in my toppings array. Is this because the function is stored as a value of a key-value pair (making it a method)? (I'm not sure if that makes sense..)
