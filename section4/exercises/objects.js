/*
In the exercises below, write your own code where indicated
to achieve the desired result.

Two examples are already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/


// EXAMPLE: Write code below that will declare a vairable that stores an Object Literal
//  that holds grocery store inventory
var foods = {
  apples: 23,
  grapes: 507,
  eggs: 48
};

console.log(foods);
// Notice that the variable name is foods, plural, because it has the ability to hold info about
// potentially many foods. That plural name indicates to another developer that the variable stores
// either an Array or an Object.

//-------------------
// Part 1: Zoo Animals
//-------------------

// YOU DO: Write code below that will declare a variable that stores an Object Literal of animal names and
// the number of that type of animal at the zoo.
var animals = {
  lions: 23,
  tigers: 507,
  bears: 48
};

// Using the zoo that you created above, log the value of the first item in
// the Object
console.log(animals.lions);

// Add an animal to the zoo Object, and log the updated Object.
animals.turtles = 33;
console.log(animals);

// Change the value for at least one of your animal keys, and log the updated Object.
animals.tigers = 506;
console.log(animals);

// Add another animal to the zoo Object, and log the updated Object.
animals.sharks = 1;
console.log(animals);

//-------------------
// Part 2: Email
//-------------------

/*
Think about all the pieces of information associated with one single email in your inbox.
It has a sender, a subject, ...

Declare a variable that stores an Object Literal. Each key should be an attribute of an email and each
value should be some appropriate value for that key. Work to have at least 5 key-value pairs.

Log your email object to the console.
*/

var emailABdhPJwM3hrdedx = {
  messageID: "74db30ed.AL4AAJaOGQgAAAAAAAAAAAEkwxcAAAAAEycAAAAAAA-qSgBgN9j5@mailjet.com",
  createdDate: "02/25/21, 9:02AM",
  senderAddress: "info@aclib.us",
  senderName: "Alachua County Library District",
  recipientAddress: "alexandermartelkio@gmail.com",
  subject: "5 Things for March",
  priority: true
};
console.log(emailABdhPJwM3hrdedx);

//-------------------
// Part 3: Many Emails - OPTIONAL EXTENSION
//-------------------

/*
LONG EXAMPLE:
Now that we've learned about Objects AND Arrays, we can combine them.

In the arrays exercise, we gave the following example of an array of Instagram posts:
*/

var posts = ["image at beach", "holiday party", "adorable puppy", "video of cute baby"];

/*
Frankly, that was a very simplified version of the Array the Instagram developers have
written and work with. Still probably slightly simplified as we don't know what their code
actually looks like, but it may look more like this:
*/

var posts = [
  {
    imageSrc: "./images/beach.png",
    caption: "At the beach with my besties",
    timeStamp: "4:37 PM August 13, 2019",
    numberLikes: 0,
    comments: []
  },
  {
    imageSrc: "./images/holiday-party.png",
    caption: "What a great holiday party omg",
    timeStamp: "11:37 PM December 31, 2019",
    numberLikes: 13,
    comments: []
  }
]

console.log(posts);
console.log(posts[0]);

/*
The code snippet above shows an Array with 2 elements. Each element in an
Object Literal. Each of those Object Literals has 4 key-value pairs. This may LOOK
a bit daunting - it's OK! You don't need to be 100% comfortable with this, but it's
good to have some exposure before going into Mod 1.
*/

// YOU DO: Create an array of at least 3 EMAIL Object Literals, using the same
// key-value pairs you used in your email Object above.
// Then, log the email Array to the console.

var emails = [
  {
    messageID: "74db30ed.AL4AAJaOGQgAAAAAAAAAAAEkwxcAAAAAEycAAAAAAA-qSgBgN9j5@mailjet.com",
    createdDate: "02/25/21, 9:02 AM",
    senderAddress: "info@aclib.us",
    senderName: "Alachua County Library District",
    recipientAddress: "alexandermartelkio@gmail.com",
    subject: "5 Things for March",
    priority: true
  },
  {
    messageID: "alexmkio/mod0_session2_exercises.md/comments/3644515@github.com",
    createdDate: "02/24/21, 8:59 PM",
    senderAddress: "notifications@github.com",
    senderName: "Mason France",
    recipientAddress: "alexmkio@noreply.github.com",
    subject: "Re: alexmkio/mod0_session2_exercises.md",
    priority: false
  },
  {
    messageID: "CAFu4fpk5LC9fUNktY3zHrQo_X+q_N0TfMoWR2ATRuSjYqxM+fw@mail.gmail.com",
    createdDate: "02/09/21, 11:32 AM",
    senderAddress: "eric@turing.io",
    senderName: "Eric Weissman",
    recipientAddress: "ztrokey@gmail.com, alexandermartelkio@gmail.com, Emmy M <emmymorris1102@gmail.com>, stephaniemagdic@gmail.com, sami.peterson14@gmail.com, calebjwittman1991@gmail.com, j.fuller.e@gmail.com, shayangolafsh@gmail.com, hdixon37@gmail.com, apb734@gmail.com, Claire Fields <clairefields15@gmail.com>, miriammerari02@gmail.com, gabrielwohl9@gmail.com, Jacq Whitmer <jacqwhitmer@gmail.com>, fargnoli.jm@gmail.com, merali4@gmail.com, nataliemcintyre19@gmail.com, bdempsey864@gmail.com, v11067@icloud.com, sidarth20@gmail.com, mkkrumholz@gmail.com, samcliffe@gmail.com, ilookup@gmail.com, Suzanne Kim <suzanneskim94@gmail.com>, brant.fuller@gmail.com, jasmynh44@gmail.com, darren@turing.io",
    subject: "Turing School Mod 0 Information - 2102B",
    priority: false
  }
]

console.log(emails);
