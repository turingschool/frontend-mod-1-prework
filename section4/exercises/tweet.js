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
  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }
  addComment(newComment) {
    this.comments.push(newComment);
  }
}

var tweet1 = new Tweet(
  "julia",
  "I'm in a plane!",
  "Oct 19, 2020",
  22,
  ["sick bruh", "woot", "yay colorado"]
);

var tweet2 = new Tweet(
  "hannah",
  "economics is hard.",
  "Oct 19, 2020",
  15,
  ["truth", "sure do be", "youll figure it out"]
);

tweet1.addLike();
tweet2.addComment("yea baby!");

console.log(tweet1);
console.log(tweet2);
