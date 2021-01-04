## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?
  - I've been loving following the Pomordo technique!  It definitely feels rewarding each time you get to a break spot and make another check mark.  I'm not sure if its the material or what exactly it is, but half hour time windows fly by!  I have noticed that I am getting less distracted while I am working as well.  In the past when I had a project deadline, I would typically consider how long it would take me and try to knock it out in as few sittings as possible and devote several hours at a time to knock it all out.  I never noticed in the past how distracted I would get, and projects that should have been done in way less time, in turn, ended up taking a few more hours than necessary.  Really loving everything about the Pom technique and will continue to utilize its methods throughout my working career, thank you for that!

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?
  - Well being so new to coding and not really being sure how to gauge time expectations for different tasks, as well not knowing what the exercises that we would be asked to accomplish, it was really difficult to gauge how long each task would take.  So I ended up just going right in the middle of what the 'suggested' time that has been outlined at the beginning of each section.  So at the beginning of each day I would tell myself where I would like to be at the end of the day, and set each day for about 6 hours of work.  Very surprisingly, almost every step of the way I have completed my goal for the day in less time than originally anticipated!  I have to give credit to being more focused and being all in when I am working, rather than having some social media open or a tv on while working that would ruin my productivity.  Breaking apart the tasks I want to accomplish into small sections ('Pom sections'), feels more rewarding when you do get to a break spot and helps retain the information much more than my previous learning techniques.  As I've finished each section of the work, I have begun to be able to gauge my time expectations more accurately, but I still haven't struggled with the content to this point.  Luckily I did a lot of pre-work beforehand learning the basics of Javascript that has been beneficial to completing my tasks on time.  I know that will not be the case throughout the course, but am happy that I am learning these techniques now before we get bombarded with new topics during the course!   

1. What is an Object, and how is it different from an Array in Javascript?
  - An Object is a group of connected stored data or properties, similar to an array.  Properties are the main difference between an array and an object, and properties are made up *key* and *value* pairs that all objects have.  These properties define the characteristics of the object .  The *key* or name of a property is something that every object instance has, however, different instances have different *values* for each *key* property and can be of any data type.  
  Objects and arrays differ in the way that we access the values in each as well.  Arrays we can target specific values based on their index within the array.  Each value in an array is assigned an index and are zero indexed, meaning their index value begins at zero for the first value in an array.  In objects we can access the data in an object using strings and dot-notation.  It may be easiest to describe with an example...

```Javascript
Array
var dog = ["Wilma", "black", 6, "Lab", "isPottyTrained"];
  // if we wanted to access the 4 value in an array we could use its index.  Knowing that index values are zero based, we know that to access to the 4 value we would use the index 3.  
  console.log(dog[3]);   // expected output: "Lab"

Object
var dog = {
  name: "Wilma",
  color: "black",
  age: 6,
  breed: "Lab",
  isPottyTrained: true
};
  // if we wanted to access the age of the dog we could simply use dot-notation in a string to get that info from our object.
  console.log(dog.age);    //  expected output: 6
  ```

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class
    - I would store a list of students in a class into an array because it is a list of values that are all related to one another and don't any specific identifiers other than their name.  

  * List of states and their capitals
    - Here I would use an object to store a list of states and their capitals.  The capital is an attribute to every state that would be easiest to access using an object.  If you stored this information in an array, it would be difficult to decipher the information presented.  

  * List of things to pack for vacation
    - Once again I would use an array for things to pack for a vacation.  Everything in the list is related to the one vacation you are packing for.  It is just a list.  

  * Names of all the Instagram accounts I follow
    - I could see this one going both ways, however I would most likely use an object because it would be beneficial to have the name of the person on the account and their Instagram handle that is specific to them as well.  Not everybody's name on Instagram is the exact value as their given name, so their Instagram name would be an attribute to the object.  
    However, if you just wanted to list the names of every person that you follow on Instagram, an array would suffice as it is a group of strings.  It would get very confusing if you decided to list the name of a person and their Instagram handle in an array because their name (key) would be muddled in with all the Instagram handles (values) of the person they belong to.  

  * List of student names and their cohort
    - An object would be best suited for listing all the student names and their cohort because the cohort is an attribute that is different amongst different students in the program.  

  * Ingredients and amount of each ingredient to bake a cake
    - Once again an object would be the best case for all the ingredients and the specific amount of those ingredients to bake a cake.  For all the same reasons listed in previous examples.  The amount (value) for each ingredient (key) would be easiest to reference using an object.  

  * All my favorite restaurants
    - Lastly, I would go with an array to list all my favorite restaurants.  They all share one attribute being they are my favorite restaurants.  If you wanted to list all your favorite restaurants and their style of food they serve, it would be best to use an object as the style of food each of them serve is a specific attribute to a restaurant class.  

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties an bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?
  - I have recently been in the hunt for a new car and have used the cars.com app a bunch recently. So a developer could use each car in the database as the object instance.  Every car has several different attributes that we could use as the key value in our object.  These could include, driveTrain, hasSatelightRadio, milesPerGallon, underWarranty, numberOfSeats, typeOfCar, etc.  

  ```Javascript
  var car = {
    driveTrain: array/string; ['front wheel drive', 'four wheel drive', 'all wheel drive'],
    hasSatelightRadio: boolean; true,
    milesPerGallon: integer; 38,
    underWarranty: boolean; false,
    numberOfSeats: integer; 5,
    typeOfCar: array/string['sedan', 'coupe', 'SUV', 'sports']
  }
  ```
  In my example each individual car would have an instance where you would find specific values for each key (attribute).  I have listed driveTrain and typeOfCar as array's but when you look at the specific instance of a car, say a Ford Raptor, these values would be listed as a string value based on the car.  

1. What questions do you still have about classes and/or Objects?
  - It is all coming together now that we are using it in code.  No questions right now, I feel like I've continually got a better grip on classes/instances/attributes/methods the more we have worked on them and using them in code has helped with that process as well.  Excited to continue!
