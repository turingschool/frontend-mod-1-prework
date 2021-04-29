/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.timeStamp = Date.now();
    this.numberOfLikes = 0;
    this.comments = [];
  }
  likeTweet() {
    this.numberOfLikes += 1
  }
  postComment(comment) {
    this.comments.push(comment);
  }
};

var firstTweet = new Tweet("Jim", "I love me some Bacon pancakes");
var secondTweet = new Tweet("Jim", "Adventure Time! C'mon grab your friends");
var thirdTweet = new Tweet("Carl", "Can't wait to catch up on TWD!");

console.log(firstTweet, secondTweet, thirdTweet);

firstTweet.likeTweet();
thirdTweet.postComment("CORL?!?");

console.log(firstTweet, secondTweet, thirdTweet);
