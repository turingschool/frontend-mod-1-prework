## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

My workflow this week definitely felt more focused and intentional when I was using the Pomodoro technique. At times I thought that the 25 minutes would fly by and I would have hardly accomplished anything, but I was surprised to find the opposite to be true. I did struggle to adhere to the Pomodoro technique once some of the exercises became more challenging for me, and I got stuck in a deep distraction hole at one point because of this.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

At first I was pretty on track for estimating my times, but once the exercises got more difficult I found myself overestimating what I could get done while underestimating the time it would take me to complete tasks. Overall, I felt like I was more focused, but when I did end up getting stuck at one point during the `classMethods.js` exercise, I totally threw Pomodoro out of the window. I realize in retrospect that one of the main benefits of Pomodoro is preventing these types of ruts. I got really frustrated trying to figure out how to write a class method that would `.push` a value into an array, and spent a full hour trying to find a solution for one line of code. I spent a lot of time reading irrelevant documentation and grasping at air. I believe that if I had stuck to the timer I set rather than ignoring it, stepping away from the problem would have led me to a solution faster, because when I did finally find a solution it seemed super obvious.

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a data type that can store values like an Array, but the way the data is stored in an Object is more complex. Both Arrays and Objects can hold multiple data types, but an Object can also store a function (aka method) as a data type (arrays cannot). Rather than an Array, which stores values through a numbered index, Objects store values through `key-value` pairs. The `key` assigns a name, while the `value` refers to the data being stored. The benefit of assigning data to `key-value` pairs rather than the index of an Array is that `key-value` pairs can easily be called utilizing dot notation. By combining the name of the Object and the `key` name with a `.`, an Object's values can be easily manipulated or re-assigned. Objects can be created alone as "object literals", or created by inheriting pre-defined class attributes as an "object instance".

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

    I think an array would be a best to store this data set, because there is only one variable (students) that requires a value. Also, creating an object named `class` that held an array called `studentNames` is not only unnecessary, it created a syntax error when I tried to make it, because `class` is already a keyword used by JavaScript.

    ```
    var students = ["Chris", "Alice", "Steve"]
    ```

  * List of states and their capitals

    An object might be best to store this data set, because there are multiple variables that need to be stored (state and capital). Each state could be named as a `key`, and the `value` associated with it could be that state's relative capital.
    ```
    var capital = {
      colorado: "Denver",
      newYork: "Albany"
    };

    console.log(capital.colorado);
    ```
  * List of things to pack for vacation

    This is similar to the reasoning for the first example. There is only one variable that needs value (things to pack), and making an object with an array inside it would be overly complicated for what the goal is.
    ```
    var itemsToPack = ["toothbrush", "deodorant", "swimsuit"];
    ```
  * Names of all the Instagram accounts I follow

    An array would be best for this, because it only needs to store the values for a single variable, `accountsFollowed`.
    ```
    var accountsFollowed = ["@chris", "@alice", "@steve"];
    ```
  * List of student names and their cohort

    Here we have multiple variables that need to be stored (student name and cohort), so an object would be useful. The object could be called `studentCohort`, with each key being the student name, and the value being the student's respective cohort.

    ```
    var studentCohort = {
      chris: "2102",
      alice: "2108"
    };

    console.log(studentCohort.chris);
    ```

  * Ingredients and amount of each ingredient to bake a cake

    This example again has more than one variable that needs to be stored, so I'd make an object. The object will be called `ingredientAmount`, with each key being the ingredient, and the value being the amount required.

    ```
    var ingredientAmount = {
      eggs: "4",
      flour: "2 cups"
    };

    console.log(ingredientAmount.flour);
    ```
  * All my favorite restaurants

    An array would be best for this, because it only needs to store the values for a single variable, `favoriteRestaurants`.
    ```
    var favoriteRestaurants = ["Safta", "New Saigon", "Roaming Buffalo"];
    ```

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

An object in the Google Calendar app might be called `newEvent`. The keys within this object would be things like `eventName`, `date`, `startTime`, `endTime`, `eventLocation`, and `description`. Values could be `eventName: "Dentist appointment"`, `date: 01252021`, `startTime: "9:15 am"`, `endTime: "12:30pm"` `eventLocation: "1234 Dentist Blvd."`, and `description: "root canal"`.

1. What questions do you still have about classes and/or Objects?

While I was researching classes, I found documentation about the keyword `extends` that can create new classes based on old classes. I'd like to know more about practical reasons why one would use `extends` as opposed to creating a new instance of a class. I am also still trying to understand the `this` keyword. From what I can tell, `this` does something like create a new object within a class `constructor`. Understanding how to write with `this` was what tripped me up the most during the exercises for this section.
