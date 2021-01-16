## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
- I really enjoyed learning about and using this technique these past two weeks! I tend to hyperfocus when working on projects which also makes me burn out faster, so I plan to play with this method to find the perfect work time/break time balance.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
- I struggled to use this method. I don't have a physical timer, so I did use my phone timer (which is quite easy to cancel/snooze). I struggled because the timer would usually go off when I was in the middle of a task or a line of code. So, I would cancel the timer, then forget about the break. I think maybe going longer spurts of work time then taking longer breaks would work a lot better for me. I think that this will be really useful once I find the right time balance for me!

3. What is an Object, and how is it different from an Array in Javascript?
Both are mutable and can store a collection of data
- An object is a specific "thing" or version of a class and can store more complex data (including arrays). Arrays store a list of values that are related to each other. In both cases, different data types and methods can be used. Objects are related to a class can include more complicated data unlike arrays.

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class = array; If we're just listing the names of students then we would just need an array of strings since we aren't storing additional information. If we wanted to store additional information, we could use an object and see the students as one property of that object.
  * List of states and their capitals = object; This way we could list the states as keys and their capitals as the states values. This is also going to be a relatively long collection (50 states + capitals + provinces and such if we include that), so an object seems like a better option. It would also be easier to add even more data, like population, minimum wage, average cost of living, etc., to each state's stored info.
  * List of things to pack for vacation = array; Similar to the first example, if we're just listing a relatively small number of individual elements with no other information then an array is best.
  * Names of all the Instagram accounts I follow = array; We're solely listing the names of Instagram accounts with no other linked information to those account names.
  * List of student names and their cohort = object; I would assume that this list of students and cohorts could get really long and complicated with different cohorts. Using an object in this case would be more beneficial in the scenario.
  * Ingredients and amount of each ingredient to bake a cake = object; because it could be an instance of the class Recipe and it contains key-value pairs (ingredients: amount of each). While cakes are relatively simple usually, we can see each cake as a different object of the class Cake.
  * All my favorite restaurants = array; Again, this is just a simple list. If we were to include address or type of restaurant or something else, then we would want to use an object.

5. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
- An app like Spotify may have objects for playlists. The keys and values could include:
- Playlist name = "string"
- Playlist creator = "string" (name of the person that made the playlist)
- Number of followers = integer
- Songs on playlist = array of Strings
- Number of plays = integer

6. What questions do you still have about classes and/or Objects?
- Why do we need to list the parameters after calling constructor, then also list them after the () with dynamic arguments when they all seem the same?
