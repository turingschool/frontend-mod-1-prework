/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = 0;
    this.comments = [];
  }
  addLikes() {
    this.numberOfLikes++
  }
  addComments(newComment) {
    this.comments.push(newComment)
  }
};

var tweet1 = new Tweet("William", "I got into Turing!", "8:00pm");
var tweet2 = new Tweet("Stephanie", "Sara is Silly lol", "9:00pm");
var tweet3 = new Tweet("John", "Great golfing weather today!", "10:00pm");

tweet1.addComments("Great Job");
tweet2.addComments("lol");
tweet3.addComments("It's snowing here :(");

tweet1.addLikes();
tweet2.addLikes();
tweet3.addLikes();

console.log(tweet1);
console.log(tweet2);
console.log(tweet3);
