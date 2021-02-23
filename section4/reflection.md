## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?  
I am so glad I learned about the Pomodoro technique and the marinara application for Chrome! I can't believe I didn't know about it sooner in my education.  It definitely helps keep me accountable to taking breaks.  Clearing my head for a few minutes helps me come back and possibly approach a problem differently, which helps get me unstuck at times.


1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?  
I think it worked well.  It's a nice reminder to get up and stretch my body and perhaps get a drink of water.  I find it helps me push away distractions, for example if my phone goes off, I say "Nope, I can check it in 18 minutes when my timer goes off", etc.  In terms of estimating times, it's hard to say exactly if the estimates are correct or not because so often when I am working, I will stop where I am and go in search of other resources online to help reinforce what I am learning, and write notes about it.  Things take me longer, but purposefully.

1. What is an Object, and how is it different from an Array in Javascript?  
An object can store a collection of data, an array is a collection of values.  Objects store information in key:value pairs, and can hold different data types.  Arrays are generally the same type of data.  

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class- array, just a list of strings
  * List of states and their capitals- object, information needs to be stored in key:value pairs, states and their capitals
  * List of things to pack for vacation- array, list of strings
  * Names of all the Instagram accounts I follow -array, list of strings
  * List of student names and their cohort- object, again information needs to be store in key:value pairs
  * Ingredients and amount of each ingredient to bake a cake- object, needs key:value pairs
  * All my favorite restaurants- array  
  For some things, if it's truly just a list, an array would be fine.  If you're pairing information together, an object may be better to use key: value pairs.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?   
I used Amazon a lot, and each order has an item name, an associated photo, a total cost, a ship date, an arrival date, etc.  That class of AmazonOrder could be duplicated into many instances.  
class AmazonOrder {
  constructor (product, photo, cost, shipDate, arrivalDate) {
  this.product = product;
  this.photo = photo;
  this.cost = cost;
  this.shipDate = shipDate;
  this.arrivalDate = arrivalDate;
  }
};
var dogToy = new AmazonOrder ("Stuffed Squirrel", "squirrel.jpeg", 12.99, "Dec 22, 2020", "Dec 24, 2020");

1. What questions do you still have about classes and/or Objects?  
I've learned so much and now it's all blending together! Not in a good way...I need to start at the beginning and go over everything again...
