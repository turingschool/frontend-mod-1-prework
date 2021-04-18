## Section 3 Reflection

1. What are two points from the Growth Mindset article and/or video that either resonated with you, or were brand new to you?

- (Note: I watched the video)

- I really connected with learning the definitions of both the *Fixed* and _Growth_ mindsets. _Fixed_ being that your abilities are predetermined and we can't really change the `values` of our inner `variables`. _Growth_ being the complete opposite, or in a programming context could be thought of as the `Logical Not` of the _Fixed_ Mindset 😉. I truly believe that if given a chance, everything can grow and anything can be learned. The `Growth Mindset` will be a very important definition and philosophy to reflect back on not only during my time at Turing, but as I progress both professionally and personally.  

- I also really like the idea of looking at life as a _learning process_ and not forgetting to track and revisit your progress as a way of motivation. My personal journey as a music producer and audio engineer over the last nearly ten years has taught me this lesson countless times. So often I would be too focused on an end goal, which was seemingly very far away. This mindset not only stunted creativity and productivity, but also blurred out the ability to feel proud and motivated from the progress I had already made.

2. In which ways do you currently demonstrate a Growth Mindset? In which ways do you _not_?

- Currently, I feel strong in my ability to work through a problem and have the patience to find the solution. Again, my years of music production taught me plenty about this. I struggled with it a lot during the first couple of years, but found that over time I had gathered some pretty good `data`, so to speak, in terms of the best tutorials, websites, and techniques that I could then use to solve my problems and achieve the sounds I was looking for. Although I am new to the coding world, I am excited to have built up some valuable skills in this area prior and be able to expand on it in a new discipline.

- I think that when I get to a certain level of skill in something, I then start to wander into a more `Fixed Mindset`, which seems backwards, but I think it has to do with becoming too comfortable and complacent. When I start something new that I am passionate about, it seems easier for me to have a `Growth Mindset` from the get-go. Once I have obtained a certain level of skill and some of the excitement of learning the new _thing_ wears off, I begin to downplay my abilities. I want to drop this habit and work on _always_ staying in the `Growth Mindset`. I think that being creative and always finding new and interesting things to motivate me will be key in breaking this `Fixed Mindset` habit.

3. Think of a web or mobile application you use regularly. Where is an example of a place that the developers probably use Arrays? Explain.

- I feel like an array would be used in an information gathering process of an application, such as inputing user's _name_, _address_, _etc._, or even when selecting a group of things that would describe the user from a list where that data may be called back on later or checked against a condition.

- Another use could be a search engine storing web pages found in a search performed by a user.

4. In your own words, explain what an Array method is.

- At its simplest form, an `Array` is a collection of data. An `Array` is  an efficient way of storing a list of like data under a single variable name. The values in  an `Array` can be accessed individually as well as looped through. Arrays are very helpful for writing efficient code and storing information.

- An `Array Method` is a function built-in to `JavaScript` that we can apply to our `Arrays`. Each `Method` has a unique function that performs a task on our `Array` and saves a developer time from writing functions from scratch. `Array Methods` make manipulating an `Array` easier and makes a developer's code cleaner and work easier.

- Examples of `Array Methods`:

    - reverse()
      - This method reverses and array in place.

    ```JavaScript
    var arrayExample = [1, 2, 3];
    arrayExample.reverse();
    console.log(arrayExample);
    // Output: [3, 2, 1]
    ```

    - join()
      - This method returns a new string by concatenating all of the array's elements that are separated by a comma.

    ```JavaScript
    var arrayExample2 = ["m", "a", "t", "t"];
    console.log(arrayExample2.join(''));
    // Output: matt
    ```

- There are a bunch of different `Array Methods` for developers to use!

5. What is the purpose of a loop? When we would use a loop in conjunction with array vs. without?

- Loops serve to perform a task a repeated number of times based on a condition. Loops give us the ability to execute a block of code a specific number of times, and are handy at running the same code over and over again, each time with a different value.

- We would want to use a loop in conjunction with an array if we wanted to use the index of the array as our variable for the counter (like if we were running a `for` loop). An array can also be used with a loop if you want to run a task or block of code on a list of data. 

- _Another example is_: Let's say a user is shopping online for socks. They put three different types of socks into their shopping cart, "white", "black", and "red". The "white" and "black" socks are normal price while the "red" socks are 50% off. So in the actual code of the program, and array may have been formed with the three variables of "white", "black", and "red" that were added to the shopping cart. When calculating the total price of all the items combined, the code could iterate through this array with the user's selected "sock data" in it, and say, the variable of "red" (red socks), has another function attached to it that calculates off the 50% from the original total. You could then have a loop that checks for this condition of whether an item gets a 50% discount or not, and either decrement the discount from the price or not.

    ```JavaScript
var socks = ["white", "black", "red"];
  for ( sock of socks ) {
  if (sock === "red"){
    console.log("apply discount");
  } else {
    console.log("full price")
  }
}
// Output: full price
//         full price
//         apply discount
//
// This is a very simple example of my explanation above, but I wanted to give it a go to try and
// iterate through an array, pick out a specified value in the array based on a condition, and
// apply a unique function to it.  (I'm obviously stoked on this section 😝 )
    ```


6. If you had to teach a 5 year old about loops, how would you explain it?

- Loops are used to make doing a repetitive process, like clearing the dinner table and cleaning the dishes, for example, easier. If we were to have a robot help us, we couldn't just tell it to "clean the dishes", since a robot wouldn't know how to do that from such simple instructions like us humans can. Instead, we would need to give it step by step instructions of what to do for each dinner place we are clearing and what to do to with the dishes cleared from that place. But, if we have a very big family and need to clear a dinner table for a lot of people, writing these instructions for our robot to follow for every single place would be very time consuming and no fun! A loop is super rad because it allows us to write these instructions only once, but then apply it as many times over as we need! So, instead of telling the robot to do all the instructions 10 different times, we can give it the instructions once and tell it to repeat it ten times!

1. What questions do you still have about Arrays and loops?

- What are some of the main applications of `loops` and `arrays`? I'm really excited to learn more about these and how they are used in practical applications. This seems like a topic that can go very deep and has a lot of power behind it. 🧠  
