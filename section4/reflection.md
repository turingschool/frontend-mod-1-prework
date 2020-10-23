## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?


My workflow this week felt different in that, I took much more breaks and took them more frequently. It was a
little tricky for me to stop working when I'd be right in the middle of an exercise. It's a strange feeling
to take a break in the middle of your work flow. I'm not sure if it made me more productive or not, it would
take me a few minutes to get back into my work after taking a break, maybe next time I should set my timer
for a longer time period. I did feel like I was less distracted when I had a specific goal/task to complete,
compared to starting to work without a goal set beforehand.


2. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?


I really liked setting an intention or goal before starting to work. I found that having a goal written down helped me
to stay on task, and finish that goal before I stopped working. One thing that I found a little frustrating was the
setting a timer part. Next time, I will set a timer for a longer period of time, maybe 50-55 minutes instead of 35
minutes, I just found that I was taking way more breaks than I normally do, and that was interrupting my workflow.
It was hard to estimate times accurately because the Part 4 work gave an overall time estimate and it wasn't
broken down by sections. I think my time spent on section 4 was around the estimated time, but I'm not sure with
adding this reflection responses and I haven't started creating a video yet.


3. What is an Object, and how is it different from an Array in Javascript?


An `Object` is a database for storing and organizing data. An `Object` differs from an `Array` in Javascript
in that an `Array` stores an ordered list of data, and each item/element in the `Array` can only be accessed by
using index positions(`Numbers`) to get that data. The way `Objects` store data is not just in index
position (`numbers`) but also in `Strings`, and each item/element in the `Object` can be accessed by calling
on its respective `String`. Furthermore, `Objects` have the ability to store a set of characteristics or specific
information called `properties` that consist of a `key : value pair`. Basically if you have an ordered list, you
should usually use an `Array`, if you have data with named properties, or want to change those properties, or
ordering your data isn't a must, you usually want an `Object`. Lastly, `{}` is used when declaring an `Object`
and `[]` is used when declaring an `Array`.


4. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

  I feel an array would be the best way to store this data, because we can view the number of students in class
  as an ordered list, which arrays work best for. However if you wanted to store addition properties about each
  student, such as scores on the first test, age, or anything else, an object would work best.

  * List of states and their capitals

  I feel an object would be the best way to store this data. We could create a Class for State and then an
  object for each individual state with its capital being a property. I don't see this data set being an
  ordered list, which we would want to use an array for.

  * List of things to pack for vacation

  I feel an array would work best here for this data set, because we can view things to pack as an ordered list,
  and quickly access each item by its respective index.

  * Names of all the Instagram accounts I follow

  I think an array would be the best to store this data type, since we have a group/list of all the accounts as
  the data with no properties that pertain to the Instagram accounts you follow.

  * List of student names and their cohort

  I feel an object would be the best way to store this data. We could create an object for each individual student
  with their cohort being a property. That way if someone was to change cohorts, it could be easily changed. Again,
  I don't see this data set being an ordered list, which we would want to use an array for. Furthermore, it would
  be hard to access a student name and their cohort using an index value.

  * Ingredients and amount of each ingredient to bake a cake

  I feel an object would be the best way to store this data. We could create an object for each cake recipe
  with ingredient being a property that would would have a value of the amount of each ingredient. That way
  we can easily access each ingredient by its name and see its respective amount(value). Again, I don't see
  this data set being an ordered list, which we would want to use an array for. Furthermore, it would
  be hard to access an ingredient and its amount using an index value.


  * All my favorite restaurants

  I think an array would be the best to store this data type, since we have a group/list of favorite restaurants as the data
  with no properties that pertain to the favorite restaurants. An array would store a list of the favorite restaurants,
  and you could access that list by its index.  



5. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

An example is in FaceBook, and your profile page. A `Class` could be `Class: Profile` or `Class: Person` with an `object` being
`person1` or `profile1`. A key that might be in the `person1` object is name, with a value of the person's profile name.
Another key could be age, with persons age as a value. Email address could be another key with a value of their email address.
It would look something like this;
```Javascript
class Profile {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
};
//created a Profile class with three parameters
var profile1 = new Profile("Alex T.", 29, "ahthomps1@gmail.com");
//created an object instance of the Profile class with arguments passed in
```


6. What questions do you still have about classes and/or Objects?

I still find it a little tricky to differentiate between Objects and Arrays, is an Array a specific type of Object?
Also I ran to into a little trouble with the classProperties exercises, and trying to re-assign objects that were already
defined. I guess when creating an object you shouldn't try and re-assign it? 
