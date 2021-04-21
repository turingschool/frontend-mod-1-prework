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
  likeTweet() {
    this.numberOfLikes++;
  }
  commentOnTweet(newComment) {
    this.comments.push(newComment)
  }
};
var tweet1 = new Tweet("Raquel", "I love Turing!", "April 20 2021 932 PM", 1000, ["Yeah, I agree 100!!"])
tweet1.likeTweet()
tweet1.commentOnTweet("Turing is so hard!")
console.log(tweet1)
