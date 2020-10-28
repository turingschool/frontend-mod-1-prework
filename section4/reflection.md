## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

* I often start the day with the Pomodoro tequnique but I've never made it my whole days practice.  This was easier.  I felt like I could actually relax when I took a break because there was a nudge to get back to it and focus.  I didn't burn out, even with a full day of school work under my belt.  

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

* It was hard to stop in moments that I felt I was really onto something.  However when I did stop for a few minutes and come back, the idea I was chasing was still there as well as more space to understand more pieces coming together.

* Things don't seem to take as much time when the method is applied.

1. What is an Object, and how is it different from an Array in Javascript?

* An array is an ordered list of data and fun to play with at first, for me.  Then I realized it had its limitations.  They are only accessible through indexes (or numbers that are accessed by indexes).  

* An object is a way to store and organize data that is more complex than an array.  They are accessible through strings/properties and yield or return more than numbers.


1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class

      * This is an array. It is a list of names. Names can be listed succinctly in an array of strings.

      ```
      var students = ["Melinda", "Justicia", "Ani", "Marco"]

      ```

  * List of states and their capitals

      * This could be displayed as an array, a collection of strings.

      ```
      var capitalCities = ["Denver, Colorado", "Salem, Oregon", "Providence, Rhode Island"]

      ```

  * List of things to pack for vacation

      * To me this is also an array.  Though the way I pack for vacation, it is more like an array with a for loop.

      ```
      var packMantra = ["evening dress", " pair of walking shoes", "day dress"];



      for (var i = 0; i < packMantra.length; i++) {
        console.log("Be sure to add another" + " " + packMantra[i]);
      }

      ```

  * Names of all the Instagram accounts I follow

    * Instagram has to be an object, or something more layered that we haven't learned about yet.  The data isn't just complex, it is constantly changing. To give the user a warm and welcoming interface, it has to crank out instance after instance in seconds.

    * However the names of all the accounts I follow could be written in an array of strings.  I think that if I wanted to start pulling up more details about those lists and what they mean to me, then we bridge the gap into object instance territory.  

  * List of student names and their cohort

    * This is could be an array of strings.


  * Ingredients and amount of each ingredient to bake a cake

    * This sounds like the definition of an object literal.  There are pieces to baking that are best displayed in key value pairs. An object literal can be displayed in an array with other object literals but it is the syntax of an object.

    ```
    var tresLeches = {
      cupsFlour: 1.2
      eggsSeparated: 6
      cupsSugar: 1.2
      cupsWholeMilk: 1.5
      canCondensedMilk: 1
      canEvaporatedMilk: 1
      teaspoonVanillaExtract: 1
      tablespoonsBakingPowder: 2.4
    }

    ```

  * All my favorite restaurants

    * All my favorite restaurants can easily be displayed in an ordered list of delicious goodness.

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

  * I use 4 apps a week with regularity.  One of them is Messenger. totalMessages is a key, paired with a value I gave the parameter name of: intensity.  The arguments that call up to/fill in this constructed and functional part of the object syntax are listed below the curly braces. The variable (var) of friendName does this communicating from the top of the class declaration down by utilizing the keyword *new*.  Then to see the list in the form of an object literal.  I log it to the console (tell my computer to display it) and all the words in the value pairs are filled in with the individual arguments of this specific object.

  ```
  class InstantMessenger {
    constructor(intensity, regularity, day) {
      this.totalMessages = intensity;
      this.useFrequency = regularity;
      this.mostTimeOn = day;
    }
      changeTimeOn(){
        this.mostTimeOn = "peak use time is at night";
    }
  }

var friendName = new InstantMessenger(7, "7 days of messages each week", "peak use time is day")
console.log(friendName);

// expected return value:

// InstantMessenger {
//   totalMessages: 7,
//   useFrequency: '7 days of messages each week',
//   mostTimeOn: 'peak use time is day'
// }

// changeTimeOn() method not utilized right now, for the purposes of personal accuracy.
// However, in execution:

friendName.changeTimeOn();
console.log(friendName);

// expected return:

//  InstantMessenger {
//    totalMessages: 7,
//    useFrequency: '7 days of messages each week',
//    mostTimeOn: 'peak use time is at night'
//  }

```


1. What questions do you still have about classes and/or Objects?

  * What is best practice regarding the use of if statments and object syntax?
    (I will be playing with syntax found and pieced together from mdn pages on repl.it.  However I don't want to train into this the wrong way.)

  * Is it appropriate to use if or if else statements in object syntax?
