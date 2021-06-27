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

  addLikes() {
    this.numberOfLikes++; //increments +1
  }
}

var tweet1 = new Tweet('Bob Smith', 'This is my first tweet!', '1/1/2001', 5, 'Welcome!');

console.log(tweet1);

tweet1.addLikes();

console.log(tweet1);
