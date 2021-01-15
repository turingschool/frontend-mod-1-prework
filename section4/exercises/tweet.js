/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLike() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }
  addComment(comments) {
    this.comments.push(comments);
  }
}
var Tweet1 = new Tweet("Marceline", "whhhyyyyyy?", "08:12, 01/12/21", 2, ["I know, right?"]);
console.log(Tweet1)
Tweet1.addLike()
console.log(Tweet1)
var Tweet2 = new Tweet("Jane", "anyone else obsessed with sea shanties now?", "14:56, 01/13/21", 20, ["thanks TikTok"])
console.log (Tweet2)
Tweet2.addLike()
Tweet2.addComment("SOON MAY THE WELLERMAN COME")
console.log (Tweet2)
var Tweet3 = new Tweet("Max", "I'm so done with this trope", "14:23, 01/02/21", 1, ["I dunno, I think it's fine", "oh, of course you would"])
console.log(Tweet3)
