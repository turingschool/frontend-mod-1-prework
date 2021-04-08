## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
- I already loosely followed this method already, so my work flow wasn't too different.

2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
- I found I stay more focused when I have a clear goal, and a set amount of time to complete it in. I stay on course when I dedicate a specific amount of time to a goal.  

3. What is an Object, and how is it different from an Array in Javascript?
- An object is something that holds key-value pairs. It's different from an array in that an array holds a ordered list as it's value, and a object stores information like a database.

4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
   - I would use an array because all the students fall under one class
  * List of states and their capitals
   - I would use an object so I can use key-value pairs to assign capitals to states under a capitals object.
  * List of things to pack for vacation
   - I would use an array since all the values have one parent
  * Names of all the Instagram accounts I follow
   - I would again use an array because the values can fit under one list
  * List of student names and their cohort
   - I would use an object so I can assign each student to a different class
  * Ingredients and amount of each ingredient to bake a cake
   - I would use an object again so each ingredient has a unique amount
  * All my favorite restaurants
  - I would use an array named favRestraunts and have each element be a different restaurant

5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
 - I think your account on websites are held as objects. My GitHub account might look something like this
  ``` class Account {
    constructor(name, handle, age, isOnline, isVerified) {
      this.name = name;
      this.handle = handle;
      this.age = age;
      this.isOnline = isOnline;
      this.isVerified = isVerified;
    }
  }

  var act239847 = new Account("Joshua Benefield", "JaBene", 27, true, false);
  ```
6. What questions do you still have about classes and/or Objects?
 - I still feel unfamiliar with some of the vocabulary, so I'll have to continue to familiarize myself
