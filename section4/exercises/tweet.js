/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(auth, cont, likes, comment) {
    this.author = auth;
    this.content = cont;
    this.numberOfLikes = likes;
    this.comments = comment;
  }

  addLikes() {
    this.numberOfLikes++;
  }
  addComment(comment) {
    this.comment.push(comment)
  }
}

var tweetOne = new Tweet("Oscar", "Love this shot ! .", 1, ["first Tweet."]);
console.log(tweetOne);
tweetOne.addLikes();
console.log(tweetOne);

tweetOne.addComment("wow I love it too ! ");
console.log(tweetOne);

var tweetTwo = new Tweet("Bryan", "Gotta love Colorado", 2, ["Second Tweet."]);
tweetTwo.addComment("I need to visit soon!");
tweetTwo.addComment("WOW thanks for the invite ");
tweetTwo.addLikes();
console.log(tweetTwo);
