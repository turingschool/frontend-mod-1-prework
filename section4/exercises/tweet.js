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
    this.comments = comments
  };

  incrementLikes() {
    this.numberOfLikes++
  };
  addComment(newComment) {
    this.comments.push(newComment)
  };
};

var tweet = new Tweet("Matt", "This is a tweet", new Date(), 2, ["indeed", "dislike", "need more"]);
var tweet2 = new Tweet("Jim", "I like to tweet", new Date(), 16, ["boring", "you suck", "try harder"]);
var tweet3 = new Tweet("Casey", "Word big bird", new Date(), 407, ["love it", "best tweet ever", "always the best"]);
console.log(tweet, tweet2, tweet3);

tweet.incrementLikes();
tweet3.incrementLikes();

tweet2.addComment("dont listen to them")
tweet3.addComment("very original")
console.log(tweet, tweet2, tweet3)
