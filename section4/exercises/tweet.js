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
  addLike(like) {
    this.numberOfLikes = this.numberOfLikes + 1
  }
  addComment(comment) {
    this.comments.push(comment);
  }
}
var Tweet1 = new Tweet('Jimmy', 'horses', '11:01 AM', 1, ['dumb post bro'])
var Tweet2 = new Tweet('Arty', 'socks', '12:17 PM', 17, ['dope', 'stinky', 'rad'])
Tweet1.addLike();
console.log(Tweet1);
Tweet1.addLike()
Tweet2.addLike()
Tweet1.addComment('Hella cool horse, dawg')
console.log(Tweet1, Tweet2)
