## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique? I think the Pomodoro technique is important for not experiencing burnout. I did have times where I would ignore it and then end up working for 2 hours longer than I anticipated without a break. But ultimately, I think it is going to be important for my sanity and also for my ability to learn to take small breaks. I used to think that trying hard was how you learned, but I realize that taking a step back and allowing your diffuse mode is sometimes the way for the dots to be connected.

1. Regarding the work you did around setting intentions in
- Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)? As far as the time estimates. This is so difficult. You just never know when you are doing something new, what kind of challenges/hiccups you are going to run into. However I do think the Pomodoro Method helps with focus exponentially. The 25 minutes on and 5 minute break works well when I am doing something that is difficult. However if the subject matter is something I am more comfortable, then I like to work for at least an hour and take a ten minute break.

1. What is an Object, and how is it different from an Array in Javascript?
- An Object is a variable that contains properties as key-value pairs and methods. All of the properties are related to the object. For example 'var nina' would contain different attributes related to me - my height, age, weight, hairColor, eyeColor, etc. Arrays are list-like objects. They contain elements that can be accessed by index number. They typically contain similar elements. For example  'var fruits' would contain many different fruits. But arrays could contain different attributes of a particular fruit. They create and store lists of data. You can also store objects in an array. And you can store arrays in objects.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - Array
  * List of states and their capitals - Object
  * List of things to pack for vacation - Array
  * Names of all the Instagram accounts I follow - Array
  * List of student names and their cohort - Object
  * Ingredients and amount of each ingredient to bake a cake - Object
  * All my favorite restaurants - Array

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
```
class AmazonOrder {
  constructor (item, amt, purchaseDate, deliveryDate, supplier) {
    this.item = item;   //(what the person purchased)
    this.amount = amt;  //(what the cost was)
    this.purchaseDate = purchaseDate;
    this.deliveryDate = deliveryDate;
    this.supplier = supplier;
    this.deliveryStatus = deliveryStatus;
  }
}
  ```

1. What questions do you still have about classes and/or Objects?
- Can you only use a method on the key, not the value?
- Also, if there are anymore code challenges like the 'class Tweet' challenge, I would love to get more practice. Integrating the methods into the classes is more challenging than I anticipated.
