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

  incrementLikes() {
    this.numberOfLikes++;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}

var tweetOne = new Tweet("@johnSmith1", "Like if you should be coding right now", "10:31 AM", 3, []);
console.log(tweetOne);

tweetOne.incrementLikes();
console.log(tweetOne);

var tweetTwo = new Tweet("@kevin444", "lol I have a project due tomorrow @johnSmith1", "10:44 AM", 1, []);
console.log(tweetTwo);

tweetTwo.incrementLikes();
tweetTwo.addComment("Me too!");
console.log(tweetTwo);

tweetTwo.addComment("This is so me");
console.log(tweetTwo);

tweetOne.addComment("I AM coding right now");
console.log(tweetOne);
