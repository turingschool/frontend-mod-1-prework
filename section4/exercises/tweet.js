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
  addComment() {
    this.comments.push("new comment");
  }
  addLikes() {
    this.numberOfLikes++
  }
};

var tweetOne = new Tweet("Elizabeth", "I'm learning to code", "11:30pm", 100, ["Keep going!"]);
tweetOne.addComment();
tweetOne.addLikes();
console.log(tweetOne);

var tweetTwo = new Tweet("Daniel", "I miss live music", "10:22am", 56, ["me too!"]);
tweetTwo.addComment();
tweetTwo.addLikes();
console.log(tweetTwo);

var tweetThree = new Tweet("Catherine", "You'll never get away with this Potter!", "4:56pm", 567, ["hahaha!", "Harry Plotter"]);
tweetThree.addComment();
tweetThree.addLikes();
console.log(tweetThree);
