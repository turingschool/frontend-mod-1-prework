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
    this.time = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
}
  addLikes(newNumber) {
    this.likes += (newNumber);
  }

  addComment(newComment) {
    this.comments.push(newComment);
  }

}

var tweetOne = new Tweet("@michannstoner", "I'm tired", "7:55 PM", 0, ["same"]);
var tweetTwo = new Tweet("@exampleaccount", "I'm almost done with my prework!", "12:40PM", 50, "So close!!");

tweetOne.addLikes(2);
console.log(tweetOne);

tweetOne.addComment("Me too!");
console.log(tweetOne);

tweetOne.addLikes(10);
console.log(tweetOne);

tweetTwo.addLikes(7);
console.log(tweetTwo);
