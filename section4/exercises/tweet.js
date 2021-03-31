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
    this.timePosted = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }

  addLikes() {
    this.likes = this.likes + 1;
  } addComments(x) {
    this.comments.unshift(x);
  }
};

var firstTweet = new Tweet("Eric Li", "Hello World", "3:13PM", 26, ["Wow!", "So Cool!", "I wish I was you."]);
console.log(firstTweet);

var firstTweet = new Tweet("Larry Saunders", "Goodbye World", "3:15PM", 35, ["Wow!", "So Cool!", "I wish I was you."]);
firstTweet.addLikes();
console.log(firstTweet);

var firstTweet = new Tweet("Barry Vasquez", "Hello World", "3:17PM", 51, ["Wow!", "So Cool!", "I wish I was you."]);
firstTweet.addComments("Dat Boi");
console.log(firstTweet);
