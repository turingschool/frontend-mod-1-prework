/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  incrementLikes(numberNewLikes) {
    this.numberOfLikes = this.numberOfLikes + numberNewLikes
  }

  addComment(newComment) {
    this.comments.unshift(newComment)
  }
};

var tweet1 = new Tweet("Taylor", "The End is Nigh", "4:00 PM", 500000, ["What are you talking about?", "Stop being so sad", "Don't give up!"]);
var tweet2 = new Tweet("Juana", "Santa Claus is late again...so mad", "3:00 AM", 2, ["Santa's late here too", "What a lazy bum", "SO SAD Santa, worst Santa EVER"]);
var tweet3 = new Tweet("Tyrone", "YouTube Channel Recs Plz", "5:00 AM", 0, ["Josh Turner Guitar", "Every Frame a Painting", "Will Schoder"]);

tweet3.incrementLikes(4);
tweet2.addComment("I'm gonna divest from Santa. Probably not working those elves hard enough anymore. SOCIALIST!!!");

console.log(
  tweet1,
  tweet2,
  tweet3
);
