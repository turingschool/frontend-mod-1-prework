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
};
var tweet1 = new Tweet("Kevin", "Sports", "12:00", 109, 14);
console.log(tweet1);
tweet1 = new Tweet("Kevin", "Sports", "12:00", 230, 25);
console.log(tweet1);
tweet1 = new Tweet("Kevin", "Sports", "12:00", 1000, 76);
console.log(tweet1);
