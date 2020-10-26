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

var zooAnimals = {
  lions: 3,
  giraffes: 6,
  elephants: 4,
  ballPythons: 2,
  kingCobras: 1,
  penguins: 12,
  pangolins: 3,
};

// console.log(zooAnimals);


// Using the zoo that you created above, log the value of the first item in
// the Object

console.log(zooAnimals.lions)

// Add an animal to the zoo Object, and log the updated Object.

console.log(zooAnimals)

// Change the value for at least one of your animal keys, and log the updated Object.

zooAnimals.ballPythons = 4,
console.log(zooAnimals)

// Add another animal to the zoo Object, and log the updated Object.

zooAnimals.greenTreeFrog= 6,
// tried this first with a : as the operator, but rec'd error "Unexpected token ':'", switched
// to an = operator and this works
console.log(zooAnimals)

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

var incomingEmails = {
  incomingMailFolder: "inbox",
  senderID: ["name", "email"],
  subjectLine: "",
  dateReceived: "dateStamp",
  timeReceived: "timeStamp",
  mailBody: "",
  sentTo: ["You", "other email addresses"]
}

console.log(incomingEmails)

// not sure if the "" will work on the mailBody value; this was throwing an error when I attempted to create
// object literals at the end of the exercise - will review!!

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
The code snippet above shows an Array with 2 elements. Each element in (is?) an
Object Literal. Each of those Object Literals has 4 key-value pairs. This may LOOK
a bit daunting - it's OK! You don't need to be 100% comfortable with this, but it's
good to have some exposure before going into Mod 1.
*/

// YOU DO: Create an array of at least 3 EMAIL Object Literals, using the same
// key-value pairs you used in your email Object above.
// Then, log the email Array to the console.

var incomingEmails = {
  incomingMailFolder: "inbox",
  senderID: ["Jim", "mijnesky@hotmail.com"],
  subjectLine: "let's ride!",
  dateReceived: "4 October 2020",
  timeReceived: "10:20am",
  mailBody: "Hey, I found this sweet trail! https://www.trailforks.com/photo/5829120/. Can you ride on Saturday??",
  sentTo: ["You"],
};

// {
//   incomingMailFolder: "inbox",
//   senderID: ["Reddit", "noreply@redditmail.com"],
//   subjectLine: "Porkchop's grabbies",
//   dateReceived: "24 October 2020",
//   timeReceived: "12:32pm",
//   mailBody: "	r/LilGrabbies · Posted by u/Kittyk4y 6h ago
// Porkchop’s grabbies
// Read More
// 	680 Votes
// 	8 Comments
// 	Hide r/LilGrabbies",
//   sentTo: ["You"],
// };
//
// {
//   incomingMailFolder: "inbox",
//   senderID: ["name", "email"],
//   subjectLine: "",
//   dateReceived: "dateStamp",
//   timeReceived: "timeStamp",
//   mailBody: "",
//   sentTo: ["You", "other email addresses"],
// };

console.log(incomingEmails)

// I want to come back to this! I was getting an error with the string on the mailBody - maybe switch to an array??
// Well, that didn't work! I'll try again later
// got the first section to work - was missing a ; at the end, and the , at the end of the mailBody and sentTo
// now shows an Unexpected Token on line 155, the : after senderID
