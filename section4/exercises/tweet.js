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
  addComment(newComment) {
    this.comments = [this.comments + ", " + newComment];
  }

  increaseLikes(addLike) {
    this.numberOfLikes = ++addLike;
  }
};

var firstInstance = new Tweet("Mark", "Hello twitter world!", "04/22/21 9:30am", 1, ["What a nice tweet."]);
var secondInstance = new Tweet("Mark", "Hello twitter world!", "04/22/21 9:30am", 1, ["I don't like your tweet"]);
var thirdInstance = new Tweet("Mark", "Hello twitter world!", "04/22/21 9:30am", 1, ["This tweet is adequate."]);

console.log(firstInstance);

secondInstance.addComment(firstInstance.comments);
secondInstance.increaseLikes(firstInstance.numberOfLikes);
console.log(secondInstance);


thirdInstance.addComment(secondInstance.comments);
thirdInstance.increaseLikes(secondInstance.numberOfLikes);
console.log(thirdInstance);
