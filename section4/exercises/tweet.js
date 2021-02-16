/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author
    this.content = content
    this.timeStamp = timeStamp
    this.numberOfLikes = numberOfLikes
    this.comments = comments
  }
  addLike() {
    this.numberOfLikes = 1 + this.numberOfLikes;
  }
  addComment(comment) {
    this.comments.push(comment);
  }
 }

var tweetOne = new Tweet("sara123", "Test tweet 1", "12/6/20 11:45 AM", 13, ["HI", "It worked"]);

var tweetTwo = new Tweet("ben123", "Test tweet 2", "12/7/20 12:45 AM", 1, ["Yo", "Heya"]);

var tweetThree = new Tweet("joe123", "Test tweet b", "12/8/20 1:45 AM", 3, ["I am a tree", "yay apples!"]);

tweetThree.addComment("WUDUP HOMESLICE");
tweetThree.addLike();

console.log(tweetOne);
console.log(tweetTwo);
