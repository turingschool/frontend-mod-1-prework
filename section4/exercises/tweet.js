/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {

  constructor (author, content){

  this.author = author;
  this.content = content;
  this.timeStamp = Date.now();
  this.numberOfLikes = 0;
  this.comments = [];

  }

  addLike() {
    this.numberOfLikes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

};

var bidenThought = new Tweet('Joseph R. Biden', "You won't have to worry about my Tweets when I'm president");
console.log(bidenThought);
var trumpThought = new Tweet('Donald J. Trump', "Despite the constant negative press covfefe");
console.log(trumpThought);
trumpThought.addLike();
trumpThought.addComment("What are u even saying?");

console.log(trumpThought);

bidenThought.addLike();
bidenThought.addLike();
bidenThought.addLike();
bidenThought.addLike();
bidenThought.addComment("Finally");

console.log(bidenThought);
