/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }

  like() {
    this.numberOfLikes += 1;
  }

  comment(newComment) {
    this.comments.push(newComment);
  }
};

var tweetOne = new Tweet("Donald Trump", "Drink bleach to cure COVID", "July 1, 2020", 0, ["Murica", "Murica!"]);
var tweetTwo = new Tweet("Peter123", "I enjoy a nice gruyere", "July 23, 2020", 0, ["Ew", "Yum", "Cool story"]);
var tweetThree = new Tweet("BigJohn247", "How about dem Eagles", "October 12, 2020", 0, ["EAGLES - eagles!", "No"]);

console.log(tweetOne);
console.log(tweetTwo);
console.log(tweetThree);

tweetOne.like();
tweetOne.like();
tweetOne.comment("DONNY!");

tweetTwo.like();
tweetTwo.like();
tweetTwo.like();
tweetTwo.comment("Love cheese");

tweetThree.like();
tweetThree.comment("Go Cowboys");

console.log(tweetOne);
console.log(tweetTwo);
console.log(tweetThree);
