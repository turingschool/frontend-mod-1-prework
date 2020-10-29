## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

I added a step in my work flow pertaining to estimating how long it will take me to do something. I found I was very wrong about my estimates! I was forced to take more small breaks which I'm sure help me. I have a tendency to not stop until I reach a natural stopping point such as finishing a part, section..etc.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I actually found myself stressed by adding the timer. The first few times, it made me feel rushed and if I didn't complete enough tasks in the time I set aside, I felt negative about that. I found that my estimates were pretty far off, and I did like that aspect of the Pomodoro technique. I think it's good to start paying attention to how long things are taking which will help me move forward with attainable goals. I think I also need a different timer, that doesn't scare me every time it goes off.

1. What is an Object, and how is it different from an Array in Javascript?

An Object is a way to store complex data. We use objects to model real world things. Within an object are properties(state) and behaviors(methods). An array is also a way to store data, but it is more like a list and is less complex. The array data is accessed using an index where each data value corresponds to the index starting with 0. To access data in an object, you use dot notation and call on the object.

1. For each set of data, would an array or object be better to store it? Explain your choice.

* List of all of the students in class
        - array, there is only one type of string data "name" and this can all be stored in the variable "classNames"
    * List of states and their capitals
        - object, there are two properties that we can create for this object: states and capital. We can create an object: country and then create the state and capital properties to distinguish between the data sets.
    * List of things to pack for vacation
        - object, because we can create various properties that correspond to the items being packed. We can put all of these properties within the vacationPackList object. Here is an example of some properties we can create: toiletries, day clothes, night clothes, foot wear, accessories..etc.
    * Names of all the Instagram accounts I follow
        - Array, we can create a single variable "instagramAccountsFollowed" and provide it with a single list of data.
    * List of student names and their cohort
        - object, because we have multiple types of data we want to represent. We can create an object such as "turing2020" and create properties such as: students, cohort..
    * Ingredients and amount of each ingredient to bake a cake
        - object. We want to create a thing which is a cake. We can create an object cake and give it properties of Ingredients and amount, as well as time for baking, and tools.
    * All my favorite restaurants
        - Array, we can create a single variable "favRestaurants" and store a single list of all the favorite restaurants within it.


1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

```javaScript

class HaleNeighborhoodPost {
  constructor(title, textBody, datePosted, comments, likes) {
   this.title = title;
   this.textBody = textBody;
   this.datePosted = datePosted;
   this.comments = comments;
   this.likes = likes;
 }

}

var post = new haleNeighborhoodPost("introduction", "Hi Neighbors!", "3/4/2020", "Welcome to the 'hood", 78);
console.log(post);

```


1. What questions do you still have about classes and/or Objects?

When would you use an object literal vs an object constructor?
